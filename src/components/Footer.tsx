import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

const footerNavigation = {
  solutions: [
    { name: 'Alibaba Onboarding', href: '/services' },
    { name: 'Product Optimization', href: '/services' },
    { name: 'Global Marketing', href: '/services' },
    { name: 'Account Management', href: '/services' },
  ],
  company: [
    { name: 'About GrowNext', href: '/company' },
    { name: 'Mission & Vision', href: '/company' },
    { name: 'Case Studies', href: '/' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
  social: [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/mr-exporter/posts/?feedView=all', icon: Linkedin },
    { name: 'Instagram', href: 'https://www.instagram.com/mr.exporter_india/', icon: Instagram },
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61564674801339', icon: Facebook },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/">
              <Image src="/Logo.png" alt="GrowNext Logo" width={120} height={40} />
            </Link>
            <p className="text-sm leading-6 max-w-xs">
              Official Alibaba.com Channel Partner empowering Indian Businesses to scale exports through global lead generation and strategic onboarding.
            </p>
            <div className="flex gap-x-6">
              {footerNavigation.social.map((item) => (
                <Link key={item.name} href={item.href} className="hover:text-primary transition-colors">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 hover:text-primary transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 hover:text-primary transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Contact Us</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex gap-3 text-sm">
                    <MapPin className="h-5 w-5 text-primary shrink-0" />
                    <span>Surat, Gujarat, India</span>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <span>+91 99883 39166</span>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <Mail className="h-5 w-5 text-primary shrink-0" />
                    <span>info@grownext.in</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-5">&copy; {new Date().getFullYear()} GrowNext. All rights reserved.</p>
          <div className="flex gap-8">
            {footerNavigation.legal.map((item) => (
              <Link key={item.name} href={item.href} className="text-xs leading-5 hover:text-white transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
