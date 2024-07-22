import SimpleSidebar from '../Components/sidebar'
import { Providers } from './providers'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><Providers>
        <SimpleSidebar>{children}</SimpleSidebar></Providers></body>
    </html>
  )
}

