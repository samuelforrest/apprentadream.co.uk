import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const testimonials = [
  {
    quote: "Apprentadream helped me find the perfect apprenticeship and prepare for interviews. The community is amazing!",
    author: "Alex Thompson",
    role: "Software Engineering Apprentice",
    company: "Google"
  },
  {
    quote: "The resources and support here are top-notch. I felt confident every step of the way through my application process.",
    author: "Jamie Rodriguez",
    role: "Digital Marketing Apprentice", 
    company: "Microsoft"
  },
  {
    quote: "I loved the AI-powered tools and the friendly mentors. The career quiz helped me discover my true calling!",
    author: "Morgan Chen",
    role: "Data Science Apprentice",
    company: "Amazon"
  },
  {
    quote: "The WhatsApp community is incredibly supportive. I made friends and found my dream apprenticeship!",
    author: "Sam Williams",
    role: "Cybersecurity Apprentice",
    company: "IBM"
  }
]

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

export default function Testimonials() {
    return (
        <section className="w-full py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
                {/* Testimonials Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                        Hear from our members
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        Real stories from apprentices who found success with our platform
                    </p>
                </div>
               </div>
        </section>
    )
};