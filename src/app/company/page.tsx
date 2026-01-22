'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
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
  CheckCircle2
} from 'lucide-react'

const values = [
  {
    title: 'Our Mission',
    description: 'To dismantle the barriers of global trade for Indian SMEs by providing world-class digital tools and certified expertise.',
    icon: Target,
    color: 'bg-orange-500'
  },
  {
    title: 'Our Vision',
    description: 'To position India as a global manufacturing and export powerhouse through strategic B2B platform adoption.',
    icon: Eye,
    color: 'bg-blue-600'
  },
]

const timeline = [
  { year: '2020', title: 'The Inception', description: 'GrowNext was founded with a small team of export enthusiasts in Mumbai.' },
  { year: '2021', title: 'Alibaba Partnership', description: 'Became an Official Alibaba.com Channel Partner for the West India region.' },
  { year: '2022', title: '500+ Clients', description: 'Successfully onboarded over 500 SMEs across Textiles, Machinery, and Agriculture.' },
  { year: '2024', title: 'Global Expansion', description: 'Extended support to international markets including GCC and Southeast Asia.' },
]

export default function Company() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 bg-gray-50 overflow-hidden min-h-[60vh] flex items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-black uppercase tracking-widest mb-8">
              <Sparkles className="h-4 w-4" />
              Est. 2020
            </div>
            <h1 className="text-5xl font-black tracking-tight text-gray-900 sm:text-7xl mb-8 leading-[1.1]">
              Your Official Bridge to the <span className="text-primary">Global Market</span>
            </h1>
            <p className="text-xl leading-8 text-gray-600 font-medium">
              GrowNext is more than just a service provider; we are your strategic partner in global trade, officially certified by Alibaba.com to empower Indian businesses.
            </p>
          </motion.div>
        </div>
        
        {/* Animated Background Decoration */}
        <div className="absolute top-0 right-0 -z-0 h-full w-full hidden lg:block">
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="absolute top-0 right-0 h-full w-1/2 bg-primary/5 -skew-x-12 origin-top-right" 
          />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        </div>
      </section>

      {/* About Section - Detailed */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl group"
          >
            <Image 
              src="https://images.unsplash.com/photo-1600880212319-46b738c2f829?auto=format&fit=crop&q=80&w=1200" 
              alt="Office meeting" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <div className="text-4xl font-black mb-1">5+</div>
              <div className="text-sm font-bold uppercase tracking-widest text-primary">Years of Excellence</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-base font-black leading-7 text-primary uppercase tracking-widest mb-4">The GrowNext Story</h2>
            <h3 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-8 sm:text-5xl">
              Pioneering Indian B2B Exports
            </h3>
            <div className="space-y-6 text-lg leading-8 text-gray-600 font-medium">
              <p>
                Founded with a vision to revolutionize how Indian SMEs approach exports, GrowNext has quickly established itself as a leading Alibaba.com Channel Partner in India.
              </p>
              <p>
                We understand the unique challenges faced by Indian manufacturers — from language barriers and digital compliance to global competition and lead management. Our team of certified experts provides the "local touch" needed to succeed on a global scale.
              </p>
              <p>
                By combining Alibaba's world-class platform with our hands-on onboarding and management services, we help businesses unlock new revenue streams and establish a lasting global presence.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-black text-gray-900 mb-2">500+</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Global Clients</div>
              </div>
              <div>
                <div className="text-3xl font-black text-gray-900 mb-2">10k+</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Leads Generated</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section - High Impact */}
      <section className="bg-gray-950 py-32 rounded-[4rem] mx-4 lg:mx-8 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group bg-white/5 backdrop-blur-xl p-12 rounded-[3rem] border border-white/10 hover:border-primary/30 transition-all duration-500"
              >
                <div className={`inline-flex h-20 w-20 items-center justify-center rounded-[2rem] ${value.color} mb-8 shadow-2xl group-hover:scale-110 transition-transform`}>
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-black text-white mb-6">{value.title}</h3>
                <p className="text-gray-400 text-xl leading-relaxed font-medium">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-base font-black leading-7 text-primary uppercase tracking-widest">Our Journey</h2>
          <p className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Milestones of Growth</p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-100 hidden md:block" />
          
          <div className="space-y-16 md:space-y-24">
            {timeline.map((item, index) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 flex justify-center md:justify-end px-12 text-center md:text-right">
                  <div className={index % 2 === 1 ? 'md:text-left' : 'md:text-right'}>
                    <div className="text-4xl font-black text-primary mb-2">{item.year}</div>
                    <h4 className="text-2xl font-extrabold text-gray-900 mb-3">{item.title}</h4>
                    <p className="text-gray-600 font-medium leading-relaxed max-w-md mx-auto md:mx-0">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 h-6 w-6 rounded-full bg-white border-4 border-primary z-10 hidden md:block" />
                
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Details */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3.5rem] bg-gray-50 border border-gray-100 p-8 lg:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-black mb-8">
                <Handshake className="h-4 w-4" />
                OFFICIAL CHANNEL PARTNER
              </div>
              <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-8 leading-[1.1]">
                Unlocking the Full Potential of <span className="text-primary">Alibaba.com</span>
              </h2>
              <p className="text-xl leading-8 text-gray-600 mb-10 font-medium">
                Our partnership gives you more than just a listing. You get direct access to Alibaba's internal ecosystem, expedited verification, and priority support.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, text: 'Priority Verification' },
                  { icon: Zap, text: 'Fast-Track Onboarding' },
                  { icon: Award, text: 'Certified Management' },
                  { icon: Globe, text: 'Global Network Access' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                    <item.icon className="h-6 w-6 text-primary" />
                    <span className="font-bold text-gray-900">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="bg-white p-12 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center border-8 border-gray-100 relative max-w-sm w-full aspect-square">
                 <div className="bg-primary/10 p-8 rounded-full mb-8">
                    <Globe className="h-20 w-20 text-primary animate-spin-slow" />
                 </div>
                 <p className="text-center font-black text-gray-900 text-2xl">Alibaba.com</p>
                 <p className="text-center text-sm font-black text-primary uppercase tracking-widest mt-2">Certified Partner India</p>
                 
                 {/* Decorative elements */}
                 <div className="absolute -top-4 -right-4 h-12 w-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <Award className="h-6 w-6" />
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy - Staggered Cards */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 text-center pb-20">
        <h2 className="text-base font-black leading-7 text-primary uppercase tracking-widest mb-4">How We Work</h2>
        <h3 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl mb-8">
          Our Team Philosophy
        </h3>
        <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto mb-20 font-medium">
          We operate as an extension of your own export department, driven by data and committed to your long-term success.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Radical Transparency', 
              desc: 'We provide real-time dashboards and honest reporting. No vanity metrics, only results that impact your bottom line.',
              icon: ShieldCheck
            },
            { 
              title: 'Technical Excellence', 
              desc: 'Our listings are built for both buyers and algorithms. We blend persuasive copywriting with precise SEO.',
              icon: Zap
            },
            { 
              title: 'Relentless Innovation', 
              desc: 'The B2B landscape changes fast. We constantly update our strategies to keep you ahead of the global competition.',
              icon: Sparkles
            }
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-[2.5rem] border border-gray-100 bg-white hover:border-primary/20 hover:shadow-2xl transition-all duration-500 text-left"
            >
              <div className="h-14 w-14 rounded-2xl bg-gray-50 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <item.icon className="h-7 w-7" />
              </div>
              <h4 className="text-2xl font-black text-gray-900 mb-4">{item.title}</h4>
              <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
