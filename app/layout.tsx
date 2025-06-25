import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Varshith V Poojary - Full-Stack Developer",
  description:
    "Professional portfolio of Varshith V Poojary, a goal-driven BCA graduate and full-stack developer specializing in modern web technologies.",
  keywords: "Varshith V Poojary, Full-Stack Developer, Web Developer, BCA Graduate, PHP, MySQL, JavaScript, Portfolio",
  authors: [{ name: "Varshith V Poojary" }],
  creator: "Varshith V Poojary",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://varshithpoojary.dev",
    title: "Varshith V Poojary - Full-Stack Developer",
    description: "Professional portfolio showcasing innovative web applications and digital solutions.",
    siteName: "Varshith V Poojary Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varshith V Poojary - Full-Stack Developer",
    description: "Professional portfolio showcasing innovative web applications and digital solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
