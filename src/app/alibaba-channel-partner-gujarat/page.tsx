'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import {
    ShieldCheck,
    Search,
    Rocket,
    BarChart,
    CheckCircle2,
    ArrowRight,
    ChevronRight,
    Globe,
    Zap,
    Award,
    Plus,
    Minus,
    MapPin,
    Factory,
    Briefcase,
    Users2,
    TrendingUp,
    Diamond,
    FlaskConical,
    Sofa
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import ColorBends from '@/components/ColorBends'

const gujaratSectors = [
    {
        title: 'Ceramics & Sanitaryware',
        focus: 'Morbi Hub',
        desc: 'Helping Morbi\'s ceramic giants reach over 150+ countries. We specialize in bulk B2B lead generation for tiles and sanitaryware.',
        icon: Factory,
        color: 'from-orange-500 to-orange-600'
    },
    {
        title: 'Textiles & Apparel',
        focus: 'Surat & Ahmedabad',
        desc: 'Empowering India\'s textile capital to dominate global fabric markets. Specialized Alibaba SEO for ethnic wear and technical textiles.',
        icon: ShoppingBag,
        color: 'from-blue-500 to-blue-600'
    },
    {
        title: 'Chemicals & Pharma',
        focus: 'Vapi & Ankleshwar',
        desc: 'Connecting Gujarat\'s chemical corridor with verified global buyers. Ensuring compliance and professional cataloging for industrial chemicals.',
        icon: FlaskConical,
        color: 'from-green-500 to-green-600'
    }
]

function ShoppingBag(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
    )
}

const faqs = [
    {
        q: "Why choose an Alibaba Channel Partner in Gujarat?",
        a: "Grownext provides localized, on-the-ground support across Gujarat's industrial hubs. From physical visits in Morbi to textile-specific strategy in Surat, we understand the local manufacturing landscape better than any remote agency."
    },
    {
        q: "Do you provide multi-city support in Gujarat?",
        a: "Yes, we serve exporters across Ahmedabad, Surat, Rajkot, Morbi, Vapi, and Ankleshwar. Our team can coordinate locally for documentation, photography, and strategic consultations."
    },
    {
        q: "How does Alibaba help Gujarat's ceramic industry?",
        a: "Alibaba.com is the world's largest B2B marketplace for building materials. We help Morbi manufacturers list bulk ceramic tiles and sanitaryware, targeting high-demand regions like the UAE, Saudi Arabia, and the USA."
    },
    {
        q: "Can I sell chemicals and dyes on Alibaba from Gujarat?",
        a: "Absolutely. Gujarat is a global hub for dyes and chemicals. We ensure your products meet international documentation standards and rank for professional B2B search terms."
    }
]

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
    return (
        <div className="border-b border-gray-100 last:border-0 py-6">
            <button
                onClick={onClick}
                className="flex w-full items-center justify-between text-left group"
            >
                <span className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{question}</span>
                <div className={`shrink-0 h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center transition-all ${isOpen ? 'bg-primary border-primary text-white rotate-180' : 'bg-white text-gray-400'}`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="mt-4 text-gray-600 font-medium leading-relaxed max-w-4xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function GujaratPartnerPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0)
    const { scrollY } = useScroll()
    const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])

    return (
        <div className="flex flex-col bg-white overflow-hidden">
            {/* Immersive Local Hero */}
            <section className="relative h-[85vh] flex items-center px-6 md:px-12 lg:px-20 bg-gray-900 overflow-hidden">
                {/* ColorBends - Regional Palette */}
                <div className="absolute inset-0">
                    <ColorBends
                        colors={["#FF6A00", "#ffaa00", "#ffffff", "#0055ff", "#002266"]}
                        rotation={30}
                        speed={0.15}
                        scale={1.3}
                        frequency={1.2}
                        warpStrength={1.5}
                        mouseInfluence={1.0}
                        parallax={0.5}
                        noise={0.05}
                        transparent
                        autoRotate={2}
                    />
                </div>

                {/* Strong regional gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent pointer-events-none" />

                <div className="relative z-10 w-full max-w-7xl">
                    <motion.div
                        style={{ opacity: heroOpacity }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/70 backdrop-blur-sm px-4 py-2 text-[11px] font-black text-primary uppercase tracking-[0.2em] mb-8">
                            <MapPin className="h-3.5 w-3.5" />
                            Gujarat's Primary Authorized Channel Partner
                        </div>

                        <h1 className="text-5xl sm:text-7xl lg:text-[7rem] font-black tracking-tighter text-gray-900 leading-[0.9] mb-10">
                            Alibaba Channel <br />
                            <span className="text-primary italic">Partner Gujarat</span>
                        </h1>

                        <p className="text-xl sm:text-2xl text-gray-600 font-medium max-w-2xl mb-12 leading-relaxed">
                            Serving industrial hubs across <strong className="text-gray-900">Surat, Ahmedabad, Rajkot, and Morbi.</strong> We bridge the gap between Gujarat's manufacturing power and global B2B demand.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <Button asChild size="lg" className="rounded-full px-10 h-18 text-lg font-black bg-primary hover:bg-gray-900 text-white shadow-2xl active:scale-95 transition-all">
                                <Link href="/contact">Schedule Local Consultation</Link>
                            </Button>
                            <div className="flex flex-col justify-center">
                                <div className="text-sm font-black text-gray-900 uppercase">Authorized Agency</div>
                                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Morbi · Surat · Ahmedabad</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Industrial Landscape Selection */}
            <section className="py-24 lg:py-40 px-6 lg:px-20 bg-gray-50/30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                        <div>
                            <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-6">Regional Domain</h2>
                            <h3 className="text-5xl font-black text-gray-900 tracking-tight leading-none mb-10">
                                Empowering Gujarat's <br /> Multi-Sectored Export
                            </h3>
                            <p className="text-lg text-gray-600 font-medium leading-relaxed">
                                Gujarat is the powerhouse of India's exports. Our specialized teams are embedded in the state's most critical industrial clusters, providing category-specific expertise that generic agencies can't match.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                <TrendingUp className="h-10 w-10 text-primary mb-6" />
                                <p className="text-3xl font-black text-gray-900 mb-2">#1</p>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight">Partner in Western India</p>
                            </div>
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                <Users2 className="h-10 w-10 text-blue-500 mb-6" />
                                <p className="text-3xl font-black text-gray-900 mb-2">300+</p>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight">Exporters in Gujarat</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {gujaratSectors.map((sector, i) => (
                            <motion.div
                                key={sector.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-700"
                            >
                                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${sector.color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                                    <sector.icon className="h-8 w-8" />
                                </div>
                                <h4 className="text-2xl font-black text-gray-900 mb-2">{sector.title}</h4>
                                <p className="text-xs font-black text-primary uppercase tracking-widest mb-6">{sector.focus}</p>
                                <p className="text-gray-600 font-medium leading-relaxed text-sm">
                                    {sector.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Localized Trust Bar */}
            <section className="py-24 px-6 lg:px-20 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-lg">
                        <h4 className="text-3xl font-black text-gray-900 mb-6 italic uppercase">Trusted by Global Giants</h4>
                        <p className="text-gray-500 font-bold">From the ceramic factories of Morbi to the textile mills of Surat, Grownext is the authorized bridge to Alibaba.com's global buyer network.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-12 grayscale opacity-40">
                        {['surattext', 'rajkoteng', 'morbiceram', 'ahmdpharma'].map(brand => (
                            <div key={brand} className="text-xl font-black tracking-tighter text-gray-400">{brand.toUpperCase()}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section: regional Focus */}
            <section className="py-32 px-6 lg:px-20 bg-gray-50/50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-6">Expert Insights</h2>
                        <h3 className="text-5xl font-black text-gray-900 tracking-tight leading-none italic uppercase">
                            Alibaba in Gujarat
                        </h3>
                    </div>

                    <div className="bg-white rounded-[3.5rem] p-8 md:p-14 lg:p-16 border border-gray-100 shadow-xl">
                        <div className="divide-y divide-gray-100">
                            {faqs.map((faq, i) => (
                                <FAQItem
                                    key={i}
                                    question={faq.q}
                                    answer={faq.a}
                                    isOpen={openFaq === i}
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Contact CTA */}
            <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                <div className="bg-primary rounded-[4rem] p-12 lg:p-24 flex flex-col lg:flex-row gap-16 items-center overflow-hidden relative shadow-[0_48px_100px_-12px_rgba(255,102,0,0.3)]">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />

                    <div className="lg:flex-1 text-center lg:text-left relative z-10">
                        <h2 className="text-5xl font-black tracking-tight text-white mb-8 leading-[1.1]">
                            Scale Your <br /> Gujarat-Based Business
                        </h2>
                        <p className="text-xl text-white/90 mb-12 font-medium leading-relaxed">
                            Don't settle for remote support. Partner with the authorized agency that understands Gujarat's industrial DNA. Schedule your local visit or consultation today.
                        </p>
                        <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                            <Button asChild size="lg" variant="secondary" className="rounded-full px-10 h-18 text-lg font-black text-primary shadow-2xl hover:scale-105 transition-transform">
                                <Link href="/contact">Book Free Audit</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-18 text-lg font-black text-white border-white/30 hover:bg-white/10">
                                <Link href="/contact">Gujarat Office Locations</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="lg:w-1/3 flex justify-center relative z-10">
                        <div className="relative h-64 w-64">
                            <div className="absolute inset-0 bg-white/10 rounded-full blur-[40px]" />
                            <div className="relative z-10 bg-white/20 backdrop-blur-xl rounded-full h-full w-full flex items-center justify-center border border-white/30">
                                <MapPin className="h-32 w-32 text-white opacity-80" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
