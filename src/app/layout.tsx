import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@src/styles/tailwind.css'
import Navbar from '@src/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sample App',
  description: 'A sample app built with Next.js and TypeScript',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
