import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChartNoAxesCombined, Users } from "lucide-react";

interface SplashScreenProps {
  onStart: () => void;
}

const sloganWords = ["skip", "the", "maybe", "get", "the", "yes"];

export function SplashScreen({ onStart }: SplashScreenProps) {
  const [showIntro, setShowIntro] = useState(true);
  const [visibleWords, setVisibleWords] = useState<number>(0);
  
  useEffect(() => {
    if (!showIntro) return;
    
    // Show each word with a delay
    const wordTimers = sloganWords.map((_, index) => {
      return setTimeout(() => {
        setVisibleWords(index + 1);
      }, index * 200); // 400ms between each word
    });
    
    // Transition to main splash screen after all words shown
    const transitionTimer = setTimeout(() => {
      setShowIntro(false);
    }, sloganWords.length * 400 + 500); // Extra 1 second after last word
    
    return () => {
      wordTimers.forEach(timer => clearTimeout(timer));
      clearTimeout(transitionTimer);
    };
  }, [showIntro]);
  
  // Animated intro screen
  if (showIntro) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] animate-in fade-in duration-500">
        <div className="text-center space-y-4 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            {sloganWords.map((word, index) => (
              <span
                key={index}
                className={`inline-block mx-2 transition-all duration-500 ${
                  index < visibleWords 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
              >
                {word}
              </span>
            ))}
          </h1>
        </div>
      </div>
    );
  }
  
  // Main splash screen
  return (
    <div className="flex flex-col items-center justify-center animate-in fade-in duration-700">
      <div className="text-center px-4">
        {/* Logo */}
        <div className="mb-4">
          <Image 
            src="/ad.png" 
            alt="logo" 
            width={250} 
            height={100} 
            className="mx-auto" 
            priority
          />
        </div>
        
        {/* Title */}
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Join Apprentadream
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Your best chance of getting a DA offer
          </p>
        </div>
        
        {/* Start Button */}
        <div className="mb-8">
            <Button
                onClick={onStart}
                size="lg"
                className="
                bg-blue-600
                hover:bg-blue-500 
                text-white font-semibold text-lg 
                px-9 py-6 rounded-full shadow-lg
                transform transition-transform duration-200 ease-out
                hover:scale-105
                cursor-pointer
                will-change-transform
                translate-z-0
                "
            >
                <div className="flex items-center gap-2">
                Join the WhatsApp Community
                    <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                </div>
            </Button>
        </div>
        
        {/* Stats tagline */}
        <div className="flex flex-wrap items-center justify-center gap-12 text-sm text-gray-400 pt-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl text-white"><Users/></span>
            <span><span className="font-bold text-white">2,200+</span> members</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl text-white"><ChartNoAxesCombined/></span>
            <span><span className="font-bold text-white">Top</span> offer rates</span>
          </div>
        </div>
      </div>
    </div>
  );
}
