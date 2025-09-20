import '../styles/globals.css'
import { ReactNode } from 'react'
import Sidebar from '../components/Sidebar'

export const metadata = {
  title: 'Zettabyte - Frontend Test',
  description: 'Mini dashboard for Zettabyte Technology'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-800">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  )
}
