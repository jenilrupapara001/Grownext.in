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
  const pathname = usePathname()

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image src="/Logo.png" alt="GrowNext Logo" width={120} height={40} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold leading-6 transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-gray-900"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="rounded-full px-6">
            <Link href="/contact" className="flex items-center gap-2">
              Get Started <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn(
        "lg:hidden fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex items-center justify-between p-4 lg:px-8 border-b border-gray-100">
          <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
            <Image src="/Logo.png" alt="GrowNext Logo" width={120} height={40} />
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root px-6">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50",
                    pathname === item.href ? "text-primary" : "text-gray-900"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <Button asChild className="w-full rounded-full" onClick={() => setMobileMenuOpen(false)}>
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
