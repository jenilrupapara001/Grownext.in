'use client'

import { BlogPost } from '@/lib/blog'
import { Edit2, Trash2, ExternalLink, Calendar, Tag, Check, X, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { deletePost, approvePost, rejectPost } from '@/app/actions/blog'
import { useTransition } from 'react'
import { useSession } from 'next-auth/react'

const statusConfig = {
    approved: { label: 'Approved', className: 'bg-green-100 text-green-700' },
    pending: { label: 'Pending Review', className: 'bg-amber-100 text-amber-700' },
    draft: { label: 'Draft', className: 'bg-gray-100 text-gray-600' },
    rejected: { label: 'Rejected', className: 'bg-red-100 text-red-600' },
}

export default function BlogTable({ posts }: { posts: BlogPost[] }) {
    const [isPending, startTransition] = useTransition()
    const { data: session } = useSession()
    const isAdmin = (session?.user as any)?.role === 'admin'

    const handleDelete = async (slug: string) => {
        if (confirm('Are you sure you want to delete this post?')) {
            startTransition(async () => { await deletePost(slug) })
        }
    }

    const handleApprove = async (slug: string) => {
        startTransition(async () => { await approvePost(slug) })
    }

    const handleReject = async (slug: string) => {
        const reason = prompt('Rejection reason (optional):') ?? undefined
        startTransition(async () => { await rejectPost(slug, reason) })
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-gray-50">
                        <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest">Article</th>
                        <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest">Status</th>
                        <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest">Category</th>
                        <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest">Date</th>
                        <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {posts.map((post) => {
                        const status = post.frontmatter.status || 'approved'
                        const sc = statusConfig[status] ?? statusConfig.draft
                        const isPendingPost = status === 'pending'

                        return (
                            <tr key={post.slug} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-8 py-5">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-20 relative rounded-lg overflow-hidden shrink-0 border border-gray-100">
                                            <Image src={post.frontmatter.image} alt={post.frontmatter.title} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <div className="font-extrabold text-gray-900">{post.frontmatter.title}</div>
                                            <div className="text-xs text-gray-400 font-medium">/{post.slug}</div>
                                            {post.frontmatter.author && (
                                                <div className="text-xs text-gray-400 font-medium mt-0.5">by {post.frontmatter.author}</div>
                                            )}
                                            {status === 'rejected' && post.frontmatter.rejectionReason && (
                                                <div className="text-xs text-red-500 font-medium mt-1">↳ {post.frontmatter.rejectionReason}</div>
                                            )}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-5">
                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${sc.className}`}>
                                        {isPendingPost && <Clock className="h-3 w-3" />}
                                        {sc.label}
                                    </span>
                                </td>
                                <td className="px-8 py-5">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-[10px] font-black text-gray-600 uppercase tracking-wider">
                                        <Tag className="h-3 w-3" />
                                        {post.frontmatter.category}
                                    </span>
                                </td>
                                <td className="px-8 py-5">
                                    <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
                                        <Calendar className="h-4 w-4" />
                                        {post.frontmatter.date}
                                    </div>
                                </td>
                                <td className="px-8 py-5 text-right">
                                    <div className="flex items-center justify-end gap-1">
                                        {/* Admin-only: approve / reject pending posts */}
                                        {isAdmin && isPendingPost && (
                                            <>
                                                <button
                                                    onClick={() => handleApprove(post.slug)}
                                                    disabled={isPending}
                                                    title="Approve"
                                                    className="p-2 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 transition-colors disabled:opacity-50 font-black text-xs flex items-center gap-1"
                                                >
                                                    <Check className="h-4 w-4" /> Approve
                                                </button>
                                                <button
                                                    onClick={() => handleReject(post.slug)}
                                                    disabled={isPending}
                                                    title="Reject"
                                                    className="p-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition-colors disabled:opacity-50 font-black text-xs flex items-center gap-1"
                                                >
                                                    <X className="h-4 w-4" /> Reject
                                                </button>
                                            </>
                                        )}

                                        <Link href={`/blog/${post.slug}`} target="_blank" className="p-2 text-gray-400 hover:text-primary transition-colors" title="View Live">
                                            <ExternalLink className="h-5 w-5" />
                                        </Link>
                                        <Link href={`/admin/blog/editor/${post.slug}`} className="p-2 text-gray-400 hover:text-blue-600 transition-colors" title="Edit">
                                            <Edit2 className="h-5 w-5" />
                                        </Link>
                                        {isAdmin && (
                                            <button
                                                onClick={() => handleDelete(post.slug)}
                                                className="p-2 text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50"
                                                disabled={isPending}
                                                title="Delete"
                                            >
                                                <Trash2 className="h-5 w-5" />
                                            </button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                    {posts.length === 0 && (
                        <tr>
                            <td colSpan={5} className="px-8 py-20 text-center text-gray-500 font-medium italic">
                                No blog posts found. Start by creating your first global insight.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
