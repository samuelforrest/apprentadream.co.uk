import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChartNoAxesCombined, Users } from "lucide-react";

interface SplashScreenProps {
  onStart: () => void;
}

export function SplashScreen({ onStart }: SplashScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="text-center space-y-8 px-4">
        {/* Logo */}
        <div>
          <Image 
            src="/ad.png" 
            alt="logo" 
            width={150} 
            height={75} 
            className="mx-auto" 
            priority
          />
        </div>
        
        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Join Apprentadream
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Your best chance of getting a DA offer
          </p>
        </div>
        
        {/* Start Button */}
        <div className="pt-4">
          <Button
            onClick={onStart}
            size="lg"
            className="bg-blue-600 hover:bg-blue-800 hover:scale-105 text-white font-semibold text-lg px-12 py-6 rounded-full shadow-lg"
          >
            <div className="flex items-center gap-2">
              Join the WhatsApp Community <span><ArrowRight/></span>
            </div>
          </Button>
        </div>
        
        {/* Stats tagline */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 pt-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl text-white"><Users/></span>
            <span><span className="font-bold text-white">2,200+</span> members</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl text-white"><ChartNoAxesCombined/></span>
            <span><span className="font-bold text-white">Record</span> offer rate</span>
          </div>
        </div>
      </div>
    </div>
  );
}
