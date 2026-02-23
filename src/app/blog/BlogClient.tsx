'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, ArrowRight, BookOpen, Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BlogPost } from '@/lib/blog'

const ALL_CATEGORIES = ['All', 'Platform Strategy', 'Market Intelligence', 'Export Operations', 'Success Stories']
const POSTS_PER_PAGE = 6

export default function BlogClient({ initialPosts }: { initialPosts: BlogPost[] }) {
    const [activeCategory, setActiveCategory] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)

    // Filter Logic
    const filteredPosts = initialPosts.filter(post => {
        const matchesCategory = activeCategory === 'All' || post.frontmatter.category === activeCategory
        const matchesSearch = post.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.frontmatter.desc.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    // Pagination Logic
    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
    const currentPosts = filteredPosts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    )

    const featuredPost = initialPosts.find(p => p.frontmatter.featured)

    return (
        <div className="bg-gray-50 min-h-screen pb-24">
            {/* Hero Section */}
            <section className="bg-white pt-24 lg:pt-32 pb-12 lg:pb-16 px-6 relative overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-4 lg:mb-6">
                            Knowledge Hub
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 font-medium">
                            Expert strategies, market intel, and operational guides to scale your Indian export business globally.
                        </p>
                    </div>

                    {/* Featured Post */}
                    {featuredPost && activeCategory === 'All' && !searchQuery && currentPage === 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 group cursor-pointer mb-20"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="relative h-[400px] lg:h-auto">
                                    <Image
                                        src={featuredPost.frontmatter.image}
                                        alt={featuredPost.frontmatter.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="bg-gray-900 p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500" />
                                    <div className="relative z-10">
                                        <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest inline-block mb-6 border border-primary/20">
                                            Featured • {featuredPost.frontmatter.category}
                                        </span>
                                        <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-6">
                                            <Link href={`/blog/${featuredPost.slug}`} className="hover:text-primary transition-colors">
                                                {featuredPost.frontmatter.title}
                                            </Link>
                                        </h2>
                                        <p className="text-gray-400 text-lg mb-8 line-clamp-3">
                                            {featuredPost.frontmatter.desc}
                                        </p>
                                        <div className="flex items-center gap-6 mt-auto">
                                            <Button asChild className="rounded-full bg-primary hover:bg-white hover:text-gray-900 font-bold px-8 transition-all">
                                                <Link href={`/blog/${featuredPost.slug}`}>Read Article</Link>
                                            </Button>
                                            <span className="flex items-center gap-2 text-gray-500 text-sm font-bold">
                                                <Clock className="h-4 w-4" />
                                                {featuredPost.frontmatter.time}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Main Content: Filters & Grid */}
            <section className="px-6 max-w-7xl mx-auto -mt-8 relative z-20">

                {/* Filters & Search */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">

                    <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                        {ALL_CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeCategory === cat
                                    ? 'bg-primary text-white shadow-md'
                                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full lg:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                            className="w-full bg-gray-50 border-none rounded-full py-3 pl-12 pr-6 text-gray-900 font-medium focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                        />
                    </div>

                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <AnimatePresence mode="popLayout">
                        {currentPosts.length > 0 ? (
                            currentPosts.map((post, i) => (
                                <motion.div
                                    key={post.slug}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                >
                                    <div className="relative h-60 overflow-hidden">
                                        <Image
                                            src={post.frontmatter.image}
                                            alt={post.frontmatter.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black text-gray-900 uppercase tracking-widest shadow-sm">
                                            {post.frontmatter.category}
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center justify-between text-gray-500 text-sm font-bold mb-4">
                                            <span>{post.frontmatter.date}</span>
                                            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.frontmatter.time}</span>
                                        </div>
                                        <h3 className="text-2xl font-black text-gray-900 leading-tight mb-4 group-hover:text-primary transition-colors">
                                            <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
                                        </h3>
                                        <p className="text-gray-600 font-medium leading-relaxed mb-8 flex-grow">
                                            {post.frontmatter.desc}
                                        </p>
                                        <Link href={`/blog/${post.slug}`} className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest group-hover:gap-3 transition-all mt-auto">
                                            Read Article <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center">
                                <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-6" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
                                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
                                <Button
                                    onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                                    variant="outline"
                                    className="mt-6 rounded-full"
                                >
                                    Clear all filters
                                </Button>
                            </div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full border-gray-200"
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                        >
                            <ChevronLeft className="h-5 w-5 text-gray-600" />
                        </Button>

                        <div className="flex items-center gap-2 px-4">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`h-10 w-10 rounded-full text-sm font-bold transition-all ${currentPage === i + 1
                                        ? 'bg-primary text-white shadow-md'
                                        : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full border-gray-200"
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                        >
                            <ChevronRight className="h-5 w-5 text-gray-600" />
                        </Button>
                    </div>
                )}

            </section>
        </div>
    )
}
