'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
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
  ChevronRight,
  Play,
  Award,
  Users
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button'

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
  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section - Brand Themed */}
      <section className="relative pt-24 lg:pt-36 bg-[#FF6600]/5 overflow-hidden min-h-[70vh] flex items-center">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#FF6600 1px, transparent 1px), linear-gradient(90deg, #FF6600 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-black uppercase tracking-widest mb-8">
                <Globe2 className="h-4 w-4" />
                GATEWAY TO GLOBAL TRADE
              </div>
              <h1 className="text-5xl font-black tracking-tight text-gray-900 sm:text-7xl mb-8 leading-[1.1]">
                Master the World's Largest <span className="text-primary">B2B Engine</span>
              </h1>
              <p className="text-xl leading-9 text-gray-600 font-medium mb-12">
                Alibaba.com connects millions of buyers and sellers across 190+ countries. For Indian manufacturers, it's not just a platform—it's the most powerful infrastructure for global export growth.
              </p>
              <div className="flex flex-wrap gap-6">
                <Button asChild size="lg" className="rounded-full px-10 h-16 text-lg font-bold">
                  <Link href="/contact">Apply for Onboarding</Link>
                </Button>
                <div className="flex items-center gap-4 text-gray-500 font-bold">
                   <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-lg border border-gray-100">
                      <Play className="h-5 w-5 text-primary fill-primary" />
                   </div>
                   Watch Platform Intro
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-video rounded-[3rem] overflow-hidden shadow-[0_48px_100px_-12px_rgba(255,102,0,0.2)] border-8 border-white bg-white p-2">
                 <div className="h-full w-full bg-gray-50 rounded-[2.5rem] flex flex-col items-center justify-center relative">
                    <div className="text-primary font-black text-6xl mb-4 tracking-tighter">Alibaba.com</div>
                    <div className="text-sm font-black text-gray-400 uppercase tracking-[0.3em]">Official Gold Supplier Portal</div>
                    
                    {/* Floating HUD elements */}
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100"
                    >
                       <div className="text-primary font-black text-2xl">200M+</div>
                       <div className="text-[10px] font-bold text-gray-400 uppercase">Registered Buyers</div>
                    </motion.div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Alibaba - Stats Focus */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-base font-black text-primary uppercase tracking-widest mb-4">Platform Intelligence</h2>
          <p className="text-4xl font-black tracking-tight text-gray-900 sm:text-6xl mb-8">
            Why Indian Exporters <br className="hidden lg:block" /> Need Alibaba.com
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: '24/7 Global Exposure',
              desc: 'Your products are visible to verified buyers in every time zone, 365 days a year, without a physical sales team.',
              icon: Globe2,
              stat: '190+ Countries'
            },
            {
              title: 'Cost-Effective ROI',
              desc: 'Reach thousands of qualified B2B buyers at a fraction of the cost of traditional international trade shows.',
              icon: TrendingUp,
              stat: '60% Lower Cost'
            },
            {
              title: 'Buyer Intelligence',
              desc: 'Access real-time data on global demand, price points, and competitor strategies in your specific category.',
              icon: Lightbulb,
              stat: 'Live Analytics'
            }
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 rounded-[3rem] border border-gray-100 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="h-16 w-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium mb-8">{item.desc}</p>
              <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                 <span className="text-sm font-black text-gray-400 uppercase tracking-widest">Platform Reach</span>
                 <span className="text-lg font-black text-primary">{item.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Myths & Facts - High Impact */}
      <section className="bg-gray-950 py-32 rounded-[4rem] mx-4 lg:mx-8 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[150px]" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-base font-black text-primary uppercase tracking-widest mb-4">The Truth About Exports</h2>
            <p className="text-4xl font-black text-white sm:text-6xl mb-8">Debunking the Myths</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {myths.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6 text-orange-500">
                  <m.icon className="h-6 w-6" />
                  <span className="font-black uppercase tracking-widest text-xs">Platform Myth</span>
                </div>
                <p className="text-white text-xl font-bold mb-8 italic leading-relaxed">"{m.myth}"</p>
                <div className="mt-auto">
                   <div className="flex items-center gap-3 mb-4 text-green-500">
                     <CheckCircle2 className="h-6 w-6" />
                     <span className="font-black uppercase tracking-widest text-xs">Official Fact</span>
                   </div>
                   <p className="text-gray-400 font-medium leading-relaxed">{m.fact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics / Ecosystem */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center bg-gray-50 p-12 lg:p-24 rounded-[4rem] border border-gray-100">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
               <h2 className="text-4xl font-black text-gray-900 mb-8 leading-[1.2]">
                  Join the Fastest Growing <br /> <span className="text-primary">B2B Ecosystem</span>
               </h2>
               <p className="text-lg text-gray-600 font-medium mb-12">
                  Alibaba.com isn't just a website—it's a comprehensive toolset for Indian SMEs. With GrowNext's certified management, you get priority access to these features.
               </p>
               <div className="space-y-6">
                  {[
                    { title: 'Gold Supplier Verification', desc: 'Establish instant trust with international buyers.' },
                    { title: 'Keyword Advertising (KWA)', desc: 'Precise buyer targeting with ROI focus.' },
                    { title: 'Trade Assurance', desc: 'Secure transaction processing for global trust.' },
                    { title: 'RFX Inquiry System', desc: 'Direct access to verified buyer requests.' }
                  ].map((feat, i) => (
                    <div key={i} className="flex gap-4 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                       <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <ShieldCheck className="h-5 w-5" />
                       </div>
                       <div>
                          <h4 className="font-black text-gray-900">{feat.title}</h4>
                          <p className="text-sm text-gray-500 font-medium">{feat.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </motion.div>
            
            <div className="relative">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="grid grid-cols-2 gap-6"
               >
                  <div className="space-y-6 pt-12">
                     <div className="bg-primary p-8 rounded-[2.5rem] text-white">
                        <div className="text-3xl font-black mb-1">40M+</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest">Active Buyers</div>
                     </div>
                     <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl">
                        <div className="text-3xl font-black mb-1 text-gray-900">5,900+</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Categories</div>
                     </div>
                  </div>
                  <div className="space-y-6">
                     <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl">
                        <div className="text-3xl font-black mb-1 text-gray-900">300K+</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Daily Inquiries</div>
                     </div>
                     <div className="bg-gray-950 p-8 rounded-[2.5rem] text-white">
                        <div className="text-3xl font-black mb-1 text-primary">18+</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest">Languages</div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* FAQs - Detailed */}
      <section className="mx-auto max-w-4xl px-6 lg:px-8 pb-20">
        <div className="text-center mb-20">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 text-primary mb-8">
            <HelpCircle className="h-8 w-8" />
          </div>
          <h2 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
            Common Inquiries
          </h2>
          <p className="mt-4 text-xl text-gray-500 font-medium">Everything you need to know about the partnership.</p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-6">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-none rounded-[2rem] px-8 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
              <AccordionTrigger className="text-left font-black text-gray-900 text-xl hover:no-underline py-8 group">
                <span className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg pb-8 leading-relaxed font-medium pl-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
         <div className="relative isolate overflow-hidden bg-gray-950 px-8 py-24 text-center rounded-[4rem]">
            <h2 className="text-4xl font-black text-white sm:text-6xl mb-8">Ready to Start Exporting?</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
               Don't miss out on the global B2B boom. Let our Alibaba-certified experts handle your onboarding and strategy.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
               <Button asChild size="lg" className="rounded-full px-12 h-20 text-xl font-black shadow-2xl">
                  <Link href="/contact">Book Free Export Audit</Link>
               </Button>
               <Link href="/services" className="text-white font-black flex items-center gap-2 group text-lg">
                  Explore Services <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>
         </div>
      </section>
    </div>
  )
}
