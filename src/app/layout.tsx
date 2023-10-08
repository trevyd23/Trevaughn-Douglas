import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})

{/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff"></meta> */}

export const metadata: Metadata = {
  title: 'Trevaughn Douglas',
  description: `Trevaughn's Portfolio Website.`,
  icons: [{ rel: "apple-touch-icon", url: '/assets/apple-touch-icon.png' },
  { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/assets/favicon-32x32.png' },
  { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/assets/favicon-16x16.png' },
  { rel: 'icon', type: 'image/png', url: '/assets/favicon.ico' },
  { rel: 'mask-icon', url: '/assets/safari-pinned-tab.svg', color: '#5bbad5' },]
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
