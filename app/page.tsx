"use client";


import About from "@/components/landing-page/about";
import Hero from "@/components/landing-page/hero";
import Testimonials from "@/components/landing-page/testimonials";

import ScrollNavbar from "@/components/landing-page/navbar";


export default function LandingPage() {
  return (
    <div className="relative w-full bg-white">
      <ScrollNavbar />
      <section className="relative w-full min-h-[90vh] flex items-center justify-center">
        <Hero />
      </section>
      <About />
      <Testimonials />
    </div>
  )
}
