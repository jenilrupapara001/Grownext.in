'use server'

import { supabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'
import type { BlogStatus } from '@/lib/blog'
import fs from 'fs'
import path from 'path'

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

function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-')
}

export async function savePost(slug: string, data: BlogPostData) {
    try {
        const finalSlug = slug || generateSlug(data.title)
        
        const dbData = {
            slug: finalSlug,
            title: data.title,
            description: data.desc,
            category: data.category,
            reading_time: data.time,
            publish_date: data.date,
            image_url: data.image,
            is_featured: !!data.featured,
            status: data.status || 'pending',
            author_name: data.author,
            content: data.content,
            updated_at: new Date().toISOString()
        }

        const { error } = await supabase
            .from('blogs')
            .upsert(dbData, { onConflict: 'slug' })

        if (error) throw error

        revalidatePath('/blog')
        revalidatePath(`/blog/${finalSlug}`)
        revalidatePath('/admin/blog')

        return { success: true, slug: finalSlug }
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
        const { error } = await supabase
            .from('blogs')
            .update({ 
                status, 
                rejection_reason: rejectionReason,
                updated_at: new Date().toISOString()
            })
            .eq('slug', slug)

        if (error) throw error

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
        const { error } = await supabase
            .from('blogs')
            .delete()
            .eq('slug', slug)

        if (error) throw error

        revalidatePath('/blog')
        revalidatePath('/admin/blog')

        return { success: true }
    } catch (error) {
        console.error('Error deleting post:', error)
        return { success: false, error: 'Failed to delete post' }
    }
}
