import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Alibaba.com Channel Partner Surat | Grownext',
    description: 'Grownext is the leading Alibaba.com Channel Partner in Surat. Expert guidance for textile, gemstone, and diamond exporters to reach global B2B buyers.',
    keywords: ['Alibaba partner Surat', 'Surat textile export', 'Surat diamond export', 'B2B export Surat', 'Alibaba channel partner India'],
}

export default function SuratLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
