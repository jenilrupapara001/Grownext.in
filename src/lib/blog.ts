import { supabase } from './supabase'

export type BlogStatus = 'draft' | 'pending' | 'approved' | 'rejected'

export type BlogPost = {
    id?: string
    slug: string
    title: string
    desc: string
    category: string
    time: string
    date: string
    image: string
    featured: boolean
    status: BlogStatus
    author: string
    rejection_reason?: string
    content: string
    created_at?: string
    updated_at?: string
}

/** Public-facing: only returns approved posts */
export async function getAllPosts(): Promise<BlogPost[]> {
    const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('status', 'approved')
        .order('publish_date', { ascending: false })

    if (error) {
        console.error('Error fetching blogs:', error)
        return []
    }

    return (data || []).map(mapDbToBlogPost)
}

/** Admin-facing: returns ALL posts regardless of status */
export async function getAllPostsForAdmin(): Promise<BlogPost[]> {
    const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('publish_date', { ascending: false })

    if (error) {
        console.error('Error fetching blogs for admin:', error)
        return []
    }

    return (data || []).map(mapDbToBlogPost)
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .maybeSingle()

    if (error || !data) {
        return null
    }

    return mapDbToBlogPost(data)
}

function mapDbToBlogPost(dbPost: any): BlogPost {
    return {
        id: dbPost.id,
        slug: dbPost.slug,
        title: dbPost.title,
        desc: dbPost.description,
        category: dbPost.category,
        time: dbPost.reading_time,
        date: dbPost.publish_date,
        image: dbPost.image_url,
        featured: dbPost.is_featured,
        status: dbPost.status,
        author: dbPost.author_name,
        rejection_reason: dbPost.rejection_reason,
        content: dbPost.content,
        created_at: dbPost.created_at,
        updated_at: dbPost.updated_at
    }
}
