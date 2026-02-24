'use client'

import { AlertCircle, RefreshCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html>
            <body>
                <div className="min-h-screen bg-white flex items-center justify-center p-6 text-center">
                    <div className="max-w-md space-y-8">
                        <AlertCircle className="h-20 w-20 text-primary mx-auto" />
                        <div className="space-y-3">
                            <h2 className="text-3xl font-black text-gray-900 uppercase italic">Critical System Error</h2>
                            <p className="text-gray-500 font-medium">A low-level anomaly has occurred. This is usually transient and can be resolved by a manual reset.</p>
                        </div>
                        <Button
                            onClick={() => reset()}
                            className="rounded-full px-10 h-16 bg-primary text-white font-black shadow-xl"
                        >
                            <RefreshCcw className="mr-2 h-5 w-5" />
                            Attempt Recovery
                        </Button>
                    </div>
                </div>
            </body>
        </html>
    )
}
