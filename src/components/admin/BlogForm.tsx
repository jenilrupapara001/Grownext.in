'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { BlogPost } from '@/lib/blog'
import { savePost, uploadImage } from '@/app/actions/blog'
import { Button } from '@/components/ui/button'
import {
    Save, X, Eye, Type, Image as ImageIcon, Calendar, Clock, Tag, Layout, Hash, Upload, Loader2, Plus,
    Bold, Italic, Strikethrough, Heading1, Heading2, Heading3, List, ListOrdered, Link, Code, Quote,
    Minus, Table, AlignLeft
} from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Image from 'next/image'

export default function BlogForm({ post }: { post?: BlogPost }) {
    const router = useRouter()
    const [isSaving, setIsSaving] = useState(false)
    const [previewMode, setPreviewMode] = useState(false)

    const [formData, setFormData] = useState({
        title: post?.frontmatter.title || '',
        slug: post?.slug || '',
        desc: post?.frontmatter.desc || '',
        category: post?.frontmatter.category || 'Expertise',
        date: post?.frontmatter.date || new Date().toISOString().split('T')[0],
        time: post?.frontmatter.time || '5 min read',
        image: post?.frontmatter.image || '',
        featured: post?.frontmatter.featured || false,
        content: post?.content || '',
    })

    const [isUploading, setIsUploading] = useState(false)
    const [isContentUploading, setIsContentUploading] = useState(false)

    // Auto-slugify title
    useEffect(() => {
        if (!post && formData.title) {
            const slug = formData.title
                .toLowerCase()
                .replace(/[^\w ]+/g, '')
                .replace(/ +/g, '-')
            setFormData(prev => ({ ...prev, slug }))
        }
    }, [formData.title, post])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSaving(true)

        const { slug, content, ...frontmatter } = formData
        const result = await savePost(slug, { ...frontmatter, content })

        setIsSaving(false)
        if (result.success) {
            router.push('/admin/blog')
            router.refresh()
        } else {
            alert('Error saving post: ' + result.error)
        }
    }

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: 'image' | 'content') => {
        const file = e.target.files?.[0]
        if (!file) return

        const data = new FormData()
        data.append('file', file)

        if (field === 'image') setIsUploading(true)
        else setIsContentUploading(true)

        const result = await uploadImage(data)

        if (field === 'image') setIsUploading(false)
        else setIsContentUploading(false)

        if (result.success && result.url) {
            if (field === 'image') {
                setFormData(prev => ({ ...prev, image: result.url as string }))
            } else {
                const markdownImage = `\n![${file.name}](${result.url})\n`
                setFormData(prev => ({ ...prev, content: prev.content + markdownImage }))
            }
        } else {
            alert('Upload failed: ' + result.error)
        }
    }

    // ── Toolbar helpers ──────────────────────────────────────────────────
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const insertText = useCallback((before: string, after = '', defaultText = '') => {
        const el = textareaRef.current
        if (!el) return
        const start = el.selectionStart
        const end = el.selectionEnd
        const selected = el.value.slice(start, end) || defaultText
        const newVal = el.value.slice(0, start) + before + selected + after + el.value.slice(end)
        setFormData(prev => ({ ...prev, content: newVal }))
        requestAnimationFrame(() => {
            el.focus()
            el.selectionStart = start + before.length
            el.selectionEnd = start + before.length + selected.length
        })
    }, [])

    const insertLinePrefix = useCallback((prefix: string) => {
        const el = textareaRef.current
        if (!el) return
        const start = el.selectionStart
        const lineStart = el.value.lastIndexOf('\n', start - 1) + 1
        const newVal = el.value.slice(0, lineStart) + prefix + el.value.slice(lineStart)
        setFormData(prev => ({ ...prev, content: newVal }))
        requestAnimationFrame(() => {
            el.focus()
            el.selectionStart = start + prefix.length
            el.selectionEnd = start + prefix.length
        })
    }, [])

    const insertBlock = useCallback((text: string) => {
        const el = textareaRef.current
        if (!el) return
        const start = el.selectionStart
        const prefix = start > 0 && el.value[start - 1] !== '\n' ? '\n' : ''
        const newVal = el.value.slice(0, start) + prefix + text + '\n' + el.value.slice(start)
        setFormData(prev => ({ ...prev, content: newVal }))
        requestAnimationFrame(() => { el.focus() })
    }, [])

    const toolbarGroups = [
        {
            label: 'Style',
            tools: [
                { icon: Bold, label: 'Bold', action: () => insertText('**', '**', 'bold text') },
                { icon: Italic, label: 'Italic', action: () => insertText('*', '*', 'italic text') },
                { icon: Strikethrough, label: 'Strikethrough', action: () => insertText('~~', '~~', 'strikethrough') },
                { icon: Code, label: 'Inline Code', action: () => insertText('`', '`', 'code') },
            ]
        },
        {
            label: 'Headings',
            tools: [
                { icon: Heading1, label: 'Heading 1', action: () => insertLinePrefix('# ') },
                { icon: Heading2, label: 'Heading 2', action: () => insertLinePrefix('## ') },
                { icon: Heading3, label: 'Heading 3', action: () => insertLinePrefix('### ') },
            ]
        },
        {
            label: 'Lists',
            tools: [
                { icon: List, label: 'Bullet List', action: () => insertLinePrefix('- ') },
                { icon: ListOrdered, label: 'Ordered List', action: () => insertLinePrefix('1. ') },
                { icon: Quote, label: 'Blockquote', action: () => insertLinePrefix('> ') },
            ]
        },
        {
            label: 'Insert',
            tools: [
                { icon: Link, label: 'Link', action: () => insertText('[', '](https://)', 'link text') },
                { icon: Minus, label: 'Divider', action: () => insertBlock('\n---') },
                { icon: AlignLeft, label: 'Code Block', action: () => insertText('```\n', '\n```', 'code here') },
                { icon: Table, label: 'Table', action: () => insertBlock('| Column 1 | Column 2 | Column 3 |\n| --- | --- | --- |\n| Cell | Cell | Cell |') },
            ]
        },
    ]

    return (
        <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Column: Metadata */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <label className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest">
                            <Type className="h-3.5 w-3.5" /> Article Title
                        </label>
                        <input
                            required
                            type="text"
                            value={formData.title}
                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-xl"
                            placeholder="e.g. How to Scale Your Textile Export"
                        />
                    </div>

                    <div className="space-y-4">
                        <label className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest">
                            <Hash className="h-3.5 w-3.5" /> URL Slug
                        </label>
                        <input
                            required
                            type="text"
                            value={formData.slug}
                            onChange={e => setFormData({ ...formData, slug: e.target.value })}
                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-3 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            placeholder="how-to-scale-textile"
                            disabled={!!post}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <label className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest">
                                <Tag className="h-3.5 w-3.5" /> Category
                            </label>
                            <select
                                value={formData.category}
                                onChange={e => setFormData({ ...formData, category: e.target.value })}
                                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-3 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
                            >
                                <option>Expertise</option>
                                <option>Strategy</option>
                                <option>Growth</option>
                                <option>Logistics</option>
                                <option>Technology</option>
                            </select>
                        </div>
                        <div className="space-y-4">
                            <label className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest">
                                <Clock className="h-3.5 w-3.5" /> Read Time
                            </label>
                            <input
                                type="text"
                                value={formData.time}
                                onChange={e => setFormData({ ...formData, time: e.target.value })}
                                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-3 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                placeholder="5 min read"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <label className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest">
                            <Calendar className="h-3.5 w-3.5" /> Publish Date
                        </label>
                        <input
                            required
                            type="date"
                            value={formData.date}
                            onChange={e => setFormData({ ...formData, date: e.target.value })}
                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-3 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                    </div>
                </div>

                {/* Right Column: Visuals & Settings */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <label className="flex items-center justify-between text-xs font-black text-gray-400 uppercase tracking-widest">
                            <span className="flex items-center gap-2"><ImageIcon className="h-3.5 w-3.5" /> Feature Image URL</span>
                            <div className="relative">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageUpload(e, 'image')}
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                />
                                <span className="flex items-center gap-1 text-primary hover:text-orange-600 cursor-pointer transition-colors">
                                    {isUploading ? <Loader2 className="h-3 w-3 animate-spin" /> : <Upload className="h-3 w-3" />}
                                    Upload
                                </span>
                            </div>
                        </label>
                        <div className="space-y-3">
                            <input
                                required
                                type="text"
                                value={formData.image}
                                onChange={e => setFormData({ ...formData, image: e.target.value })}
                                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-3 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                placeholder="https://images.unsplash.com/..."
                            />
                            {formData.image && (
                                <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-gray-100">
                                    <Image
                                        src={formData.image}
                                        alt="Preview"
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <label className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest">
                            <Layout className="h-3.5 w-3.5" /> Short Description
                        </label>
                        <textarea
                            required
                            rows={4}
                            value={formData.desc}
                            onChange={e => setFormData({ ...formData, desc: e.target.value })}
                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                            placeholder="A concise summary for the article cards..."
                        />
                    </div>

                    <div className="flex items-center gap-4 pt-4">
                        <input
                            type="checkbox"
                            id="featured"
                            checked={formData.featured}
                            onChange={e => setFormData({ ...formData, featured: e.target.checked })}
                            className="h-6 w-6 rounded-lg text-primary focus:ring-primary border-gray-200"
                        />
                        <label htmlFor="featured" className="font-bold text-gray-900 cursor-pointer">
                            Feature this article on the homepage
                        </label>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="space-y-0 pt-10 border-t border-gray-50">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Markdown Content</label>
                        <div className="relative">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, 'content')}
                                className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                            <Button type="button" variant="outline" size="sm" className="rounded-xl h-8 text-[10px] font-black uppercase tracking-widest border-gray-200">
                                {isContentUploading ? <Loader2 className="h-3 w-3 animate-spin mr-1" /> : <Plus className="h-3 w-3 mr-1" />}
                                Add Image
                            </Button>
                        </div>
                    </div>
                    <div className="flex bg-gray-100 p-1 rounded-xl">
                        <button
                            type="button"
                            onClick={() => setPreviewMode(false)}
                            className={`px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${!previewMode ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400'}`}
                        >
                            Write
                        </button>
                        <button
                            type="button"
                            onClick={() => setPreviewMode(true)}
                            className={`px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${previewMode ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400'}`}
                        >
                            Preview
                        </button>
                    </div>
                </div>

                {!previewMode && (
                    // ── Formatting Toolbar ──────────────────────────────
                    <div className="flex flex-wrap items-center gap-1 bg-[#EDEDED]/60 border border-[#EDEDED] rounded-t-2xl px-4 py-2">
                        {toolbarGroups.map((group, gi) => (
                            <div key={group.label} className="flex items-center gap-0.5">
                                {gi > 0 && <div className="h-5 w-px bg-gray-300 mx-1" />}
                                {group.tools.map((tool) => (
                                    <button
                                        key={tool.label}
                                        type="button"
                                        title={tool.label}
                                        onClick={tool.action}
                                        className="h-8 w-8 flex items-center justify-center rounded-lg text-[#58595B] hover:bg-white hover:text-primary hover:shadow-sm transition-all"
                                    >
                                        <tool.icon className="h-4 w-4" />
                                    </button>
                                ))}
                            </div>
                        ))}

                        {/* Keyboard shortcut hint */}
                        <div className="ml-auto text-[10px] font-bold text-gray-400 hidden md:block">
                            Select text, then click a format button
                        </div>
                    </div>
                )}

                {!previewMode ? (
                    <textarea
                        ref={textareaRef}
                        required
                        value={formData.content}
                        onChange={e => setFormData({ ...formData, content: e.target.value })}
                        className="w-full min-h-[500px] bg-gray-50 border border-[#EDEDED] border-t-0 rounded-b-[2rem] p-10 font-mono text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all leading-relaxed"
                        placeholder="# Your Story Begins Here..."
                    />
                ) : (
                    <div className="w-full min-h-[500px] bg-white border border-gray-100 rounded-[2rem] p-10 prose prose-gray max-w-none shadow-inner overflow-auto">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {formData.content || '*Nothing to preview yet*'}
                        </ReactMarkdown>
                    </div>
                )}
            </div>

            {/* Sticky Actions */}
            <div className="sticky bottom-8 flex justify-center pt-8">
                <div className="flex items-center gap-4 bg-gray-950/90 backdrop-blur-xl p-3 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/5">
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={() => router.back()}
                        className="rounded-full px-8 font-black text-white hover:bg-white/10"
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        disabled={isSaving}
                        className="rounded-full px-12 h-14 bg-primary text-white font-black shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
                    >
                        {isSaving ? 'Synchronizing...' : (
                            <span className="flex items-center gap-2">
                                <Save className="h-5 w-5" />
                                {post ? 'Update Authority' : 'Publish Global Insight'}
                            </span>
                        )}
                    </Button>
                </div>
            </div>
        </form>
    )
}
