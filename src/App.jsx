import Advantages from "./components/Advantages"
import CTA from "./components/CTA"
import FAQ from "./components/FAQ"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Testimonials from "./components/Testimonials"

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Advantages />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
export default App