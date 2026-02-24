'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertCircle, RefreshCcw, Home } from 'lucide-react'
import Link from 'next/link'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-6">
            <div className="max-w-xl w-full text-center space-y-8">
                <div className="relative inline-block">
                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                    <AlertCircle className="h-24 w-24 text-primary relative z-10 mx-auto" />
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 italic uppercase tracking-tight leading-none">
                        System <span className="text-primary not-italic">Interruption.</span>
                    </h1>
                    <p className="text-gray-500 font-medium text-lg leading-relaxed">
                        We encountered a technical anomaly while building your global intelligence.
                        Click reset to synchronize the interface.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                    <Button
                        onClick={() => reset()}
                        className="rounded-full px-10 h-16 bg-gray-950 text-white font-black shadow-2xl hover:scale-105 transition-transform group"
                    >
                        <RefreshCcw className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                        Reset Interface
                    </Button>

                    <Button asChild variant="outline" className="rounded-full px-10 h-16 border-2 border-gray-100 font-black hover:bg-gray-50">
                        <Link href="/" className="flex items-center gap-2">
                            <Home className="h-5 w-5" />
                            Return Home
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
