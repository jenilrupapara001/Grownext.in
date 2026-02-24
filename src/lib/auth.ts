import CredentialsProvider from 'next-auth/providers/credentials'
import type { NextAuthOptions } from 'next-auth'

export type UserRole = 'admin' | 'writer'

export interface AuthUser {
    id: string
    name: string
    email: string
    role: UserRole
}

function getUsers(): AuthUser[] {
    return [
        {
            id: '1',
            name: 'Admin',
            email: process.env.ADMIN_EMAIL || 'admin@grownext.in',
            role: 'admin',
        },
        {
            id: '2',
            name: 'Writer',
            email: process.env.WRITER_EMAIL || 'writer@grownext.in',
            role: 'writer',
        },
    ]
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null

                const adminEmail = process.env.ADMIN_EMAIL || 'admin@grownext.in'
                const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'
                const writerEmail = process.env.WRITER_EMAIL || 'writer@grownext.in'
                const writerPassword = process.env.WRITER_PASSWORD || 'writer123'

                if (credentials.email === adminEmail && credentials.password === adminPassword) {
                    return { id: '1', name: 'Admin', email: adminEmail, role: 'admin' } as any
                }
                if (credentials.email === writerEmail && credentials.password === writerPassword) {
                    return { id: '2', name: 'Writer', email: writerEmail, role: 'writer' } as any
                }

                return null
            },
        }),
    ],
    session: { strategy: 'jwt' },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = (user as any).role
                token.name = user.name
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                (session.user as any).role = token.role
            }
            return session
        },
    },
    pages: {
        signIn: '/admin/login',
    },
    secret: process.env.NEXTAUTH_SECRET ?? 'grownext-fallback-dev-secret-32chars!!',
    debug: process.env.NODE_ENV === 'development',
}
