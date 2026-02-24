'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Platform', href: '/alibaba-global-selling' },
  { name: 'Sectors', href: '/sectors' },
  { name: 'Company', href: '/company' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center py-5 ${scrolled ? 'px-4' : 'px-6 md:px-10'}`}>
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`flex items-center justify-between px-5 md:px-8 py-2.5 rounded-full border transition-all duration-500 ${scrolled
            ? 'bg-[#FF6A00] border-[#FF6A00]/20 backdrop-blur-2xl shadow-[0_8px_32px_rgba(255,106,0,0.2)] w-full max-w-5xl'
            : 'bg-[#FF6A00] border-[#FF6A00]/40 backdrop-blur-xl shadow-lg w-full max-w-7xl'
            }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-[101]">
            {/* Desktop: full logo */}
            <Image
              src="/Logo.png"
              alt="Grownext"
              width={130}
              height={36}
              className="hidden sm:block h-9 w-auto object-contain brightness-0 invert"
              priority
            />
            {/* Mobile: favicon-style logo */}
            <img
              src="/favicon.ico"
              alt="Grownext"
              width={32}
              height={32}
              className="block sm:hidden h-8 w-8 object-contain brightness-0 invert"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-[11px] font-black tracking-[0.12em] text-white hover:text-white/80 transition-colors z-10"
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/15 border border-white/20 rounded-full -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-white text-primary text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-gray-900 hover:text-white hover:shadow-lg transition-all active:scale-95"
            >
              Consult
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-[101] p-2.5 rounded-full bg-white/10 border border-white/20"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-white" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-white flex flex-col items-center justify-center lg:hidden overflow-hidden"
          >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,102,0,0.06),_transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,102,0,0.04),_transparent_60%)] pointer-events-none" />

            <div className="relative z-10 text-center space-y-6 px-8 w-full">
              {/* Logo in mobile menu */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="mb-10"
              >
                <Image src="/Logo.png" alt="Grownext" width={140} height={40} className="h-10 w-auto mx-auto" />
              </motion.div>

              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ delay: 0.06 * (i + 1), ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-5xl font-black uppercase tracking-tighter italic leading-none inline-flex items-center gap-4 group transition-colors ${isActive ? 'text-primary' : 'text-gray-900 hover:text-primary'
                          }`}
                      >
                        {link.name}
                        <ArrowRight className="w-8 h-8 opacity-0 -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-10 flex flex-col items-center gap-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="px-10 py-4 bg-primary text-white text-sm font-black uppercase tracking-widest rounded-full shadow-xl active:scale-95 transition-all"
                >
                  Book Free Consultation →
                </Link>
                <div className="h-px w-16 bg-gray-200 mt-2" />
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400">Alibaba Authorized Channel Partner</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
