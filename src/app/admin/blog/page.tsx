import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'
import { Plus, Edit2, Trash2, ExternalLink, Calendar, Clock, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import BlogTable from '@/components/admin/BlogTable'

export default function BlogAdminDashboard() {
    const posts = getAllPosts()

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 uppercase italic tracking-tight">Blog <span className="text-primary not-italic">Dashboard</span></h1>
                    <p className="text-gray-500 font-medium mt-2">Manage your global export insights and editorial content.</p>
                </div>
                <Button asChild className="rounded-full px-8 h-12 font-black shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                    <Link href="/admin/blog/editor" className="flex items-center gap-2">
                        <Plus className="h-5 w-5" />
                        Create New Post
                    </Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                    <div className="text-gray-400 font-black text-xs uppercase tracking-widest mb-1">Total Posts</div>
                    <div className="text-4xl font-black text-gray-900 italic">{posts.length}</div>
                </div>
                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                    <div className="text-gray-400 font-black text-xs uppercase tracking-widest mb-1">Featured</div>
                    <div className="text-4xl font-black text-gray-900 italic">
                        {posts.filter(p => p.frontmatter.featured).length}
                    </div>
                </div>
                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                    <div className="text-gray-400 font-black text-xs uppercase tracking-widest mb-1">Last Updated</div>
                    <div className="text-lg font-black text-gray-900 uppercase truncate">
                        {posts[0]?.frontmatter.date || 'N/A'}
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden">
                <BlogTable posts={posts} />
            </div>
        </div>
    )
}
