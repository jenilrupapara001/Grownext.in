import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Company | About Grownext — Alibaba Partner India',
    description: 'Learn about Grownext, your trusted partner in global B2B trade. We are committed to empowering Indian manufacturers with the tools to succeed on the world stage.',
    keywords: ['about Grownext', 'export growth partner', 'B2B trade experts', 'Indian manufacturer success', 'who is Grownext'],
}

export default function CompanyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
