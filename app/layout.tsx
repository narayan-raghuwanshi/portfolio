import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Narayan Raghuwanshi | Full-Stack Developer',
  description: 'Premium modern portfolio for Narayan Raghuwanshi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} min-h-screen text-foreground antialiased selection:bg-fuchsia-500/30`}>
        {children}
      </body>
    </html>
  )
}
