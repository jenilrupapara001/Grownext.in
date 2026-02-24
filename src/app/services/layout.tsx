import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Export Growth Services | Alibaba.com Solutions | GrowNext',
    description: 'Comprehensive services to scale your export business: Alibaba Gold Supplier onboarding, mini-site design, keyword optimization, and global marketing strategies.',
    keywords: ['Alibaba Gold Supplier onboarding', 'mini-site design', 'export marketing', 'keyword optimization India', 'B2B export services'],
}

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
