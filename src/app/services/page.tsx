'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Search, 
  Settings, 
  BarChart, 
  Rocket, 
  Headset,
  ClipboardCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const steps = [
  {
    step: 'Step 1',
    title: 'Free Consultation',
    description: 'We begin with a deep dive into your business. Our experts analyze your product category, competition, and global market potential to ensure you are ready for Alibaba.com.',
    details: [
      'Business eligibility analysis',
      'Category & product validation',
      'Market opportunity assessment'
    ],
    icon: ClipboardCheck,
  },
  {
    step: 'Step 2',
    title: 'Alibaba Account Setup',
    description: 'Leave the technical hurdles to us. We handle the entire onboarding process, ensuring your account is verified and compliant with Alibaba.com standards.',
    details: [
      'Seller account creation',
      'Verification & compliance support',
      'Profile optimization'
    ],
    icon: Settings,
  },
  {
    step: 'Step 3',
    title: 'Product Listing Optimization',
    description: 'Visibility is key. We optimize your listings with high-intent keywords, professional descriptions, and high-quality visuals to attract global buyers.',
    details: [
      'B2B keyword research',
      'Image & description optimization',
      'Buyer intent targeting'
    ],
    icon: Search,
  },
  {
    step: 'Step 4',
    title: 'Global Marketing',
    description: 'Accelerate your growth with targeted advertising. We manage your Alibaba.com ad spend and inquiry flow to maximize lead generation.',
    details: [
      'Sponsored ad management',
      'Inquiry optimization',
      'Performance tracking'
    ],
    icon: Rocket,
  },
  {
    step: 'Step 5',
    title: 'Growth & Scale',
    description: 'We don\'t just set you up and leave. Our account managers provide ongoing support to scale your export business and expand into new markets.',
    details: [
      'Expansion strategy',
      'Long-term account management',
      'Quarterly performance reviews'
    ],
    icon: BarChart,
  },
]

export default function Services() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 bg-gray-900 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              End-to-End <span className="text-primary">Export Solutions</span>
            </h1>
            <p className="text-xl leading-8 text-gray-400">
              We guide you through every stage of your global selling journey. From initial validation to long-term account growth, GrowNext is your dedicated export partner.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,102,0,0.1),transparent)]" />
      </section>

      {/* Steps Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
                  {step.step}
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                  {step.title}
                </h2>
                <p className="text-lg leading-8 text-gray-600 mb-8">
                  {step.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="ghost" className="text-primary hover:text-primary hover:bg-primary/5 p-0 h-auto font-bold group">
                  <Link href="/contact" className="flex items-center gap-2">
                    Get started with this step <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              <div className="lg:w-1/2 w-full aspect-video rounded-3xl bg-gray-50 border border-gray-100 flex items-center justify-center p-12 relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <step.icon className="h-32 w-32 text-primary/20 group-hover:text-primary/40 transition-colors" />
                <div className="absolute bottom-8 right-8 text-8xl font-black text-gray-100 select-none">
                  0{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Support CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-gray-950 rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
              Need a Custom Export Strategy?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Every business is unique. Speak with our B2B experts to create a tailored onboarding and growth plan for your specific products and target markets.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-white border-white/20 hover:bg-white/5">
                <Link href="https://wa.me/919876543210" target="_blank">Contact via WhatsApp</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative h-48 w-48">
              <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-20" />
              <div className="absolute inset-4 bg-primary/40 rounded-full animate-pulse delay-75 opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Headset className="h-24 w-24 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
