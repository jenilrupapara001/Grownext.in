import { getAllPosts } from '@/lib/blog'
import HomeClient from '../HomeClient'

export default function SuratPartnerPage() {
    const posts = getAllPosts()

    return <HomeClient latestPosts={posts} />
}
