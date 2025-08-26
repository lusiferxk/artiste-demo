"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface SplashLoaderProps {
  children: React.ReactNode
  duration?: number // in ms
  logoSize?: number // width & height in px
}

export default function SplashLoader({
  children,
  duration = 1500,
  logoSize = 128,
}: SplashLoaderProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), duration)
    return () => clearTimeout(timer)
  }, [duration])

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#050816] to-[#0a0f23] z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo */}
            <img
              src="/logo.svg"
              alt="Artiste Connection Logo"
              className={`mb-6 pl-4 animate-pulse invert`}
              width={logoSize}
              height={logoSize}
              loading="lazy"
            />

            {/* Spinner */}
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin ring-2 ring-white/30"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && children}
    </>
  )
}
