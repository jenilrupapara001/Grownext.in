'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Target, Eye, Handshake, Users, Globe } from 'lucide-react'

const values = [
  {
    title: 'Mission',
    description: 'Enable every Indian SME to access global buyers through digital B2B platforms and official expertise.',
    icon: Target,
  },
  {
    title: 'Vision',
    description: 'Make India a dominant exporter by bridging the gap between local manufacturing and global demand.',
    icon: Eye,
  },
]

export default function Company() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 bg-gray-50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Your Official Bridge to the <span className="text-primary">Global Marketplace</span>
            </h1>
            <p className="text-xl leading-8 text-gray-600">
              GrowNext is more than just a service provider; we are your strategic partner in global trade, officially certified by Alibaba.com to empower Indian businesses.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 -z-10 h-full w-1/2 hidden lg:block">
          <div className="h-full w-full bg-primary/5 skew-x-12 origin-top-right" />
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1600880212319-46b738c2f829?auto=format&fit=crop&q=80&w=1200" 
              alt="Office meeting" 
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              About GrowNext
            </h2>
            <div className="space-y-6 text-lg leading-8 text-gray-600">
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
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-950 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary mb-6">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership with Alibaba.com */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl bg-primary/5 border border-primary/10 p-8 lg:p-16 flex flex-col lg:flex-row gap-12 items-center text-center lg:text-left">
          <div className="lg:flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <Handshake className="h-4 w-4" />
              Strategic Alliance
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
              The Power of Partnership
            </h2>
            <p className="text-lg leading-8 text-gray-600 mb-8">
              As an official Alibaba.com Channel Partner, we have direct access to internal platform insights, expedited support channels, and the latest training modules. This partnership allows us to offer our clients a level of service and results that others simply cannot match.
            </p>
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-primary" />
                <span className="font-bold text-gray-900">Global Reach</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                <span className="font-bold text-gray-900">Certified Experts</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center border border-gray-100">
            <div className="bg-primary p-4 rounded-xl mb-4">
              <Globe className="h-12 w-12 text-white" />
            </div>
            <p className="text-center font-bold text-gray-900">Official Channel Partner</p>
            <p className="text-center text-sm text-gray-500 mt-2">Certified for India Region</p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
          Our Team Philosophy
        </h2>
        <p className="text-lg leading-8 text-gray-600 max-w-3xl mx-auto mb-16">
          We believe in transparency, technical excellence, and relentless focus on client ROI. Our team consists of B2B strategists, digital marketing experts, and export consultants who are all united by a single goal: seeing Indian businesses win globally.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Transparency', desc: 'Real data, honest reporting, and clear expectations from day one.' },
            { title: 'Excellence', desc: 'Going beyond "good enough" to ensure your listings stand out.' },
            { title: 'Collaboration', desc: 'We work as an extension of your export team, not just a vendor.' }
          ].map((item) => (
            <div key={item.title} className="p-8 rounded-2xl border border-gray-100 bg-white hover:border-primary/20 transition-colors">
              <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
