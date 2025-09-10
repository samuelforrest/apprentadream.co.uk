import About from "@/components/landing-page/about";
import Hero from "@/components/landing-page/hero";
import Testimonials from "@/components/landing-page/testimonials";

export default function LandingPage() {
  return (
    <div className="relative w-full bg-white">
      <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <Hero />
      </section>
      <About />
      <Testimonials />
    </div>
  )
}
