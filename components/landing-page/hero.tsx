import { Button } from "@/components/ui/button"
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
      <div className="container flex flex-col md:flex-row ml-6 mr-6">
        <div className="w-full md:w-1/2 md:text-left text-center">
        {/* Headline */}
        <h1 className="text-6xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          Unlock your 
          
          <span
          className="bg-gradient-to-r from-orange-700 via-orange-300 to-green-200 bg-clip-text text-transparent"> potential</span>
        </h1>
        
        {/* Subtext */}
        <p className="text-lg/8 md:text-lg font-bold tracking-tight text-gray-600 mb-6">
          Succeed in top apprenticeships with our all-in-one preparation platform.
        </p>
        
        {/* Buttons */}
        <div className="flex gap-4 justify-center md:justify-start">
          <Button size="lg" className="px-8 py-6 text-lg bg-green-700">
            <FaWhatsapp style={{ width: "1.5rem", height: "1.5rem" }}/>Join WhatsApp
          </Button>

          <Button size="lg" variant="outline" className="px-8 py-6 text-lg ">
            Learn More
          </Button>
        </div>
        </div>
        </div>

    
  )
}
