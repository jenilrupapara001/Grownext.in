import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScroll } from "@/components/SmoothScroll";
import AuthProvider from "@/components/AuthProvider";
import Script from "next/script";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "GrowNext | Official Alibaba.com Partner in India",
  description: "Empowering Indian Businesses to sell globally through Alibaba.com. Official Channel Partner for onboarding, optimization, and global marketing.",
  keywords: ["Alibaba partner India", "export services India", "sell on Alibaba", "B2B export consultancy"],
  icons: '/favicon.ico?v=2',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} font-sans antialiased bg-[#F9FAFB] text-gray-900`}>
        <AuthProvider>
          <SmoothScroll />
          <Navbar />
          <main className="pt-16 min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster position="top-center" />
          <VisualEditsMessenger />
        </AuthProvider>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J8ET8XH71C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J8ET8XH71C', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}
