import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'kkkoora',
  description: 'Recent Football Scores',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='px-2 md:px-16 md:py-2 text-textPrimary'>
          <Navbar />
          <section className='flex space-x-4'>
            {/* sidebar */}
            {children}
            {/* news */}
          </section>
        </main>
      </body>
    </html>
  )
}
