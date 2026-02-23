import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, CalendarDays, CheckCircle2, ChevronRight, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
    title: 'How to Sell on Alibaba: A Complete Guide for Indian Exporters',
    description: 'Learn the step-by-step process of setting up a successful Alibaba Seller Account, understanding Alibaba Registration requirements, and dominating international B2B sales from India.',
}

export default function BlogPost() {
    return (
        <div className="bg-gray-50 min-h-screen pb-24">
            {/* Blog Header / Hero */}
            <section className="bg-white pt-32 pb-16 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-bold hover:underline mb-8">
                        <ArrowLeft className="h-4 w-4" /> Back to Knowledge Hub
                    </Link>

                    <div className="flex items-center gap-4 mb-6">
                        <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                            Platform Strategy
                        </span>
                        <span className="flex items-center gap-2 text-gray-500 text-sm font-bold">
                            <CalendarDays className="h-4 w-4" />
                            Published: Jan 15, 2026
                        </span>
                        <span className="flex items-center gap-2 text-gray-500 text-sm font-bold">
                            <Clock className="h-4 w-4" />
                            12 min read
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-8">
                        How to Sell on Alibaba: A Complete Guide for Indian Exporters
                    </h1>

                    <p className="text-xl text-gray-600 font-medium leading-relaxed mb-12">
                        The definitive blueprint for Indian manufacturers and traders to transition from local dominance to global B2B expansion using an optimized Alibaba Seller Account.
                    </p>

                    <div className="relative h-[400px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
                        <Image
                            src="/blog-export-guide.png"
                            alt="Global Export Logistics"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Blog Content Layout (Boxed, Centered) */}
            <section className="px-6 -mt-8 relative z-20">
                <div className="max-w-3xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] border border-gray-100">

                    <article className="prose prose-lg md:prose-xl prose-gray max-w-none">

                        <p className="lead text-2xl font-bold text-gray-900 leading-snug mb-10">
                            India's export sector is experiencing an unprecedented boom. However, many exceptional MSMEs remain restricted to their regional networks. If you are asking yourself, <em>"How to export from India?"</em> or <em>"How to sell on Alibaba?"</em>, this guide is your operational blueprint.
                        </p>

                        <h2 className="text-3xl font-black text-gray-900 mt-12 mb-6">Introduction: The Power of B2B Wholesale</h2>
                        <p>
                            Unlike B2C platforms where you chase individual transactions, Alibaba.com is a pure-play B2B ecosystem. Securing a buyer here often means establishing a lifelong supply contract. The barrier to entry involves understanding the <strong>Alibaba Seller Account Requirements</strong>, structuring your pricing, and positioning your factory's authority.
                        </p>

                        <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-r-3xl my-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 mt-0">Strategic Insight</h3>
                            <p className="m-0 text-gray-700">
                                Having an <strong>Alibaba Supplier Account</strong> is not just about listing products; it's about digital exhibitions. Buyers evaluate your company profile, certifications, and response rates before they ever look at your unit price.
                            </p>
                        </div>

                        <h2 className="text-3xl font-black text-gray-900 mt-12 mb-6">Step 1: The Alibaba Registration Process</h2>
                        <p>
                            The first physical hurdle is the <strong>Alibaba Registration</strong>. As an <em>Alibaba Authorized Channel Partner</em>, we observe that self-registration often leads to delayed verifications and sub-optimal tier placement.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Essential Requirements Checklist</h3>
                        <ul className="list-none pl-0 space-y-4 my-6">
                            {[
                                'Active Import Export Code (IEC)',
                                'GST Registration Certificate',
                                'Business Registration Proof (Udyam, Incorporation)',
                                'Registered Corporate Bank Account',
                                'Quality Certifications (ISO, CE) for trust building'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">Step 2: Choosing the Right Alibaba Plan</h2>
                        <p>
                            Alibaba offers different membership tiers. Selecting the right <strong>Alibaba Plan</strong> determines your exact visibility algorithms and Star Rating potential.
                        </p>

                        <div className="overflow-x-auto my-10 rounded-2xl border border-gray-200">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="p-5 text-sm font-black text-gray-900 uppercase tracking-wider">Feature</th>
                                        <th className="p-5 text-sm font-black text-gray-900 uppercase tracking-wider">Basic Standard</th>
                                        <th className="p-5 text-sm font-black text-primary uppercase tracking-wider">Global Gold Supplier (GGS)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-gray-700 font-medium">
                                    <tr>
                                        <td className="p-5">Product Postings</td>
                                        <td className="p-5">Limited</td>
                                        <td className="p-5 font-bold">Unlimited</td>
                                    </tr>
                                    <tr>
                                        <td className="p-5">Showcase Slots</td>
                                        <td className="p-5">None</td>
                                        <td className="p-5 font-bold">Included (Boosts ranking by 40%)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-5">Mini-Site Design</td>
                                        <td className="p-5">Standard Theme</td>
                                        <td className="p-5 font-bold">Custom Professional Design</td>
                                    </tr>
                                    <tr>
                                        <td className="p-5">RFQs Access</td>
                                        <td className="p-5">Restricted</td>
                                        <td className="p-5 font-bold">Premium Access quota</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">Step 3: Optimization & Ranking (SEO)</h2>
                        <p>
                            Just having a store solves nothing. The modern B2B buyer uses search. Your products must rank for specific commercial intent keywords. This involves keyword packing in titles, comprehensive product details, excellent response rates, and utilizing your Showcase allocations effectively.
                        </p>
                        <p>
                            Often, businesses look to <strong>buy Alibaba seller account</strong> services purely for the setup. However, the real ROI comes from ongoing store optimization and inquiry management.
                        </p>

                        <hr className="my-12 border-gray-100" />

                        <h2 className="text-3xl font-black text-gray-900 mt-12 mb-8">Frequently Asked Questions</h2>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">How much does it cost to sell on Alibaba from India?</h4>
                                <p className="text-gray-700 m-0">The pricing varies based on the GGS package selected (Standard vs. Premium). The investment is generally structured as an annual membership fee rather than per-transaction commissions. Contact an Alibaba Channel Partner for current regional pricing.</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">What is the difference between a Seller and a Buyer account?</h4>
                                <p className="text-gray-700 m-0">A buyer account is free and allows you to source products. An <strong>Alibaba Seller Account</strong> is a paid, verified corporate membership allowing you to host a storefront, list products, and receive global RFQs (Requests for Quotation).</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Can a Channel Partner manage my account?</h4>
                                <p className="text-gray-700 m-0">Yes. As an authorized <strong>Alibaba Channel Partner Gujarat</strong>, Grownext provides complete end-to-end management, from mini-site design to daily inquiry handling and keyword optimization.</p>
                            </div>
                        </div>

                    </article>

                    {/* Inline Conversion CTA */}
                    <div className="mt-20 bg-gray-900 rounded-[2.5rem] p-10 md:p-14 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-primary/10 transition-colors duration-500 group-hover:bg-primary/20" />
                        <TrendingUp className="h-16 w-16 text-primary mx-auto mb-6 opacity-80" />
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight relative z-10">
                            Skip the Learning Curve. Export Faster.
                        </h3>
                        <p className="text-gray-400 font-medium text-lg mb-10 max-w-xl mx-auto relative z-10">
                            Let our experts handle your complete Alibaba onboarding and optimization. Get a free account audit and export strategy session today.
                        </p>
                        <Button asChild size="lg" className="rounded-full px-12 h-16 text-lg font-black bg-primary hover:bg-white hover:text-gray-900 transition-all shadow-xl relative z-10">
                            <Link href="/contact">Book Your Free Consultation</Link>
                        </Button>
                    </div>

                </div>
            </section>
        </div>
    )
}
