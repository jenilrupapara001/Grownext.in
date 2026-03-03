'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, ArrowRight, MessageSquare, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface Message {
    id: string
    text: string
    sender: 'bot' | 'user'
    timestamp: Date
}

const INITIAL_MESSAGES: Message[] = [
    {
        id: '1',
        text: "Hi! I'm the Grownext Export Assistant. How can I help you scale your business globally today?",
        sender: 'bot',
        timestamp: new Date(),
    }
]

const SUGGESTED_QUESTIONS = [
    "How to sell on Alibaba?",
    "Alibaba account setup cost?",
    "Official partner in Gujarat?",
    "Export lead generation tips"
]

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
    const [isTyping, setIsTyping] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages, isTyping])

    const handleSend = async (text: string) => {
        if (!text.trim() || isTyping) return

        const userMsg: Message = {
            id: Date.now().toString(),
            text,
            sender: 'user',
            timestamp: new Date(),
        }

        setMessages(prev => [...prev, userMsg])
        setInput('')
        setIsTyping(true)

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: [...messages, userMsg] }),
            })

            const data = await response.json()

            if (data.error) throw new Error(data.error)

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: data.text,
                sender: 'bot',
                timestamp: new Date(),
            }
            setMessages(prev => [...prev, botMsg])
        } catch (error) {
            console.error("Chat Error:", error)
            const errorMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: "I'm having a bit of trouble connecting right now. Please try again or chat with us directly on WhatsApp!",
                sender: 'bot',
                timestamp: new Date(),
            }
            setMessages(prev => [...prev, errorMsg])
        } finally {
            setIsTyping(false)
        }
    }

    const whatsappUrl = `https://wa.me/919988339166?text=${encodeURIComponent("Hi, I was chatting with your bot and want to know more about: " + (messages.length > 1 ? messages[messages.length - 1].text : "Alibaba export"))}`

    if (!isVisible) return null

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="w-[calc(100vw-3rem)] sm:w-[400px] h-[500px] bg-white rounded-[2rem] shadow-2xl border border-neutral-100 flex flex-col overflow-hidden pointer-events-auto mb-4"
                    >
                        {/* Header */}
                        <div className="bg-primary p-6 flex items-center justify-between text-white">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                    <Bot className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg leading-none">Grownext AI</h3>
                                    <p className="text-xs font-medium text-white/80 mt-1">Export Assistant</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar"
                        >
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={cn(
                                        "flex gap-2 max-w-[85%]",
                                        msg.sender === 'user' ? "ml-auto flex-row-reverse" : ""
                                    )}
                                >
                                    <div className={cn(
                                        "h-8 w-8 rounded-lg flex items-center justify-center shrink-0",
                                        msg.sender === 'user' ? "bg-neutral-100" : "bg-primary/10 text-primary"
                                    )}>
                                        {msg.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                                    </div>
                                    <div className={cn(
                                        "p-3 rounded-2xl text-sm font-medium leading-relaxed",
                                        msg.sender === 'user'
                                            ? "bg-neutral-900 text-white rounded-tr-none"
                                            : "bg-neutral-50 text-neutral-800 rounded-tl-none border border-neutral-100"
                                    )}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex gap-2 max-w-[85%]">
                                    <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                        <Bot className="h-4 w-4" />
                                    </div>
                                    <div className="bg-neutral-50 p-3 rounded-2xl rounded-tl-none border border-neutral-100 flex gap-1 items-center">
                                        <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-bounce" />
                                        <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-bounce delay-150" />
                                        <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-bounce delay-300" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer / Input */}
                        <div className="p-4 border-t border-neutral-100 bg-neutral-50/50">
                            {messages.length === 1 && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {SUGGESTED_QUESTIONS.map(q => (
                                        <button
                                            key={q}
                                            onClick={() => handleSend(q)}
                                            className="text-[10px] uppercase tracking-widest font-black px-3 py-1.5 bg-white border border-neutral-200 rounded-full hover:border-primary hover:text-primary transition-all active:scale-95"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            )}

                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
                                    placeholder="Type your question..."
                                    className="flex-1 bg-white border border-neutral-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                />
                                <Button
                                    onClick={() => handleSend(input)}
                                    size="icon"
                                    className="rounded-xl h-10 w-10 shrink-0"
                                >
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-green-600 hover:text-green-700 transition-colors py-2 group"
                            >
                                <Phone className="h-3 w-3 group-hover:scale-110 transition-transform" />
                                Talk directly on WhatsApp
                                <ArrowRight className="h-3 w-3" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <div className="flex flex-col items-end gap-4 pointer-events-auto">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={cn(
                        "bg-white px-5 py-3 rounded-[1.5rem] shadow-xl border border-neutral-100 hidden md:block transition-all",
                        isOpen ? "opacity-0 scale-90 translate-x-10" : "opacity-100 translate-x-0"
                    )}
                >
                    <p className="text-sm font-black text-neutral-900 leading-none">Ready to Export?</p>
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest mt-2 flex items-center gap-2">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                        AI Assistant Online
                    </p>
                </motion.div>

                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                        "h-16 w-16 rounded-[1.5rem] shadow-2xl flex items-center justify-center transition-all duration-500 relative group overflow-hidden",
                        isOpen ? "bg-neutral-900 rotate-90" : "bg-primary"
                    )}
                >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {isOpen ? (
                        <X className="h-8 w-8 text-white" />
                    ) : (
                        <MessageSquare className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                    )}

                    {!isOpen && (
                        <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full border-2 border-white z-20 flex items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                    )}
                </motion.button>
            </div>
        </div>
    )
}
