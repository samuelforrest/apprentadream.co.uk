import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

export default function About() {
    return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8">
          Why Join Apprentadream
        </h2>
      </div>

      {/* Responsive Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-5 mr-5 mt-15">
        <Card className="w-full h-full">
          <CardHeader>
            <CardTitle>Arctic-shores style assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Gain practice with our mock 1-hour arctic-shores style assesment, and detailed results.</p>
            <ul className="list-disc list-inside">
                <br></br>
                <li>Get ahead of the competition</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="w-full h-full">
          <CardHeader>
            <CardTitle>Mentorship & Guidance</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Work with professionals who guide your growth every step of the way.</p>
          </CardContent>
        </Card>

        <Card className="w-full h-full">
          <CardHeader>
            <CardTitle>Debt-Free Degree</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Graduate without loans while gaining valuable work experience.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}