"use client"

import { Button } from "@/components/ui/button"
import { FaWhatsapp, FaVolumeMute } from "react-icons/fa";
import Image from "next/image";
import { useRef, useState } from "react";

const companies = [
  { name: "Google", logo: "/assets/amazon.png" },
  { name: "Microsoft", logo: "/assets/jlr.png" },
  { name: "Amazon", logo: "/assets/gms.jpg" },
  { name: "IBM", logo: "/assets/ibm.webp" },
  { name: "Meta", logo: "/assets/barclays.png" },
  { name: "Apple", logo: "/assets/howden.png" },
]

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
        {/* Hero Section - Two Columns on Desktop, Single Column on Mobile */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-12 lg:gap-16 pt-24 sm:pt-32 md:pt-0">
          {/* Left Column - Hero Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Unlock your 
              <span className="text-green-600"> potential</span>
            </h1>
        
            {/* Subtext */}
            <p className="text-lg md:text-xl font-bold tracking-tight text-gray-600 mb-8">
              Succeed in top apprenticeships with our all-in-one preparation platform.
            </p>
        
            {/* Buttons */}
            <div className="flex gap-5 justify-center md:justify-start">
              <Button size="lg" className="px-8 py-6 text-lg bg-green-700 rounded-xl">
                <FaWhatsapp style={{ width: "1.5rem", height: "1.5rem" }}/>Join WhatsApp
              </Button>

              <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-xl">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Column - Native Video Player */}
          <div className="flex-1 mt-8 md:mt-0">
            <div className="aspect-video w-full relative">
              <video
                ref={videoRef}
                className="w-full h-full rounded-xl shadow-lg object-cover cursor-pointer"
                preload="metadata"
                muted
                autoPlay
                poster="/placeholder-video-thumbnail.jpg"
                onClick={handleVideoClick}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/assets/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Mute Button - Top Right Corner */}
              {isMuted && (
                <div 
                  className="absolute top-4 right-4 cursor-pointer"
                  onClick={handleMuteToggle}
                >
                  <div className="bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition-all duration-300">
                    <FaVolumeMute className="text-white text-xl" />
                  </div>
                </div>
              )}
            </div>
            <p className="text-grey-500 text-sm pt-3 text-center">Watch this short introduction video to Apprentadream</p>
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
                  <div key={index} className="flex items-center justify-center mx-6 w-20 h-12 transition-all duration-300 flex-shrink-0">
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
                  <div key={`duplicate-${index}`} className="flex items-center justify-center mx-6 w-20 h-12 transition-all duration-300 flex-shrink-0">
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
