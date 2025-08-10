import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/introduction"
import CorePrinciples from "@/components/core-principles"
import ProjectSection from "@/components/projects-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import { TracingBeam } from "@/components/tracing-beam"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <TracingBeam>
        <About />
        <CorePrinciples />
        <ProjectSection />
        <TestimonialsSection />
        <ContactSection />
      </TracingBeam>
    </main>
  )
}
