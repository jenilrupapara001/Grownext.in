'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MainSlider } from '@/components/MainSlider'
import ColorBends from '@/components/ColorBends'
import Globe from '@/components/Globe'
import CardSwap, { Card } from '@/components/CardSwap'
import {
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  Globe2,
  BarChart3,
  Users2,
  CheckCircle2,
  ArrowRight,
  Zap,
  Award,
  BadgeCheck,
  Star,
  Package,
  LineChart,
  Ship,
  Factory,
  Diamond,
  Clock,
  BookOpen,
  Box,
  Truck,
  Cpu,
  FlaskConical,
  Leaf,
  Briefcase,
  ShoppingBag,
  Sofa
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BlogPost } from '@/lib/blog'

const stats = [
  { label: 'Export Leads Generated', value: '10K+', icon: Zap },
  { label: 'Successful Businesses', value: '500+', icon: Users2 },
  { label: 'Global Market Access', value: '190+', icon: Globe2 },
  { label: 'Happy Exporters', value: '98%', icon: Award },
]

const services = [
  {
    title: 'Easy Account Setup',
    description: 'We handle your entire Alibaba seller account setup and verification. Our team takes care of all the paperwork so you can start selling globally without any delays.',
    icon: ShieldCheck,
    features: ['Alibaba Registration', 'Alibaba Seller Account Requirements', 'Expert Documentation']
  },
  {
    title: 'Higher Product Rankings',
    description: 'We optimize your product listings with the right keywords so international buyers can find you easily. Our SEO experts help you show up first in search results.',
    icon: TrendingUp,
    features: ['Keyword Research', 'Alibaba Supplier Account Optimization', 'Better Visibility']
  },
  {
    title: 'Reach Global Buyers',
    description: 'We manage your marketing and lead generation to get you real export inquiries every day. We help you connect with verified buyers from across the world.',
    icon: Globe2,
    features: ['Real Export Leads', 'Alibaba Plan Selection', 'Close More Deals']
  },
]

const testimonials = [
  {
    quote: "Within 3 months of onboarding with Grownext, we started receiving verified inquiries from the Middle East and Europe. Their knowledge of Western India's industrial landscape is unmatched.",
    author: "Rakesh Patel",
    role: "MD, Gujarat Polychem",
    location: "Vapi, India",
    rating: 5
  },
  {
    quote: "The account management team at Grownext handled everything from listing to lead generation. Our exports have grown by 40% in just six months since joining the platform.",
    author: "Amit Sharma",
    role: "Export Manager, IndoGems",
    location: "Jaipur, India",
    rating: 5
  }
]

export default function HomeClient({ latestPosts }: { latestPosts: BlogPost[] }) {
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 700], [1, 0])
  const heroScale = useTransform(scrollY, [0, 700], [1, 0.88])
  const heroY = useTransform(scrollY, [0, 700], [0, -60])

  return (
    <div className="flex flex-col bg-gray-50">
      {/* Mega Hero Section - Full screen fixed with ColorBends GPU shader */}
      <div className="fixed top-0 left-0 w-full h-[100vh] z-0 overflow-hidden bg-[#f5f0eb]">
        {/* Full-bleed ColorBends – covers entire hero */}
        <div className="absolute inset-0">
          <ColorBends
            colors={["#ff6600", "#ff8533", "#ff3300", "#ffaa00", "#cc4400"]}
            rotation={15}
            speed={0.18}
            scale={1.1}
            frequency={1.2}
            warpStrength={1.4}
            mouseInfluence={1.2}
            parallax={0.6}
            noise={0.06}
            transparent
            autoRotate={2}
          />
        </div>

        {/* Overlay gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/30 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent pointer-events-none" />

        {/* Hero content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 text-center">
          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
            className="flex flex-col items-center max-w-7xl mx-auto w-full"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-white/60 backdrop-blur-sm px-5 py-2.5 text-xs sm:text-sm font-bold text-primary uppercase tracking-widest mb-10 sm:mb-14 shadow-sm"
            >
              <BadgeCheck className="h-4 w-4" />
              Alibaba Authorized Channel Partner
            </motion.div>

            {/* Headline – 3 lines staggered */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[13vw] sm:text-[11vw] md:text-[8rem] lg:text-[9.5rem] font-black tracking-tighter text-gray-900 leading-[0.88]"
              >
                START YOUR
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[13vw] sm:text-[11vw] md:text-[8rem] lg:text-[9.5rem] font-black tracking-tighter leading-[0.88] bg-gradient-to-r from-[#ff6600] via-[#ff8533] to-[#ff3300] bg-clip-text text-transparent pb-4 lg:pb-6"
              >
                GLOBAL EXPORT
              </motion.div>
            </div>
            <div className="overflow-hidden mb-10 md:mb-14">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[13vw] sm:text-[11vw] md:text-[8rem] lg:text-[9.5rem] font-black tracking-tighter text-gray-900 leading-[0.88]"
              >
                JOURNEY.
              </motion.div>
            </div>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium max-w-2xl mb-12 md:mb-16 leading-relaxed"
            >
              Wondering <span className="text-gray-900 font-bold italic">how to sell on Alibaba</span>? We provide end-to-end support for Indian manufacturers to export globally with total confidence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
            >
              <Button asChild size="lg" className="rounded-full px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-lg font-bold bg-primary hover:bg-gray-900 text-white transition-all shadow-xl hover:shadow-2xl border-none active:scale-95">
                <Link href="/contact">Get a Free Export Plan <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-lg font-bold border-gray-800 text-gray-900 bg-white/70 backdrop-blur-sm hover:bg-white transition-all shadow">
                <Link href="/services">Expert Consultation</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="h-8 w-5 rounded-full border-2 border-gray-400 flex items-start justify-center pt-1.5"
            >
              <div className="h-1.5 w-1 rounded-full bg-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Rest of Page - Scrolls up over the fixed hero */}
      <div className="relative z-20 bg-white rounded-t-[3rem] shadow-[0_-30px_60px_rgba(0,0,0,0.12)] pt-24 pb-20 flex flex-col gap-24 mt-[100vh]">
        {/* Authority Positioning Section (Moved from Hero) */}
        {/* <section className="bg-white px-6 md:px-12 lg:px-20 -mt-32 relative z-20 pb-20">
        <div className="max-w-7xl mx-auto">
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-20">
            {[
              { title: 'Alibaba Registration', desc: 'Complete Alibaba Seller Account creation and verification support.', icon: ShieldCheck },
              { title: 'Alibaba Supplier Account', desc: 'Optimize your supplier profile to rank higher globally.', icon: TrendingUp },
              { title: 'Alibaba Plan & Package', desc: 'Choose the right Alibaba Package Detail for your export needs.', icon: Zap },
              { title: 'Global Lead Management', desc: 'Learn how to sell on Alibaba and convert global inquiries.', icon: Globe2 }
            ].map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-xl p-8 rounded-[3rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all group hover:-translate-y-2 duration-500"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                  <pillar.icon className="h-7 w-7" />
                </div>
                <h3 className="font-black text-gray-900 text-xl mb-3">{pillar.title}</h3>
                <p className="text-gray-600 font-bold leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>

      <div className="border-t border-gray-100 pt-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col">
            <span className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-4">Official Alibaba Channel partner surat gujarat</span>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm font-black text-gray-900 ml-2">4.9/5 Rating by Indian Exporters</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {['indosteel', 'gujpoly', 'surattext', 'bharatgear'].map((brand) => (
              <Image key={brand} src={`/brand_${brand}.png`} alt={brand} width={120} height={40} className="h-8 w-auto object-contain" />
            ))}
          </div>
        </div>
      </div>
    </div>
      </section > */
        }

        {/* Success Process Slider */}
        <section className="bg-white px-6 md:px-12 lg:px-20 pt-10 pb-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base font-black leading-7 text-primary uppercase tracking-widest">
              The Process
            </h2>
            <p className="mt-4 text-[2.5rem] font-black tracking-tight text-gray-900 leading-none">
              How We Scale Your Exports
            </p>
            <p className="mt-6 text-xl leading-relaxed text-gray-500 font-medium max-w-2xl mx-auto">
              A proven, end-to-end framework to transform your local manufacturing business into a globally recognized supplier.
            </p>
          </div>
          <MainSlider />
        </section>
        {/* Services Snapshot */}
        <section className="relative bg-gray-50 py-24 md:py-32 overflow-hidden">
          {/* Aesthetic background elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="px-6 md:px-12 lg:px-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center max-w-3xl mx-auto mb-20 md:mb-28"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-black uppercase tracking-widest mb-6">
                <Zap className="h-4 w-4" />
                Our Services
              </div>
              <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gray-900 leading-[1.1]">
                Everything you need to <span className="text-primary italic">sell globally</span>
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-gray-600 font-medium">
                We provide all the tools and expert help you need to move from selling locally to finding buyers worldwide. Skip the learning curve with our proven frameworks.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-14 max-w-7xl mx-auto"
            >
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                  }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group relative flex flex-col p-10 lg:p-12 rounded-[3.5rem] border border-gray-100 bg-white shadow-xl hover:shadow-[0_40px_80px_-20px_rgba(255,102,0,0.15)] transition-all duration-500 overflow-hidden"
                >
                  {/* Card Background Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-150" />

                  <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed font-medium flex-grow">{service.description}</p>

                  <div className="bg-gray-50 rounded-3xl p-6 mb-8 mt-auto border border-gray-100 transition-colors group-hover:bg-primary/5">
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/services"
                    className="inline-flex items-center text-sm font-black text-white bg-gray-900 group-hover:bg-primary px-8 py-4 rounded-full transition-colors group/link w-fit"
                  >
                    Explore Solution
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Grownext - Detailed */}
        <section className="bg-gray-950 py-24 md:py-32 rounded-[3rem] md:rounded-[4rem] mx-4 lg:mx-8 overflow-hidden relative">
          {/* Abstract Background - Animated */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-0 right-0 w-[30rem] md:w-[50rem] h-[30rem] md:h-[50rem] bg-primary/10 rounded-full blur-[100px] md:blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"
          />
          <div className="absolute bottom-0 left-0 w-[30rem] md:w-[40rem] h-[30rem] md:h-[40rem] bg-blue-500/10 rounded-full blur-[100px] md:blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

          <div className="px-6 md:px-12 lg:px-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.15 }
                  }
                }}
              >
                <motion.h2
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-10 md:mb-12 leading-[1.1]"
                >
                  Why the biggest Indian brands trust <span className="text-primary italic">Grownext</span>
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
                  {[
                    { title: 'Alibaba Channel Partner Gujarat', desc: 'As an **Alibaba Authorized Channel Partner**, we help Gujarat manufacturers scale globally with ease.' },
                    { title: 'Alibaba Supplier Portal Registration', desc: 'We manage your complete **Alibaba Registration** and portal setup for a professional global presence.' },
                    { title: 'Alibaba Seller Account Create', desc: 'Our experts handle the technical **Alibaba Seller Account Requirements** to get you live faster.' },
                    { title: 'Exporters in Surat Gujarat', desc: 'We are the leading **Alibaba Channel partner surat gujarat**, helping local industries reach 190+ countries.' },
                  ].map((item) => (
                    <motion.div
                      key={item.title}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                      }}
                      className="group"
                    >
                      <h4 className="font-extrabold text-white text-lg mb-3 flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <span>{item.title}</span>
                      </h4>
                      <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  className="mt-14 flex flex-wrap gap-6 items-center"
                >
                  <Button asChild size="lg" className="rounded-full px-8 md:px-10 h-14 md:h-16 text-base md:text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95 w-full sm:w-auto">
                    <Link href="/contact">Schedule Export Audit</Link>
                  </Button>
                  <div className="flex flex-col justify-center">
                    <div className="text-white font-bold text-lg leading-tight">Expert Advisory</div>
                    <div className="text-gray-500 font-medium text-sm">Response within 4 hours</div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-gray-900 relative shadow-2xl border-4 border-white/5 group">
                  <Image
                    src="/1.png"
                    alt="Industrial Logistics"
                    fill
                    className="object-cover opacity-70 transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="absolute bottom-6 md:bottom-12 left-6 right-6 md:left-12 md:right-12"
                  >
                    <div className="bg-white/10 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl hover:bg-white/15 transition-colors">
                      <p className="text-white text-lg md:text-xl font-bold leading-relaxed mb-6 italic">
                        "Our mission as an <span className="text-primary font-black">Alibaba Authorized Channel Partner</span> is to empower Indian SMEs with the digital tools and global network needed to lead the next export revolution."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,102,0,0.5)]">
                          <Globe2 className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-bold">Strategic Team</div>
                          <div className="text-primary text-xs md:text-sm font-black uppercase tracking-widest">Grownext India</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Sectors */}
        <section className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } }
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-10 items-center"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -30 },
                show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-black uppercase tracking-widest mb-6 w-fit">
                <Box className="h-4 w-4" />
                Industry Focus
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-[1.1]">
                Sectors We <span className="text-primary italic">Empower</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 font-medium leading-relaxed max-w-lg">
                We specialize in scaling businesses across high-demand export categories from India, navigating complex global markets with ease.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Factory, label: 'Engineering & Machinery' },
                  { icon: Package, label: 'Textiles & Garments' },
                  { icon: Diamond, label: 'Gems & Jewelry' },
                  { icon: LineChart, label: 'Organic Chemicals' },
                  { icon: Truck, label: 'Automobiles & Spares' },
                  { icon: Cpu, label: 'Electronics & IT' },
                  { icon: FlaskConical, label: 'Pharmaceuticals' },
                  { icon: Leaf, label: 'Agriculture & Spices' },
                  { icon: Briefcase, label: 'Leather Products' },
                  { icon: Box, label: 'Packaging Materials' },
                  { icon: ShoppingBag, label: 'Handicrafts & Art' },
                  { icon: Sofa, label: 'Furniture & Wood' },
                ].map((sector, i) => (
                  <motion.div
                    key={sector.label}
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      show: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
                    }}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-3 rounded-full bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/40 transition-all cursor-pointer group"
                  >
                    <sector.icon className="h-5 w-5 text-primary" />
                    <span className="font-bold text-gray-700 text-sm group-hover:text-gray-900 transition-colors">{sector.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="relative h-[500px] sm:h-[600px] w-full mt-10 lg:mt-0 flex items-center justify-center">
              <CardSwap
                cardDistance={80}
                verticalDistance={80}
                delay={4000}
                pauseOnHover={true}
              >
                {[
                  { img: '/machine.png', title: 'Industrial Focus', desc: 'Scaling heavy machinery exports globally' },
                  { img: '/apparel.png', title: 'Apparel & Fabrics', desc: 'Globalizing Indian textiles and garments' },
                  { img: '/food.png', title: 'Agriculture & Food', desc: 'Exporting premium spices and produce' },
                  { img: '/jewel.png', title: 'Jewels & Diamonds', desc: 'Connecting craft to global luxury buyers' },
                ].map((card, i) => (
                  <Card key={card.title} customClass="w-[280px] h-[380px] sm:w-[350px] sm:h-[450px] overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white/10 group cursor-pointer">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full">
                      <h3 className="text-white text-2xl md:text-3xl font-black mb-2 leading-tight">{card.title}</h3>
                      <p className="text-gray-300 font-bold opacity-80 group-hover:opacity-100 transition-opacity duration-500">{card.desc}</p>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </motion.div>
        </section>

        {/* Testimonials - Enhanced */}
        <section className="px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-base font-black leading-7 text-primary uppercase tracking-widest">Client Success</h2>
            <p className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Real impact for Indian exporters
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="group bg-gray-50 p-12 rounded-[3rem] border border-transparent hover:border-primary/10 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-2xl text-gray-800 font-bold leading-relaxed mb-10 italic">"{t.quote}"</p>
                <div className="flex items-center gap-5">
                  <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center text-white text-2xl font-black">
                    {t.author[0]}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-900 text-lg">{t.author}</h4>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">{t.role} • {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Knowledge Hub (Blog Section) */}
        <section className="bg-gray-50/50 py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
          <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Knowledge Hub
                </h2>
                <p className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
                  Master Global Trade with Expert Insights
                </p>
              </div>
              <Button asChild variant="outline" className="rounded-full border-gray-200 hover:border-primary hover:bg-primary/5 text-gray-900 font-bold px-8 h-12 shadow-sm">
                <Link href="/blog">View All Articles</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.slice(0, 3).map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={post.frontmatter.image}
                      alt={post.frontmatter.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black text-gray-900 uppercase tracking-widest shadow-sm">
                      {post.frontmatter.category}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-gray-500 text-sm font-bold mb-4">
                      <Clock className="h-4 w-4" />
                      {post.frontmatter.time}
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 leading-tight mb-4 group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
                    </h3>
                    <p className="text-gray-600 font-medium leading-relaxed mb-8 flex-grow">
                      {post.frontmatter.desc}
                    </p>
                    <Link href={`/blog/${post.slug}`} className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest group-hover:gap-3 transition-all mt-auto">
                      Read Article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* CTA Section - Ultra Modern */}
        <section className="px-6 md:px-12 lg:px-20 mb-20">
          <div
            className="relative isolate overflow-hidden bg-primary px-8 py-24 text-center shadow-[0_48px_100px_-12px_rgba(255,102,0,0.3)] rounded-[4rem] sm:px-16"
          >
            {/* Background Image Overlay */}
            <div className="absolute inset-0 -z-10">
              <Image
                src="/hero-back.png"
                alt="Background"
                fill
                className="object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-primary/80" />
            </div>

            <h2 className="mx-auto max-w-3xl text-4xl font-black tracking-tight text-white sm:text-6xl leading-[1.1]">
              Ready to Start Selling to the World?
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-xl leading-8 text-white/90 font-medium">
              Join 500+ successful Indian businesses. <span className="text-white font-black">Buy Alibaba Seller Account</span> services today and see how you can start growing your exports on Alibaba.com. Learn <span className="text-white font-black">how to create Alibaba buyer account</span> profile for sourcing too.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-12 h-20 text-xl font-black text-primary hover:scale-105 transition-transform shadow-2xl">
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
              <Link href="/alibaba-global-selling" className="text-lg font-black leading-6 text-white flex items-center gap-2 group">
                Platform Insights <ChevronRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Decorative icons */}
            <div className="absolute top-12 left-12 opacity-20 hidden lg:block">
              <Globe2 className="h-24 w-24 text-white" />
            </div>
            <div className="absolute bottom-12 right-12 opacity-20 hidden lg:block">
              <TrendingUp className="h-24 w-24 text-white" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
