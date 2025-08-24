import Navbar from "@/components/navbar"
import HeroSlider from "@/components/hero-slider"
import FilmsSection from "@/components/films-section"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <FilmsSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
