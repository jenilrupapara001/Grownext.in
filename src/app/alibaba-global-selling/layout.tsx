import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Global Selling from India | Alibaba.com Export Strategy | GrowNext',
    description: 'Unlock your export potential with GrowNext. We provide data-driven Alibaba.com strategies to help Indian manufacturers dominate their global B2B niche.',
    keywords: ['global selling India', 'Alibaba export strategy', 'B2B international trade', 'Indian manufacturer global growth', 'Alibaba India success'],
}

export default function GlobalSellingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
