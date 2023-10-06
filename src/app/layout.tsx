import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Trevaughn Douglas',
  description: `Trevaughn's Portfolio Website.`,
  icons: [{ rel: "apple-touch-icon", url: '/assets/apple-touch-icon.png' }, { rel: 'icon', url: '/assets/favicon.ico' }]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-black'>
      <body className={poppins.className}>
        <Navbar />
        <main>
          <section className='main-container'>
              {children}
          </section>

        </main>

      </body>
    </html>
  )
}
