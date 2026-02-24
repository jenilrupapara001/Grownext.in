import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'src/content/blog')

export type BlogStatus = 'draft' | 'pending' | 'approved' | 'rejected'

export type BlogPostFrontmatter = {
    title: string
    desc: string
    category: string
    time: string
    date: string
    image: string
    featured?: boolean
    status?: BlogStatus
    author?: string
    rejectionReason?: string
}

export type BlogPost = {
    slug: string
    frontmatter: BlogPostFrontmatter
    content: string
}

/** Public-facing: only returns approved posts (or posts with no status = legacy approved) */
export function getAllPosts(): BlogPost[] {
    if (!fs.existsSync(contentDir)) {
        fs.mkdirSync(contentDir, { recursive: true })
        return []
    }

    return fs.readdirSync(contentDir)
        .filter((f) => f.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace('.md', '')
            const { data, content } = matter(fs.readFileSync(path.join(contentDir, fileName), 'utf8'))
            return { slug, frontmatter: data as BlogPostFrontmatter, content }
        })
        .filter((p) => !p.frontmatter.status || p.frontmatter.status === 'approved')
        .sort((a, b) => (new Date(a.frontmatter.date) > new Date(b.frontmatter.date) ? -1 : 1))
}

/** Admin-facing: returns ALL posts regardless of status */
export function getAllPostsForAdmin(): BlogPost[] {
    if (!fs.existsSync(contentDir)) return []

    return fs.readdirSync(contentDir)
        .filter((f) => f.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace('.md', '')
            const { data, content } = matter(fs.readFileSync(path.join(contentDir, fileName), 'utf8'))
            return { slug, frontmatter: data as BlogPostFrontmatter, content }
        })
        .sort((a, b) => (new Date(a.frontmatter.date) > new Date(b.frontmatter.date) ? -1 : 1))
}

export function getPostBySlug(slug: string): BlogPost | null {
    try {
        const fullPath = path.join(contentDir, `${slug}.md`)
        const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'))
        return { slug, frontmatter: data as BlogPostFrontmatter, content }
    } catch {
        return null
    }
}
