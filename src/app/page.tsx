'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  ChevronRight, 
  ShieldCheck, 
  TrendingUp, 
  Globe2, 
  BarChart3, 
  Users2,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  { label: 'Export Inquiries Generated', value: '10K+' },
  { label: 'Businesses Onboarded', value: '500+' },
  { label: 'Global Markets Reached', value: '190+' },
  { label: 'Customer Satisfaction', value: '98%' },
]

const services = [
  {
    title: 'Alibaba Onboarding',
    description: 'Complete seller account setup, compliance verification, and category validation for Indian SMEs.',
    icon: ShieldCheck,
  },
  {
    title: 'Product Optimization',
    description: 'Keyword research and listing optimization to ensure your products rank higher for global buyers.',
    icon: TrendingUp,
  },
  {
    title: 'Global Marketing',
    description: 'Data-driven ad campaigns and lead management strategies to maximize your export ROI.',
    icon: Globe2,
  },
]

const testimonials = [
  {
    quote: "Within 3 months of onboarding with GrowNext, we started receiving verified inquiries from the Middle East and Europe. Their expertise is unmatched.",
    author: "Rajesh Kumar",
    role: "CEO, Kumar Textiles",
    location: "Surat, India"
  },
  {
    quote: "The account management team at GrowNext handled everything from listing to lead generation. Our exports have grown by 40% in just six months.",
    author: "Amit Sharma",
    role: "Export Manager, IndoGems",
    location: "Jaipur, India"
  }
]

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 lg:pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Official Alibaba.com Channel Partner
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
                Empowering Indian Businesses to <span className="text-primary">Sell Globally</span>
              </h1>
              <p className="text-lg leading-8 text-gray-600 mb-10">
                From onboarding to global lead generation — GrowNext helps Indian SMEs scale exports through strategic Alibaba.com partnership and certified expertise.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full px-8 h-14 text-base">
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-base">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
              <div className="mt-10 flex items-center gap-x-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-white overflow-hidden bg-gray-100">
                      <Image 
                        src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`} 
                        alt="User" 
                        width={40} 
                        height={40} 
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Joined by <span className="text-primary font-bold">500+</span> Indian exporters
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200" 
                  alt="Indian exporter using Alibaba dashboard" 
                  width={800} 
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-[240px] hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-100 rounded-lg text-green-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <span className="font-bold text-gray-900">Verified Partner</span>
                </div>
                <p className="text-xs text-gray-500">Certified by Alibaba.com for SME Onboarding & Management.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <dt className="text-sm font-semibold leading-7 text-gray-600">{stat.label}</dt>
                <dd className="text-3xl font-bold tracking-tight text-primary">{stat.value}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">Our Expertise</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to export successfully
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide end-to-end support for Indian manufacturers and SMEs to transition from domestic sales to global B2B success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              <Link 
                href="/services" 
                className="inline-flex items-center text-sm font-bold text-primary hover:gap-2 transition-all"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why GrowNext */}
      <section className="bg-gray-950 py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
                Why Indian Exporters Choose GrowNext
              </h2>
              <div className="space-y-8">
                {[
                  { title: 'Local Indian Support', desc: 'Personalized guidance from experts who understand the Indian manufacturing landscape.' },
                  { title: 'Alibaba-Certified Experts', desc: 'Work with professionals who are officially trained in Alibaba.com platform mechanics.' },
                  { title: 'End-to-End Execution', desc: 'From account setup to listing and marketing — we handle the complexity for you.' },
                  { title: 'ROI-Focused Approach', desc: 'We don\'t just manage accounts; we drive qualified inquiries and sales growth.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-1 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="mt-1 text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Button asChild className="rounded-full px-8">
                  <Link href="/contact">Schedule a Call</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-900 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2959210?auto=format&fit=crop&q=80&w=1200" 
                  alt="Team meeting" 
                  fill
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                    <p className="text-white text-lg font-medium italic">
                      "Our mission is to enable every Indian SME to access global buyers through the world's largest B2B marketplace."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">Success Stories</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by SMEs across India
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <p className="text-lg text-gray-700 italic mb-8">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {t.author[0]}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.author}</h4>
                  <p className="text-sm text-gray-500">{t.role} • {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-primary px-6 py-16 text-center shadow-2xl rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Take Your Business Global?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/80">
            Book a free consultation with our Alibaba-certified experts and discover your export potential today.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" variant="secondary" className="rounded-full px-8 text-primary font-bold">
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
            <Link href="/alibaba-global-selling" className="text-sm font-semibold leading-6 text-white flex items-center gap-1">
              Learn about Alibaba <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          {/* Decorative circles */}
          <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
            <circle cx="512" cy="512" r="512" fill="url(#circle-gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="circle-gradient">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
    </div>
  )
}
