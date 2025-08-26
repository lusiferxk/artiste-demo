"use client"

import { useState, useEffect } from "react"

export default function Header() {
  const navItems = ["Home", "About", "Principles", "Projects", "Testimonials", "Contact"]
  const [active, setActive] = useState("Home")
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const handleNavClick = (item: string) => {
    setActive(item)
    const section = document.getElementById(item.toLowerCase())
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-transparent backdrop-blur-sm border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between h-16">
            {/* Navigation (right side) */}
            <nav className="hidden md:flex items-center space-x-8 ml-auto">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`relative text-md font-medium transition-all duration-300 group ${
                    active === item ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item}</span>

                  {/* Active indicator */}
                  {active === item && (
                    <>
                      <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-purple-400/20 to-purple-500/10 rounded-lg -m-2"></div>
                    </>
                  )}

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-lg -m-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
