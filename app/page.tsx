import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="container flex flex-col md:flex-row ml-6">
        <div className="w-full md:w-1/2 md:text-left text-center">
        {/* Headline */}
        <h1 className="text-6xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          Unlock your potential
        </h1>
        
        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
          Find, apply, and succeed in top apprenticeships. The smart way to start your career.
        </p>
        
        {/* Buttons */}
          <Button size="lg" className="px-8 py-6 text-lg bg-green-700">
            Join the WhatsApp
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
            Learn More
          </Button>
        </div>
        
        </div>
    </section>
  )
}
