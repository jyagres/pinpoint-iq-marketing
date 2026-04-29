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
              <a href="/" className="text-xl font-bold text-brand-600 hover:opacity-80 transition-opacity">Pinpoint<span className="text-blue-400">IQ</span></a>
            </div>
            <div className="flex items-center gap-6">
              <span className="hidden sm:inline text-sm text-gray-500">Geographic Market Intelligence</span>
              <a
                href="https://app.pinpointiq.app/login"
                className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
              >
                Client Login &rarr;
              </a>
            </div>
          </nav>
          {children}

          <footer className="border-t border-gray-200 mt-20 py-8 px-6">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
              <div>
                © {new Date().getFullYear()} PinpointIQ. Operated by 2nd St Strategy.
              </div>
              <div className="flex items-center gap-6">
                <a href="/privacy" className="hover:text-brand-600 transition-colors">Privacy</a>
                <a href="https://app.pinpointiq.app/login" className="hover:text-brand-600 transition-colors">Client Login</a>
              </div>
            </div>
          </footer>
        
      </body>
    </html>
  )
}
