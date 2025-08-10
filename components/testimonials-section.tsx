"use client"

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      author: "Sara Lee",
      title: "CFO of Acme Co",
    },
    {
      quote: "I've never met a web developer who truly cares about their clients' success like Rick does.",
      author: "Chris Brown",
      title: "COO of DEF Corp",
    },
    {
      quote: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      author: "Lisa Wang",
      title: "CTO of 456 Enterprises",
    },
  ]

  return (
    <div className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div>
          <p className="text-secondary text-sm uppercase tracking-wider">What others say</p>
          <h2 className="text-white text-4xl font-bold mt-2 mb-6">Testimonials.</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-tertiary p-6 sm:p-8 rounded-[20px] shadow-card flex flex-col justify-between h-full"
            >
              <p className="text-white text-[16px] sm:text-[18px] font-medium mb-6 leading-[1.8] relative">
                <span className="absolute -top-4 -left-4 text-4xl sm:text-5xl text-gray-600 opacity-30 font-serif">
                  &ldquo;
                </span>
                {testimonial.quote}
                <span className="absolute -bottom-4 -right-4 text-4xl sm:text-5xl text-gray-600 opacity-30 font-serif">
                  &rdquo;
                </span>
              </p>
              <div className="flex flex-col mt-auto pt-4 border-t border-gray-700">
                <p className="text-white font-bold text-[16px]">
                  <span className="text-[#00ff80]">@</span> {testimonial.author}
                </p>
                <p className="mt-1 text-secondary text-[14px]">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection
