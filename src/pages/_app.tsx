import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      </ThemeProvider>
  )
}

