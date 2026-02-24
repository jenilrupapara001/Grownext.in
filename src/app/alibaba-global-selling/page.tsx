'use client'

import * as React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Globe2,
  TrendingUp,
  ShieldCheck,
  Lightbulb,
  HelpCircle,
  CheckCircle2,
  XCircle,
  Zap,
  ArrowRight,
  Play,
  Box,
  Cpu,
  Truck,
  Layers,
  BarChart3,
  MessageSquare,
  ChevronDown
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button'
import { CategoryExplorer } from '@/components/CategoryExplorer'

const myths = [
  {
    myth: "Alibaba is only for large companies.",
    fact: "Alibaba is designed specifically for SMEs. Most sellers on the platform are small to medium-scale manufacturers and traders looking for global B2B expansion.",
    icon: XCircle
  },
  {
    myth: "It's too expensive to start.",
    fact: "Compared to traditional export exhibitions and physical marketing, Alibaba offers a far higher ROI and lower entry cost for consistent 24/7 global reach.",
    icon: XCircle
  },
  {
    myth: "I need to know English perfectly.",
    fact: "Alibaba provides built-in real-time translation tools for 18+ languages, and GrowNext helps you manage communications effectively with global buyers.",
    icon: XCircle
  }
]

const faqs = [
  {
    question: "Is GrowNext officially associated with Alibaba?",
    answer: "Yes, GrowNext is an official Alibaba.com Channel Partner in India. We are certified by Alibaba.com to provide onboarding, technical training, and account management services specifically for the Indian market."
  },
  {
    question: "How long does the onboarding process take?",
    answer: "The initial Gold Supplier account setup and Business Verification (V) typically take 7-10 working days. Full store optimization and professional product listing can take another 15-20 days depending on the catalog size."
  },
  {
    question: "Do you guarantee leads?",
    answer: "While we cannot 'guarantee' a specific number of leads, our data-driven SEO and KWA ad management strategies are designed to maximize your visibility to high-intent global buyers. Our clients typically see a significant jump in inquiry quality within 90 days."
  },
  {
    question: "What industries are eligible to sell on Alibaba?",
    answer: "Almost any B2B category is eligible, including Textiles & Apparel, Agriculture & Food, Machinery & Industrial, Chemicals & Plastics, Consumer Electronics, and Home Decor. We validate your category demand during our free consultation."
  },
  {
    question: "Do you support small businesses with no export experience?",
    answer: "Absolutely. A large part of our mission is 'handholding' SMEs who are new to exports. We help you navigate the global B2B landscape, from setting up your first listing to managing international inquiries."
  }
]

export default function AlibabaSelling() {
  const { scrollY } = useScroll()

  // Hero Scroll Animations
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0])
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.9])
  const heroY = useTransform(scrollY, [0, 600], [0, -40])

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* Fixed Hero Container — Cinematic Experience */}
      <div className="fixed top-0 left-0 w-full h-[100vh] z-0 overflow-hidden bg-[#fafafa]">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,102,0,0.1),transparent)]" />
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-[0.03]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full pt-20">
          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
            className="w-full"
          >
            {/* Editorial Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/50 backdrop-blur-md px-5 py-2.5 text-[11px] font-black text-primary uppercase tracking-[0.25em] mb-10 shadow-sm"
            >
              <div className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
              Alibaba Global Ecosystem
            </motion.div>

            {/* Staggered Heading */}
            <h1 className="font-black tracking-tighter leading-[0.82] mb-12">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: 140, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[14vw] sm:text-[11vw] md:text-[9.5rem] lg:text-[11.5rem] text-gray-950 uppercase italic"
                >
                  Global Trade.
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: 140, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[14vw] sm:text-[11vw] md:text-[9.5rem] lg:text-[11.5rem] bg-gradient-to-r from-blue-700 via-primary to-orange-600 bg-clip-text text-transparent uppercase italic"
                >
                  Simplified.
                </motion.div>
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl text-[#58595B] font-medium max-w-2xl mb-14 leading-relaxed"
            >
              The most powerful B2B engine on earth meets India's most <strong className="text-gray-950 font-black">aggressive onboarding strategy</strong>. Dominate 190+ markets from day one.
            </motion.p>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="flex flex-wrap items-center gap-10"
            >
              <Button asChild size="lg" className="rounded-full px-12 h-20 text-xl font-black bg-primary hover:bg-gray-900 text-white shadow-[0_20px_50px_-10px_rgba(255,102,0,0.4)] active:scale-95 transition-all">
                <Link href="/contact" className="flex items-center gap-3">
                  Activate Export Portal <ArrowRight className="h-6 w-6" />
                </Link>
              </Button>
              <div className="flex items-center gap-6">
                <div className="h-14 w-14 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm cursor-pointer group hover:border-primary transition-colors">
                  <Play className="h-6 w-6 text-primary fill-primary group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="text-xs font-black text-gray-900 uppercase tracking-widest leading-none mb-1.5">Platform Intro</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">3 Min Blueprint</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Down Hint */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="absolute bottom-12 left-6 md:left-12 lg:left-20 flex items-center gap-4"
          >
            <div className="h-12 w-[1.5px] bg-gradient-to-b from-primary to-transparent" />
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Scroll to Decode Impact</span>
          </motion.div> */}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 bg-white rounded-t-[5rem] shadow-[0_-40px_80px_rgba(0,0,0,0.08)] mt-[100vh]">

        {/* Platform Intelligence — Stats & Why Alibaba */}
        <section className="py-24 lg:py-40 px-6 md:px-12 lg:px-20 relative overflow-hidden">
          {/* Decorative grid */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_70%_20%,rgba(0,85,255,0.03),transparent)] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-24">
              <div className="max-w-3xl">
                <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                  <BarChart3 className="h-4 w-4" /> Platform Intelligence
                </h2>
                <h3 className="text-4xl sm:text-6xl font-black text-gray-950 tracking-tight leading-[0.95] uppercase italic">
                  Why Indian Exporters <br /> <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">Dominate Alibaba.</span>
                </h3>
              </div>
              <p className="text-xl text-gray-500 font-medium max-w-sm border-l-2 border-gray-100 pl-8 pb-1">
                Verified data from 40M+ active global buyers shows Indian manufacturing is currently at an all-time high demand.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Global Exposure', stat: '190+ Countries', desc: 'Instant visibility to buyers in every time-zone, 24/7, without a physical sales team.', icon: Globe2 },
                { title: 'Cost Efficiency', stat: '60% Higher ROI', desc: 'Replace expensive physical trade shows with a digital infrastructure that never sleeps.', icon: TrendingUp },
                { title: 'Buyer Intent', stat: 'Active Leads', desc: 'Access real-time analytics on exactly what global buyers are searching for right now.', icon: Lightbulb }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group p-10 lg:p-12 rounded-[3rem] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2"
                >
                  <div className="h-16 w-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-2xl font-black text-gray-950 mb-3">{item.title}</h4>
                  <p className="text-gray-500 font-medium leading-relaxed mb-10">{item.desc}</p>
                  <div className="pt-8 border-t border-gray-50 flex justify-between items-center mt-auto">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Platform Reach</span>
                    <span className="text-xl font-black text-primary italic">{item.stat}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cinematic Truth Section — Myths & Facts */}
        <section className="mx-4 lg:mx-10 my-10 py-32 lg:py-48 bg-gray-950 rounded-[5rem] relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[80rem] h-[80re m] bg-primary/20 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-32">
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.5em] mb-8">The Truth About Exports</h2>
              <h3 className="text-5xl sm:text-7xl font-black text-white tracking-tighter uppercase italic leading-[0.85]">
                Debunking the <br /> <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Global Gatekeepers.</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {myths.map((m, i) => (
                <motion.div
                  key={m.myth}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group h-full"
                >
                  <div className="h-full bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 flex flex-col hover:bg-white/[0.08] transition-all duration-700">
                    <div className="flex items-center gap-3 mb-10">
                      <div className="h-10 w-10 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                        <XCircle className="h-5 w-5 text-orange-500" />
                      </div>
                      <span className="text-[10px] font-black text-orange-500 uppercase tracking-[0.3em]">Common Myth</span>
                    </div>

                    <p className="text-2xl font-black text-white mb-16 tracking-tight italic leading-tight">"{m.myth}"</p>

                    <div className="mt-auto">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        </div>
                        <span className="text-[10px] font-black text-green-500 uppercase tracking-[0.3em]">Official Fact</span>
                      </div>
                      <p className="text-gray-400 font-medium leading-relaxed">{m.fact}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Matrix — Ecosystem Breakdown */}
        <section className="py-24 lg:py-40 px-6 md:px-12 lg:px-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-10 flex items-center gap-3">
                <Layers className="h-4 w-4" /> B2B Infrastructure
              </h2>
              <h3 className="text-4xl sm:text-6xl font-black text-gray-950 tracking-tight leading-[0.95] mb-10 uppercase italic">
                The Global <br /> <span className="text-primary NOT-italic">Seller Arsenal.</span>
              </h3>
              <p className="text-xl text-gray-600 font-medium leading-relaxed mb-16 max-w-lg">
                Alibaba.com isn't just a website—it's a comprehensive toolset. With GrowNext's certified management, you get priority access to elite B2B features.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'Gold Supplier Verification', desc: 'Instant authoritative trust with international buyers.', icon: ShieldCheck },
                  { title: 'Keyword Advertising (KWA)', desc: 'AI-driven buyer targeting with aggressive ROI focus.', icon: Zap },
                  { title: 'Trade Assurance', desc: 'Secure transaction processing for 100% buyer trust.', icon: CheckCircle2 },
                  { title: 'RFX Inquiry System', desc: 'Direct access to verified global buyer requests.', icon: MessageSquare }
                ].map((feat, i) => (
                  <motion.div
                    key={feat.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6 p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-500 group"
                  >
                    <div className="h-14 w-14 rounded-2xl bg-white text-primary flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <feat.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-gray-900 mb-2">{feat.title}</h4>
                      <p className="text-sm text-gray-500 font-medium leading-relaxed">{feat.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div className="space-y-6 pt-12">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -1 }}
                    className="bg-primary p-10 rounded-[3rem] text-white shadow-2xl shadow-primary/30"
                  >
                    <div className="text-5xl font-black mb-3 italic">40M+</div>
                    <div className="text-[11px] font-black uppercase tracking-[0.2em] opacity-80">Verified Buyers</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl"
                  >
                    <div className="text-5xl font-black mb-3 text-gray-950 italic">5,900+</div>
                    <div className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">Industry Categories</div>
                  </motion.div>
                </div>
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl"
                  >
                    <div className="text-5xl font-black mb-3 text-gray-950 italic">300K+</div>
                    <div className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">Daily Trade Requests</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -1 }}
                    className="bg-gray-950 p-10 rounded-[3rem] text-white shadow-2xl"
                  >
                    <div className="text-5xl font-black mb-3 text-primary italic">18+</div>
                    <div className="text-[11px] font-black uppercase tracking-[0.2em] opacity-80">Built-in Languages</div>
                  </motion.div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-primary/5 blur-[120px] -z-10" />
            </div>
          </div>
        </section>

        {/* Global Category Index */}
        <section className="py-24 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#fafafa] relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20">
              <div className="max-w-3xl">
                <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                  <Layers className="h-4 w-4" /> Global Market Index
                </h2>
                <h3 className="text-4xl sm:text-6xl font-black text-gray-950 tracking-tight leading-[0.95] uppercase italic">
                  The Complete <br /> <span className="text-primary not-italic">Category Map.</span>
                </h3>
              </div>
              <p className="text-xl text-gray-500 font-medium max-w-sm border-l-2 border-gray-100 pl-8 pb-1">
                Search and explore the vast range of high-performance B2B categories we optimize for global dominance.
              </p>
            </div>

            <CategoryExplorer />
          </div>
        </section>

        {/* Intelligence FAQ Section */}
        <section className="py-24 lg:py-40 px-6 max-w-4xl mx-auto text-center border-t border-gray-50">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-[2rem] bg-primary/5 text-primary mb-12 shadow-sm">
            <HelpCircle className="h-10 w-10" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-gray-950 tracking-tighter mb-8 uppercase italic leading-[0.9]">
            Common <span className="text-primary NOT-italic">Inquiries.</span>
          </h2>
          <p className="text-xl text-gray-500 font-medium mb-24 max-w-2xl mx-auto">Everything you need to know about the platform and the GrowNext certification partnership.</p>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-none rounded-[2.5rem] px-10 bg-white shadow-[0_4px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.06)] transition-all overflow-hidden">
                <AccordionTrigger className="text-left font-black text-gray-950 text-xl md:text-2xl hover:no-underline py-10 group">
                  <div className="flex items-center gap-5">
                    <span className="text-primary text-sm opacity-30 font-black tracking-widest leading-none mt-1">0{i + 1}</span>
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 text-lg md:text-xl pb-10 leading-relaxed font-medium pl-10 text-left border-t border-gray-50 pt-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Global Action Footer */}
        <section className="px-4 lg:mx-8 mb-20">
          <div className="relative isolate overflow-hidden bg-primary px-8 py-32 text-center shadow-[0_48px_100px_-12px_rgba(255,102,0,0.3)] rounded-[5rem] sm:px-16 group">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 -z-10">
              <Image
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000"
                alt="Background"
                fill
                className="object-cover opacity-10 group-hover:scale-105 transition-transform duration-[5s]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-orange-600" />
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-4xl text-5xl sm:text-7xl font-black tracking-tighter text-white uppercase italic leading-[0.85] mb-12"
            >
              Ready to Dominate <br /> the <span className="text-white/40 not-italic">Global Index?</span>
            </motion.h2>
            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-white/90 font-medium mb-16 px-4">
              Don't miss the current B2B export boom. Let our certified Alibaba specialists handle your global onboarding and aggressive growth strategy.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-14 h-20 text-xl font-black text-primary hover:scale-105 transition-transform shadow-2xl bg-white border-none">
                <Link href="/contact">Apply for Onboarding</Link>
              </Button>
              <Link href="/services" className="text-lg font-black leading-6 text-white flex items-center gap-4 group/btn">
                Strategic Services <ArrowRight className="h-6 w-6 group-hover/btn:translate-x-3 transition-all" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
