import React from 'react'
import { getAllPosts } from '@/lib/blog'
import BlogClient from './BlogClient'

export const metadata = {
    title: 'Knowledge Hub | Grownext',
    description: 'Expert strategies, market intel, and operational guides to scale your Indian export business globally.',
}

export default function BlogIndex() {
    // Fetch posts on the server
    const posts = getAllPosts()

    return <BlogClient initialPosts={posts} />
}
