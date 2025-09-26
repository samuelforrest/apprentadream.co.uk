import { Brain, CheckCircle, Handshake, TrendingUp } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export default function About() {
    return (
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-8">
          Why Join Apprentadream
        </h2>
      </div>

      {/* Responsive Grid */}
      <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card className="w-full h-full flex flex-col">
          <CardHeader>
            <CardTitle><Brain className="w-6 h-6 text-pink-500 inline mr-3"/>Arctic-shores style test</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            
            <p>Gain practice with our mock 1-hour arctic-shores style assesment, and detailed results.</p>
            <ul className="mt-6 space-y-2 text-gray-700">
                
                <li className="hover:font-bold  hover:cursor-pointer font-medium">
                  <CheckCircle className="w-4 h-4 inline text-green-500 mr-2" />Get ahead of the competition</li>
                <li className="hover:font-bold  hover:cursor-pointer font-medium">
                  <CheckCircle className="w-4 h-4 inline text-green-500 mr-2" />Prepare for the test</li>

            </ul>
          </CardContent>
          <CardFooter className="mt-auto pt-4">
            <Button size="sm" variant="outline" className="text-sm cursor-pointer">
              Learn More
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-full h-full flex flex-col">
          <CardHeader>
            <CardTitle><Handshake className="w-6 h-6 text-blue-500 inline mr-3"/>Mentorship & Guidance</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">

            <p className="hidden md:block">Gain access to Apprentadream&apos;s large network of mentors, available for 1-2-1 sessions.</p>
            
            <ul className="space-y-2 md:mt-6 text-gray-700">
                
                <li className="hover:font-bold  hover:cursor-pointer font-medium">
                  <CheckCircle className="w-4 h-4 inline text-green-500 mr-2" />Get valuable advice</li>
                <li className="hover:font-bold  hover:cursor-pointer font-medium">
                  <CheckCircle className="w-4 h-4 inline text-green-500 mr-2" />Tailor and improve your CV</li>

            </ul>
          </CardContent>
          <CardFooter className="mt-auto pt-4">
            <Button size="sm" variant="outline" className="text-sm cursor-pointer">
              Learn More
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-full h-full flex flex-col">
          <CardHeader>
            <CardTitle><TrendingUp className="w-6 h-6 text-orange-600 inline mr-3"/>AI tools & trackers</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">

            <p className="hidden md:block">Gain access to a wide-variety of Apprentadream&apos;s AI tools</p>

            <ul className="space-y-2 md:mt-6 text-gray-700">
                
                <li className="hover:font-bold hover:cursor-pointer font-medium">
                  <CheckCircle className="w-4 h-4 inline text-green-500 mr-2" />AI careers assistant</li>
                <li className="hover:font-bold hover:cursor-pointer font-medium">
                  <CheckCircle className="w-4 h-4 inline text-green-500 mr-2" />AI CV review</li>
                <li className="hover:font-bold hover:cursor-pointer font-medium">
                  <CheckCircle className="w-4 h-4 inline text-green-500 mr-2" />AI LinkedIn poster</li>
                <li className="hover:font-bold hover:cursor-pointer font-medium">
                  <CheckCircle className="w-4 h-4 inline text-green-500 mr-2" />AI Apprenticeship Tracker</li>
                  

            </ul>
          </CardContent>
          <CardFooter className="mt-auto pt-1">
            <Button size="sm" variant="outline" className="text-sm cursor-pointer">
              Learn More
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="text-center mt-16 sm:mt-20 md:mt-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-8 sm:mb-12">Our network in numbers</h2>

        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4 mt-8 sm:mt-12 md:mt-16">
          <div>
            <p className="text-2xl sm:text-3xl font-bold">2000+</p>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base">Active Members</p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl font-bold">95%</p>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base">Offer Rate (2024)</p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl font-bold">3</p>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base">Brand Partnerships</p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl font-bold">32</p>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base">Ambassadors</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}