import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

// max 3 fonts
const roboto = Roboto({ subsets: [], weight: ['100', '400', '700'] })

export const metadata: Metadata = {
  title: 'Este es un ejemplo para Aleman',
  description: 'Esto es una pagina para los edificios'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="text-red-500">{children}</main>
        <footer className="text-[rgb(0,255,125)]">Local 1 a la calle</footer>
      </body>
    </html>
  )
}
