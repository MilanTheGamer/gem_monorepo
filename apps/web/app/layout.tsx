import type { Metadata } from 'next'
import 'ui/styles/globals.css'
import { ThemeProvider } from 'ui/provider'

export const metadata: Metadata = {
  title: 'GEM App',
  description: 'Best Decentralised Lottery Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
