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
        <section className="w-full py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                {/* Testimonials Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                        Hear from our members
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Real stories from apprentices who found success with our platform
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div className="mb-16">
                    <Carousel className="w-full max-w-4xl mx-auto">
                        <CarouselContent className="px-4">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="bg-white rounded-xl shadow-lg p-8 mx-2 h-full">
                                        <div className="flex flex-col h-full">
                                            <div className="text-blue-600 mb-4">
                                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                                </svg>
                                            </div>
                                            <p className="text-gray-700 text-lg mb-6 flex-grow italic">
                                                &ldquo;{testimonial.quote}&rdquo;
                                            </p>
                                            <div>
                                                <div className="font-semibold text-gray-900 text-lg">
                                                    {testimonial.author}
                                                </div>
                                                <div className="text-blue-600 font-medium">
                                                    {testimonial.role}
                                                </div>
                                                <div className="text-gray-500 text-sm">
                                                    {testimonial.company}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                    </Carousel>
                </div>

                {/* Trusted Companies Section */}
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        Trusted by apprentices at top companies
                    </h3>
                    <p className="text-gray-600">
                        Join thousands of successful apprentices
                    </p>
                </div>

                {/* Endless Company Logos Carousel */}
                <div className="relative overflow-hidden">
                    <div className="flex animate-scroll-left">
                        {/* First set of logos */}
                        <div className="flex items-center justify-center min-w-0 shrink-0">
                            {companies.map((company, index) => (
                                <div key={index} className="flex items-center justify-center mx-8 w-24 h-16 grayscale hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src={company.logo}
                                        alt={`${company.name} logo`}
                                        width={80}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Duplicate set for seamless loop */}
                        <div className="flex items-center justify-center min-w-0 shrink-0">
                            {companies.map((company, index) => (
                                <div key={`duplicate-${index}`} className="flex items-center justify-center mx-8 w-24 h-16 grayscale hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src={company.logo}
                                        alt={`${company.name} logo`}
                                        width={80}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};