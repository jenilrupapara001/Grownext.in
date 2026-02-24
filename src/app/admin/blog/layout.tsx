'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, PlusCircle, LogOut, Clock, ShieldCheck, PenLine } from 'lucide-react'
import { useSession, signOut } from 'next-auth/react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const { data: session } = useSession()
    const role = (session?.user as any)?.role as 'admin' | 'writer' | undefined
    const isAdmin = role === 'admin'

    const navItems = [
        { name: 'Dashboard', href: '/admin/blog', icon: LayoutDashboard },
        { name: 'New Post', href: '/admin/blog/editor', icon: PlusCircle },
    ]

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white flex flex-col fixed h-full">
                <div className="p-8">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center font-black">G</div>
                        <span className="font-black tracking-tight text-xl italic uppercase">GrowNext <span className="text-primary not-italic">Admin</span></span>
                    </Link>
                </div>

                {/* User badge */}
                {session?.user && (
                    <div className="mx-4 mb-4 px-4 py-3 bg-white/5 rounded-2xl border border-white/5">
                        <div className="flex items-center gap-2 mb-1">
                            {isAdmin
                                ? <ShieldCheck className="h-4 w-4 text-primary" />
                                : <PenLine className="h-4 w-4 text-blue-400" />}
                            <span className={`text-[10px] font-black uppercase tracking-widest ${isAdmin ? 'text-primary' : 'text-blue-400'}`}>
                                {role}
                            </span>
                        </div>
                        <div className="text-sm font-bold text-white truncate">{session.user.name}</div>
                        <div className="text-xs text-gray-500 truncate">{session.user.email}</div>
                    </div>
                )}

                <nav className="flex-1 px-4 space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${isActive ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                            >
                                <item.icon className="h-5 w-5" />
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>

                <div className="p-4 border-t border-white/5 space-y-1">
                    <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                        <LogOut className="h-5 w-5" />
                        View Site
                    </Link>
                    <button
                        onClick={() => signOut({ callbackUrl: '/admin/login' })}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all"
                    >
                        <LogOut className="h-5 w-5" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-10">
                {children}
            </main>
        </div>
    )
}
