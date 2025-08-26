"use client"

import { services } from "@/constants/constants"

const ServiceCard = ({ title, icon, description }) => {
  const isVideo = icon?.endsWith(".webm") || icon?.endsWith(".mp4")
  const isGif = icon?.endsWith(".gif")

  return (
    <div className="green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center relative group overflow-hidden">
        <div className="flex flex-col items-center transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-4">
          {isVideo || isGif ? (
            <video
              src={icon}
              autoPlay
              loop
              muted
              playsInline
              className="w-40 h-40 object-contain mb-4 bg-transparent"
              style={{ background: "transparent" }}
              onLoadedMetadata={(e) => {
                if (isGif) {
                  e.currentTarget.playbackRate = 0.5
                }
              }}
            />
          ) : (
            <img
              src={icon || "/placeholder.svg"}
              alt={title.toLowerCase().replace(/\s+/g, "-")}
              className="w-24 h-24 object-contain mb-4"
            />
          )}
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
        <div className="absolute inset-0 p-5 flex flex-col justify-center opacity-0 transition-all duration-500 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="text-center">
            <h3 className="text-white text-[18px] font-bold mb-3">{title}</h3>
            <p className="text-[#dfd9ff] text-[13px] leading-[1.6]">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}


const About = () => {
  return (
    <div className="w-full py-16 relative" id="about">
      {/* Subtle gradient overlay at the top for smooth transition */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-primary/60 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div>
          <p className="text-secondary text-sm uppercase tracking-wider">Introduction</p>
          <h2 className="text-white text-4xl font-bold mt-2 mb-6">Overview.</h2>
        </div>

        <p className="mt-4 text-white-100 text-[17px] max-w-4xl leading-[30px]">
          Artiste Connection Pvt Ltd is a Sri Lankan-based design-driven marketing consultancy, established in 2019. We
          are committed to offer 360° marketing solutions that cover every facet of modern brand-building and marketing.
          From Marketing Strategy to in-depth research & branding. Whether you're a startup looking to establish a
          strong presence or an established company seeking a brand refresh, we are here to guide your journey and
          deliver not just quantitative but qualitative results.
        </p>

        <p className="mt-4 text-white-100 text-[17px] font-normal max-w-4xl leading-[30px]">
          We deliver innovative, tailored solutions that enhance business growth.
        </p>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {services.map((service) => (
            <div className="w-full max-w-[280px]" key={service.title}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
