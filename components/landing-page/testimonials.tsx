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

                {/* Testimonials Carousel */}
                <div className="mb-12 sm:mb-16">
                    <Carousel className="w-full max-w-6xl mx-auto">
                        <CarouselContent className="px-2 sm:px-4">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                                    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mx-1 sm:mx-2 h-full">
                                        <div className="flex flex-col h-full">
                                            <div className="text-blue-600 mb-4">
                                                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                                </svg>
                                            </div>
                                            <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 flex-grow italic">
                                                &ldquo;{testimonial.quote}&rdquo;
                                            </p>
                                            <div>
                                                <div className="font-semibold text-gray-900 text-base sm:text-lg">
                                                    {testimonial.author}
                                                </div>
                                                <div className="text-blue-600 font-medium text-sm sm:text-base">
                                                    {testimonial.role}
                                                </div>
                                                <div className="text-gray-500 text-xs sm:text-sm">
                                                    {testimonial.company}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-1 sm:left-2" />
                        <CarouselNext className="right-1 sm:right-2" />
                    </Carousel>
                </div>

                {/* Trusted Companies Section */}
                <div className="text-center mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                        Trusted by apprentices at top companies
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                        Join thousands of successful apprentices
                    </p>
                </div>

                {/* Endless Company Logos Carousel */}
                <div className="relative overflow-hidden py-6 sm:py-8">
                    <div className="flex animate-scroll-left whitespace-nowrap">
                        {companies.map((company, index) => (
                            <div key={index} className="flex items-center justify-center mx-4 sm:mx-6 md:mx-8 w-16 sm:w-20 md:w-24 h-10 sm:h-12 md:h-16 grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0">
                                <Image
                                    src={company.logo}
                                    alt={`${company.name} logo`}
                                    width={60}
                                    height={30}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        ))}
                        {companies.map((company, index) => (
                            <div key={`duplicate-${index}`} className="flex items-center justify-center mx-4 sm:mx-6 md:mx-8 w-16 sm:w-20 md:w-24 h-10 sm:h-12 md:h-16 grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0">
                                <Image
                                    src={company.logo}
                                    alt={`${company.name} logo`}
                                    width={60}
                                    height={30}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
};