'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { BlogPost } from '@/lib/blog'
import { savePost, uploadImage } from '@/app/actions/blog'
import { Button } from '@/components/ui/button'
import {
    Save, Eye, Type, Image as ImageIcon, Calendar, Clock, Tag, Layout, Hash, Upload, Loader2, Plus,
    Bold, Italic, Strikethrough, Heading1, Heading2, Heading3, List, ListOrdered, Link as LinkIcon, Code, Quote,
    Minus, SendHorizontal, Underline as UnderlineIcon, ArrowLeft, CalendarDays, TrendingUp, Edit3
} from 'lucide-react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

// TipTap Imports
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import LinkExtension from '@tiptap/extension-link'
import ImageExtension from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline'
import Typography from '@tiptap/extension-typography'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import { Markdown } from 'tiptap-markdown'

const MenuBar = ({ editor }: { editor: any }) => {
    if (!editor) return null

    const toggleLink = () => {
        const url = window.prompt('URL')
        if (url) {
            editor.chain().focus().setLink({ href: url }).run()
        }
    }

    return (
        <div className="flex flex-wrap items-center gap-1 bg-white border-b border-gray-100 px-4 py-2 sticky top-0 z-30">
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('bold') ? 'bg-gray-100 text-primary' : 'text-gray-600'}`}
                title="Bold"
            >
                <Bold className="h-4 w-4" />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('italic') ? 'bg-gray-100 text-primary' : 'text-gray-600'}`}
                title="Italic"
            >
                <Italic className="h-4 w-4" />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('underline') ? 'bg-gray-100 text-primary' : 'text-gray-600'}`}
                title="Underline"
            >
                <UnderlineIcon className="h-4 w-4" />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('strike') ? 'bg-gray-100 text-primary' : 'text-gray-600'}`}
                title="Strike"
            >
                <Strikethrough className="h-4 w-4" />
            </button>
            <div className="w-px h-6 bg-gray-200 mx-1" />
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-100 text-primary' : 'text-gray-600'}`}
                title="H1"
            >
                <Heading1 className="h-4 w-4" />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-100 text-primary' : 'text-gray-600'}`}
                title="H2"
            >
                <Heading2 className="h-4 w-4" />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-100 text-primary' : 'text-gray-600'}`}
                title="H3"
            >
                <Heading3 className="h-4 w-4" />
            </button>
            <div className="w-px h-6 bg-gray-200 mx-1" />
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('bulletList') ? 'bg-gray-100 text-primary' : 'text-gray-600'}`}
                title="Bullet List"
            >
                <List className="h-4 w-4" />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('orderedList') ? 'bg-gray-100 text-primary' : 'text-gray-600'}`}
                title="Ordered List"
            >
                <ListOrdered className="h-4 w-4" />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('blockquote') ? 'bg-gray-100 text-primary' : 'text-gray-600'}`}
                title="Blockquote"
            >
                <Quote className="h-4 w-4" />
            </button>
            <div className="w-px h-6 bg-gray-200 mx-1" />
            <button
                type="button"
                onClick={toggleLink}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('link') ? 'bg-gray-100 text-primary' : 'text-gray-600'}`}
                title="Link"
            >
                <LinkIcon className="h-4 w-4" />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleCode().run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('code') ? 'bg-gray-100 text-primary' : 'text-gray-600'}`}
                title="Inline Code"
            >
                <Code className="h-4 w-4" />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
                className="p-2 rounded hover:bg-gray-100 text-gray-600"
                title="Divider"
            >
                <Minus className="h-4 w-4" />
            </button>
        </div>
    )
}

export default function BlogForm({ post }: { post?: BlogPost }) {
    const router = useRouter()
    const { data: session } = useSession()
    const isAdmin = (session?.user as any)?.role === 'admin'
    const authorName = session?.user?.name || 'Writer'
    const [isSaving, setIsSaving] = useState(false)
    const [showPreview, setShowPreview] = useState(false)

    const [formData, setFormData] = useState({
        title: post?.title || '',
        slug: post?.slug || '',
        desc: post?.desc || '',
        category: post?.category || 'Expertise',
        date: post?.date || new Date().toISOString().split('T')[0],
        time: post?.time || '5 min read',
        image: post?.image || '',
        featured: post?.featured || false,
    })

    const [isUploading, setIsUploading] = useState(false)
    const [isContentUploading, setIsContentUploading] = useState(false)

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Markdown,
            Typography,
            TaskList,
            TaskItem.configure({
                nested: true,
            }),
            LinkExtension.configure({
                openOnClick: false,
            }),
            ImageExtension.configure({
                allowBase64: true,
            }),
            Placeholder.configure({
                placeholder: 'Write your masterpiece here (Markdown and Rich Text both work!)...',
            }),
        ],
        content: post?.content || '',
        immediatelyRender: false,
        editorProps: {
            attributes: {
                class: 'tiptap prose prose-lg md:prose-xl prose-gray focus:outline-none max-w-none min-h-[600px] p-10 md:p-16 prose-headings:font-black prose-h2:text-3xl prose-h3:text-2xl prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-p:leading-relaxed',
            },
        },
    })

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

    const handleSubmit = async (e: React.FormEvent, forceStatus?: 'approved' | 'pending') => {
        e.preventDefault()
        if (!editor) return

        setIsSaving(true)

        const content = editor.getHTML()
        const status = forceStatus ?? (isAdmin ? 'approved' : 'pending')
        
        const result = await savePost(formData.slug, { 
            ...formData, 
            content, 
            status, 
            author: authorName 
        })

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
                editor?.chain().focus().setImage({ src: result.url as string }).run()
            }
        } else {
            alert('Upload failed: ' + result.error)
        }
    }

    return (
        <div className="space-y-12">
            {!showPreview ? (
                <form onSubmit={handleSubmit} className="space-y-12">
                    {/* Header with Preview Toggle */}
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-black text-gray-900 tracking-tight text-fluid-2xl">
                                {post ? 'Edit Article' : 'Draft New Article'}
                            </h2>
                            <p className="text-gray-500 font-medium">Capture your insights for the Grownext audience.</p>
                        </div>
                        <Button 
                            type="button" 
                            variant="outline" 
                            onClick={() => setShowPreview(true)}
                            className="rounded-full px-6 flex items-center gap-2 border-gray-200 font-bold hover:bg-gray-50 transition-colors"
                        >
                            <Eye className="h-4 w-4" /> Live Preview
                        </Button>
                    </div>

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
                                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-xl shadow-sm"
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
                                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-3 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
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
                                        className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-3 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none shadow-sm"
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
                                        className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-3 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
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
                                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-3 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
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
                                            className="absolute inset-0 opacity-0 cursor-pointer text-[0]"
                                        />
                                        <span className="flex items-center gap-1 text-primary hover:text-orange-600 cursor-pointer transition-colors font-bold">
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
                                        className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-3 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                                        placeholder="https://images.unsplash.com/..."
                                    />
                                    {formData.image && (
                                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-gray-100 shadow-md">
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
                                    <Layout className="h-3.5 w-3.5" /> Excerpt / Description
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.desc}
                                    onChange={e => setFormData({ ...formData, desc: e.target.value })}
                                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none shadow-sm"
                                    placeholder="A concise summary for the article cards..."
                                />
                            </div>

                            <div className="flex items-center gap-4 pt-4">
                                <input
                                    type="checkbox"
                                    id="featured"
                                    checked={formData.featured}
                                    onChange={e => setFormData({ ...formData, featured: e.target.checked })}
                                    className="h-6 w-6 rounded-lg text-primary focus:ring-primary border-gray-200 transition-all"
                                />
                                <label htmlFor="featured" className="font-bold text-gray-900 cursor-pointer select-none font-fluid-sm">
                                    Feature this article on the homepage
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* TipTap Content Area */}
                    <div className="space-y-0 pt-10 border-t border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Article Content (Markdown supported)</label>
                            <div className="relative">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageUpload(e, 'content')}
                                    className="absolute inset-0 opacity-0 cursor-pointer text-[0]"
                                />
                                <Button type="button" variant="outline" size="sm" className="rounded-xl h-8 text-[10px] font-black uppercase tracking-widest border-gray-200">
                                    {isContentUploading ? <Loader2 className="h-3 w-3 animate-spin mr-1" /> : <Plus className="h-3 w-3 mr-1" />}
                                    Insert Image
                                </Button>
                            </div>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-[2.5rem] shadow-sm overflow-hidden min-h-[600px] flex flex-col group focus-within:ring-2 focus-within:ring-primary/10 transition-all">
                            <MenuBar editor={editor} />
                            <EditorContent editor={editor} className="flex-1 bg-white" />
                        </div>
                    </div>

                    {/* Sticky Actions */}
                    <div className="sticky bottom-8 flex justify-center pt-8 z-40">
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
                                {isSaving ? 'Saving...' : (
                                    <span className="flex items-center gap-2">
                                        {isAdmin ? <Save className="h-5 w-5" /> : <SendHorizontal className="h-5 w-5" />}
                                        {isAdmin
                                            ? (post ? 'Update & Publish' : 'Publish Now')
                                            : (post ? 'Resubmit for Review' : 'Submit for Review')}
                                    </span>
                                )}
                            </Button>
                        </div>
                    </div>
                </form>
            ) : (
                <div className="space-y-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Preview Header / Navbar Toggle */}
                    <div className="sticky top-4 z-50 flex justify-center mb-10">
                        <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-4 py-2 flex items-center gap-4 shadow-xl">
                            <span className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">Live Preview Mode</span>
                            <div className="w-px h-6 bg-gray-200" />
                            <Button 
                                variant="ghost" 
                                onClick={() => setShowPreview(false)}
                                className="rounded-full h-10 px-6 flex items-center gap-2 font-black text-gray-900 group hover:bg-primary hover:text-white transition-all shadow-sm"
                            >
                                <Edit3 className="h-4 w-4 transition-transform group-hover:scale-110" /> Back to Editor
                            </Button>
                        </div>
                    </div>

                    {/* Replicated Blog Layout */}
                    <div className="bg-gray-50 -mx-4 md:-mx-10 -mt-10 min-h-screen pb-24 border rounded-[3rem] overflow-hidden shadow-inner">
                        <section className="bg-white pt-24 pb-12 px-6 relative overflow-hidden text-fluid-sm">
                            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                            <div className="max-w-4xl mx-auto relative z-10 text-center">
                                <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
                                    <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                                        {formData.category}
                                    </span>
                                    <span className="flex items-center gap-2 text-gray-500 text-sm font-bold">
                                        <CalendarDays className="h-4 w-4" />
                                        {formData.date}
                                    </span>
                                    <span className="flex items-center gap-2 text-gray-500 text-sm font-bold">
                                        <Clock className="h-4 w-4" />
                                        {formData.time}
                                    </span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.05] mb-8 text-fluid-4xl">
                                    {formData.title || 'Untitled Masterpiece'}
                                </h1>

                                <p className="text-xl text-gray-600 font-medium leading-relaxed mb-12 max-w-3xl mx-auto text-fluid-base">
                                    {formData.desc || 'No description provided yet.'}
                                </p>

                                <div className="relative h-[300px] md:h-[550px] w-full rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 bg-gray-100">
                                    {formData.image ? (
                                        <Image
                                            src={formData.image}
                                            alt={formData.title}
                                            fill
                                            className="object-cover px-8"
                                            unoptimized
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-gray-400 font-bold">
                                            No Featured Image
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>

                        <section className="px-6 -mt-16 relative z-20">
                            <div className="max-w-3xl mx-auto bg-white rounded-[3rem] p-8 md:p-20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-gray-100">
                                <article className="prose prose-lg md:prose-xl prose-gray max-w-none prose-headings:font-black prose-h2:text-4xl prose-h3:text-3xl prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-p:leading-relaxed prose-p:text-gray-700">
                                    <div dangerouslySetInnerHTML={{ __html: editor?.getHTML() || '' }} />
                                </article>

                                {/* Inline Conversion CTA */}
                                <div className="mt-24 bg-gray-950 rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-primary/5 transition-colors duration-500 group-hover:bg-primary/10" />
                                    <TrendingUp className="h-20 w-20 text-primary mx-auto mb-8 opacity-90" />
                                    <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight relative z-10 text-fluid-2xl">
                                        Ready to Dominate Global Markets?
                                    </h3>
                                    <p className="text-gray-400 font-medium text-xl mb-12 max-w-xl mx-auto relative z-10 text-fluid-base">
                                        Join over 5,000+ Indian exporters growing their business with Grownext's award-winning strategy.
                                    </p>
                                    <Button disabled size="lg" className="rounded-full px-14 h-18 text-xl font-black bg-primary text-white shadow-2xl shadow-primary/30 relative z-10 opacity-80 cursor-not-allowed">
                                        Preview Only
                                    </Button>
                                </div>
                            </div>
                        </section>
                        
                        <div className="mt-20 text-center">
                            <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px]">End of Preview</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
