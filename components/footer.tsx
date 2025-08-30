import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-red-500">The Filmkaar Production</h3>
            <p className="text-gray-300 leading-relaxed">
              One frame at a time
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                <Facebook size={20} />
              </a> */}
              <a href="https://www.youtube.com/@thefilmkaarproduction" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                <Youtube size={20} />
              </a>
              <a href="https://www.instagram.com/the_filmkaar/" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/the-filmkaar-production" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-red-500 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#films" className="text-gray-300 hover:text-red-500 transition-colors duration-300">
                  Our Films
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-red-500 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-300 hover:text-red-500 transition-colors duration-300" target="_blank">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-red-500 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Film Production</li>
              <li className="text-gray-300">Video Editing</li>
              <li className="text-gray-300">Cinematography</li>
              <li className="text-gray-300">Post Production</li>
              <li className="text-gray-300">Documentary Films</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-red-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Greater Ratan Gold, Ujjain, Madhya Pradesh 456001, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-red-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">admin@thefilmkaarproduction.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© 2024 The Filmkaar Production. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>

          <div className="text-center mt-6 pt-4 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              Design & Developed by <span className="text-yellow-400 font-medium">Tanishq Rawat</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
