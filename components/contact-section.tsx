"use client"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Globe } from "lucide-react" // Lucide icons for contact info

const ContactSection = () => {
  return (
    <div className="w-full py-16" id="contact">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div>
          <p className="text-secondary text-sm uppercase tracking-wider">Get in touch</p>
          <h2 className="text-white text-4xl font-bold mt-2 mb-6">Contact.</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-tertiary p-6 sm:p-8 rounded-[20px] shadow-card">
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-secondary text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="bg-primary border-gray-700 text-white focus:ring-green-pink-gradient focus:border-green-pink-gradient"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-secondary text-sm font-medium mb-2">
                  Your email
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="john.doe@example.com"
                  className="bg-primary border-gray-700 text-white focus:ring-green-pink-gradient focus:border-green-pink-gradient"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-secondary text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Type your message here..."
                  className="bg-primary border-gray-700 text-white focus:ring-green-pink-gradient focus:border-green-pink-gradient"
                />
              </div>
              <Button
                type="submit"
                className="w-full green-pink-gradient text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send
              </Button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-tertiary p-6 sm:p-8 rounded-[20px] shadow-card flex flex-col justify-between">
            <div>
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-6">#artisteconnection</h3>
              <div className="space-y-4 text-white-100">
                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm sm:text-base">(+94) 777 470 593</span>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm sm:text-base">sales@artisteconnection.com</span>
                </p>
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm sm:text-base">No 236/14 2/1, Vijayakumarathunga Mawatha, Colombo 05</span>
                </p>
                <p className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm sm:text-base">www.artisteconnection.com</span>
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-4">Business Hours</h3>
              <p className="text-white-100 text-sm sm:text-base">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-white-100 text-sm sm:text-base">Saturday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
