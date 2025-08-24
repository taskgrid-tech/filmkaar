import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-20">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            Privacy Policy
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 text-lg mb-8 text-center">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-red-400 mb-4">Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                At The Filmkaar Production, we collect information you provide directly to us, such as when you:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Contact us through our website or email</li>
                <li>• Subscribe to our newsletter</li>
                <li>• Apply for career opportunities</li>
                <li>• Engage with our social media content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-red-400 mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">We use the information we collect to:</p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Respond to your inquiries and provide customer support</li>
                <li>• Send you updates about our projects and services</li>
                <li>• Process job applications and recruitment</li>
                <li>• Improve our website and services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-red-400 mb-4">Information Sharing</h2>
              <p className="text-gray-300">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this privacy policy or as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-red-400 mb-4">Data Security</h2>
              <p className="text-gray-300">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-red-400 mb-4">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="text-gray-300 mt-4">
                <p>Email: privacy@filmkaarproduction.com</p>
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
