import { getAllPostsForAdmin } from '@/lib/blog'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import BlogTable from '@/components/admin/BlogTable'

export default function BlogAdminDashboard() {
    const posts = getAllPostsForAdmin()
    const pendingCount = posts.filter(p => p.frontmatter.status === 'pending').length
    const approvedCount = posts.filter(p => !p.frontmatter.status || p.frontmatter.status === 'approved').length

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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                    <div className="text-gray-400 font-black text-xs uppercase tracking-widest mb-1">Total Posts</div>
                    <div className="text-4xl font-black text-gray-900 italic">{posts.length}</div>
                </div>
                <div className="bg-white p-8 rounded-[2rem] border border-green-100 shadow-sm">
                    <div className="text-green-600 font-black text-xs uppercase tracking-widest mb-1">Live</div>
                    <div className="text-4xl font-black text-green-600 italic">{approvedCount}</div>
                </div>
                <div className={`p-8 rounded-[2rem] shadow-sm border ${pendingCount > 0 ? 'bg-amber-50 border-amber-200' : 'bg-white border-gray-100'}`}>
                    <div className={`font-black text-xs uppercase tracking-widest mb-1 ${pendingCount > 0 ? 'text-amber-600' : 'text-gray-400'}`}>
                        {pendingCount > 0 ? '⏳ Pending Review' : 'Pending'}
                    </div>
                    <div className={`text-4xl font-black italic ${pendingCount > 0 ? 'text-amber-600' : 'text-gray-900'}`}>{pendingCount}</div>
                </div>
                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                    <div className="text-gray-400 font-black text-xs uppercase tracking-widest mb-1">Featured</div>
                    <div className="text-4xl font-black text-gray-900 italic">
                        {posts.filter(p => p.frontmatter.featured).length}
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden">
                <BlogTable posts={posts} />
            </div>
        </div>
    )
}
