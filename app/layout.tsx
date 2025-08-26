import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import SplashLoader from "@/components/splash-loader"
import ScrollProvider from "@/providers/scroll-provider";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Artiste Connection",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#050816]`}>
        <SplashLoader>
          <ScrollProvider>
            {children}
          </ScrollProvider>
        </SplashLoader>
      </body>
    </html>
  )
}
