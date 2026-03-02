import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Alibaba Channel Partner in Gujarat | Export Services for Manufacturers | GrowNext',
    description: 'Official Alibaba Channel Partner in Gujarat offering seller registration, supplier onboarding, listing optimization, and export lead generation services for Indian manufacturers.',
    keywords: ['Alibaba partner Gujarat', 'Alibaba Rajkot', 'Alibaba Ahmedabad', 'Gujarat exporters', 'Alibaba channel partner India'],
}

export default function GujaratLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
