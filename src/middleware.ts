import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl

    // Allow login page and auth API to pass through
    if (pathname.startsWith('/admin/login') || pathname.startsWith('/api/auth')) {
        return NextResponse.next()
    }

    // For all other /admin/* paths, check for a valid JWT token
    if (pathname.startsWith('/admin')) {
        const token = await getToken({
            req,
            secret: process.env.NEXTAUTH_SECRET ?? 'grownext-fallback-dev-secret-32chars!!',
        })

        if (!token) {
            const loginUrl = new URL('/admin/login', req.url)
            loginUrl.searchParams.set('callbackUrl', pathname)
            return NextResponse.redirect(loginUrl)
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/admin/:path*'],
}
