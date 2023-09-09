import './globals.css'
import { Inter } from 'next/font/google'
import { Suspense} from 'react';
import Loading from './loading';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Countries - Home',
  description: 'Get to know the countries of the globe',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center">  
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
      </body>
    </html>
  )
}
