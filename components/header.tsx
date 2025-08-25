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
import { useState, useRef, useEffect } from "react"
import type React from "react"

export default function Header() {
  const navItems = ["Home", "About", "Contact", "Testimonials", "Projects"]
  const [active, setActive] = useState("Home")
  const [highlightStyle, setHighlightStyle] = useState<React.CSSProperties>({})
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const navRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!navRef.current) return

    const children = Array.from(navRef.current.children) as HTMLElement[]

    const activeButton = children.find((btn) => btn.textContent === active)
    if (activeButton) {
      const rect = activeButton.getBoundingClientRect()
      const navRect = navRef.current.getBoundingClientRect()
      setHighlightStyle({
        width: rect.width,
        height: rect.height,
        transform: `translateX(${rect.left - navRect.left}px)`,
      })
    }
  }, [active])

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
      className={`fixed top-0 right-0 z-50 px-8 py-6 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-black/10 to-transparent backdrop-blur-md rounded-2xl border border-white/10" />

      <nav ref={navRef} className="relative flex gap-2 items-center justify-end select-none cursor-pointer">
        <span
          aria-hidden="true"
          style={{
            ...highlightStyle,
            border: "1px solid hsla(0, 0%, 100%, 0.4)",
            background: "linear-gradient(135deg, hsla(0, 0%, 100%, 0.25), hsla(0, 0%, 100%, 0.1))",
            backdropFilter: "blur(8px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
          }}
          className="
            pointer-events-none
            absolute top-0 left-0 rounded-xl
            transition-all duration-300 ease-in-out
            will-change-transform width height
            z-0
          "
        />
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`relative z-10 px-6 py-3 rounded-xl text-sm font-semibold tracking-wide
              ${active === item ? "text-white" : "text-white/80 hover:text-white"}
              transition-all duration-300 hover:scale-105
            `}
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  )
}
