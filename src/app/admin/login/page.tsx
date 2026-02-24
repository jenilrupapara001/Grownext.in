'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Lock, Mail, Loader2, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function LoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)
        setError('')

        const result = await signIn('credentials', {
            email,
            password,
            redirect: false,
        })

        setLoading(false)

        if (result?.ok) {
            router.push('/admin/blog')
            router.refresh()
        } else {
            setError('Invalid email or password. Please try again.')
        }
    }

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative w-full max-w-md">
                {/* Logo */}
                <div className="flex justify-center mb-10">
                    <div className="flex items-center gap-3">
                        <div className="h-12 w-12 bg-primary rounded-2xl flex items-center justify-center font-black text-white text-xl shadow-lg shadow-primary/30">G</div>
                        <div>
                            <div className="font-black text-white text-xl uppercase tracking-tight italic">GrowNext</div>
                            <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Admin Portal</div>
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div className="bg-gray-900/80 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 shadow-[0_48px_100px_rgba(0,0,0,0.5)]">
                    <h1 className="text-2xl font-black text-white mb-2 tracking-tight">Welcome back</h1>
                    <p className="text-gray-500 font-medium text-sm mb-10">Sign in to access the content dashboard.</p>

                    {error && (
                        <div className="mb-6 px-5 py-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm font-bold">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email */}
                        <div className="relative">
                            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Email address"
                                className="w-full bg-gray-800/60 border border-white/5 rounded-2xl pl-14 pr-5 py-4 text-white font-medium placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Password"
                                className="w-full bg-gray-800/60 border border-white/5 rounded-2xl pl-14 pr-5 py-4 text-white font-medium placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-14 rounded-2xl bg-primary hover:bg-orange-500 text-white font-black text-base transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                        >
                            {loading ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                                <>Sign In <ArrowRight className="h-5 w-5" /></>
                            )}
                        </button>
                    </form>
                </div>

                <p className="text-center text-gray-700 text-xs font-bold mt-8 uppercase tracking-widest">
                    Grownext Content Management System
                </p>
            </div>
        </div>
    )
}
