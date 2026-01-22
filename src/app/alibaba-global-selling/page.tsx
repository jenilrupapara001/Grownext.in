'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Globe2, 
  TrendingUp, 
  ShieldCheck, 
  Lightbulb, 
  HelpCircle,
  CheckCircle2,
  XCircle
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const myths = [
  {
    myth: "Alibaba is only for large companies.",
    fact: "Alibaba is designed specifically for SMEs. Most sellers on the platform are small to medium-scale manufacturers and traders.",
    icon: XCircle
  },
  {
    myth: "It's too expensive to start.",
    fact: "Compared to traditional export exhibitions and physical marketing, Alibaba offer a far higher ROI and lower entry cost for global reach.",
    icon: XCircle
  },
  {
    myth: "I need to know English perfectly.",
    fact: "Alibaba provides built-in translation tools, and GrowNext helps you manage communications effectively.",
    icon: XCircle
  }
]

const faqs = [
  {
    question: "Is GrowNext officially associated with Alibaba?",
    answer: "Yes, GrowNext is an official Alibaba.com Channel Partner in India. We are certified to provide onboarding, training, and account management services."
  },
  {
    question: "How long does the onboarding process take?",
    answer: "Typically, the account setup and verification take 7-10 working days. Full store optimization and product listing can take another 2 weeks depending on the catalog size."
  },
  {
    question: "Do you guarantee leads?",
    answer: "While we cannot 'guarantee' a specific number of leads, our data-driven optimization and marketing strategies are designed to maximize your visibility to high-intent global buyers."
  },
  {
    question: "What industries are eligible to sell on Alibaba?",
    answer: "Almost any B2B category is eligible, including Textiles, Agriculture, Machinery, Chemicals, Consumer Electronics, and more. We validate your category during the consultation."
  },
  {
    question: "Do you support small businesses with no export experience?",
    answer: "Absolutely. A large part of our mission is 'handholding' SMEs who are new to exports and helping them navigate the global B2B landscape."
  }
]

export default function AlibabaSelling() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 bg-[#FF6600]/5 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
                <Globe2 className="h-4 w-4" />
                Global B2B Excellence
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
                What is <span className="text-primary">Alibaba.com?</span>
              </h1>
              <p className="text-xl leading-8 text-gray-600">
                The world's largest B2B marketplace, connecting millions of buyers and sellers across 190+ countries. For Indian exporters, it's the ultimate gateway to international trade.
              </p>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-4">
               <div className="h-full w-full bg-gray-50 rounded-2xl flex items-center justify-center">
                  <span className="text-primary font-bold text-4xl">Alibaba.com</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Alibaba for India */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Indian Exporters Need Alibaba.com
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: '24/7 Global Exposure',
              desc: 'Your products are visible to buyers in every time zone, 365 days a year.',
              icon: Globe2
            },
            {
              title: 'Cost-Effective Exporting',
              desc: 'Reach thousands of buyers at a fraction of the cost of traditional export marketing.',
              icon: TrendingUp
            },
            {
              title: 'Data-Driven Insights',
              desc: 'Understand exactly what global buyers are searching for in your category.',
              icon: Lightbulb
            }
          ].map((item) => (
            <div key={item.title} className="p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Myths & Facts */}
      <section className="bg-gray-950 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center mb-16">
            Common Myths vs. <span className="text-primary">The Facts</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {myths.map((m, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                <div className="flex items-center gap-3 mb-4 text-red-400">
                  <m.icon className="h-5 w-5" />
                  <span className="font-bold uppercase tracking-wider text-xs">Myth</span>
                </div>
                <p className="text-white font-medium mb-6 italic">"{m.myth}"</p>
                <div className="flex items-center gap-3 mb-4 text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-bold uppercase tracking-wider text-xs">Fact</span>
                </div>
                <p className="text-gray-400">{m.fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
            <HelpCircle className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm overflow-hidden">
              <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  )
}
