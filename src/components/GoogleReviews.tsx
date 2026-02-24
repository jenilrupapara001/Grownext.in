'use client'

import React, { useEffect, useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, MessageSquare, ExternalLink, PenLine, ChevronLeft, ChevronRight } from 'lucide-react'
import { getGoogleReviews, GoogleReview } from '@/app/actions/reviews'

const GOOGLE_PLACE_ID = 'ChIJTctuivBP4DsR4xbocEn4dkc'
const GOOGLE_REVIEWS_URL = `https://search.google.com/local/reviews?placeid=${GOOGLE_PLACE_ID}`
const GOOGLE_WRITE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`
const CARD_HEIGHT = 340 // px — fixed height for all carousel cards
const VISIBLE_CARDS = 3
const TRUNCATE_AT = 180 // chars before showing "Read more"

/* ── Helpers ────────────────────────────────────────────────── */

const AVATAR_COLORS = [
    { bg: '#FF6A00', fg: '#fff' },
    { bg: '#2B2B2B', fg: '#fff' },
    { bg: '#58595B', fg: '#fff' },
    { bg: '#FEE2CC', fg: '#FF6A00' },
    { bg: '#EDEDED', fg: '#2B2B2B' },
]

function getInitials(name: string) {
    return name.split(' ').map((n) => n[0]).slice(0, 2).join('').toUpperCase()
}

/* ── Avatar ─────────────────────────────────────────────────── */
function Avatar({ name, photoUrl, index }: { name: string; photoUrl: string; index: number }) {
    const [err, setErr] = useState(false)
    const { bg, fg } = AVATAR_COLORS[index % AVATAR_COLORS.length]
    if (!photoUrl || err) {
        return (
            <div
                className="h-12 w-12 rounded-2xl flex items-center justify-center text-sm font-black shrink-0"
                style={{ background: bg, color: fg }}
            >
                {getInitials(name)}
            </div>
        )
    }
    return (
        <div className="h-12 w-12 rounded-2xl overflow-hidden border-2 border-white shadow-md shrink-0">
            <img
                src={photoUrl}
                alt={name}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
                onError={() => setErr(true)}
            />
        </div>
    )
}

/* ── Stars ──────────────────────────────────────────────────── */
function Stars({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < rating ? 'fill-primary text-primary' : 'fill-[#EDEDED] text-[#EDEDED]'}`} />
            ))}
        </div>
    )
}

/* ── Review Card ─────────────────────────────────────────────── */
function ReviewCard({ review, index, fixedHeight = false }: { review: GoogleReview; index: number; fixedHeight?: boolean }) {
    const [expanded, setExpanded] = useState(false)
    const isTruncated = review.text.length > TRUNCATE_AT
    const displayText = !expanded && isTruncated ? review.text.slice(0, TRUNCATE_AT) + '…' : review.text

    return (
        <div
            className="bg-white rounded-[2rem] p-7 border border-[#EDEDED] shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex flex-col gap-5 group"
            style={fixedHeight ? { height: CARD_HEIGHT } : undefined}
        >
            {/* Stars + time */}
            <div className="flex items-center justify-between shrink-0">
                <Stars rating={review.rating} />
                <span className="text-[11px] font-bold text-[#58595B] uppercase tracking-widest">
                    {review.relative_time_description}
                </span>
            </div>

            {/* Review text */}
            <div className="flex-1 overflow-hidden">
                <p className="text-[#2B2B2B] text-sm font-medium leading-relaxed">
                    "{displayText}"
                </p>
                {isTruncated && !fixedHeight && (
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="mt-2 text-xs font-black text-primary hover:text-[#e05f00] uppercase tracking-widest transition-colors"
                    >
                        {expanded ? 'Read less ↑' : 'Read more ↓'}
                    </button>
                )}
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-[#EDEDED] group-hover:bg-primary/20 transition-colors shrink-0" />

            {/* Author */}
            <div className="flex items-center gap-3 shrink-0">
                <Avatar name={review.author_name} photoUrl={review.profile_photo_url} index={index} />
                <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-sm font-black text-[#2B2B2B] uppercase tracking-tight truncate">
                        {review.author_name}
                    </span>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-1 truncate">
                        <svg className="h-3 w-3 shrink-0" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Verified Review
                    </span>
                </div>
            </div>
        </div>
    )
}

/* ── Infinite Carousel ───────────────────────────────────────── */
function InfiniteCarousel({ reviews }: { reviews: GoogleReview[] }) {
    const [current, setCurrent] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

    // How many cards to show (responsive via CSS, logic uses VISIBLE_CARDS)
    const total = reviews.length

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % total)
    }, [total])

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + total) % total)
    }, [total])

    // Auto-advance every 3.5 s
    useEffect(() => {
        if (isPaused || total === 0) return
        intervalRef.current = setInterval(next, 3500)
        return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
    }, [isPaused, next, total])

    // Build the visible window (wrap-around) — always show 3 cards
    const count = Math.min(VISIBLE_CARDS, total)
    const visibleIndices = Array.from({ length: count }, (_, i) => (current + i) % total)

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Cards track */}
            <div className={`grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-${count}`}>
                <AnimatePresence mode="popLayout">
                    {visibleIndices.map((idx, pos) => (
                        <motion.div
                            key={`${idx}-${current}`}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.4, delay: pos * 0.05, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <ReviewCard review={reviews[idx]} index={idx} fixedHeight />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-10">
                <button
                    onClick={prev}
                    className="h-12 w-12 rounded-full border-2 border-[#EDEDED] hover:bg-primary hover:border-primary hover:text-white transition-all flex items-center justify-center shadow-sm text-[#2B2B2B]"
                    aria-label="Previous"
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                    {reviews.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-2 rounded-full transition-all ${i === current ? 'bg-primary w-6' : 'bg-[#EDEDED] w-2 hover:bg-[#58595B]'}`}
                            aria-label={`Go to review ${i + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={next}
                    className="h-12 w-12 rounded-full border-2 border-[#EDEDED] hover:bg-primary hover:border-primary hover:text-white transition-all flex items-center justify-center shadow-sm text-[#2B2B2B]"
                    aria-label="Next"
                >
                    <ChevronRight className="h-5 w-5" />
                </button>
            </div>

            {/* Progress bar */}
            <div className="mt-4 h-1 w-full max-w-xs mx-auto bg-[#EDEDED] rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-primary"
                    animate={{ width: `${((current + 1) / total) * 100}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>
        </div>
    )
}

/* ── Main Component ──────────────────────────────────────────── */
export function GoogleReviews() {
    const [reviews, setReviews] = useState<GoogleReview[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchReviews() {
            const data = await getGoogleReviews()
            setReviews(data.filter((r) => r.rating > 3))
            setLoading(false)
        }
        fetchReviews()
    }, [])

    if (loading) {
        return (
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="bg-[#EDEDED]/40 rounded-[2rem] animate-pulse" style={{ height: CARD_HEIGHT }} />
                    ))}
                </div>
            </section>
        )
    }

    if (reviews.length === 0) return null

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* ── Section header ── */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-14">
                    <div>
                        <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
                            <MessageSquare className="h-4 w-4" /> Client Trust
                        </h2>
                        <h3 className="text-4xl sm:text-6xl font-black text-[#2B2B2B] tracking-tight leading-[0.95] uppercase italic">
                            Real Growth.<br />
                            <span className="text-primary not-italic">Real Impact.</span>
                        </h3>
                    </div>

                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                        {/* See all reviews */}
                        <a
                            href={GOOGLE_REVIEWS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 bg-[#EDEDED]/40 hover:bg-[#EDEDED] border border-[#EDEDED] hover:border-primary/20 rounded-[2rem] px-8 py-5 transition-all"
                        >
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                                ))}
                            </div>
                            <span className="text-xs font-black text-[#2B2B2B] uppercase tracking-widest">See All Reviews</span>
                            <span className="flex items-center gap-1 text-[11px] font-bold text-primary">
                                <ExternalLink className="h-3 w-3" /> Open in Google
                            </span>
                        </a>

                        {/* Write a review */}
                        <a
                            href={GOOGLE_WRITE_REVIEW_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center gap-2 bg-primary hover:bg-[#e05f00] text-white rounded-[2rem] px-8 py-5 transition-all shadow-lg shadow-primary/20"
                        >
                            <PenLine className="h-6 w-6" />
                            <span className="text-xs font-black uppercase tracking-widest">Write a Review</span>
                            <span className="text-[11px] font-bold opacity-80">Share your experience</span>
                        </a>
                    </div>
                </div>

                {/* ── Infinite Carousel ── */}
                <InfiniteCarousel reviews={reviews} />

                {/* ── Footer CTA ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <a
                        href={GOOGLE_REVIEWS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-black text-[#58595B] hover:text-primary transition-colors uppercase tracking-widest"
                    >
                        <ExternalLink className="h-4 w-4" />
                        View full review history on Google
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
