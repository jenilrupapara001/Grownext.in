import { getAllPosts } from '@/lib/blog'
import HomeClient from './HomeClient'

export const metadata = {
  title: 'Grownext | Alibaba Authorized Channel Partner Gujarat',
  description: 'India\'s #1 Alibaba Channel Partner in Gujarat. We handle Alibaba Registration, Seller Account setup, and global export lead generation for Indian manufacturers.',
}

export default function HomePage() {
  const posts = getAllPosts()

  // Return the client component with the fetched posts
  return <HomeClient latestPosts={posts} />
}
