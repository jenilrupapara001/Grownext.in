import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Export Sectors | Industry-Specific Alibaba Solutions | GrowNext',
    description: 'Specialized export growth strategies for diverse industries: Textiles, Gems & Jewelry, Chemicals, Agro-Products, Engineering, and more.',
    keywords: ['textile export India', 'gems and jewelry export', 'chemical export solutions', 'agro-export Alibaba', 'engineering goods export'],
}

export default function SectorsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
