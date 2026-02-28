'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
    Factory,
    Package,
    Diamond,
    FlaskConical,
    Truck,
    Cpu,
    Leaf,
    Briefcase,
    CheckCircle2,
    Gem,
    ShoppingBag,
    Sofa,
    ArrowRight,
    Zap,
    Globe2,
    TrendingUp,
    ShieldCheck,
    MessageSquare,
    ChevronDown
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CategoryExplorer } from '@/components/CategoryExplorer'

const sectors = [
    {
        id: 'textiles',
        title: 'Textiles & Garments',
        slug: 'textile-export-solutions',
        description: 'Empowering Surat and Tirupur manufacturers to dominate global apparel markets. Complete Alibaba registration for textile exporters.',
        icon: Package,
        color: 'from-blue-500 to-indigo-600',
        keywords: ['Textile Export from India', 'Surat Garment Manufacturers', 'Alibaba Textile Supplier'],
        growth: '+28% YoY',
    },
    {
        id: 'machinery',
        title: 'Engineering & Machinery',
        slug: 'engineering-export-growth',
        description: 'Strategic onboarding for heavy machinery and industrial component manufacturers. Reach verified global B2B buyers.',
        icon: Factory,
        color: 'from-orange-500 to-red-600',
        keywords: ['Industrial Machinery Export', 'Indian Engineering Goods', 'Alibaba Machinery Seller'],
        growth: '+15% Demand',
    },
    {
        id: 'jewelry',
        title: 'Gems & Jewelry',
        slug: 'diamond-export-authority',
        description: 'The definitive gateway for Surat’s diamond and jewelry industry to scale exports through Alibaba.com’s premium network.',
        icon: Gem,
        color: 'from-emerald-500 to-teal-600',
        keywords: ['Diamond Export Surat', 'Indian Jewelry B2B', 'Alibaba Jewelry Partner'],
        growth: 'High Value',
    },
    {
        id: 'chemicals',
        title: 'Organic Chemicals',
        slug: 'chemical-export-strategy',
        description: 'Navigate global safety regulations and reach international pharmaceutical and industrial chemical buyers with ease.',
        icon: FlaskConical,
        color: 'from-purple-500 to-plum-600',
        keywords: ['Chemical Export India', 'Alibaba Chemical Supplier', 'B2B Chemical Leads'],
        growth: '+22% Inquiry',
    },
    {
        id: 'agriculture',
        title: 'Agriculture & Spices',
        slug: 'agro-export-blueprints',
        description: 'From organic spices to bulk produce, we handle your complete Alibaba supplier account setup for global food trade.',
        icon: Leaf,
        color: 'from-green-500 to-emerald-600',
        keywords: ['Spice Export from India', 'Organic Food B2B', 'Alibaba Agro Partner'],
        growth: 'Global Surge',
    },
    {
        id: 'electronics',
        title: 'Electronics & IT',
        slug: 'electronics-export-hub',
        description: 'Scaling Indian consumer electronics and hardware components for global consumption. High-intent B2B lead generation.',
        icon: Cpu,
        color: 'from-cyan-500 to-blue-600',
        keywords: ['Electronics Export India', 'Hardware B2B Alibaba', 'IT Solutions Export'],
        growth: '+35% Leads',
    }
]

export default function SectorsPage() {
    const { scrollY } = useScroll()
    const heroOpacity = useTransform(scrollY, [0, 700], [1, 0])
    const heroScale = useTransform(scrollY, [0, 700], [1, 0.9])
    const heroY = useTransform(scrollY, [0, 700], [0, -40])

    return (
        <div className="flex flex-col bg-white overflow-hidden">
            {/* Fixed Hero Container — Cinematic Industrial Experience */}
            <div className="fixed top-0 left-0 w-full h-[100vh] z-0 overflow-hidden bg-[#fafafa]">
                {/* Subtle Industrial Mesh */}
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,85,255,0.08),transparent)]" />
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-[0.03]" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full pt-16">
                    <motion.div
                        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
                        className="w-full"
                    >
                        {/* SEO Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-white/50 backdrop-blur-md px-5 py-2.5 text-[11px] font-black text-blue-700 uppercase tracking-[0.25em] mb-10 shadow-sm"
                        >
                            <div className="h-2.5 w-2.5 rounded-full bg-blue-600 animate-pulse" />
                            Alibaba Channel Partner Surat Gujarat
                        </motion.div>

                        {/* Editorial Staggered Heading */}
                        <h1 className="font-black tracking-tighter leading-[0.82] mb-12">
                            <div className="overflow-hidden">
                                <motion.div
                                    initial={{ y: 140, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-[14vw] sm:text-[11vw] md:text-[9.5rem] lg:text-[11.5rem] text-gray-950 uppercase italic"
                                >
                                    Industrial.
                                </motion.div>
                            </div>
                            <div className="overflow-hidden">
                                <motion.div
                                    initial={{ y: 140, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-[14vw] sm:text-[11vw] md:text-[9.5rem] lg:text-[11.5rem] bg-gradient-to-r from-blue-700 via-primary to-orange-600 bg-clip-text text-transparent uppercase italic"
                                >
                                    Dominance.
                                </motion.div>
                            </div>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xl md:text-2xl text-[#58595B] font-medium max-w-2xl leading-relaxed"
                        >
                            The definitive <strong className="text-gray-950 font-black">Export Authority</strong> Indian manufacturers trust to scale their industry-specific footprint on Alibaba.com.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.75 }}
                            className="flex flex-wrap items-center gap-10"
                        >
                            <Button asChild size="lg" className="rounded-full px-12 h-20 text-xl font-black bg-gray-950 hover:bg-primary text-white shadow-2xl shadow-gray-950/20 active:scale-95 transition-all outline-none border-none">
                                <Link href="/contact" className="flex items-center gap-3">
                                    Start Industry Scan <ArrowRight className="h-6 w-6" />
                                </Link>
                            </Button>
                            <div className="flex items-center gap-6">
                                <div className="h-14 w-14 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm">
                                    <TrendingUp className="h-7 w-7 text-primary" />
                                </div>
                                <div>
                                    <div className="text-xs font-black text-gray-900 uppercase tracking-widest leading-none mb-1.5">Market IQ</div>
                                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Live Export Demand</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Scroll Hint */}
                    {/* <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3, duration: 1 }}
                        className="absolute bottom-12 left-6 md:left-12 lg:left-20 flex items-center gap-4"
                    >
                        <div className="h-12 w-[1.5px] bg-gradient-to-b from-blue-700 to-transparent" />
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Scroll to Explore Verticals</span>
                    </motion.div> */}
                </div>
            </div>

            {/* Main Content — Sector Grid */}
            <div className="relative z-20 bg-white rounded-t-[5rem] shadow-[0_-40px_80px_rgba(0,0,0,0.08)] mt-[100vh]">

                {/* Industry Focus Section */}
                <section className="py-24 lg:py-40 px-6 md:px-12 lg:px-20 relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-24">
                            <div className="max-w-3xl">
                                <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                                    <Factory className="h-5 w-5" /> Strategic Sectors
                                </h2>
                                <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black text-[#2B2B2B] tracking-tighter leading-[0.8] uppercase italic mb-12">
                                    Precision Export <br /> <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">Verticals.</span>
                                </h1>
                            </div>
                            <p className="text-xl text-gray-500 font-medium max-w-sm border-l-2 border-gray-100 pl-8 pb-1">
                                Specialized Alibaba onboarding frameworks designed for India's high-demand export categories.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {sectors.map((sector, i) => (
                                <motion.div
                                    key={sector.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group relative h-full"
                                >
                                    <div className="relative bg-[#fafafa] rounded-[3rem] p-10 lg:p-12 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                                        {/* Rich Background Glow */}
                                        <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-[0.04] blur-[80px] transition-opacity duration-1000`} />

                                        <div className="relative z-10 flex flex-col h-full">
                                            <div className="flex justify-between items-start mb-8">
                                                <div className={`h-16 w-16 rounded-[1.5rem] bg-gradient-to-br ${sector.color} flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                                                    <sector.icon className="h-8 w-8" />
                                                </div>
                                                <div className="bg-white/80 backdrop-blur-md border border-gray-100 px-4 py-2 rounded-full shadow-sm">
                                                    <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest leading-none">{sector.growth}</span>
                                                </div>
                                            </div>

                                            <div className="mb-10">
                                                <h4 className="text-2xl lg:text-3xl font-black text-gray-950 tracking-tighter mb-4 leading-tight group-hover:text-blue-700 transition-colors">{sector.title}</h4>
                                                <p className="text-[15px] text-gray-500 font-medium leading-relaxed mb-6">
                                                    {sector.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {sector.keywords.map(kw => (
                                                        <span key={kw} className="text-[9px] font-black text-gray-400 uppercase tracking-widest border border-gray-100 px-3 py-1 rounded-full">{kw}</span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="mt-auto pt-8 border-t border-gray-100 flex items-center justify-between">
                                                <Link href={`/sectors/${sector.slug}`} className="text-xs font-black text-gray-950 uppercase tracking-[0.2em] group-hover:text-primary transition-colors flex items-center gap-2">
                                                    Export Blueprint <ArrowRight className="h-4 w-4" />
                                                </Link>
                                                <div className="h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 group-hover:bg-primary group-hover:text-white transition-all">
                                                    <ChevronDown className="h-5 w-5 -rotate-90" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Large Bg Number for style */}
                                        <div className="absolute -bottom-6 -right-2 text-9xl font-black text-gray-100/50 leading-none pointer-events-none group-hover:text-gray-200/40 transition-colors duration-700 italic">
                                            {i + 1}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Category Explorer — Deep Dive Vertical Index */}
                <section className="py-24 lg:py-40 px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-6">Market Index</h2>
                            <h3 className="text-4xl sm:text-6xl font-black text-[#2B2B2B] tracking-tight leading-[0.95] uppercase italic mb-8">
                                Deep Dive <br /> <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">Vertical Index.</span>
                            </h3>
                            <p className="text-xl text-[#58595B] font-medium max-w-2xl mx-auto leading-relaxed">
                                Explore hundreds of specific sub-categories where Indian manufacturers are currently winning high-value global B2B contracts.
                            </p>
                        </div>

                        <CategoryExplorer />
                    </div>
                </section>

                {/* Global SEO / Authority Section */}
                <section className="mx-4 lg:mx-10 my-10 py-32 lg:py-48 bg-gray-950 rounded-[5rem] relative overflow-hidden text-center">
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[80rem] h-[80re m] bg-blue-700/20 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
                    </div>

                    <div className="max-w-5xl mx-auto px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex h-20 w-20 items-center justify-center rounded-[2rem] bg-white/5 border border-white/10 text-primary mb-10 shadow-2xl">
                                <Globe2 className="h-10 w-10 text-blue-500" />
                            </div>
                            <h2 className="text-5xl sm:text-7xl font-black text-white tracking-tighter uppercase italic leading-[0.85] mb-12">
                                India's Export <br /> <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent not-italic">Engine.</span>
                            </h2>
                            <p className="text-xl sm:text-2xl text-gray-400 font-medium leading-relaxed mb-16 max-w-3xl mx-auto">
                                From <span className="text-white font-bold">Diamond Export Surat</span> hubs to the massive <span className="text-white font-bold">Textile Export from India</span> corridors, Grownext provides the authoritative infrastructure manufacturers need to dominate.
                            </p>
                            <div className="flex flex-wrap justify-center gap-10">
                                <div className="flex flex-col items-center">
                                    <span className="text-4xl font-black text-white mb-2 italic">500+</span>
                                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Exporters Guided</span>
                                </div>
                                <div className="h-10 w-px bg-white/10 hidden sm:block mt-4" />
                                <div className="flex flex-col items-center">
                                    <span className="text-4xl font-black text-white mb-2 italic">190+</span>
                                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Global Markets</span>
                                </div>
                                <div className="h-10 w-px bg-white/10 hidden sm:block mt-4" />
                                <div className="flex flex-col items-center">
                                    <span className="text-4xl font-black text-white mb-2 italic">$100M+</span>
                                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Trade Enabled</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Industry CTA */}
                <section className="px-6 md:px-12 lg:px-20 mb-32">
                    <div className="max-w-7xl mx-auto bg-[#fafafa] rounded-[4rem] border border-gray-100 p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-16 relative overflow-hidden">
                        {/* Background accent */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />

                        <div className="max-w-2xl text-center lg:text-left">
                            <h3 className="text-4xl sm:text-5xl font-black text-gray-950 tracking-tighter mb-8 leading-[1.1] uppercase italic">
                                Ready to Scale <br /> <span className="text-primary not-italic">Your Specific Vertical?</span>
                            </h3>
                            <p className="text-xl text-gray-600 font-medium leading-relaxed mb-10">
                                Don’t use a generic export strategy for a specialized industry. Get a certified Alibaba onboarding blueprint tailored for your sector.
                            </p>
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
                                <Button asChild size="lg" className="rounded-full px-12 h-20 text-xl font-black bg-primary text-white shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                                    <Link href="/contact">Book Free Industry Audit</Link>
                                </Button>
                                <div className="flex items-center gap-3 text-gray-500 font-black uppercase tracking-widest text-xs">
                                    <ShieldCheck className="h-5 w-5 text-primary" /> Verified Strategy
                                </div>
                            </div>
                        </div>

                        <div className="flex-shrink-0 relative">
                            <div className="aspect-square w-64 md:w-80 bg-white rounded-[3rem] shadow-2xl border border-gray-100 p-8 flex flex-col items-center justify-center text-center group">
                                <div className="h-20 w-20 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                    <CheckCircle2 className="h-10 w-10" />
                                </div>
                                <div className="text-sm font-black text-gray-900 uppercase tracking-widest leading-none mb-2">98% Success Rate</div>
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">For Onboarded Specialists</div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}
