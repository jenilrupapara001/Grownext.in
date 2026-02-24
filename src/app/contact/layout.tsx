import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us | Get Expert Export Consultation | GrowNext',
    description: 'Ready to take your business global? Contact GrowNext, the official Alibaba.com Channel Partner, for any inquiries regarding global selling and export growth.',
    keywords: ['contact GrowNext', 'export consultation', 'Alibaba partner contact', 'export growth help', 'business inquiry GrowNext'],
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
