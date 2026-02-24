import { getPostBySlug } from '@/lib/blog'
import BlogForm from '@/components/admin/BlogForm'
import { notFound } from 'next/navigation'

export default async function BlogEditorPage({ params }: { params: { slug?: string[] } }) {
    const actualSlug = params.slug?.[0]
    let post = null

    if (actualSlug) {
        post = getPostBySlug(actualSlug)
        if (!post) {
            notFound()
        }
    }

    return (
        <div className="max-w-5xl mx-auto space-y-10">
            <div>
                <h1 className="text-4xl font-black text-gray-900 uppercase italic tracking-tight">
                    {post ? 'Edit' : 'Create'} <span className="text-primary not-italic">Article</span>
                </h1>
                <p className="text-gray-500 font-medium mt-2">
                    {post
                        ? `Updating global insight: ${post.frontmatter.title}`
                        : 'Drafting a new authoritative guide for Indian manufacturers.'}
                </p>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl overflow-hidden p-10">
                <BlogForm post={post || undefined} />
            </div>
        </div>
    )
}
