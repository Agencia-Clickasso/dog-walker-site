import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PetPath - The Best Care for Your Best Friend",
  description: "Professional pet care services including grooming, boarding, and walking",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}



import './globals.css'