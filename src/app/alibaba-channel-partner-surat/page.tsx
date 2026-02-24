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
    MapPin,
    Globe,
    Zap,
    Award,
    Plus,
    Minus,
    Factory,
    Diamond,
    Scissors,
    Cpu,
    Star
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import ColorBends from '@/components/ColorBends'

const suratSectors = [
    {
        title: 'Textile Industry',
        focus: 'Ring Road & Ichchhapore',
        desc: 'Surat is India\'s textile capital. We help manufacturers of Ethnic Wear, Fabrics, and Technical Textiles rank on Alibaba.com and find global wholesalers.',
        icon: Scissors,
        color: 'from-blue-600 to-blue-700'
    },
    {
        title: 'Diamond & Jewelry',
        focus: 'Varachha & Katargam',
        desc: 'Connecting Surat\'s world-renowned diamond industry with international luxury brands. High-security, trust-focused B2B cataloging solutions.',
        icon: Diamond,
        color: 'from-cyan-500 to-blue-500'
    },
    {
        title: 'Industrial Machinery',
        focus: 'Udhna & Hazira GIDC',
        desc: 'Optimizing lead generation for textile machinery and heavy industrial components. Reaching infrastructure projects in the Middle East and Africa.',
        icon: Cpu,
        color: 'from-orange-500 to-orange-600'
    }
]

const faqs = [
    {
        q: "Why is Grownext the best Alibaba Partner in Surat?",
        a: "Our core team is based right here in Surat. We have decades of experience in the local textile and diamond markets, allowing us to build listings that speak the professional language of B2B buyers."
    },
    {
        q: "Do you provide product photography in Surat?",
        a: "Yes, we coordinate professional industrial and textile photography at your facility in Surat (GIDC Ichchhapore, Sachin, or Ring Road) to ensure your Alibaba store looks world-class."
    },
    {
        q: "Can Surat textile traders sell on Alibaba.com?",
        a: "Absolutely! Whether you are a manufacturer or a trader in Surat's textile market, we can set up your Gold Supplier account and help you navigate export documentation and global shipping logistics."
    },
    {
        q: "How do you help Surat businesses reach the US & EU markets?",
        a: "We use targeted Alibaba Keyword Advertising (KWA) and multi-language SEO to focus specifically on high-value buyers in the USA, Europe, and UAE who are actively looking for Indian textiles and diamonds."
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

export default function SuratPartnerPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0)
    const { scrollY } = useScroll()
    const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])

    return (
        <div className="flex flex-col bg-white overflow-hidden">
            {/* Immersive Local Hero */}
            <section className="relative h-[85vh] flex items-center px-6 md:px-12 lg:px-20 bg-gray-900 overflow-hidden">
                {/* ColorBends - Diamond/Textile Palette */}
                <div className="absolute inset-0">
                    <ColorBends
                        colors={["#0055ff", "#00aaff", "#ffffff", "#002244", "#333333"]}
                        rotation={15}
                        speed={0.12}
                        scale={1.2}
                        frequency={1.0}
                        warpStrength={1.2}
                        mouseInfluence={1.0}
                        parallax={0.4}
                        noise={0.04}
                        transparent
                        autoRotate={1.5}
                    />
                </div>

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-transparent pointer-events-none" />

                <div className="relative z-10 w-full max-w-7xl">
                    <motion.div
                        style={{ opacity: heroOpacity }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/70 backdrop-blur-sm px-4 py-2 text-[11px] font-black text-primary uppercase tracking-[0.2em] mb-8">
                            <MapPin className="h-3.5 w-3.5" />
                            Alibaba Authorized Channel Partner Surat
                        </div>

                        <h1 className="text-5xl sm:text-7xl lg:text-[7.5rem] font-black tracking-tighter text-gray-900 leading-[0.88] mb-10">
                            The Heart of <br />
                            <span className="text-primary italic">Surat's Export</span>
                        </h1>

                        <p className="text-xl sm:text-2xl text-gray-600 font-medium max-w-2xl mb-12 leading-relaxed">
                            Empowering India's Textile and Diamond Hub. We bridge <strong className="text-gray-900">Surat's manufacturing dominance</strong> with the world's largest B2B buyer network on Alibaba.com.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <Button asChild size="lg" className="rounded-full px-10 h-18 text-lg font-black bg-primary hover:bg-gray-900 text-white shadow-2xl active:scale-95 transition-all">
                                <Link href="/contact">Free Export Audit</Link>
                            </Button>
                            <div className="flex flex-col justify-center">
                                <div className="text-sm font-black text-gray-900 uppercase">Local Surat Office</div>
                                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Available for Physical Visits</div>
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
                            <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-6">Surat Domain</h2>
                            <h3 className="text-5xl font-black text-gray-900 tracking-tight leading-none mb-10">
                                Dominating Global <br /> Textile & Diamond Hubs
                            </h3>
                            <p className="text-lg text-gray-600 font-medium leading-relaxed">
                                Surat isn't just a city; it's a global industrial powerhouse. Our team is physically present in Surat, ensuring that textile manufacturers and diamond exporters get the high-touch, technical support needed to dominate Alibaba.com.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                <Star className="h-10 w-10 text-primary mb-6" />
                                <p className="text-3xl font-black text-gray-900 mb-2">#1</p>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight">Textile Support Partner</p>
                            </div>
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                <Users2 className="h-10 w-10 text-blue-500 mb-6" />
                                <p className="text-3xl font-black text-gray-900 mb-2">250+</p>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight">Managed Surat Stores</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {suratSectors.map((sector, i) => (
                            <motion.div
                                key={sector.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-700"
                            >
                                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${sector.color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:rotate-12 transition-transform`}>
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
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                    <div className="max-w-lg">
                        <h4 className="text-3xl font-black text-gray-900 mb-6 italic uppercase">Surat's Official Bridge to Global Markets</h4>
                        <p className="text-gray-500 font-bold">Authorized by Alibaba.com to onboard and manage Diamond and Textile giants across Surat's largest GIDC clusters.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-12 grayscale opacity-40">
                        {['surattext', 'katardiam', 'udhnaeng', 'haziraship'].map(brand => (
                            <div key={brand} className="text-xl font-black tracking-tighter text-gray-400">{brand.toUpperCase()}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section: Surat Focus */}
            <section className="py-32 px-6 lg:px-20 bg-gray-50/50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-6">Regional FAQ</h2>
                        <h3 className="text-5xl font-black text-gray-900 tracking-tight leading-none italic uppercase">
                            Alibaba Hub Surat
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
                <div className="bg-gray-900 rounded-[4rem] p-12 lg:p-24 flex flex-col lg:flex-row gap-16 items-center overflow-hidden relative shadow-2xl">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />

                    <div className="lg:flex-1 text-center lg:text-left relative z-10">
                        <h2 className="text-5xl font-black tracking-tight text-white mb-8 leading-[1.1]">
                            Conquer the World <br /> from Surat
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 font-medium leading-relaxed">
                            Our Surat-based specialists are ready to visit your facility and build your global export roadmap. Skip the generic agencies and partner with the local experts.
                        </p>
                        <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                            <Button asChild size="lg" className="rounded-full px-10 h-18 text-lg font-black bg-primary hover:bg-white hover:text-gray-950 transition-all shadow-2xl">
                                <Link href="/contact">Book Local Visit</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-18 text-lg font-black text-white border-white/20 hover:bg-white/10">
                                <Link href="https://wa.me/919988339166" target="_blank">WhatsApp Surat Team</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="lg:w-1/3 flex justify-center relative z-10">
                        <div className="relative h-64 w-64">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px]" />
                            <div className="relative z-10 bg-white/10 backdrop-blur-xl rounded-full h-full w-full flex items-center justify-center border border-white/10">
                                <Diamond className="h-32 w-32 text-primary opacity-80" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

function Users2(props: any) {
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
            <path d="M14 19a6 6 0 0 0-12 0" />
            <circle cx="8" cy="9" r="4" />
            <path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8" />
        </svg>
    )
}
