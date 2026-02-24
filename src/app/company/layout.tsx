import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Company | About GrowNext — Alibaba Partner India',
    description: 'Learn about GrowNext, your trusted partner in global B2B trade. We are committed to empowering Indian manufacturers with the tools to succeed on the world stage.',
    keywords: ['about GrowNext', 'export growth partner', 'B2B trade experts', 'Indian manufacturer success', 'who is GrowNext'],
}

export default function CompanyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
