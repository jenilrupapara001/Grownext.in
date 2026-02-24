'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, ArrowRight, BookOpen, Search, ChevronLeft, ChevronRight, Share2, Bookmark } from 'lucide-react'
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

    const featuredPost = initialPosts.find(p => p.frontmatter.featured) || initialPosts[0]

    return (
        <div className="bg-[#fafafa] min-h-screen">
            {/* Cinematic Hero Entrance */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,102,0,0.05),transparent)] pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-[0.02] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20">
                        <div className="max-w-4xl">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-3 mb-8"
                            >
                                <div className="h-px w-12 bg-primary" />
                                <span className="text-sm font-black text-primary uppercase tracking-[0.5em]">Knowledge Hub</span>
                            </motion.div>

                            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black text-gray-950 tracking-tighter leading-[0.85] uppercase italic">
                                <div className="overflow-hidden">
                                    <motion.div
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        Expert
                                    </motion.div>
                                </div>
                                <div className="overflow-hidden">
                                    <motion.div
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                        className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent"
                                    >
                                        Intelligence.
                                    </motion.div>
                                </div>
                            </h1>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="lg:pb-4 max-w-sm"
                        >
                            <p className="text-xl text-gray-500 font-medium leading-relaxed border-l-2 border-gray-100 pl-8">
                                Deep-dive blueprints for Indian manufacturers to navigate global trade routes and dominate Alibaba.com.
                            </p>
                        </motion.div>
                    </div>

                    {/* Featured Intelligence Card */}
                    {featuredPost && activeCategory === 'All' && !searchQuery && currentPage === 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="relative group cursor-pointer"
                        >
                            <div className="relative aspect-[21/9] w-full rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
                                <Image
                                    src={featuredPost.frontmatter.image}
                                    alt={featuredPost.frontmatter.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />

                                <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
                                    <div className="max-w-3xl">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="bg-primary px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                                                Editorial Choice
                                            </span>
                                            <span className="text-white/60 text-xs font-bold uppercase tracking-widest">{featuredPost.frontmatter.category}</span>
                                        </div>
                                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-8 group-hover:text-primary transition-colors duration-500">
                                            <Link href={`/blog/${featuredPost.slug}`}>
                                                {featuredPost.frontmatter.title}
                                            </Link>
                                        </h2>
                                        <div className="flex items-center gap-10">
                                            <Button asChild size="lg" className="rounded-full bg-white text-gray-950 hover:bg-primary hover:text-white font-black px-10 h-16 text-lg transition-all shadow-xl">
                                                <Link href={`/blog/${featuredPost.slug}`}>Read Full Intel</Link>
                                            </Button>
                                            <div className="flex items-center gap-4 text-white/40 text-sm font-bold uppercase tracking-widest">
                                                <Clock className="h-5 w-5 text-primary" /> {featuredPost.frontmatter.time}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Content Filtering System */}
            <section className="px-6 py-20 max-w-7xl mx-auto -mt-10 relative z-20">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-20 bg-white p-8 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-gray-100">
                    <div className="flex flex-wrap items-center gap-3">
                        {ALL_CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                                className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeCategory === cat
                                    ? 'bg-gray-950 text-white shadow-xl'
                                    : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full lg:w-96">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Locate intelligence..."
                            value={searchQuery}
                            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                            className="w-full bg-gray-50 border-none rounded-full py-4 pl-14 pr-8 text-gray-950 font-bold text-sm tracking-tight focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                        />
                    </div>
                </div>

                {/* Intelligence Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-20">
                    <AnimatePresence mode="popLayout">
                        {currentPosts.length > 0 ? (
                            currentPosts.map((post, i) => (
                                <motion.div
                                    key={post.slug}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    className="group flex flex-col bg-white rounded-[3rem] overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-3"
                                >
                                    <div className="relative h-72 overflow-hidden">
                                        <Image
                                            src={post.frontmatter.image}
                                            alt={post.frontmatter.title}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                                        />
                                        <div className="absolute top-6 right-6 flex flex-col gap-2">
                                            <div className="bg-white/90 backdrop-blur-md h-12 w-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-primary hover:text-white transition-colors">
                                                <Bookmark className="h-5 w-5" />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-6 left-6">
                                            <span className="bg-primary/90 backdrop-blur-md px-5 py-2 rounded-full text-[9px] font-black text-white uppercase tracking-widest shadow-lg">
                                                {post.frontmatter.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-10 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                                            <span>{post.frontmatter.date}</span>
                                            <div className="h-1 w-1 rounded-full bg-gray-200" />
                                            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-primary" /> {post.frontmatter.time}</span>
                                        </div>
                                        <h3 className="text-2xl font-black text-gray-950 leading-tight mb-6 group-hover:text-primary transition-colors">
                                            <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
                                        </h3>
                                        <p className="text-gray-500 font-medium leading-relaxed mb-10 line-clamp-3">
                                            {post.frontmatter.desc}
                                        </p>
                                        <div className="mt-auto pt-8 border-t border-gray-50 flex items-center justify-between">
                                            <Link href={`/blog/${post.slug}`} className="flex items-center gap-3 text-gray-950 font-black text-xs uppercase tracking-widest group-hover:text-primary transition-all">
                                                Access Article <ArrowRight className="h-4 w-4" />
                                            </Link>
                                            <Share2 className="h-5 w-5 text-gray-300 hover:text-primary cursor-pointer transition-colors" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="col-span-full py-40 text-center">
                                <BookOpen className="h-20 w-20 text-gray-200 mx-auto mb-8" />
                                <h3 className="text-3xl font-black text-gray-950 mb-4 tracking-tighter">No intelligence found</h3>
                                <p className="text-gray-500 font-medium max-w-sm mx-auto mb-10">Try adjusting your search criteria to locate different strategic resources.</p>
                                <Button
                                    onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                                    variant="outline"
                                    className="rounded-full px-10 h-14 font-black border-2 border-gray-200"
                                >
                                    Reset Filters
                                </Button>
                            </div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Tactical Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-14 w-14 rounded-full border-gray-200 shadow-sm"
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                        >
                            <ChevronLeft className="h-6 w-6 text-gray-950" />
                        </Button>

                        <div className="flex items-center gap-3">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`h-14 w-14 rounded-full text-xs font-black transition-all ${currentPage === i + 1
                                        ? 'bg-primary text-white shadow-xl'
                                        : 'bg-white border border-gray-100 text-gray-400 hover:text-gray-950 hover:border-gray-200'
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            className="h-14 w-14 rounded-full border-gray-200 shadow-sm"
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                        >
                            <ChevronRight className="h-6 w-6 text-gray-950" />
                        </Button>
                    </div>
                )}

            </section>
        </div>
    )
}
