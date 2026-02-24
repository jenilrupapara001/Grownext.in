import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Alibaba Seller Registration India | Start Selling Globally | GrowNext',
    description: 'Step-by-step assistance for Alibaba.com seller account registration in India. Get your Gold Supplier membership and start receiving international inquiries today.',
    keywords: ['Alibaba registration India', 'Alibaba seller account', 'Gold Supplier membership India', 'how to sell on Alibaba from India', 'B2B account setup'],
}

export default function RegistrationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
