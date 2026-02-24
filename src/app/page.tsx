import { getAllPosts } from '@/lib/blog'
import HomeClient from './HomeClient'

export const metadata = {
  title: 'GrowNext | Official Alibaba.com Channel Partner in India & Gujarat',
  description: 'Grownext is the leading Alibaba Channel Partner in India. We provide expert assistance with Alibaba Registration, Gold Supplier membership, and global export lead generation for Indian businesses.',
  keywords: ['Alibaba Channel Partner India', 'Alibaba Partner Gujarat', 'Sell on Alibaba', 'Export from India', 'B2B Lead Generation'],
}

export default function HomePage() {
  const posts = getAllPosts()

  // Return the client component with the fetched posts
  return <HomeClient latestPosts={posts} />
}
