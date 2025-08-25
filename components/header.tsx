// "use client"
// import { useState, useRef, useEffect } from "react"
// import type React from "react"

// export default function Header() {
//   const navItems = ["Home", "About", "Contact", "Testimonials", "Projects"]
//   const [active, setActive] = useState("Home")
//   const [highlightStyle, setHighlightStyle] = useState<React.CSSProperties>({})
//   const navRef = useRef<HTMLElement | null>(null)

//   useEffect(() => {
//     if (!navRef.current) return

//     const children = Array.from(navRef.current.children) as HTMLElement[]

//     const activeButton = children.find((btn) => btn.textContent === active)
//     if (activeButton) {
//       const rect = activeButton.getBoundingClientRect()
//       const navRect = navRef.current.getBoundingClientRect()
//       setHighlightStyle({
//         width: rect.width,
//         height: rect.height,
//         transform: `translateX(${rect.left - navRect.left}px)`,
//       })
//     }
//   }, [active])

//   return (
//     <header className="fixed top-0 right-0 z-50 bg-transparent px-8 py-4">
//       <nav ref={navRef} className="relative flex gap-8 items-center justify-end select-none cursor-pointer">
//         {/* Sliding Glass Highlight */}
//         <span
//           aria-hidden="true"
//           style={{
//             ...highlightStyle,
//             border: "3px solid hsla(0, 0%, 100%, 0.3)",
//             background: "hsla(0, 0%, 100%, 0.2)",
//             backdropFilter: "blur(2px)",
//             boxShadow: "inset 0 0 8px 1px hsla(0, 0%, 100%, 0.6)",
//           }}
//           className="
//             pointer-events-none
//             absolute top-0 left-0 rounded-xl
//             transition-all duration-300 ease-in-out
//             will-change-transform width height
//             z-0
//           "
//         />
//         {navItems.map((item) => (
//           <button
//             key={item}
//             onClick={() => setActive(item)}
//             className={`relative z-10 px-4 py-2 rounded-xl text-lg font-medium
//               ${active === item ? "text-white" : "text-white"}
//               transition-colors duration-300
//             `}
//           >
//             {item}
//           </button>
//         ))}
//       </nav>
//     </header>
//   )
// }

"use client"
import { useState, useEffect } from "react"

export default function Header() {
  const navItems = ["Home", "About", "Contact", "Testimonials", "Projects"]
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-transparent backdrop-blur-xl border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            {/* <div className="flex items-center">
              <div className="h-8 w-auto">
                <img
                  src="https://blobs.vusercontent.net/blob/logo-ITrg0oUION0pdZphTWF1TxcaAHfNqS.svg"
                  alt="Artisan Connect"
                  className="h-8 w-auto brightness-0 invert hover:brightness-75 transition-all duration-300"
                />
              </div>
            </div> */}

            {/* Navigation (moved to right side) */}
            <nav className="hidden md:flex items-center space-x-8 ml-auto">
              {navItems.map((item, index) => (
                <button
                  key={item}
                  onClick={() => setActive(item)}
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

                  {/* Number indicator */}
                  {/* <span className="absolute -top-3 -right-2 text-xs text-purple-400/60 font-mono">0{index + 1}</span> */}
                </button>
              ))}
            </nav>

            {/* CTA Section */}
            {/* <div className="flex items-center space-x-4">
              <button className="hidden sm:block text-sm text-gray-400 hover:text-white transition-colors duration-300">
                Sign In
              </button>
              <button className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg text-white text-sm font-semibold hover:from-purple-400 hover:to-indigo-400 transition-all duration-300">
                  Launch App
                </div>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  )
}
