import { Button } from "@/components/ui/button"
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const companies = [
  { name: "Google", logo: "/globe.svg" },
  { name: "Microsoft", logo: "/vercel.svg" },
  { name: "Amazon", logo: "/next.svg" },
  { name: "IBM", logo: "/file.svg" },
  { name: "Meta", logo: "/window.svg" },
  { name: "Apple", logo: "/globe.svg" },
  { name: "Netflix", logo: "/vercel.svg" },
  { name: "Tesla", logo: "/next.svg" }
]

export default function Hero() {
  return (
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
        <div className="items-center">
        {/* Hero Content - Centered */}
        <div className="text-center">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          Unlock your 
          
            <span
          className="bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent"> potential</span>
            </h1>
        
        {/* Subtext */}
            <p className="text-lg md:text-xl font-bold tracking-tight text-gray-600 mb-8">
          Succeed in top apprenticeships with our all-in-one preparation platform.
            </p>
        
        {/* Buttons */}
            <div className="flex gap-4 justify-center">
            <Button size="lg" className="px-8 py-6 text-lg bg-green-700">
                <FaWhatsapp style={{ width: "1.5rem", height: "1.5rem" }}/>Join WhatsApp
            </Button>

            <Button size="lg" variant="outline" className="px-8 py-6 text-lg ">
                Learn More
            </Button>
            </div>
        </div>
        </div>
        
        
        {/* Company Partners Carousel - Full Width Centered */}
        <div className="w-full mt-12 sm:mt-20 md:mt-25">
          <div className="w-3/4 mx-auto">
            <p className="text-sm text-gray-500 text-center mb-6">
              Trusted by apprentices at top companies
            </p>
            <div className="relative overflow-hidden py-4">
              <div className="flex animate-scroll-left whitespace-nowrap">
                {companies.map((company, index) => (
                  <div key={index} className="flex items-center justify-center mx-6 w-20 h-12 grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={60}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {companies.map((company, index) => (
                  <div key={`duplicate-${index}`} className="flex items-center justify-center mx-6 w-20 h-12 grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={60}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    
  )
}
