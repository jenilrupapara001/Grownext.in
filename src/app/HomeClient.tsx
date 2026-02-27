'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MainSlider } from '@/components/MainSlider'
import ColorBends from '@/components/ColorBends'
import { Globe3D, GlobeMarker } from "@/components/ui/3d-globe";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const sampleMarkers: GlobeMarker[] = [
  {
    lat: 40.7128,
    lng: -74.006,
    src: "https://assets.aceternity.com/avatars/1.webp",
    label: "New York",
  },
  {
    lat: 51.5074,
    lng: -0.1278,
    src: "https://assets.aceternity.com/avatars/2.webp",
    label: "London",
  },
  {
    lat: 35.6762,
    lng: 139.6503,
    src: "https://assets.aceternity.com/avatars/3.webp",
    label: "Tokyo",
  },
  {
    lat: -33.8688,
    lng: 151.2093,
    src: "https://assets.aceternity.com/avatars/4.webp",
    label: "Sydney",
  },
  {
    lat: 48.8566,
    lng: 2.3522,
    src: "https://assets.aceternity.com/avatars/5.webp",
    label: "Paris",
  },
  {
    lat: 28.6139,
    lng: 77.209,
    src: "https://assets.aceternity.com/avatars/6.webp",
    label: "New Delhi",
  },
  {
    lat: 55.7558,
    lng: 37.6173,
    src: "https://assets.aceternity.com/avatars/7.webp",
    label: "Moscow",
  },
  {
    lat: -22.9068,
    lng: -43.1729,
    src: "https://assets.aceternity.com/avatars/8.webp",
    label: "Rio de Janeiro",
  },
  {
    lat: 31.2304,
    lng: 121.4737,
    src: "https://assets.aceternity.com/avatars/9.webp",
    label: "Shanghai",
  },
  {
    lat: 25.2048,
    lng: 55.2708,
    src: "https://assets.aceternity.com/avatars/10.webp",
    label: "Dubai",
  },
  {
    lat: -34.6037,
    lng: -58.3816,
    src: "https://assets.aceternity.com/avatars/11.webp",
    label: "Buenos Aires",
  },
  {
    lat: 1.3521,
    lng: 103.8198,
    src: "https://assets.aceternity.com/avatars/12.webp",
    label: "Singapore",
  },
  {
    lat: 37.5665,
    lng: 126.978,
    src: "https://assets.aceternity.com/avatars/13.webp",
    label: "Seoul",
  },
];
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
  Gem,
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
import { GoogleReviews } from '@/components/GoogleReviews'

const stats = [
  { label: 'Export Leads Generated', value: '10K+', icon: Zap },
  { label: 'Successful Businesses', value: '500+', icon: Users2 },
  { label: 'Global Market Access', value: '190+', icon: Globe2 },
  { label: 'Happy Exporters', value: '98%', icon: Award },
]
const industrialSectors = [
  { icon: Factory, label: 'Engineering & Machinery', img: '/machine.png', desc: 'Scaling heavy machinery exports globally' },
  { icon: Package, label: 'Textiles & Garments', img: '/apparel.png', desc: 'Globalizing Indian textiles and garments' },
  { icon: Gem, label: 'Gems & Jewelry', img: '/jewel.png', desc: 'Connecting craft to global luxury buyers' },
  { icon: LineChart, label: 'Organic Chemicals', img: 'https://images.unsplash.com/photo-1532187863486-abf51ad9f69d?auto=format&fit=crop&q=80&w=800', desc: 'Navigating global chemical trade regulations' },
  { icon: Truck, label: 'Automobiles & Spares', img: 'https://images.unsplash.com/photo-1517524008410-b4bd60b30fc3?auto=format&fit=crop&q=80&w=800', desc: 'Exporting premium Indian auto components' },
  { icon: Cpu, label: 'Electronics & IT', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800', desc: 'Scaling Indian tech hardware globally' },
  { icon: FlaskConical, label: 'Pharmaceuticals', img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=800', desc: 'Indian pharma reaching global healthcare' },
  { icon: Leaf, label: 'Agriculture & Spices', img: '/food.png', desc: 'Exporting premium spices and produce' },
  { icon: Briefcase, label: 'Leather Products', img: 'https://images.unsplash.com/photo-1524380365553-39903ef8460a?auto=format&fit=crop&q=80&w=800', desc: 'Indian leather craft for global markets' },
  { icon: Box, label: 'Packaging Materials', img: 'https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&fit=crop&q=80&w=800', desc: 'Sustainable packaging solutions exported' },
  { icon: ShoppingBag, label: 'Handicrafts & Art', img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800', desc: 'Artisanal India reaching global homes' },
  { icon: Sofa, label: 'Furniture & Wood', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800', desc: 'Indian woodcraft for international living' },
]
const SectorContent = ({ sector }: { sector: typeof industrialSectors[0] }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
          <sector.icon className="h-6 w-6" />
        </div>
        <h4 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider">
          {sector.label}
        </h4>
      </div>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto leading-relaxed">
        <span className="font-bold text-neutral-700 dark:text-neutral-200 block mb-4">
          Unlocking global potential for {sector.label} manufacturers.
        </span>
        {sector.desc}. Grownext provides the expertise and Alibaba.com infrastructure needed to connect your products with verified buyers in 190+ countries.
      </p>
      <div className="relative aspect-video w-full mt-10 rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src={sector.img}
          alt={sector.label}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

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

export default function HomeClient({ latestPosts }: { latestPosts: BlogPost[] }) {
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 700], [1, 0])
  const heroScale = useTransform(scrollY, [0, 700], [1, 0.92])
  const heroY = useTransform(scrollY, [0, 700], [0, -40])

  return (
    <div className="flex flex-col bg-white">
      {/* Hero — 3D Globe Design */}
      <div className="fixed top-0 left-0 w-full h-[100vh] z-0 overflow-hidden bg-neutral-950">
        <div className="relative z-10 h-full flex flex-col items-start justify-center px-6 md:px-12 lg:px-32 w-full pt-20">
          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
            className="relative z-20 w-full lg:w-[50%] text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2 text-[11px] font-black text-primary uppercase tracking-[0.2em] mb-8 shadow-sm"
            >
              <BadgeCheck className="h-3.5 w-3.5" />
              Alibaba Authorized Channel Partner · Gujarat, India
            </motion.div>

            <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl leading-[0.9]">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block"
              >
                Export from Gujarat  <span className="italic">to 190+ Countries</span>
              </motion.span>
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="block mt-2"
              >
                with <span className="text-primary italic">Alibaba.com</span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-6 max-w-xl text-neutral-400 md:mt-8 md:text-xl leading-relaxed font-medium"
            >
              Grownext is <strong className="text-white">Gujarat’s Official Alibaba Channel Partner </strong>
              helping local manufacturers register, optimize, and <strong className="text-white">win global B2B orders</strong>.
            </motion.p>

            <div className="mt-10 flex flex-wrap gap-4 md:mt-12">
              <Button asChild size="lg" className="rounded-full px-8 h-14 text-base font-bold bg-primary hover:bg-orange-600 text-white transition-all shadow-xl hover:shadow-primary/20 active:scale-95">
                <Link href="/contact">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-bold border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all shadow-sm">
                <Link href="/services">Learn More</Link>
              </Button>
            </div>

            {/* Trust Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mt-16 flex flex-wrap gap-x-8 gap-y-4"
            >
              {[
                'Alibaba Supplier Account Setup',
                '190+ Countries Reached',
                '500+ Exporters Onboarded',
              ].map((tag) => (
                <span key={tag} className="text-xs font-bold text-neutral-500 uppercase tracking-wider flex items-center gap-2 text-left">
                  <div className="h-1 w-1 rounded-full bg-primary" />
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Globe container - Positioned to the right bottom corner */}
        <div className="absolute -right-20 -bottom-40 md:-right-40 md:-bottom-60 lg:-right-60 lg:-bottom-80 z-10 size-[800px] md:size-[1000px] lg:size-[1400px] opacity-60 pointer-events-none lg:pointer-events-auto">
          <Globe3D
            className="h-full w-full"
            markers={sampleMarkers}
            config={{
              atmosphereColor: "#ff6a00",
              atmosphereIntensity: 20,
              bumpScale: 5,
              autoRotateSpeed: 0.3,
            }}
          />
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
                <h3 className="font-black text-[#2B2B2B] text-xl mb-3">{pillar.title}</h3>
                <p className="text-[#58595B] font-bold leading-relaxed">{pillar.desc}</p>
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
              <span className="text-sm font-black text-[#2B2B2B] ml-2">4.9/5 Rating by Indian Exporters</span>
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
                    src="/emer.png"
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

        {/* Featured Sectors — High Authority Multi-Row Marquee */}
        <section className="relative py-32 lg:py-48 bg-white overflow-hidden">
          {/* Subtle Ambient Industrial Authority Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[80rem] bg-primary/[0.03] rounded-full blur-[160px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20 lg:mb-28 px-6"
            >
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white border border-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.4em] mb-10 shadow-sm mx-auto">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Strategic Export Verticals
              </div>
              <h2 className="text-5xl md:text-8xl font-black text-[#2B2B2B] mb-10 tracking-tighter leading-[0.85] uppercase italic text-center">
                Sectors We <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent not-italic">Empower.</span>
              </h2>
              <p className="text-xl md:text-2xl text-[#58595B] font-medium leading-relaxed max-w-3xl mx-auto text-center px-4">
                Specialized Alibaba.com onboarding frameworks designed for India’s high-demand export categories. We turn local manufacturing into global dominance.
              </p>
            </motion.div>

            {/* Apple Cards Carousel — Full Width Experience */}
            <div className="w-full">
              <Carousel
                items={industrialSectors.map((sector, index) => (
                  <Card
                    key={sector.label}
                    index={index}
                    card={{
                      src: sector.img,
                      title: sector.label,
                      category: "Export Vertical",
                      content: <SectorContent sector={sector} />
                    }}
                  />
                ))}
              />
            </div>
          </div>
        </section>

        {/* Live Google Reviews */}
        <GoogleReviews />

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
                <p className="text-4xl md:text-5xl font-extrabold text-[#2B2B2B] tracking-tight leading-[1.1]">
                  Master Global Trade with Expert Insights
                </p>
              </div>
              <Button asChild variant="outline" className="rounded-full border-[#EDEDED] hover:border-primary hover:bg-primary/5 text-[#2B2B2B] font-bold px-8 h-12 shadow-sm">
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
    </div >
  )
}
