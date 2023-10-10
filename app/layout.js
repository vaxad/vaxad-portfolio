import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio - Varad Prabhu',
  description: "Welcome to my portfolio, a showcase of my work as a full stack web developer. Here, you'll find a curated collection of my projects, providing insights into my skills and passion for creating exceptional web applications.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
