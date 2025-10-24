import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import { ContentProvider } from "@/contexts/content-context"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Franchetti Frutta - Azienda Etica Bio",
  description: "Produzione biologica di frutta e derivati in Valtellina",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          <ContentProvider>{children}</ContentProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
