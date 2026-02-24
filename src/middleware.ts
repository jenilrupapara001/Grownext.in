import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
    function middleware(req) {
        return NextResponse.next()
    },
    {
        pages: {
            signIn: '/admin/login',
        },
        secret: process.env.NEXTAUTH_SECRET || 'grownext-super-secret-change-in-production',
    }
)

export const config = {
    // Protect /admin/* but NOT /admin/login
    matcher: [
        '/admin/blog',
        '/admin/blog/:path*',
    ],
}
