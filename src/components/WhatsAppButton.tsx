'use client'

import { MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false)

    // Delay appearance so it doesn't distract immediately on load
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    if (!isVisible) return null

    // Pre-filled message
    const preFilledMessage = encodeURIComponent("Hi, I want to know more about Alibaba export")
    const whatsappUrl = `https://wa.me/919988339166?text=${preFilledMessage}`

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none"
        >
            <div className="bg-white px-4 py-2 rounded-2xl shadow-xl shadow-green-500/10 border border-gray-100 pointer-events-auto origin-bottom-right hidden md:block animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                <p className="text-sm font-bold text-gray-800">
                    Have questions about exports?
                </p>
                <p className="text-xs font-semibold text-green-600">
                    Chat with an expert now!
                </p>
            </div>

            <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto bg-[#25D366] text-white h-16 w-16 rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 relative group"
                aria-label="Chat with us on WhatsApp"
            >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-[#25D366] blur-md opacity-50 group-hover:opacity-100 transition-opacity" />

                <MessageCircle className="h-8 w-8 relative z-10 animate-pulse" />

                {/* Notification dot */}
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full border-2 border-white z-20 flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
            </Link>
        </motion.div>
    )
}
