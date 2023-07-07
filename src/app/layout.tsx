import './globals.css'
import { Be_Vietnam_Pro, Italiana  } from 'next/font/google'

const be_Vietnam_Pro = Be_Vietnam_Pro({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
        <body className={`${be_Vietnam_Pro.className}`} >

          {children}</body>
    </html>
  )
}
