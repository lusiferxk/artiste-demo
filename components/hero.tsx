"use client"

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background iFrame */}
      <iframe
        src="https://my.spline.design/untitled-6217a740e713536b7272ab5ddfaf3442/?storefront=envato-elements"
        title="Spline Design Background"
        className="absolute inset-0 w-full h-full z-0"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; camera; microphone; geolocation"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
        style={{ pointerEvents: "auto" }}
      />

      {/* Gradient transition overlay at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary via-primary/80 to-transparent z-5 pointer-events-none"></div>

      {/* Overlay content with proper containment */}
      <div className="absolute inset-0 flex flex-col items-start justify-center h-full z-10 pointer-events-none">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12">
          <img
            src="/logo.svg"
            alt="Artiste Connection Logo"
            className="w-full max-w-[40rem] lg:max-w-[50rem] filter brightness-0 invert"
          />
          <p className="mt-6 text-white text-2xl sm:text-3xl font-light tracking-wide max-w-2xl">
            Driven by creatives, for creatives
          </p>
        </div>
      </div>
    </div>
  )
}
