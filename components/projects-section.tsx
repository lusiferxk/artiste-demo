"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

type ProjectCardContent = {
  title: string,
  description: string,
  imageUrl: string
}

const ProjectCard = ({ title, description, imageUrl }: ProjectCardContent) => (
  <div
    className="bg-tertiary p-6 rounded-[20px] shadow-card flex flex-col"
    data-aos="zoom-in"
    data-aos-duration="1000"
    data-aos-delay={50}
  >
    <img
      src={imageUrl || "/placeholder.svg?height=200&width=300&query=project-thumbnail"}
      alt={title}
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
    <p className="text-secondary text-sm leading-[1.6] flex-grow">{description}</p>
  </div>
)

const ProjectSection = () => {
  const stats = [
    { value: "200+", label: "Satisfied Clients" },
    { value: "95%", label: "Referrals" },
    { value: "2500+", label: "Completed Projects" },
    { value: "5 Years", label: "of Experience" },
  ]

  const sampleProjects = [
    {
      title: "E-commerce Platform Redesign",
      description:
        "A complete overhaul of an existing e-commerce website, focusing on user experience and conversion rate optimization.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Mobile App for Fitness Tracking",
      description:
        "Developed a cross-platform mobile application for tracking fitness activities, including workout plans and progress visualization.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Corporate Branding & Website Launch",
      description:
        "Created a new brand identity and launched a responsive corporate website for a B2B service provider.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Digital Marketing Campaign for Startup",
      description:
        "Executed a comprehensive digital marketing strategy, including SEO, social media, and content marketing, leading to significant lead generation.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
  ]

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <div className="w-full py-16" id="projects" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div data-aos="fade-down" data-aos-duration="800">
          <p className="text-secondary text-sm uppercase tracking-wider">My work</p>
          <h2 className="text-white text-4xl font-bold mt-2 mb-6">Projects.</h2>
        </div>

        <p className="mt-4 text-white-100 text-[17px] max-w-4xl leading-[30px]" data-aos="fade-up" data-aos-duration="800" data-aos-delay={100}>
          Below are some of our featured projects, showcasing our ability to solve challenges with creative strategies
          and cutting-edge design.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-tertiary p-6 rounded-[20px] shadow-card text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 150}
            >
              <h3 className="text-white text-3xl lg:text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-secondary text-base lg:text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-white text-2xl sm:text-3xl font-bold mb-8" data-aos="fade-down" data-aos-duration="800">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {sampleProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection
