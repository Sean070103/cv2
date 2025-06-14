import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'yocorangelo',
  description: 'yocorangelo',
  generator: 'yocorangelo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
