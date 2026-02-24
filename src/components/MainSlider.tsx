"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const slides = [
    {
        title: "Easy Step-by-Step Setup",
        description: "We help you with all the paperwork and verification to get your business live on Alibaba.com quickly and without any stress.",
        image: "/diam.png",
        benefits: ["Full Documentation Help", "Account Verification", "Simple Onboarding"]
    },
    {
        title: "Show Up First in Searches",
        description: "Our experts find the right keywords for your products so that global buyers see your business first when they search.",
        image: "/jewelery.png",
        benefits: ["Product Keywords", "High-Ranking Listings", "Competitor Analysis"]
    },
    {
        title: "Get Real Export Inquiries",
        description: "Start receiving genuine business leads from buyers in 190+ countries. We help you manage these leads to close more deals.",
        image: "/emer.png",
        benefits: ["Global Buyer Access", "Verified Inquiries", "Direct Support"]
    }
];

export function MainSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const prev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <section className="relative py-20 overflow-hidden bg-white px-6 md:px-12 lg:px-20">
            <div className="w-full">
                <div className="relative bg-gray-50 rounded-[3rem] overflow-hidden shadow-xl border border-gray-100">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 lg:p-16"
                        >
                            <div className="order-2 lg:order-1">
                                <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                                    {slides[current].title}
                                </h2>
                                <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                                    {slides[current].description}
                                </p>
                                <div className="space-y-4">
                                    {slides[current].benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                            </div>
                                            <span className="text-gray-700 font-bold">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src={slides[current].image}
                                    alt={slides[current].title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Controls */}
                    {/* <div className="absolute bottom-8 left-8 lg:left-16 flex items-center gap-4">
                        <button
                            onClick={prev}
                            className="p-3 rounded-full bg-white shadow-md border border-gray-100 hover:bg-gray-50 transition-colors text-gray-600"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                            onClick={next}
                            className="p-3 rounded-full bg-white shadow-md border border-gray-100 hover:bg-gray-50 transition-colors text-gray-600"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                        <div className="flex gap-2 ml-4">
                            {slides.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-2 rounded-full transition-all duration-300 ${idx === current ? "w-8 bg-primary" : "w-2 bg-gray-300"
                                        }`}
                                />
                            ))}
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}
