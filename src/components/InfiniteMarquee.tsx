'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

export interface MarqueeItem {
    id: number | string;
    title: string;
    description: string;
    icon?: React.ReactNode;
    image?: string;
    // Review specific fields
    type?: 'sector' | 'review';
    author?: string;
    role?: string;
    location?: string;
    rating?: number;
    quote?: string;
}

interface InfiniteMarqueeProps {
    items: MarqueeItem[];
    speed?: number; // Lower is faster (duration in seconds per full cycle)
    direction?: 'left' | 'right';
    pauseOnHover?: boolean;
}

export default function InfiniteMarquee({
    items,
    speed = 100,
    direction = 'left',
    pauseOnHover = true,
}: InfiniteMarqueeProps) {
    const [isPaused, setIsPaused] = useState(false);

    // Duplicate items to ensure seamless loop
    const duplicatedItems = [...items, ...items, ...items];

    return (
        <div className="relative w-full overflow-hidden py-10">
            {/* Gradient Overlays for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex gap-6 whitespace-nowrap px-6"
                animate={{
                    x: direction === 'left' ? ['0%', '-33.333%'] : ['-33.333%', '0%'],
                }}
                transition={{
                    duration: speed,
                    ease: 'linear',
                    repeat: Infinity,
                }}
                onHoverStart={() => pauseOnHover && setIsPaused(true)}
                onHoverEnd={() => pauseOnHover && setIsPaused(false)}
                style={{
                    animationPlayState: isPaused ? 'paused' : 'running',
                }}
            >
                {duplicatedItems.map((item, idx) => (
                    <div
                        key={`${item.id}-${idx}`}
                        className={`flex-shrink-0 group ${item.type === 'review' ? 'w-[500px]' : 'w-[420px]'}`}
                    >
                        {item.type === 'review' ? (
                            /* Review Card Mode */
                            <div className="h-full bg-gray-50 p-12 rounded-[3.5rem] border border-transparent hover:border-primary/10 hover:bg-white hover:shadow-2xl transition-all duration-500 whitespace-normal">
                                <div className="flex gap-1 mb-8">
                                    {[...Array(item.rating || 5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                                    ))}
                                </div>
                                <p className="text-2xl text-gray-800 font-bold leading-relaxed mb-10 italic">&quot;{item.quote || item.description}&quot;</p>
                                <div className="flex items-center gap-5">
                                    <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center text-white text-2xl font-black shrink-0">
                                        {item.author?.[0] || 'U'}
                                    </div>
                                    <div>
                                        <h4 className="font-extrabold text-gray-900 text-lg">{item.author}</h4>
                                        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">{item.role} • {item.location}</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* Industrial Sector Card Mode */
                            <div className="h-[280px] bg-gray-950 border border-white/10 rounded-[2.5rem] transition-all duration-700 hover:border-primary/40 hover:shadow-[0_0_50px_-12px_rgba(255,102,0,0.3)] overflow-hidden relative group/card">

                                {/* Background Image with Cinematic Overlay */}
                                {item.image && (
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover opacity-30 grayscale transition-all duration-1000 group-hover/card:scale-110 group-hover/card:grayscale-0 group-hover/card:opacity-40"

                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent" />
                                    </div>
                                )}

                                {/* Industrial Content Overlay */}
                                <div className="relative z-10 h-full p-10 flex flex-col justify-end whitespace-normal">
                                    {/* Decorative Tag */}
                                    <div className="absolute top-8 left-10 flex items-center gap-2">
                                        <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                                        <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Industrial Division</span>
                                    </div>

                                    {/* Large Background Number */}
                                    <div className="absolute top-6 right-8 text-8xl font-black text-white/5 italic leading-none pointer-events-none group-hover/card:text-primary/10 transition-all duration-700">
                                        {String(idx % items.length + 1).padStart(2, '0')}
                                    </div>

                                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md group-hover/card:bg-primary group-hover/card:border-primary transition-all duration-500 shadow-xl">
                                        {item.icon}
                                    </div>

                                    <h4 className="text-3xl font-black text-white mb-3 uppercase italic tracking-tighter leading-none group-hover/card:text-primary transition-colors">
                                        {item.title}
                                    </h4>

                                    <p className="text-sm font-bold text-gray-400 leading-relaxed group-hover/card:text-white transition-colors line-clamp-2 max-w-[90%]">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Bottom Interactive Line */}
                                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent w-full scale-x-0 group-hover/card:scale-x-100 transition-transform duration-700" />
                            </div>
                        )}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
