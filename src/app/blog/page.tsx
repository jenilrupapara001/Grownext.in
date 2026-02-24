import React from 'react'
import { getAllPosts } from '@/lib/blog'
import BlogClient from './BlogClient'

export const metadata = {
    title: 'Knowledge Hub | Export Insights & Global Selling Guides | GrowNext',
    description: 'Explore expert strategies, market intelligence, and operational guides designed to help Indian manufacturers and exporters scale their business globally through Alibaba.com.',
    keywords: ['export insights', 'global selling guides', 'Alibaba.com tips', 'Indian exporter blog', 'B2B marketing strategies'],
}

export default function BlogIndex() {
    // Fetch posts on the server
    const posts = getAllPosts()

    return <BlogClient initialPosts={posts} />
}
