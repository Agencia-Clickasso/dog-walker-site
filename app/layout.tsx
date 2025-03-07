import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lucas Dog Walker - Cuidando do seu melhor amigo",
  description: "Serviços de passeio para cães, cuidados com seu melhor amigo"
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