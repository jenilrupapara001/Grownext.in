'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Search, 
  Settings, 
  BarChart, 
  Rocket, 
  Headset,
  ClipboardCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Layers,
  Zap,
  ShieldCheck,
  Globe,
  PieChart
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const steps = [
  {
    step: 'Step 1',
    title: 'Strategic Consultation',
    description: 'We begin with a data-driven dive into your business. Our experts analyze your product category, global demand, and competition to ensure a profitable entry into Alibaba.com.',
    details: [
      'Business eligibility & export readiness audit',
      'Category validation & competitor benchmarking',
      'Global market opportunity assessment',
      'Custom roadmap & ROI projection'
    ],
    image: 'https://images.unsplash.com/photo-1454165833767-027508496b41?auto=format&fit=crop&q=80&w=1200',
    icon: ClipboardCheck,
    color: 'bg-orange-500',
    stat: '95% Accuracy'
  },
  {
    step: 'Step 2',
    title: 'Certified Onboarding',
    description: 'Skip the technical hurdles. As an official partner, we handle the entire verification and setup process, ensuring your account meets Alibaba\'s highest gold supplier standards.',
    details: [
      'Gold Supplier account creation & verification',
      'Business Identity (V) compliance support',
      'Minisite design & brand story integration',
      'Platform settings & security optimization'
    ],
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2959210?auto=format&fit=crop&q=80&w=1200',
    icon: Settings,
    color: 'bg-blue-600',
    stat: 'Fast-Track (7 Days)'
  },
  {
    step: 'Step 3',
    title: 'Performance Listing (SEO)',
    description: 'Visibility is the engine of exports. We blend persuasive B2B copywriting with precise algorithmic optimization to ensure your products appear when global buyers search.',
    details: [
      'Deep B2B keyword research (Buyer Intent)',
      'Professional product description & specs',
      'Multi-language optimization for global reach',
      'High-conversion visual storytelling'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    icon: Search,
    color: 'bg-green-600',
    stat: 'Top 5% Ranking'
  },
  {
    step: 'Step 4',
    title: 'Global Marketing & Ads',
    description: 'Accelerate your growth with targeted KWA (Keyword Advertising). We manage your ad spend and inquiry flow to maximize qualified lead generation.',
    details: [
      'Keyword Advertising (KWA) management',
      'Smart marketing campaign orchestration',
      'Inquiry response time optimization',
      'Lead scoring & management protocols'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bbbda50468f9?auto=format&fit=crop&q=80&w=1200',
    icon: Rocket,
    color: 'bg-purple-600',
    stat: '3x Lead Flow'
  },
  {
    step: 'Step 5',
    title: 'Scale & Account Management',
    description: 'We don\'t just set you up; we grow with you. Our dedicated account managers provide ongoing data analysis and strategy updates to keep you ahead of competitors.',
    details: [
      'Performance analytics & monthly reviews',
      'Ongoing listing updates & A/B testing',
      'New market expansion strategies',
      'Dedicated day-to-day support team'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    icon: BarChart,
    color: 'bg-red-600',
    stat: '40% YoY Growth'
  },
]

export default function Services() {
  return (
    <div className="flex flex-col gap-24 pb-20">
        {/* Hero Section */}
        <section className="relative pt-24 lg:pt-36 bg-gray-950 overflow-hidden min-h-[70vh] flex items-center">
          {/* Static Grid Background */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #FF6600 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          
          <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-black uppercase tracking-widest mb-8 border border-primary/30">
                <Layers className="h-4 w-4" />
                Full-Stack Export Agency
              </div>
              <h1 className="text-5xl font-black tracking-tight text-white sm:text-8xl mb-8 leading-[1]">
                The <span className="text-primary">End-to-End</span> Growth Roadmap
              </h1>
              <p className="text-xl leading-9 text-gray-400 font-medium max-w-2xl">
                We guide Indian manufacturers through every stage of their global selling journey. From initial validation to long-term account dominance, GrowNext is your dedicated partner for export success.
              </p>
              
              <div className="mt-12 flex flex-wrap gap-6">
                <Button asChild size="lg" className="rounded-full px-10 h-16 text-lg font-bold shadow-lg shadow-primary/20">
                  <Link href="/contact">Download Service Guide</Link>
                </Button>
                <div className="flex items-center gap-4">
                   <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="h-10 w-10 rounded-full border-2 border-gray-900 overflow-hidden">
                           <Image src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000000}?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80`} alt="Partner" width={40} height={40} />
                        </div>
                      ))}
                   </div>
                   <p className="text-gray-500 font-bold text-sm">Certified by Alibaba.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Static Decoration */}
          <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-[40rem] h-[40rem] border-[40px] border-primary/5 rounded-full" />
        </section>

      {/* Steps Section - Ultra Detailed */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="absolute top-0 left-8 bottom-0 w-px bg-gray-100 hidden lg:block" />
        
          <div className="space-y-32">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start"
              >
                {/* Vertical Step Marker */}
                <div className="hidden lg:flex flex-col items-center gap-4 relative z-10 pt-2">
                   <div className={`h-16 w-16 rounded-2xl ${step.color} text-white flex items-center justify-center font-black text-2xl shadow-xl`}>
                      {index + 1}
                   </div>
                   <div className="flex-grow w-px bg-gray-100" />
                </div>

                <div className="lg:w-1/2 flex-grow">
                  <div className="flex items-center gap-4 mb-6 lg:hidden">
                     <div className={`h-12 w-12 rounded-xl ${step.color} text-white flex items-center justify-center font-black text-xl shadow-lg`}>
                        {index + 1}
                     </div>
                     <div className="text-sm font-black text-primary uppercase tracking-widest">{step.step}</div>
                  </div>
                  
                  <h2 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl mb-8">
                    {step.title}
                  </h2>
                  <p className="text-xl leading-9 text-gray-600 mb-10 font-medium">
                    {step.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {step.details.map((detail) => (
                      <div key={detail} className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-transparent hover:border-gray-200 transition-all group">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-bold text-sm leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <Button asChild variant="outline" className="rounded-full px-6 h-12 font-bold group border-2">
                      <Link href="/contact" className="flex items-center gap-2">
                        Get Started <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <div className="h-10 w-px bg-gray-200" />
                    <div>
                      <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Typical Outcome</div>
                      <div className="text-lg font-black text-gray-900">{step.stat}</div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-[45%] w-full aspect-[4/3] rounded-[3.5rem] bg-white border-8 border-gray-50 shadow-2xl flex items-center justify-center relative overflow-hidden group">
                  <Image 
                    src={step.image} 
                    alt={step.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-xl">
                     <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-black text-gray-900 uppercase tracking-widest">Process Flow</div>
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                     </div>
                     <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div className={`h-full ${step.color} w-full`} />
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </section>

      {/* Performance Summary Cards */}
      <section className="bg-gray-50 py-32 rounded-[4rem]">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-20">
               <h2 className="text-base font-black text-primary uppercase tracking-widest mb-4">The Result</h2>
               <p className="text-4xl font-black text-gray-900 sm:text-5xl">Impact Beyond Listings</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[
                 { label: 'Platform Ranking', val: 'Top 10%', icon: Globe, desc: 'We consistently push our clients into the top tier of Alibaba search.' },
                 { label: 'Conversion Rate', val: '+25%', icon: Zap, desc: 'Optimized store layouts lead to higher inquiry-to-order ratios.' },
                 { label: 'Brand Value', val: 'Global', icon: ShieldCheck, desc: 'Position your business as a world-class manufacturing authority.' },
                 { label: 'Export ROI', val: '5x Avg', icon: PieChart, desc: 'Our strategies are designed for maximum return on marketing spend.' },
               ].map((card, i) => (
                 <div 
                   key={i}
                   className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100"
                 >
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                       <card.icon className="h-6 w-6" />
                    </div>
                    <div className="text-3xl font-black text-gray-900 mb-2">{card.val}</div>
                    <div className="text-sm font-black text-primary uppercase tracking-widest mb-4">{card.label}</div>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed">{card.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Support CTA - Enhanced */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-primary rounded-[4rem] p-12 lg:p-24 flex flex-col lg:flex-row gap-16 items-center overflow-hidden relative shadow-[0_48px_100px_-12px_rgba(255,102,0,0.3)]">
          {/* Static Pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />
          
          <div className="lg:flex-1 text-center lg:text-left relative z-10">
            <h2 className="text-5xl font-black tracking-tight text-white mb-8 leading-[1.1]">
              Need a Custom <br className="hidden lg:block" /> Export Strategy?
            </h2>
            <p className="text-xl text-white/90 mb-12 font-medium leading-relaxed">
              Every manufacturing business is unique. Speak with our B2B experts to create a tailored onboarding and growth plan for your specific products and target markets.
            </p>
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-10 h-18 text-lg font-black text-primary shadow-2xl hover:scale-105 transition-transform">
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-18 text-lg font-black text-white border-white/30 hover:bg-white/10">
                <Link href="https://wa.me/919988339166" target="_blank">WhatsApp Our Experts</Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/3 flex justify-center relative z-10">
            <div className="relative h-64 w-64">
              <div className="absolute inset-0 bg-white rounded-full opacity-10" />
              <div className="absolute inset-8 bg-white/20 rounded-full flex items-center justify-center shadow-2xl border border-white/30">
                <Headset className="h-32 w-32 text-white" />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl">
                 <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl">
                 <Globe className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
