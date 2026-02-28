'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MainSlider } from '@/components/MainSlider'
import { Globe3D, GlobeMarker } from "@/components/ui/3d-globe";
import InfiniteMarquee from '@/components/InfiniteMarquee'
import GridPattern from "@/components/GridPattern";

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
  Clock,
  Zap,
  BadgeCheck,
  Package,
  LineChart,
  Factory,
  Gem,
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

const services = [
  {
    title: 'Easy Alibaba Account Setup in Gujarat',
    description: 'We manage your complete Alibaba seller account registration and supplier verification process. From documentation to portal configuration, our Gujarat-based team ensures your account is compliant and active.',
    icon: ShieldCheck,
    features: ['Alibaba Registration for Gujarat Manufacturers', 'Seller Account Requirements & Documentation', 'Supplier Verification Support', 'Storefront Setup & Configuration'],
    cta: 'Explore Account Setup Solution'
  },
  {
    title: 'Higher Product Rankings on Alibaba Search',
    description: 'We optimize your product listings with strategic keyword research and listing enhancement so international buyers can easily discover your products across global export markets.',
    icon: TrendingUp,
    features: ['Alibaba Keyword Research', 'Product Listing Optimization', 'Supplier Account Performance Enhancement', 'Search Ranking Improvement Strategy'],
    cta: 'Explore Ranking Optimization'
  },
  {
    title: 'Reach Verified Global Buyers',
    description: 'We help Gujarat exporters generate consistent international B2B inquiries through strategic account management, RFQ handling, and global buyer communication strategy.',
    icon: Globe2,
    features: ['Real Export Lead Generation', 'RFQ Management', 'Alibaba Plan Selection Advisory', 'Inquiry Handling & Conversion Support'],
    cta: 'Explore Global Buyer Strategy'
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
        <div className="absolute -right-20 -bottom-40 md:-right-40 md:-bottom-60 lg:-right-60 lg:-bottom-80 z-10 size-[800px] md:size-[1000px] lg:size-[1400px] opacity-60 pointer-events-none lg:pointer-events-auto hidden md:block">
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
            <h3 className="mt-4 text-[2.5rem] font-black tracking-tight text-gray-900 leading-none">
              How We Scale Your Exports
            </h3>
            <p className="mt-4 text-lg md:text-xl leading-relaxed text-gray-500 font-medium max-w-2xl mx-auto">
              A proven, end-to-end framework to transform your local manufacturing business into a globally recognized supplier.
            </p>
          </div>
          <MainSlider />
        </section>

        {/* Services Snapshot */}
        <section id="services" className="relative bg-white lg:min-h-screen flex flex-col justify-center py-20 lg:py-16 overflow-hidden isolate">
          {/* Aesthetic background elements */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/3 pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/3 pointer-events-none -z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[80rem] bg-primary/[0.02] rounded-full blur-[200px] pointer-events-none -z-10" />

          <div className="px-6 md:px-12 lg:px-20 relative z-10 w-full max-w-[1700px] mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center max-w-4xl mx-auto mb-[5vh]"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-[2vh]">
                <Zap className="h-3 w-3" />
                Specialized Export Solutions
              </div>
              <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-[min(4.5vw,56px)] font-black tracking-tighter text-neutral-900 leading-[0.9] uppercase italic">
                Complete Alibaba <br className="hidden md:block" />
                <span className="text-primary not-italic">Export Solutions</span> <br className="hidden md:block" />
                for Gujarat Manufacturers
              </h2>
              <p className="mt-[3vh] text-base lg:text-[min(1.2vw,18px)] leading-relaxed text-neutral-500 font-bold max-w-3xl mx-auto italic border-y border-neutral-100 py-[2vh]">
                &quot;We help Gujarat manufacturers move from local selling to consistent international exports. As an Official Alibaba Channel Partner, we provide the full-spectrum growth engine.&quot;
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
              className="grid grid-cols-1 md:grid-cols-3 gap-[2vw] lg:gap-[3vw]"
            >
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                  }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group relative flex flex-col p-6 lg:p-[min(2.5vw,2.5rem)] rounded-[2.5rem] border border-neutral-100 bg-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(255,102,0,0.2)] transition-all duration-500 overflow-hidden"
                >
                  {/* Card Background Decoration */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[4rem] -z-10 transition-all duration-700 group-hover:bg-primary/15 group-hover:scale-110" />

                  <div className="flex flex-col xl:flex-row xl:items-center gap-4 mb-[2vh]">
                    <div className="inline-flex h-[min(10vh,3.5rem)] w-[min(10vh,3.5rem)] items-center justify-center rounded-2xl bg-neutral-950 text-white group-hover:bg-primary shadow-lg transition-all duration-300">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg lg:text-[min(1.6vw,22px)] font-black text-neutral-900 tracking-tight uppercase italic leading-tight">{service.title}</h3>
                  </div>

                  <p className="text-neutral-500 mb-[2vh] leading-relaxed font-bold text-sm lg:text-[min(1vw,15px)] italic border-l-2 border-neutral-100 pl-4 group-hover:border-primary transition-colors line-clamp-2 md:line-clamp-none lg:line-clamp-2 xl:line-clamp-none">{service.description}</p>

                  <div className="bg-neutral-50/50 rounded-[2rem] p-[min(1.5vw,1.5rem)] mb-[3vh] mt-auto border border-neutral-100 transition-all duration-500 group-hover:bg-primary/5 group-hover:border-primary/20">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 lg:gap-y-[1vh]">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-[10px] lg:text-[min(0.8vw,11px)] font-black text-neutral-900 uppercase tracking-tight">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 transition-transform group-hover:scale-110" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 text-[10px] lg:text-[min(0.8vw,12px)] font-black text-white bg-neutral-950 group-hover:bg-primary px-6 py-3 lg:px-[min(2vw,2rem)] lg:py-[min(1vw,1.2rem)] rounded-2xl shadow-lg shadow-black/5 transition-all duration-300 group-hover:shadow-primary/20 group/link active:scale-95 uppercase tracking-widest w-full sm:w-fit"
                  >
                    {service.cta}
                    <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
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
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  className="mb-8"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                    <BadgeCheck className="w-4 h-4" />
                    Official Alibaba.com Channel Partner in Gujarat
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] uppercase italic">
                    Why Gujarat’s Leading Manufacturers Trust <span className="text-primary italic not-italic">Grownext</span> for Alibaba Export Growth
                  </h2>
                  <p className="text-gray-400 font-bold text-lg md:text-xl italic border-l-4 border-primary pl-6">
                    &quot;Official Alibaba.com Channel Partner in Gujarat helping local industries scale to 190+ countries.&quot;
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
                  {[
                    {
                      title: 'Alibaba Channel Partner in Gujarat',
                      desc: 'As an Alibaba Authorized Channel Partner in Gujarat, we help manufacturers from Ahmedabad, Rajkot, Surat, and Morbi establish a strong global presence and generate verified international B2B inquiries.'
                    },
                    {
                      title: 'Alibaba Supplier Registration & Verification',
                      desc: 'Complete Alibaba seller account registration, documentation support, and supplier verification handled by local experts in Gujarat for faster activation and compliance.'
                    },
                    {
                      title: 'Alibaba Seller Account Setup & Optimization',
                      desc: 'From product listing optimization to keyword targeting and storefront branding, we build high-performing Alibaba supplier profiles that attract global buyers.'
                    },
                    {
                      title: 'Export Support for Surat, Rajkot & Ahmedabad Industries',
                      desc: 'We specialize in supporting textile exporters in Surat, engineering manufacturers in Rajkot, ceramic exporters in Morbi, and industrial suppliers in Ahmedabad to scale exports efficiently.'
                    },
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
                  className="mt-14 flex flex-col gap-6"
                >
                  <div className="flex flex-wrap gap-6 items-center">
                    <Button asChild size="lg" className="rounded-2xl px-8 md:px-10 h-14 md:h-16 text-base md:text-lg font-black uppercase tracking-widest shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95 w-full sm:w-auto">
                      <Link href="/contact">Schedule Free Export Audit</Link>
                    </Button>
                    <div className="flex flex-col justify-center">
                      <div className="text-white font-bold text-lg leading-tight uppercase tracking-tight">Expert Audit Team</div>
                      <div className="text-gray-500 font-medium text-sm uppercase tracking-wider">Response within 4 hours</div>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.15em]">
                    Gujarat-Based Export Experts | Direct Partnership
                  </p>
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
                        &quot;As Gujarat&apos;s Official Alibaba Channel Partner, our mission is to help local manufacturers transform into global export brands through strategic Alibaba account management and verified buyer acquisition.&quot;
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,102,0,0.5)]">
                          <Globe2 className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-bold">Strategic Export Team</div>
                          <div className="text-primary text-xs md:text-sm font-black uppercase tracking-widest">Grownext Gujarat</div>
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
              className="text-center mb-16 lg:mb-24 px-6"
            >
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-sm mx-auto">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Strategic Export Verticals
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-[min(4.5vw,72px)] font-black text-[#2B2B2B] mb-8 tracking-tighter leading-[1.1] md:leading-[1] uppercase italic text-center max-w-5xl mx-auto">
                Export Sectors We Empower Across <br className="hidden lg:block" />
                <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent not-italic block mt-1 lg:mt-0 lg:inline">Gujarat.</span>
              </h2>
              <p className="text-base md:text-lg lg:text-[min(1.2vw,20px)] text-[#58595B] font-bold leading-relaxed max-w-4xl mx-auto text-center px-4 border-t border-neutral-100 pt-8 mt-2">
                As Gujarat’s Official Alibaba.com Channel Partner, <span className="text-neutral-900">Grownext</span> specializes in high-performance onboarding frameworks tailored for the state’s most powerful manufacturing clusters. We help local industries transform from domestic suppliers into globally recognized export brands.
              </p>
            </motion.div>

            {/* Infinite Marquee — Full Width Coverage */}
            <div className="w-full">
              <InfiniteMarquee
                items={industrialSectors.map((sector, i) => ({
                  id: i,
                  title: sector.label as string,
                  description: sector.desc as string,
                  image: sector.img as string,
                  icon: <sector.icon className="h-8 w-8 text-white" />
                }))}
                speed={7}
              />
            </div>
          </div>
        </section>

        {/* Live Google Reviews */}
        <GoogleReviews />

        {/* Knowledge Hub (Blog Section) */}
        <section id="blog" className="bg-white py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden group/blog">
          {/* Aesthetic background elements */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] pointer-events-none" />

          {/* Dynamic Ambient Glows */}
          <div className="absolute top-0 left-1/4 w-[50rem] h-[50rem] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] bg-blue-500/[0.02] rounded-full blur-[100px] pointer-events-none translate-y-1/2" />

          {/* Reference Grid Pattern */}
          <GridPattern
            width={60}
            height={60}
            className="opacity-[0.05] [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
              <div className="max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                    <BadgeCheck className="w-4 h-4" />
                    Official Alibaba.com Channel Partner in Gujarat
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-[#2B2B2B] mb-6 leading-[1.1] uppercase italic">
                    Global Trade <span className="text-primary italic not-italic">Intelligence.</span>
                  </h2>
                  <p className="text-[#58595B] font-bold text-lg md:text-xl italic border-l-4 border-primary pl-6">
                    &quot;Master the art of international B2B commerce with exclusive insights from Gujarat&apos;s leading Alibaba Export Strategists.&quot;
                  </p>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="hidden md:block"
              >
                <Button asChild size="lg" className="rounded-2xl px-12 h-20 text-xl font-black uppercase tracking-widest shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95 group">
                  <Link href="/blog" className="flex items-center gap-3">
                    View All Insights
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {latestPosts.slice(0, 3).map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="group relative flex flex-col bg-neutral-900/40 backdrop-blur-xl rounded-[3rem] overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(255,102,0,0.15)] h-full"
                >
                  {/* Glass Card Header */}
                  <Link href={`/blog/${post.slug}`} className="relative aspect-[4/3] overflow-hidden block">
                    <Image
                      src={post.frontmatter.image}
                      alt={post.frontmatter.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

                    {/* Category Badge */}
                    <div className="absolute top-6 left-6 inline-flex items-center px-4 py-1.5 rounded-full bg-neutral-950/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-black uppercase tracking-widest z-20 transition-all group-hover:bg-primary">
                      {post.frontmatter.category || "Export Strategy"}
                    </div>
                  </Link>

                  <div className="p-10 flex flex-col flex-grow relative">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center overflow-hidden border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                          {post.frontmatter.author ? (
                            <span className="text-xs font-black text-primary group-hover:text-white">
                              {post.frontmatter.author.substring(0, 2).toUpperCase()}
                            </span>
                          ) : (
                            <Users2 className="h-5 w-5 text-primary group-hover:text-white" />
                          )}
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-none">Intelligence By</p>
                          <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">{post.frontmatter.author || "Manu Arora"}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-black text-white/30 uppercase tracking-tighter italic">
                        <Clock className="h-3 w-3" />
                        6 Min Read
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-white leading-[1.1] mb-6 group-hover:text-primary transition-colors line-clamp-2 uppercase italic tracking-tighter">
                      <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
                    </h3>

                    <p className="text-neutral-500 font-bold leading-relaxed mb-10 flex-grow line-clamp-3 text-sm italic">
                      &quot;{post.frontmatter.desc}&quot;
                    </p>

                    <div className="pt-8 border-t border-white/5 mt-auto">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-3 text-white font-black text-xs uppercase tracking-[0.3em] group/link hover:text-primary transition-all"
                      >
                        Decode Insight
                        <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center group-hover/link:border-primary group-hover/link:bg-primary transition-all group-hover/link:scale-110">
                          <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Decorative Glow Hook */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </motion.div>
              ))}
            </div>

            <div className="mt-20 text-center md:hidden">
              <Button asChild size="lg" className="w-full rounded-2xl h-16 text-lg font-black uppercase tracking-widest shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95">
                <Link href="/blog">View All Insights</Link>
              </Button>
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
