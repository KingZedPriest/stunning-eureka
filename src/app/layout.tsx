import type { Metadata } from 'next'
import { nunito } from "./fonts";
import './globals.css';

// Import Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: 'United Traverse Courier Services.',
  description: `Welcome to UnitedTraverse, your premier destination for seamless courier solutions! At UnitedTraverse, we take pride in being more than just a courier service. We're your reliable partner in connecting people and businesses across the globe.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
