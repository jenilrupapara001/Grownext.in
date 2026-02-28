import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us | Get Expert Export Consultation | Grownext',
    description: 'Ready to take your business global? Contact Grownext, the official Alibaba.com Channel Partner, for any inquiries regarding global selling and export growth.',
    keywords: ['contact Grownext', 'export consultation', 'Alibaba partner contact', 'export growth help', 'business inquiry Grownext'],
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
