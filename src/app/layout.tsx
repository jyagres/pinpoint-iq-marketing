import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PinpointIQ | Geographic Market Intelligence',
  description: 'PE-grade market analysis powered by Census data',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
          <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a href="/dashboard" className="text-xl font-bold text-brand-600 hover:opacity-80 transition-opacity">Pinpoint<span className="text-blue-400">IQ</span></a>
            </div>
            <div className="text-sm text-gray-500">Geographic Market Intelligence</div>
          </nav>
          {children}
        
      </body>
    </html>
  )
}
