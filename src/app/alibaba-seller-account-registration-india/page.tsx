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
    FileText,
    Globe,
    Zap,
    Award,
    Plus,
    Minus,
    Check,
    Building2,
    Lock,
    Stamp,
    HelpCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import ColorBends from '@/components/ColorBends'

const documents = [
    { name: 'Business Registration License', desc: 'Udyam Aadhaar or Company Incorporation certificate.' },
    { name: 'GST Certificate', desc: 'Required for tax verification and export documentation.' },
    { name: 'Importer Exporter Code (IEC)', desc: 'Mandatory for all Indian businesses selling globally.' },
    { name: 'Pan Card & Identity Proff', desc: 'Owner/Director identity verification for security.' },
    { name: 'Bank Statement / Cancelled Cheque', desc: 'For financial verification and payment setup.' },
    { name: 'Industrial License (Optional)', desc: 'Category specific certifications if applicable.' }
]

const faqs = [
    {
        q: "How do I start the Alibaba seller registration process in India?",
        a: "The process begins with an eligibility audit. You need to provide your business documents (GST, IEC) and choose a Gold Supplier membership plan. As an authorized partner, we manage the entire 'V-Identity' verification and minisite setup for you."
    },
    {
        q: "What is the cost of an Alibaba Seller Account in India?",
        a: "Alibaba.com offers different membership tiers like 'Gold Supplier'. The price varies based on the level of ad credits, keyword analytics, and storefront features. Contact us for the latest 'Alibaba Plan & Package' details and discounts available for Indian SMEs."
    },
    {
        q: "Is an IEC (Import Export Code) mandatory for Alibaba registration?",
        a: "Yes, to be a verified exporter from India on Alibaba.com, an IEC code is mandatory. If you don't have one, our team can guide you through the DGFT application process."
    },
    {
        q: "Can I register as an individual seller or 'Propietorship'?",
        a: "Yes, you can register as a Sole Proprietorship. You will need your personal documents along with your business GST and other registration certificates to pass the verification."
    },
    {
        q: "What is the 'Gold Supplier' verification (V-Identity)?",
        a: "V-Identity is a third-party audit conducted by agencies like SGS or TUV. It verifies your office address, phone number, and legal status. Having the 'Gold Supplier' badge is essential for building trust with global B2B buyers."
    },
    {
        q: "How long does the verification take?",
        a: "Once all documents are submitted, the V-Identity verification usually takes 3-7 business days. We ensure all your documents are correct the first time to avoid any delays."
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

export default function RegistrationPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0)
    const { scrollY } = useScroll()
    const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])
    const heroScale = useTransform(scrollY, [0, 400], [1, 0.95])

    return (
        <div className="flex flex-col bg-white overflow-hidden">
            {/* High-Authority Hero */}
            <section className="relative h-[85vh] flex items-center px-6 md:px-12 lg:px-20 bg-gray-950 overflow-hidden">
                {/* ColorBends - Trust Palette */}
                <div className="absolute inset-0">
                    <ColorBends
                        colors={["#FF6A00", "#ff8533", "#ff3300", "#ffaa00", "#cc4400"]}
                        rotation={15}
                        speed={0.1}
                        scale={1.2}
                        frequency={0.8}
                        warpStrength={1.0}
                        mouseInfluence={0.8}
                        parallax={0.3}
                        noise={0.03}
                        transparent
                        autoRotate={1}
                    />
                </div>

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/40 to-transparent pointer-events-none" />

                <div className="relative z-10 w-full max-w-7xl">
                    <motion.div
                        style={{ opacity: heroOpacity, scale: heroScale }}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 text-[11px] font-black text-white uppercase tracking-[0.2em] mb-8">
                            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                            Alibaba.com Official Channel Partner
                        </div>

                        <h1 className="text-5xl sm:text-7xl lg:text-[6rem] font-black tracking-tighter text-white leading-[1] mb-8">
                            Alibaba Seller Account <br />
                            <span className="text-primary italic">Registration India</span>
                        </h1>

                        <p className="text-xl text-gray-400 font-medium max-w-2xl mb-12 leading-relaxed">
                            Unlock global export opportunities with India's #1 Alibaba Partner. We manage your <strong className="text-white">complete onboarding, verification, and minisite setup</strong> so you can focus on production.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <Button asChild size="lg" className="rounded-full px-10 h-18 text-lg font-black bg-primary hover:bg-white hover:text-gray-950 transition-all shadow-2xl">
                                <Link href="/contact">Start Registration Now</Link>
                            </Button>
                            <div className="flex flex-col justify-center">
                                <div className="text-sm font-black text-white uppercase tracking-widest">Authorized Agency</div>
                                <div className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Verified Multi-City Support</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Trust & Stats Bar */}
            <section className="bg-white border-b border-gray-100 py-12 px-6 lg:px-20 relative z-20">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-12">
                    {[
                        { label: 'Verified Onboardings', val: '500+', icon: Building2 },
                        { label: 'Successful Audits', val: '99%', icon: Lock },
                        { label: 'Global Cities Reach', val: '190+', icon: Globe },
                        { label: 'Authorized Tenure', val: '8 Yrs', icon: Award },
                    ].map(stat => (
                        <div key={stat.label} className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary transition-all">
                                <stat.icon className="h-6 w-6" />
                            </div>
                            <div>
                                <div className="text-2xl font-black text-gray-900">{stat.val}</div>
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Comparison Section: Why Alibaba.com? */}
            <section className="py-24 lg:py-32 px-6 lg:px-20 bg-gray-50/50">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-6">Market Authority</h2>
                        <h3 className="text-5xl font-black text-gray-900 tracking-tight leading-none mb-10">
                            Seller Account vs <br /> Buyer Account
                        </h3>
                        <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
                            Many Indian businesses mistakenly register as 'Buyers' when their goal is to export. A <strong className="text-gray-900">Seller Account (Gold Supplier)</strong> is required to list products, receive inquiries (RFQs), and rank in search results.
                        </p>
                        <div className="space-y-6">
                            {[
                                'List unlimited products and receive global inquiries.',
                                'Advanced Keyword Advertising (KWA) support.',
                                'Access to RFQ (Request for Quote) Marketplace.',
                                'Authorized "Gold Supplier" badge of trust.'
                            ].map(item => (
                                <div key={item} className="flex items-center gap-4">
                                    <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                                    <span className="text-gray-900 font-bold italic">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl relative border-8 border-white">
                            <Image src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200" alt="Global Trading" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
                            <div className="absolute bottom-10 left-10 py-4 px-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20">
                                <p className="text-primary font-black text-2xl">Exporters First</p>
                                <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">Built for Indian SMEs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mandatory Document Checklist */}
            <section className="py-32 px-6 lg:px-20 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-6">Preparation Guide</h2>
                        <h3 className="text-5xl font-black text-gray-900 tracking-tight leading-none">
                            Documents Required for Registration
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {documents.map((doc, i) => (
                            <motion.div
                                key={doc.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all group"
                            >
                                <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mb-8">
                                    <FileText className="h-7 w-7" />
                                </div>
                                <h4 className="text-xl font-black text-gray-900 mb-4">{doc.name}</h4>
                                <p className="text-gray-500 font-medium text-sm leading-relaxed">{doc.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 p-10 rounded-[3rem] bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10 max-w-xl">
                            <h4 className="text-3xl font-black mb-4">Don't have these documents?</h4>
                            <p className="text-gray-400 font-medium">We provide end-to-end consultancy for IEC code, GST registration, and MSME/Udyam Aadhaar applications specifically for exporters.</p>
                        </div>
                        <Button asChild size="lg" className="rounded-full px-8 h-16 bg-primary font-black relative z-10">
                            <Link href="/contact">Get Document Support</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* FAQ Section: Alibaba.com Schema Focus */}
            <section className="py-32 px-6 lg:px-20 bg-gray-50/50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20 lg:mb-24">
                        <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-6">Expert FAQs</h2>
                        <h3 className="text-5xl font-black text-gray-900 tracking-tight leading-none uppercase italic">
                            Alibaba.com Registration Hub
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

            {/* Contact CTA */}
            <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                <div className="bg-primary rounded-[4rem] p-12 lg:p-24 flex flex-col lg:flex-row gap-16 items-center overflow-hidden relative shadow-[0_48px_100px_-12px_rgba(255,102,0,0.3)]">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />

                    <div className="lg:flex-1 text-center lg:text-left relative z-10">
                        <h2 className="text-5xl font-black tracking-tight text-white mb-8 leading-[1.1]">
                            Ready to Join 500+ <br /> Indian Exporters?
                        </h2>
                        <p className="text-xl text-white/90 mb-12 font-medium leading-relaxed">
                            Skip the confusion. Get your Alibaba.com Gold Supplier account set up the right way by authorized experts. Start receiving global inquiries this week.
                        </p>
                        <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                            <Button asChild size="lg" variant="secondary" className="rounded-full px-10 h-18 text-lg font-black text-primary shadow-2xl hover:scale-105 transition-transform">
                                <Link href="/contact">Book Free Consultation</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-18 text-lg font-black text-white border-white/30 hover:bg-white/10">
                                <Link href="https://wa.me/919988339166" target="_blank">WhatsApp Us</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="lg:w-1/3 flex justify-center relative z-10">
                        <div className="relative h-64 w-64">
                            <div className="absolute inset-0 bg-white/10 rounded-full blur-[40px]" />
                            <div className="relative z-10 bg-white/20 backdrop-blur-xl rounded-full h-full w-full flex items-center justify-center border border-white/30">
                                <Stamp className="h-32 w-32 text-white opacity-80" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
