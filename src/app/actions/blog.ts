'use server'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { revalidatePath } from 'next/cache'
import type { BlogStatus } from '@/lib/blog'

const contentDir = path.join(process.cwd(), 'src/content/blog')

export type BlogPostData = {
    title: string
    desc: string
    category: string
    time: string
    date: string
    image: string
    featured?: boolean
    status?: BlogStatus
    author?: string
    content: string
}

export async function savePost(slug: string, data: BlogPostData) {
    try {
        if (!fs.existsSync(contentDir)) {
            fs.mkdirSync(contentDir, { recursive: true })
        }

        const { content, ...frontmatter } = data
        const fileContent = matter.stringify(content, frontmatter)

        const filePath = path.join(contentDir, `${slug}.md`)
        fs.writeFileSync(filePath, fileContent, 'utf8')

        revalidatePath('/blog')
        revalidatePath(`/blog/${slug}`)
        revalidatePath('/admin/blog')

        return { success: true }
    } catch (error) {
        console.error('Error saving post:', error)
        return { success: false, error: 'Failed to save post' }
    }
}

/** Admin only: set post status to 'approved' */
export async function approvePost(slug: string) {
    return updateStatus(slug, 'approved')
}

/** Admin only: set post status to 'rejected' with optional reason */
export async function rejectPost(slug: string, reason?: string) {
    return updateStatus(slug, 'rejected', reason)
}

/** Writer: submit post for admin review */
export async function submitForReview(slug: string) {
    return updateStatus(slug, 'pending')
}

async function updateStatus(slug: string, status: BlogStatus, rejectionReason?: string) {
    try {
        const filePath = path.join(contentDir, `${slug}.md`)
        if (!fs.existsSync(filePath)) return { success: false, error: 'Post not found' }

        const raw = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(raw)

        data.status = status
        if (rejectionReason) data.rejectionReason = rejectionReason
        else delete data.rejectionReason

        fs.writeFileSync(filePath, matter.stringify(content, data), 'utf8')

        revalidatePath('/blog')
        revalidatePath(`/blog/${slug}`)
        revalidatePath('/admin/blog')

        return { success: true }
    } catch (error) {
        console.error('Error updating post status:', error)
        return { success: false, error: 'Failed to update status' }
    }
}

export async function uploadImage(formData: FormData) {
    try {
        const file = formData.get('file') as File
        if (!file) return { success: false, error: 'No file provided' }

        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        const uploadDir = path.join(process.cwd(), 'public/uploads')
        if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true })

        const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`
        fs.writeFileSync(path.join(uploadDir, fileName), buffer)

        return { success: true, url: `/uploads/${fileName}` }
    } catch (error) {
        console.error('Error uploading image:', error)
        return { success: false, error: 'Failed to upload image' }
    }
}

export async function deletePost(slug: string) {
    try {
        const filePath = path.join(contentDir, `${slug}.md`)
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath)

        revalidatePath('/blog')
        revalidatePath('/admin/blog')

        return { success: true }
    } catch (error) {
        console.error('Error deleting post:', error)
        return { success: false, error: 'Failed to delete post' }
    }
}
