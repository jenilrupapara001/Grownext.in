import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'src/content/blog')

export type BlogPostFrontmatter = {
    title: string
    desc: string
    category: string
    time: string
    date: string
    image: string
    featured?: boolean
}

export type BlogPost = {
    slug: string
    frontmatter: BlogPostFrontmatter
    content: string
}

export function getAllPosts(): BlogPost[] {
    // Check if directory exists, if not create it
    if (!fs.existsSync(contentDir)) {
        fs.mkdirSync(contentDir, { recursive: true })
        return []
    }

    const files = fs.readdirSync(contentDir)

    const posts = files
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace('.md', '')
            const fullPath = path.join(contentDir, fileName)
            const fileContents = fs.readFileSync(fullPath, 'utf8')

            const { data, content } = matter(fileContents)

            return {
                slug,
                frontmatter: data as BlogPostFrontmatter,
                content,
            }
        })
        // Sort posts by date descending
        .sort((a, b) => (new Date(a.frontmatter.date) > new Date(b.frontmatter.date) ? -1 : 1))

    return posts
}

export function getPostBySlug(slug: string): BlogPost | null {
    try {
        const fullPath = path.join(contentDir, `${slug}.md`)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
            slug,
            frontmatter: data as BlogPostFrontmatter,
            content,
        }
    } catch (error) {
        return null
    }
}
