'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Company', href: '/company' },
  { name: 'Services', href: '/services' },
  { name: 'Alibaba Selling', href: '/alibaba-global-selling' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 ${isScrolled ? 'shadow-lg' : ''}`}>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <div className="lg:hidden">
              <Image
                src="/Logo.png"
                alt="GrowNext Logo"
                width={50}
                height={50}
                className="rounded-lg"
              />
            </div>
            <div className="hidden lg:block">
              <Image
                src="/Logo.png"
                alt="GrowNext Logo"
                width={120}
                height={40}
              />
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-semibold leading-6 transition-colors',
                pathname === item.href
                  ? 'text-primary'
                  : 'text-gray-900 hover:text-primary'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="rounded-full px-6">
            <Link href="/contact" className="flex items-center gap-2">
              Get Free Consultation <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}

      {/* Backdrop with blur */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={cn(
          'lg:hidden fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-white/90 backdrop-blur-xl shadow-2xl border-l border-gray-100 transition-transform duration-300 ease-in-out',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="bg-primary p-2 rounded-lg">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Grow<span className="text-primary">Next</span>
            </span>
          </Link>
          <button
            type="button"
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Drawer content */}
        <div className="flex flex-col h-full">
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block rounded-lg px-4 py-3 text-base font-semibold transition-colors',
                      pathname === item.href
                        ? 'text-primary bg-primary/5'
                        : 'text-gray-900 hover:bg-gray-50'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Drawer CTA */}
          <div className="px-6 pb-8">
            <Button
              asChild
              className="w-full rounded-full py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
