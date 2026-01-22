'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
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
  Star
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  { label: 'Export Inquiries Generated', value: '10K+', icon: Zap },
  { label: 'Businesses Onboarded', value: '500+', icon: Users2 },
  { label: 'Global Markets Reached', value: '190+', icon: Globe2 },
  { label: 'Customer Satisfaction', value: '98%', icon: Award },
]

const services = [
  {
    title: 'Alibaba Onboarding',
    description: 'Complete seller account setup, compliance verification, and category validation for Indian SMEs.',
    icon: ShieldCheck,
    features: ['Account Setup', 'Verification', 'Compliance']
  },
  {
    title: 'Product Optimization',
    description: 'Keyword research and listing optimization to ensure your products rank higher for global buyers.',
    icon: TrendingUp,
    features: ['SEO Research', 'Professional Copy', 'High-res Visuals']
  },
  {
    title: 'Global Marketing',
    description: 'Data-driven ad campaigns and lead management strategies to maximize your export ROI.',
    icon: Globe2,
    features: ['PPC Management', 'Lead Tracking', 'ROI Reports']
  },
]

const testimonials = [
  {
    quote: "Within 3 months of onboarding with GrowNext, we started receiving verified inquiries from the Middle East and Europe. Their expertise is unmatched.",
    author: "Rajesh Kumar",
    role: "CEO, Kumar Textiles",
    location: "Surat, India",
    rating: 5
  },
  {
    quote: "The account management team at GrowNext handled everything from listing to lead generation. Our exports have grown by 40% in just six months.",
    author: "Amit Sharma",
    role: "Export Manager, IndoGems",
    location: "Jaipur, India",
    rating: 5
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 lg:pt-24 min-h-[90vh] flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-24 -left-24 w-[30rem] h-[30rem] bg-orange-200/20 rounded-full blur-3xl" 
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold leading-6 text-primary ring-1 ring-inset ring-primary/20 mb-8"
              >
                <BadgeCheck className="h-4 w-4" />
                Official Alibaba.com Channel Partner
              </motion.div>
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl mb-8 leading-[1.1]">
                Empowering Indian Businesses to <span className="text-primary relative inline-block">
                  Sell Globally
                  <motion.svg 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" 
                    viewBox="0 0 100 10" 
                    preserveAspectRatio="none"
                  >
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                  </motion.svg>
                </span>
              </h1>
              <p className="text-xl leading-8 text-gray-600 mb-12 max-w-xl">
                From onboarding to global lead generation — GrowNext helps Indian SMEs scale exports through strategic Alibaba.com partnership and certified expertise.
              </p>
              <div className="flex flex-wrap gap-6">
                <Button asChild size="lg" className="rounded-full px-10 h-16 text-lg font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all active:scale-95">
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-16 text-lg font-bold border-2 hover:bg-gray-50 transition-all active:scale-95">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 flex items-center gap-x-6"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -5, zIndex: 10 }}
                      className="inline-block h-12 w-12 rounded-full ring-4 ring-white overflow-hidden bg-gray-100 shadow-sm"
                    >
                      <Image 
                        src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000000}?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`} 
                        alt="User" 
                        width={48} 
                        height={48} 
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-gray-900">
                    Trusted by 500+ Indian exporters
                  </p>
                  <div className="flex gap-0.5 mt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.3 }}
              className="relative lg:ml-auto"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] border-8 border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200" 
                  alt="Indian exporter using Alibaba dashboard" 
                  width={800} 
                  height={1000}
                  className="w-full h-auto object-cover aspect-[4/5] lg:aspect-[3/4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-12 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 max-w-[280px] z-20 hidden md:block"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-12 w-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="font-extrabold text-gray-900 block text-lg">Verified Partner</span>
                    <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Active Status</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 font-medium">Certified by Alibaba.com for SME Onboarding & Global Account Management.</p>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-8 -right-8 bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-2xl border border-white/20 z-20 hidden lg:block"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-3xl font-black text-primary mb-1">190+</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Countries Reached</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                variants={itemVariants}
                className="relative group p-8 rounded-[2rem] bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-100"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-500">
                  <stat.icon className="h-6 w-6" />
                </div>
                <dt className="text-sm font-bold leading-7 text-gray-500 uppercase tracking-widest mb-1">{stat.label}</dt>
                <dd className="text-4xl font-black tracking-tight text-gray-900">{stat.value}</dd>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-black leading-7 text-primary uppercase tracking-widest"
          >
            Expert Guidance
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
          >
            Everything you need to conquer global markets
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl leading-8 text-gray-600"
          >
            We provide the technical expertise and strategic roadmap Indian manufacturers need to transition from local success to global dominance.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative flex flex-col p-10 rounded-[2.5rem] border border-gray-100 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed flex-grow">{service.description}</p>
              
              <ul className="space-y-3 mb-10">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                href="/services" 
                className="inline-flex items-center text-base font-black text-primary group/link"
              >
                Explore Solution 
                <ArrowRight className="ml-2 h-5 w-5 group-hover/link:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why GrowNext - Detailed */}
      <section className="bg-gray-950 py-32 rounded-[4rem] mx-4 lg:mx-8 overflow-hidden relative">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-12 leading-[1.1]">
                Why the biggest Indian brands trust <span className="text-primary">GrowNext</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                {[
                  { title: 'Local Expertise', desc: 'Deep understanding of Indian manufacturing sectors.' },
                  { title: 'Global Standards', desc: 'Official Alibaba-certified management protocols.' },
                  { title: 'Growth Engines', desc: 'Proprietary lead generation strategies for B2B.' },
                  { title: 'Dedicated Support', desc: 'Direct account managers for every client.' },
                ].map((item, i) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <h4 className="font-extrabold text-white text-lg mb-2 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      {item.title}
                    </h4>
                    <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-16 flex flex-wrap gap-6">
                <Button asChild size="lg" className="rounded-full px-10 h-16 text-lg font-bold">
                  <Link href="/contact">Schedule Export Audit</Link>
                </Button>
                <div className="flex flex-col justify-center">
                  <div className="text-white font-bold text-lg leading-tight">Expert Advisory</div>
                  <div className="text-gray-500 font-medium text-sm">Response within 4 hours</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-gray-900 relative shadow-2xl border-4 border-white/5">
                <Image 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2959210?auto=format&fit=crop&q=80&w=1200" 
                  alt="Team meeting" 
                  fill
                  className="object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
                <div className="absolute bottom-12 left-12 right-12">
                   <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                      <p className="text-white text-xl font-bold leading-relaxed mb-6">
                        "Our mission is to empower Indian SMEs with the digital tools and global network needed to lead the next export revolution."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-primary" />
                        <div>
                          <div className="text-white font-bold">Strategic Team</div>
                          <div className="text-primary text-sm font-black uppercase tracking-widest">GrowNext India</div>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-base font-black leading-7 text-primary uppercase tracking-widest">Client Success</h2>
          <p className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Real impact for Indian exporters
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section - Ultra Modern */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative isolate overflow-hidden bg-primary px-8 py-24 text-center shadow-[0_48px_100px_-12px_rgba(255,102,0,0.3)] rounded-[4rem] sm:px-16"
        >
          {/* Animated Glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 left-0 w-full h-full bg-white/20 blur-[120px] -z-10" 
          />
          
          <h2 className="mx-auto max-w-3xl text-4xl font-black tracking-tight text-white sm:text-6xl leading-[1.1]">
            Ready to Take Your Business to the World?
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-xl leading-8 text-white/90 font-medium">
            Join 500+ successful Indian exporters. Book your free strategic audit and unlock your global B2B potential.
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
        </motion.div>
      </section>
    </div>
  )
}
