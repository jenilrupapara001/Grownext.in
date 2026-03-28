import { getAllPosts } from '@/lib/blog'
import HomeClient from '../HomeClient'

export default async function SuratPartnerPage() {
    const posts = await getAllPosts()

    return <HomeClient latestPosts={posts} />
}
