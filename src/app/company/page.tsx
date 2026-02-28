'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Target,
  Eye,
  Handshake,
  Users,
  Globe,
  Award,
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  History,
  Building2,
  Verified,
  ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const values = [
  {
    title: 'Our Mission',
    subtitle: 'Helping Businesses Export',
    description: 'We help Indian businesses grow by making it easy to sell on Alibaba.com. Our goal is to handle the complex parts of global trade so you can focus on making great products.',
    icon: Target,
    color: 'from-orange-500 to-red-600',
    points: ['Easy Alibaba Setup', 'Better Business Leads', 'Full Export Support']
  },
  {
    title: 'Our Vision',
    subtitle: 'India as a Global Leader',
    description: 'We want to see "Made in India" products in every country. We are building a future where even the smallest factory can easily sell to customers across the world.',
    icon: Eye,
    color: 'from-blue-600 to-indigo-700',
    points: ['Digital Growing', 'Global Market Reach', 'Simple Selling Tools']
  },
]

const coreValues = [
  {
    title: 'Honest Results',
    desc: 'We show you exactly how your business is doing with clear data and honest reports.',
    icon: ShieldCheck
  },
  {
    title: 'Smart Strategy',
    desc: 'We use the latest tools to help your products show up first when global buyers are searching.',
    icon: Zap
  },
  {
    title: 'Real Impact',
    desc: 'Our success is measured by your growth and the new global orders you receive.',
    icon: TrendingUp
  }
]

const timeline = [
  { year: '2020', title: 'The Inception', description: 'Grownext was founded with a small team of export enthusiasts in Mumbai, dedicated to helping local manufacturers.' },
  { year: '2021', title: 'Alibaba Partnership', description: 'Became an Official Alibaba.com Channel Partner for the West India region, expanding our service capabilities.' },
  { year: '2022', title: '500+ Clients', description: 'Successfully onboarded over 500 SMEs across Textiles, Machinery, and Agriculture, generating millions in inquiries.' },
  { year: '2024', title: 'Global Expansion', description: 'Extended support to international markets including GCC and Southeast Asia, bridging more borders than ever.' },
]

export default function Company() {
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0])
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.9])
  const heroY = useTransform(scrollY, [0, 600], [0, -40])

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* Fixed Hero Container — Cinematic Experience */}
      <div className="fixed top-0 left-0 w-full h-[100vh] z-0 overflow-hidden bg-[#fafafa]">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,102,0,0.06),transparent)]" />
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-[0.03]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full pt-28 md:pt-20">
          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
            className="w-full"
          >
            {/* Branding Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/50 backdrop-blur-md px-5 py-2.5 text-[11px] font-black text-primary uppercase tracking-[0.25em] mb-10 shadow-sm"
            >
              <div className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
              Grownext Export Consultancy
            </motion.div>

            {/* Staggered Heading */}
            <h1 className="font-black tracking-tighter leading-[0.82] mb-12">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: 140, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[14vw] sm:text-[11vw] md:text-[8rem] lg:text-[9.5rem] text-gray-950 uppercase italic"
                >
                  The Global.
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: 140, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[14vw] sm:text-[11vw] md:text-[8rem] lg:text-[9.5rem] bg-gradient-to-r from-blue-700 via-primary to-orange-600 bg-clip-text text-transparent uppercase italic"
                >
                  Architects.
                </motion.div>
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl text-gray-600 font-medium max-w-2xl mb-14 leading-relaxed"
            >
              Official <strong className="text-gray-950 font-black">Alibaba.com Channel Partner</strong> India. We make it easy for Indian industries to sell their products on the world's stage.
            </motion.p>
          </motion.div>

          {/* Scroll Hint */}
          {/* 
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="absolute bottom-12 left-6 md:left-12 lg:left-20 flex items-center gap-4"
          >
            <div className="h-12 w-[1.5px] bg-gradient-to-b from-primary to-transparent" />
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Scroll to Decode Our DNA</span>
          </motion.div>
          */}
        </div>
      </div>

      {/* Main Content Area — High Density Reveal */}
      <div className="relative z-20 bg-white rounded-t-[5rem] shadow-[0_-40px_80px_rgba(0,0,0,0.08)] mt-[100vh]">

        {/* Narrative Story Section */}
        <section className="py-24 lg:py-40 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl relative group">
                <Image
                  src="https://images.unsplash.com/photo-1600880212319-46b738c2f829?auto=format&fit=crop&q=80&w=1200"
                  alt="Strategic Growth Presentation"
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute bottom-12 left-12 text-white">
                  <div className="text-5xl font-black mb-2 italic">5+</div>
                  <div className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Years of Strategic Dominance</div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-10 -right-10 h-32 w-32 bg-white rounded-full shadow-2xl flex items-center justify-center p-6 border border-gray-100 hidden md:flex">
                <Verified className="h-16 w-16 text-primary" />
              </div>
            </motion.div>

            <div>
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
                <History className="h-5 w-5" /> The Grownext Odyssey
              </h2>
              <h3 className="text-4xl sm:text-5xl font-black text-gray-950 tracking-tight leading-[0.95] mb-12 uppercase italic">
                Helping India <br /> <span className="text-primary not-italic">Grow Faster.</span>
              </h3>
              <div className="space-y-8 text-lg text-gray-600 font-medium leading-relaxed">
                <p>
                  Grownext was started to help Indian businesses find customers across the world. We are an <strong className="text-gray-950 font-black">Official Alibaba.com Partner</strong> based in India.
                </p>
                <p>
                  We know how Indian factories work, from textiles in Surat to engineering in Pune. We are here to help you get more business from global buyers with simple, effective tools.
                </p>
                <p className="border-l-4 border-primary pl-8 py-2 text-gray-950 italic">
                  "Our goal is to help you reach more customers and grow your business every single day."
                </p>
              </div>

              <div className="mt-16 grid grid-cols-2 gap-10">
                <div>
                  <div className="text-4xl font-black text-gray-950 mb-2 italic">500+</div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Global Manufacturers</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-gray-950 mb-2 italic">15k+</div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Inquiries Enabled</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Matrix — Cinematic Glass */}
        <section className="mx-4 lg:mx-10 my-10 py-32 lg:py-48 bg-gray-950 rounded-[5rem] relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[80rem] h-[80re m] bg-primary/20 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="flex flex-col gap-8 md:gap-12">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group relative bg-white/5 backdrop-blur-3xl p-10 lg:p-16 rounded-[4rem] border border-white/10 hover:border-primary/30 transition-all duration-700 flex flex-col lg:flex-row gap-12 items-center"
                >
                  <div className={`shrink-0 h-32 w-32 rounded-[2.5rem] bg-gradient-to-br ${value.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-700`}>
                    <value.icon className="h-16 w-16 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4">{value.subtitle}</div>
                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-8 italic uppercase tracking-tighter">{value.title}</h3>
                    <p className="text-gray-400 text-lg lg:text-xl leading-relaxed font-medium mb-10">{value.description}</p>

                    <div className="flex flex-wrap gap-4">
                      {value.points.map(point => (
                        <div key={point} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-black text-gray-300 uppercase tracking-widest">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Core Values Minimalist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {coreValues.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/5 transition-colors group"
                >
                  <v.icon className="h-8 w-8 text-primary mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <h5 className="text-white font-black uppercase tracking-widest text-sm mb-3">{v.title}</h5>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Timeline — Minimalist & Authoritative */}
        <section className="py-24 lg:py-40 px-6 max-w-7xl mx-auto relative">
          <div className="text-center mb-24">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-6">Our Trajectory</h2>
            <h3 className="text-4xl sm:text-6xl font-black text-gray-950 tracking-tight leading-[0.95] uppercase italic">
              Milestones of <span className="bg-gradient-to-r from-blue-700 to-primary bg-clip-text text-transparent">Industrial Growth.</span>
            </h3>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-gray-50 via-gray-200 to-gray-50" />

            <div className="space-y-16 md:space-y-32">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center gap-10 md:gap-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:w-1/2 flex justify-start md:justify-end md:px-20 w-full pl-12">
                    <div className={index % 2 === 1 ? 'md:text-left' : 'md:text-right text-left'}>
                      <div className="text-5xl font-black text-primary mb-4 italic opacity-20">{item.year}</div>
                      <h4 className="text-2xl lg:text-3xl font-black text-gray-950 mb-4 uppercase tracking-tighter">{item.title}</h4>
                      <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-md">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-white border-8 border-primary z-10 shadow-xl" />

                  <div className="md:w-1/2 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Authority Section — Official Verification */}
        <section className="mx-6 lg:mx-20 mb-32">
          <div className="relative overflow-hidden rounded-[4rem] bg-[#fafafa] border border-gray-100 p-12 lg:p-24 flex flex-col lg:flex-row items-center gap-20 shadow-sm transition-all duration-700 hover:shadow-xl hover:border-gray-200">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-600/5 border border-blue-600/10 text-blue-700 text-[11px] font-black uppercase tracking-widest mb-10">
                <Handshake className="h-4 w-4" /> Official Alibaba Channel Partner India
              </div>
              <h2 className="text-4xl sm:text-6xl font-black text-gray-950 tracking-tight leading-[0.95] mb-10 uppercase italic text-center lg:text-left">
                Dominating the <br /> <span className="text-primary not-italic">Global Supply Chain.</span>
              </h2>
              <p className="text-xl text-gray-600 font-medium leading-relaxed mb-12 text-center lg:text-left">
                Our status as an official partner grants you direct, expedited access to the world's most powerful B2B infrastructure. We handle the technical friction, so you can focus on scale.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: ShieldCheck, text: 'Priority V-Verification' },
                  { icon: Zap, text: 'Fast-Track Storefront' },
                  { icon: Award, text: 'Certified Strategy' },
                  { icon: Globe, text: 'Tier-1 Lead Access' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all cursor-default group">
                    <item.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-extrabold text-gray-950 text-sm uppercase tracking-widest leading-none">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center items-center relative">
              <div className="aspect-square w-full max-w-sm bg-white rounded-[4rem] shadow-2xl border-[12px] border-gray-50 p-16 flex flex-col items-center justify-center text-center relative group overflow-hidden">
                {/* Interior glow */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-[2px] border-dashed border-gray-200/50 rounded-full m-8 pointer-events-none"
                />

                <div className="h-28 w-28 rounded-[2.5rem] bg-primary/5 text-primary flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-700">
                  <Building2 className="h-16 w-16" />
                </div>
                <p className="font-black text-gray-950 text-3xl mb-2 tracking-tight uppercase italic pb-4">Specialists</p>
                <p className="text-xs font-black text-primary uppercase tracking-[0.4em]">Official Agency</p>
              </div>

              {/* Background Decorative Bloom */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-blue-600/5 blur-[120px] -z-10 rounded-full" />
            </div>
          </div>
        </section>

        {/* Global Action Footer — Editorial CTA */}
        <section className="px-4 lg:mx-8 mb-20">
          <div className="relative isolate overflow-hidden bg-gray-950 px-8 py-32 text-center shadow-2xl rounded-[5rem] sm:px-16 group">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 -z-10">
              <Image
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000"
                alt="The Bridge to Scale"
                fill
                className="object-cover opacity-10 group-hover:scale-105 transition-transform duration-[5s]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/95 to-blue-900/40" />
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-4xl text-5xl sm:text-7xl font-black tracking-tighter text-white uppercase italic leading-[0.85] mb-12"
            >
              Ready to Define <br /> Your <span className="text-primary not-italic">Global Identity?</span>
            </motion.h2>
            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-400 font-medium mb-16 px-4">
              Don't leave your export growth to chance. Partner with Grownext, the <span className="text-white font-bold">Surat B2B Export Experts</span>, and build your authoritative global bridge.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <Button asChild size="lg" className="rounded-full px-14 h-20 text-xl font-black bg-primary text-white hover:scale-105 transition-transform shadow-2xl border-none outline-none">
                <Link href="/contact" className="flex items-center gap-3">Consult with the Architects <ArrowRight className="h-6 w-6" /></Link>
              </Button>
              <Link href="/alibaba-global-selling" className="text-lg font-black leading-6 text-white flex items-center gap-4 group/btn">
                Explore the Infrastructure <ArrowRight className="h-6 w-6 group-hover/btn:translate-x-3 transition-all" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
