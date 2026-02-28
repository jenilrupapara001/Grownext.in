import * as React from 'react'
import { motion } from "framer-motion";
import { BadgeCheck, ArrowRight, CheckCircle2, Globe2, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MacbookScrollDemo() {
    const features = [
        "Alibaba supplier registration and verification support in Gujarat",
        "Product listing optimization for international search visibility",
        "RFQ management and inquiry handling",
        "Global buyer targeting across USA, Europe, Middle East, and Africa",
        "Ongoing account performance monitoring and export growth strategy"
    ];

    return (
        <section className="w-full bg-white dark:bg-neutral-950 px-6 py-24 lg:py-32 overflow-hidden relative">
            {/* Subtle background effects */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] -z-10 rounded-full" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 blur-[120px] -z-10 rounded-full" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Side: Illustration / Visual Accent */}
                    <div className="lg:col-span-5 relative order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square rounded-[3rem] bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200 dark:border-white/10 p-12 flex flex-col justify-center items-center group overflow-hidden"
                        >
                            {/* Animated Background Icons */}
                            <Globe2 className="absolute top-10 left-10 w-12 h-12 text-primary/20 -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                            <TrendingUp className="absolute bottom-12 right-12 w-16 h-16 text-primary/10 rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                            <ShieldCheck className="absolute top-1/2 right-4 w-10 h-10 text-primary/5 -translate-y-1/2" />
                            <div className="relative z-10 text-center">
                                <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center mb-8 shadow-[0_20px_40px_rgba(255,102,0,0.3)] mx-auto overflow-hidden">
                                    <Badge className="w-full h-full p-4" />
                                </div>
                                <h3 className="text-3xl font-black text-neutral-900 dark:text-white mb-4 uppercase tracking-tighter italic">
                                    Official <br /> <span className="text-primary not-italic">Channel Partner</span>
                                </h3>
                                <p className="text-neutral-500 text-sm font-bold uppercase tracking-widest">
                                    Trusted by 500+ Gujarat Exporters
                                </p>
                            </div>

                            {/* Decorative Grid */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
                        </motion.div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="lg:col-span-7 flex flex-col space-y-8 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                <BadgeCheck className="w-4 h-4" />
                                Gujarat&apos;s Preferred Export Partner
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-neutral-900 dark:text-white leading-[1.1] tracking-tighter mb-8 uppercase italic">
                                Helping Gujarat Manufacturers Generate <br />
                                <span className="text-primary not-italic">Verified Global Buyers.</span>
                            </h2>

                            <div className="space-y-6 mb-10">
                                <p className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                                    As an <span className="text-neutral-900 dark:text-white font-bold underline decoration-primary/30 underline-offset-4 italic px-1">Official Alibaba.com Channel Partner</span> in Gujarat, Grownext works closely with manufacturers across <span className="font-bold text-neutral-900 dark:text-white">Ahmedabad, Rajkot, Surat, Morbi, and Vadodara</span> to build high-performing supplier accounts.
                                </p>
                                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-semibold">
                                    From account registration and product optimization to RFQ management and buyer communication strategy, we ensure your Alibaba presence converts into measurable export growth.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4 mb-12">
                                {features.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * i }}
                                        className="flex items-start gap-4 text-base font-bold text-neutral-800 dark:text-neutral-200 group"
                                    >
                                        <div className="h-6 w-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary transition-colors duration-300">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        {item}
                                    </motion.div>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-neutral-100 dark:border-white/5 flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-1">
                                    <p className="text-neutral-900 dark:text-white font-black text-xl italic leading-tight mb-2">
                                        Ready to expand your exports from Gujarat to 190+ countries?
                                    </p>
                                    <p className="text-neutral-500 text-sm font-medium">
                                        Join the global trade movement today with Grownext.
                                    </p>
                                </div>
                                <Button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest h-14 px-10 rounded-2xl shadow-[0_10px_30px_rgba(255,102,0,0.3)] transition-all hover:scale-105 active:scale-95 group flex items-center gap-3">
                                    Free Consultation
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Custom badge implementation
const Badge = ({ className }: { className?: string }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
                fill="#FF6600"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
                fill="#FF8533"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z"
                fill="#24292E"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z"
                fill="white"
            ></path>
        </svg>
    );
};
