import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Alibaba.com Channel Partner Gujarat | GrowNext',
    description: 'GrowNext is the authorized Alibaba.com Channel Partner for Gujarat. We help local manufacturers in Ahmedabad, Rajkot, and beyond succeed in international markets.',
    keywords: ['Alibaba partner Gujarat', 'Alibaba Rajkot', 'Alibaba Ahmedabad', 'Gujarat exporters', 'Alibaba channel partner India'],
}

export default function GujaratLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
