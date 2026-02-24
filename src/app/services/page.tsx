'use client'

import { useState, useEffect } from 'react'
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
  Layers,
  Globe,
  Zap,
  Award,
  Plus,
  Minus,
  MessageSquare,
  Palette,
  Layout,
  MousePointer2,
  TrendingUp,
  LineChart
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import ColorBends from '@/components/ColorBends'

const servicePillars = [
  {
    id: 'onboarding',
    title: 'Account Onboarding',
    subtitle: 'Zero-Hassle Verification',
    description: 'We handle the complex Alibaba Gold Supplier verification process, ensuring your manufacturing business starts with maximum trust and compliance.',
    icon: ShieldCheck,
    color: 'from-blue-500 to-blue-600',
    features: [
      'Gold Supplier Verification (V-Identity)',
      'Documentation & Compliance Support',
      'Account Settings Optimization',
      'Secure Store Initialization'
    ],
    outcome: 'Ready in 7 Days'
  },
  {
    id: 'seo',
    title: 'SEO & Cataloging',
    subtitle: 'Rank for Buyer Intent',
    description: 'B2B buyers search differently. We optimize your product listings with specialized B2B keyword research to ensure you rank for high-volume export inquiries.',
    icon: Search,
    color: 'from-orange-500 to-orange-600',
    features: [
      'B2B Buyer-Intent Keyword Research',
      'Professional Product Copywriting',
      'Multi-Language Optimization',
      'Competitive Pricing Strategy'
    ],
    outcome: 'Top 5% Category Ranking'
  },
  {
    id: 'marketing',
    title: 'Growth Marketing',
    subtitle: 'Scale Global Leads',
    description: 'Maximize your ROI with expert management of Alibaba Keyword Advertising (KWA). We turn targeted traffic into consistent export inquiries.',
    icon: Rocket,
    color: 'from-purple-500 to-purple-600',
    features: [
      'KWA (Ad Spend) Management',
      'Smart Marketing Orchestration',
      'Inquiry Flow Optimization',
      'ROI & Lead Tracking Reports'
    ],
    outcome: '3x Lead Generation'
  },
  {
    id: 'brand',
    title: 'Brand Identity',
    subtitle: 'Dominate Your Niche',
    description: 'We design premium minisites that tell your brand story, positioning you as a world-class manufacturer rather than just another supplier.',
    icon: Layout,
    color: 'from-green-500 to-green-600',
    features: [
      'Custom Minisite Design',
      'Brand Narrative Development',
      'High-Impact Visual Assets',
      'Trust Signal Implementation'
    ],
    outcome: 'Premium Industry Authority'
  }
]

const pricingPlans = [
  {
    name: 'Standard Gold',
    price: 'Basic Package',
    description: 'Entry point for new exporters looking to establish a global presence.',
    features: [
      'Standard Store Setup',
      'Basic Keyword Analytics',
      '20 High-Quality Listings',
      'Standard Ad Credits',
      'Monthly Progress Report'
    ],
    highlight: false
  },
  {
    name: 'Advanced Gold',
    price: 'Growth Focused',
    description: 'Complete scaling solution with proactive account management and ad support.',
    features: [
      'Premium Minisite Design',
      'Advanced AI Keyword Strategy',
      'Unlimited Product Listings',
      'Dedicated Account Manager',
      'KWA Campaign Management'
    ],
    highlight: true,
    tag: 'Popular'
  },
  {
    name: 'Global Verified',
    price: 'Elite Tier',
    description: 'Maximum authority package for established manufacturers ready for market dominance.',
    features: [
      'Verified Supplier (V) Status',
      'Custom Market Intel Reports',
      'Exclusive Trade Show Access',
      'Priority Lead Routing',
      'Bi-weekly Strategic Review'
    ],
    highlight: false
  }
]

const faqs = [
  {
    q: "How long does the Alibaba registration take?",
    a: "Standard verification typically takes 5–7 business days. As an authorized partner, we help fast-track this by ensuring your documentation (GST, Bank details) is perfectly aligned with Alibaba's requirements on the first try."
  },
  {
    q: "Do I need to be a manufacturer to sell on Alibaba?",
    a: "No, both manufacturers and trading companies can sell. However, specifying your 'Supplier Type' accurately is crucial for trust. We help you present your business model effectively to global buyers."
  },
  {
    q: "What is Alibaba KWA (Keyword Advertising)?",
    a: "KWA is Alibaba's internal PPC (Pay-Per-Click) advertising system. It's the most effective way to jump-start your export sales by appearing at the very top of search results for specific keywords like 'Cotton Yarn' or 'Industrial Gauges'."
  },
  {
    q: "How do you help with lead conversion?",
    a: "Getting the lead is only half the battle. We implement a response protocol (RFQuote strategy) that helps you respond within 24 hours (Gold standard) with the right template to build trust and close deals."
  },
  {
    q: "What is the total cost of becoming a seller?",
    a: "Alibaba has an annual membership fee (Standard vs Premium) plus your marketing budget. We provide a transparent breakdown and help you choose the plan that offers the best ROI for your category."
  },
  {
    q: "Can I manage the store myself later?",
    a: "Yes! While we offer ongoing management, we also provide training if you eventually want to move operations in-house. Our goal is your sustainable export growth."
  }
]

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-gray-100 last:border-0 py-6">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between text-left group"
      >
        <span className="text-xl font-black text-gray-900 group-hover:text-primary transition-colors">{question}</span>
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

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 700], [1, 0])
  const heroScale = useTransform(scrollY, [0, 700], [1, 0.9])
  const heroY = useTransform(scrollY, [0, 700], [0, -40])

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* Fixed Hero Container — Cinematic Scroll Experience */}
      <div className="fixed top-0 left-0 w-full h-[100vh] z-0 overflow-hidden bg-[#fafafa]">
        {/* Premium Subtle Mesh Background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,102,0,0.1),transparent)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-[0.03]" />
        </div>

        {/* Fixed Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
            className="w-full"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/50 backdrop-blur-md px-5 py-2.5 text-[11px] font-black text-primary uppercase tracking-[0.25em] mb-10 shadow-sm"
            >
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Comprehensive Export Solutions
            </motion.div>

            {/* Staggered Editorial Headline */}
            <h1 className="font-black tracking-tighter leading-[0.82] mb-10">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: 140, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[15vw] sm:text-[11vw] md:text-[9rem] lg:text-[11rem] text-gray-950 uppercase italic"
                >
                  Scale Your
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: 140, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[15vw] sm:text-[11vw] md:text-[9rem] lg:text-[11rem] bg-gradient-to-r from-blue-700 via-primary to-orange-600 bg-clip-text text-transparent uppercase italic"
                >
                  Exports.
                </motion.div>
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="text-xl sm:text-2xl text-gray-600 font-medium max-w-2xl mb-14 leading-relaxed"
            >
              The <strong className="text-gray-950 font-black">Authorized digital infrastructure</strong> Indian manufacturers trust to dominate global trade routes and secure verified B2B buyers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap items-center gap-10"
            >
              <Button asChild size="lg" className="rounded-full px-12 h-20 text-xl font-black bg-primary hover:bg-gray-900 text-white shadow-[0_20px_50px_-10px_rgba(255,102,0,0.4)] active:scale-95 transition-all">
                <Link href="/contact" className="flex items-center gap-3">
                  Book Free Audit <ArrowRight className="h-6 w-6" />
                </Link>
              </Button>
              <div className="flex items-center gap-6">
                <div className="h-14 w-14 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm">
                  <ShieldCheck className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-black text-gray-900 uppercase tracking-widest leading-none mb-1.5">Authorized Partner</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Verified Onboarding Agency</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Down Hint */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-12 left-6 md:left-12 lg:left-20 flex items-center gap-4"
          >
            <div className="h-12 w-[2px] bg-gradient-to-b from-primary to-transparent" />
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Scroll to Explore Pillars</span>
          </motion.div> */}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 bg-white rounded-t-[5rem] shadow-[0_-40px_80px_rgba(0,0,0,0.08)] mt-[100vh]">

        {/* Expertise Focus Section — Compacted & Rich */}
        <section className="py-20 lg:py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_20%,rgba(0,85,255,0.03),transparent)] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="h-px w-10 bg-primary" />
                  <span className="text-xs font-black text-primary uppercase tracking-[0.4em]">Expertise Focus</span>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl sm:text-6xl font-black text-gray-950 tracking-tighter leading-[1.05]"
                >
                  Everything You Need to <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 italic">Conquer Global Markets.</span>
                </motion.h3>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="lg:pb-2"
              >
                <p className="text-base text-gray-500 font-medium max-w-sm leading-relaxed border-l-2 border-primary/20 pl-6">
                  Our four-pillar framework is designed to turn local manufacturing into global brand equity.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {servicePillars.map((pillar, i) => (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Rich Card Design — Ultra Compacted */}
                  <div className="relative bg-white rounded-[2rem] p-6 lg:p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-1.5 overflow-hidden h-full">
                    {/* Inner Glow Background */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-[0.03] blur-[60px] transition-opacity duration-1000`} />

                    <div className="flex flex-col h-full relative z-10">
                      {/* Floating Icon Container Scale Down */}
                      <div className="relative mb-6 pt-1">
                        <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-500`}>
                          <pillar.icon className="h-6 w-6 stroke-[1.5]" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-lg bg-white shadow-md flex items-center justify-center border border-gray-50">
                          <TrendingUp className="h-3 w-3 text-gray-400" />
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-[9px] font-bold text-primary uppercase tracking-[0.4em] mb-1.5 opacity-70 italic">{pillar.subtitle}</p>
                        <h4 className="text-xl lg:text-2xl font-black text-gray-950 tracking-tighter mb-3 leading-tight">{pillar.title}</h4>
                        <p className="text-sm text-gray-500 font-medium leading-relaxed line-clamp-2">
                          {pillar.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 pt-4 border-t border-gray-50">
                        {pillar.features.slice(0, 4).map(feat => (
                          <div key={feat} className="flex items-start gap-2.5">
                            <div className="h-4 w-4 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                              <CheckCircle2 className="h-2 w-2 text-primary" />
                            </div>
                            <span className="text-[11px] font-bold text-gray-900 italic leading-tight">{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="bg-gray-50 rounded-xl px-4 py-2 border border-gray-100 flex flex-col">
                          <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Value</span>
                          <span className="text-sm font-black text-gray-950 uppercase">{pillar.outcome}</span>
                        </div>
                        <div className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-500 shadow-sm">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>

                      {/* Background number Scale Down */}
                      <div className="absolute -bottom-4 -right-1 text-7xl font-black text-gray-50 leading-none pointer-events-none group-hover:text-gray-100/30 transition-colors duration-700 opacity-50">
                        0{i + 1}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing/Comparison Section */}
        <section className="py-24 lg:py-40 px-6 md:px-12 lg:px-20 bg-gray-50/20 border-t border-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24">
              <div className="max-w-2xl">
                <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-6">Choose Your Level</h2>
                <h3 className="text-5xl sm:text-7xl font-black text-gray-950 tracking-tight leading-none mb-10">
                  Alibaba Membership & <br className="hidden md:block" /> Growth Packages
                </h3>
                <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-xl">
                  We help you select and manage the perfect Alibaba.com tier for your specific export goals. Every package includes our core strategy framework.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
                <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <Award className="h-10 w-10 text-primary mb-6" />
                  <p className="text-4xl font-black text-gray-950 mb-1">500+</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Global Onboardings</p>
                </div>
                <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <TrendingUp className="h-10 w-10 text-blue-600 mb-6" />
                  <p className="text-4xl font-black text-gray-950 mb-1">98%</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Client Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-[3.5rem] p-12 border transition-all duration-700 ${plan.highlight ? 'bg-gray-950 text-white border-gray-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] scale-[1.02] z-10' : 'bg-white text-gray-950 border-gray-100 shadow-sm hover:shadow-xl'}`}
                >
                  {plan.tag && (
                    <span className="absolute top-10 right-10 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-5 py-2 rounded-full shadow-lg">
                      {plan.tag}
                    </span>
                  )}

                  <h4 className="text-3xl font-black mb-3">{plan.name}</h4>
                  <p className={`text-sm font-black mb-10 uppercase tracking-widest ${plan.highlight ? 'text-primary' : 'text-primary'}`}>{plan.price}</p>

                  <p className={`text-base font-medium mb-12 leading-relaxed opacity-70`}>
                    {plan.description}
                  </p>

                  <div className="space-y-6 mb-16">
                    {plan.features.map(feat => (
                      <div key={feat} className="flex items-center gap-4">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm font-bold opacity-90">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild size="lg" className={`w-full rounded-3xl h-18 text-lg font-black transition-all ${plan.highlight ? 'bg-primary hover:bg-white hover:text-gray-950' : 'bg-gray-950 text-white hover:bg-primary border-none shadow-lg'}`}>
                    <Link href="/contact">Select Package</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 lg:py-52 px-6 md:px-12 lg:px-20 bg-gray-50/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.5em] mb-8">Expert Insights</h2>
              <h3 className="text-5xl lg:text-7xl font-black text-gray-950 tracking-tighter italic uppercase leading-none">
                Alibaba Hub FAQ
              </h3>
            </div>

            <div className="bg-white rounded-[4rem] p-10 md:p-16 lg:p-20 border border-gray-100 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
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

            <div className="mt-24 text-center">
              <p className="text-gray-400 font-bold text-xl mb-12 italic">Still searching for the right export strategy?</p>
              <Button asChild size="lg" className="rounded-full px-14 h-20 text-lg border-2 bg-transparent border-gray-200 font-black text-gray-950 hover:bg-gray-950 hover:text-white hover:border-gray-950 transition-all shadow-xl">
                <Link href="/contact" className="flex items-center gap-4">
                  <MessageSquare className="h-6 w-6" /> Chat with Specialists
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Cinematic Authority Footer — Light & Premium Break */}
        <section className="py-32 bg-[#fafafa] relative overflow-hidden border-y border-gray-100">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(0,85,255,0.05),transparent)]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-[0.02]" />
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <QuoteIcon className="h-10 w-10 text-primary mx-auto mb-10 opacity-40" />
            <h4 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight leading-[1.1] mb-12 italic">
              "We don't just bridge the gap between India and the global market. We build <span className="text-primary not-italic">unshakeable digital legacies</span>."
            </h4>
            <div className="flex flex-col items-center">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center text-white text-xl font-black mb-4 shadow-xl rotate-3">
                GN
              </div>
              <p className="text-lg font-black text-gray-950 uppercase tracking-[0.2em] leading-none mb-2">Grownext Strategic Core</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">Authorized Global Selling Partner</p>
            </div>
          </div>
        </section>
      </div >
    </div >
  )
}

function QuoteIcon(props: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56929 13 4.017 13H2.017V21H5.017Z" />
    </svg>
  )
}
