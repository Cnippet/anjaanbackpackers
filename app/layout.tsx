import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anjaan Backpackers',
  description: 'Embark on unforgettable hiking adventures in the stunning landscapes of Uttarakhand, where nature&apos;s awe-inspiring beauty awaits at every turn, inviting you to discover hidden treasures and create everlasting memories along the way.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-HRB361QYE8" />
    </html>
  )
}
