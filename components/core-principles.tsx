"use client"

import { useState, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Eye, Target, Heart } from "lucide-react"

const CorePrinciples = () => {
  const principles = [
    {
      title: "Vision",
      icon: <Eye className="w-6 h-6" />,
      content: (
        <>
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            Our vision is to become the leading creative marketing agency in Asia, setting the standard for innovation,
            design-driven strategies, and cutting-edge solutions. We aim to establish ourselves as the go-to agency for
            brands seeking not just marketing services, but transformative partnerships that will elevate their
            businesses to new heights. By continually pushing the boundaries of creativity, we want to be recognized for
            our ability to blend art, technology, and strategy in ways that set us apart in the marketing world.
          </p>
          <p className="text-gray-300 text-base font-medium mb-4">Key Aspects of the Vision:</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="text-white font-semibold">Leadership in Asia:</span>
                <span className="text-gray-400 ml-1">
                  Aspire to be the top agency across diverse Asian markets with a reputation for unmatched creativity
                  and results.
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="text-white font-semibold">Transformative Solutions:</span>
                <span className="text-gray-400 ml-1">
                  Deliver solutions that don't just meet client expectations but redefine their brand positioning and
                  performance.
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="text-white font-semibold">Creative Excellence:</span>
                <span className="text-gray-400 ml-1">
                  Continuously innovate and set new industry benchmarks for creativity and strategic impact.
                </span>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Mission",
      icon: <Target className="w-6 h-6" />,
      content: (
        <>
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            At Artiste Connection, our mission is to empower brands with creative marketing strategies that work for
            modern success. We work with businesses to build unique brand identities, enhance their customer engagement,
            and achieve measurable growth. Our approach combines in-depth research, branding expertise, and digital
            solutions to ensure every project is tailored to the client's unique needs.
          </p>
          <p className="text-gray-300 text-base font-medium mb-4">We believe in:</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="text-white font-semibold">Creativity at the Core:</span>
                <span className="text-gray-400 ml-1">
                  Every solution we provide is rooted in storytelling, creativity, and innovation. This is what
                  differentiates us from the rest.
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="text-white font-semibold">Innovation and Results:</span>
                <span className="text-gray-400 ml-1">
                  We blend innovative techniques with data-driven methods to deliver marketing outcomes that matter.
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="text-white font-semibold">Client Collaboration:</span>
                <span className="text-gray-400 ml-1">
                  Building strong, collaborative relationships with clients is key. We journey together on their path
                  toward growth and success.
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="text-white font-semibold">Continuous Learning:</span>
                <span className="text-gray-400 ml-1">
                  We commit to staying ahead of industry trends and continually upgrading our skills to provide the
                  best-in-class services.
                </span>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Core Values",
      icon: <Heart className="w-6 h-6" />,
      content: (
        <>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="text-white font-semibold">Tailored Solutions:</span>
                <span className="text-gray-400 ml-1">
                  Custom Strategies for each brand ensuring that the specific marker need and growth objectives are met.
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="text-white font-semibold">Sustained Growth:</span>
                <span className="text-gray-400 ml-1">
                  Helping clients not only achieve short term wins but ensuring long term brand success and market
                  presence.
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="text-white font-semibold">Creative Leadership:</span>
                <span className="text-gray-400 ml-1">
                  ensuring that creativity drives all decision making processes leading to impact full campaigns and
                  brand development.
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="text-white font-semibold">Collaborative Culture:</span>
                <span className="text-gray-400 ml-1">
                  fostering a workplace and client environment that thrives on collaboration, Innovation, and pushing
                  boundaries.
                </span>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % principles.length)
      setProgress(0)
    }, 5000)

    return () => clearInterval(interval)
  }, [principles.length])

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0
        return prev + 2
      })
    }, 100)

    return () => clearInterval(progressInterval)
  }, [currentIndex])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setProgress(0)
  }

  return (
    <div className="w-full py-16" id="principles">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div data-aos="fade-down" data-aos-duration="800">
          <p className="text-secondary text-sm uppercase tracking-wider">Our Core Principles</p>
          <h2 className="text-white text-4xl font-bold mt-2 mb-6">Vision, Mission & Values.</h2>
        </div>

        <div className="relative mt-12">
          <div className="overflow-hidden rounded-[20px]" data-aos="fade-up" data-aos-duration="1000">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay={index * 200}
                >
                  <div className="bg-tertiary rounded-[20px] py-8 px-6 sm:px-8 lg:px-10 min-h-[500px]">
                    <h3 className="text-white text-2xl sm:text-3xl font-bold mb-4 relative pb-2">
                      {principle.title}
                      <span className="absolute bottom-0 left-0 w-16 h-[3px] green-pink-gradient rounded-full"></span>
                    </h3>
                    <div className="max-w-5xl">{principle.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={500}
          >
            {principles.map((principle, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-white/20 backdrop-blur-sm" : "hover:bg-white/10"
                }`}
                aria-label={`Go to ${principle.title}`}
              >
                <div
                  className={`relative w-2 h-2 rounded-full transition-colors duration-300 ${
                    currentIndex === index ? "bg-white" : "bg-gray-500"
                  }`}
                >
                  {currentIndex === index && (
                    <div
                      className="absolute inset-0 bg-white rounded-full transition-all duration-100 ease-linear"
                      style={{
                        clipPath: `inset(0 ${100 - progress}% 0 0)`,
                      }}
                    />
                  )}
                </div>
                <span
                  className={`text-xs font-medium transition-colors duration-300 ${
                    currentIndex === index ? "text-white" : "text-gray-400"
                  }`}
                >
                  {principle.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CorePrinciples
