import '../styles/globals.scss'
// import { Inter } from 'next/font/google'

import Providers from './providers'
export const metadata = {
  title: 'OpenBao',
  description: 'A community driven project to build a better open source tool.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
