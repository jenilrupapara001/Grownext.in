'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Search,
    ChevronRight,
    TrendingUp,
    Package,
    Cpu,
    Factory,
    Sofa,
    Zap,
    Leaf,
    Gem,
    FlaskConical,
    X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import categoriesData from '@/data/categories.json'

const iconMap: Record<string, any> = {
    ShoppingBag: Package,
    Cpu: Cpu,
    Factory: Factory,
    Sofa: Sofa,
    Zap: Zap,
    Leaf: Leaf,
    Gem: Gem,
    FlaskConical: FlaskConical
}

export function CategoryExplorer() {
    const [selectedCategory, setSelectedCategory] = useState(categoriesData[0])
    const [searchQuery, setSearchQuery] = useState('')

    const filteredCategories = categoriesData.filter(cat =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.subcategories.some(sub => sub.toLowerCase().includes(searchQuery.toLowerCase()))
    )

    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="bg-white rounded-[3.5rem] p-8 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden relative">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Sidebar: Category List */}
                        <div className="w-full lg:w-1/3 xl:w-1/4">
                            <div className="mb-8 relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search categories..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                                {filteredCategories.map((cat) => {
                                    const Icon = iconMap[cat.icon] || Package
                                    const isSelected = selectedCategory.id === cat.id
                                    return (
                                        <button
                                            key={cat.id}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left ${isSelected
                                                ? 'bg-[#2B2B2B] text-white shadow-xl translate-x-2'
                                                : 'text-[#58595B] hover:bg-[#EDEDED] hover:text-[#2B2B2B]'
                                                }`}
                                        >
                                            <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${isSelected ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'
                                                }`}>
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-black uppercase tracking-widest leading-none mb-1">{cat.name}</span>
                                                <span className={`text-[10px] font-bold ${isSelected ? 'text-primary' : 'text-gray-400'}`}>
                                                    Demand: {cat.demand}
                                                </span>
                                            </div>
                                            {isSelected && <ChevronRight className="ml-auto h-4 w-4 text-primary" />}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Main Content: Subcategories & Details */}
                        <div className="flex-1">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedCategory.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <div className="flex items-center gap-6 mb-10">
                                        <div className="h-16 w-16 rounded-[1.5rem] bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                                            {React.createElement(iconMap[selectedCategory.icon] || Package, { className: "h-8 w-8" })}
                                        </div>
                                        <div>
                                            <h3 className="text-3xl md:text-4xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none mb-2">
                                                {selectedCategory.name}
                                            </h3>
                                            <div className="flex items-center gap-3">
                                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Global Index Positioning</span>
                                                <div className="h-1 w-1 rounded-full bg-primary" />
                                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{selectedCategory.demand} Demand</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {selectedCategory.subcategories.map((sub, i) => (
                                            <motion.div
                                                key={sub}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.05 }}
                                                className="group p-6 rounded-3xl bg-[#fafafa] border border-gray-100 hover:border-primary/20 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex items-center justify-between"
                                            >
                                                <span className="text-sm font-bold text-[#58595B] group-hover:text-[#2B2B2B] transition-colors">{sub}</span>
                                                <div className="h-8 w-8 rounded-full bg-white shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                                                    <TrendingUp className="h-4 w-4 text-primary" />
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="mt-12 p-10 rounded-[2.5rem] bg-[#2B2B2B] relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-primary/10 transition-colors duration-500 group-hover:bg-primary/20" />
                                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                            <div className="text-center md:text-left">
                                                <h4 className="text-xl font-black text-white uppercase italic tracking-tight mb-2">Ready to list in {selectedCategory.name}?</h4>
                                                <p className="text-gray-400 text-sm font-medium">Get a custom landing page design and SEO map for this category.</p>
                                            </div>
                                            <Button asChild size="lg" className="rounded-full px-10 h-14 bg-primary hover:bg-white hover:text-gray-950 font-black transition-all">
                                                <a href="/contact">Book Category Audit</a>
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #e5e7eb;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #d1d5db;
                }
            `}</style>
        </div>
    )
}
