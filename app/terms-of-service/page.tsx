import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-20">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            Terms of Service
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 text-lg mb-8 text-center">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-red-400 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-300">
                By accessing and using The Filmkaar Production website and services, you accept and agree to be bound by
                the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-red-400 mb-4">Services</h2>
              <p className="text-gray-300 mb-4">
                The Filmkaar Production provides professional film production services including:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Film and video production</li>
                <li>• Post-production services</li>
                <li>• Creative consultation</li>
                <li>• Equipment rental</li>
                <li>• Location scouting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-red-400 mb-4">Intellectual Property</h2>
              <p className="text-gray-300">
                All content, including but not limited to text, graphics, logos, images, and software, is the property
                of The Filmkaar Production and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-red-400 mb-4">Client Responsibilities</h2>
              <p className="text-gray-300 mb-4">Clients agree to:</p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Provide accurate and complete information</li>
                <li>• Make timely payments as agreed</li>
                <li>• Respect intellectual property rights</li>
                <li>• Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-red-400 mb-4">Limitation of Liability</h2>
              <p className="text-gray-300">
                The Filmkaar Production shall not be liable for any indirect, incidental, special, consequential, or
                punitive damages arising out of your use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-red-400 mb-4">Contact Information</h2>
              <p className="text-gray-300">For questions regarding these Terms of Service, please contact us at:</p>
              <div className="text-gray-300 mt-4">
                <p>Email: legal@filmkaarproduction.com</p>
                <p>Phone: +91 98765 43210</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
