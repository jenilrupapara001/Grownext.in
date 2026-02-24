import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ArrowLeft, Clock, CalendarDays, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getAllPosts, getPostBySlug } from '@/lib/blog'

export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug)
    if (!post) {
        return { title: 'Post Not Found' }
    }

    const title = `${post.frontmatter.title} | GrowNext Blog`
    const description = post.frontmatter.desc
    const url = `https://grownext.in/blog/${post.slug}`

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            type: 'article',
            publishedTime: post.frontmatter.date,
            authors: ['GrowNext'],
            images: [
                {
                    url: post.frontmatter.image || '/og-image.png',
                    width: 1200,
                    height: 630,
                    alt: post.frontmatter.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [post.frontmatter.image || '/og-image.png'],
        },
    }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="bg-gray-50 min-h-screen pb-24">
            {/* Blog Header / Hero */}
            <section className="bg-white pt-24 lg:pt-32 pb-12 lg:pb-16 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-bold hover:underline mb-6 md:mb-8">
                        <ArrowLeft className="h-4 w-4" /> Back to Knowledge Hub
                    </Link>

                    <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6">
                        <span className="bg-primary/10 text-primary px-3 md:px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                            {post.frontmatter.category}
                        </span>
                        <span className="flex items-center gap-1.5 md:gap-2 text-gray-500 text-xs md:text-sm font-bold">
                            <CalendarDays className="h-4 w-4" />
                            Published: {post.frontmatter.date}
                        </span>
                        <span className="flex items-center gap-1.5 md:gap-2 text-gray-500 text-xs md:text-sm font-bold">
                            <Clock className="h-4 w-4" />
                            {post.frontmatter.time}
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6 md:mb-8">
                        {post.frontmatter.title}
                    </h1>

                    <p className="text-xl text-gray-600 font-medium leading-relaxed mb-12">
                        {post.frontmatter.desc}
                    </p>

                    <div className="relative h-[400px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
                        <Image
                            src={post.frontmatter.image}
                            alt={post.frontmatter.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Blog Content Layout (Boxed, Centered) */}
            <section className="px-6 -mt-8 relative z-20">
                <div className="max-w-3xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] border border-gray-100">

                    <article className="prose prose-lg md:prose-xl prose-gray max-w-none prose-headings:font-black prose-h2:text-3xl prose-h3:text-2xl prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-p:leading-relaxed">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {post.content}
                        </ReactMarkdown>
                    </article>

                    {/* Inline Conversion CTA */}
                    <div className="mt-20 bg-gray-900 rounded-[2.5rem] p-10 md:p-14 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-primary/10 transition-colors duration-500 group-hover:bg-primary/20" />
                        <TrendingUp className="h-16 w-16 text-primary mx-auto mb-6 opacity-80" />
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight relative z-10">
                            Skip the Learning Curve. Export Faster.
                        </h3>
                        <p className="text-gray-400 font-medium text-lg mb-10 max-w-xl mx-auto relative z-10">
                            Let our experts handle your complete Alibaba onboarding and optimization. Get a free account audit and export strategy session today.
                        </p>
                        <Button asChild size="lg" className="rounded-full px-12 h-16 text-lg font-black bg-primary hover:bg-white hover:text-gray-900 transition-all shadow-xl relative z-10">
                            <Link href="/contact">Book Your Free Consultation</Link>
                        </Button>
                    </div>

                </div>
            </section>
        </div>
    )
}
