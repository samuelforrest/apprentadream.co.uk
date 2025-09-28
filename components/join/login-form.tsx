"use client"

import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"



export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [copied, setCopied] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    status: "",
    referral: "",
    linkedin: "",
  })

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("https://joinapprentadream.vercel.app")
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const router = useRouter();
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    data.append("Full Name", formData.fullname);
    data.append("Email", formData.email);
    data.append("Phone", formData.phone);
    data.append("Status", formData.status);
    data.append("Referral", formData.referral);
    data.append("Linkedin", formData.linkedin);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbww930MnREtL4uH1WqoWufeColEjQh1hPE7tLciQaL4OjZ2lm91WydGzfRgdmGi1bL1/exec",
        {
          method: "POST",
          body: data,
        }
      );

      if (response.ok) {
        router.push("/success"); // target success
      } else {
        alert("Submission failed. Try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Join Apprentadream</CardTitle>
          <CardDescription>
            * These fields are required.
          </CardDescription>
        </CardHeader>
        <CardContent>
            
          <form
            onSubmit={handleSubmit}
          >
            
            <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="text">Full Name *</Label>
                </div>
                <Input 
                  id="fullname" 
                  type="text" 
                  name="Full Name" 
                  value={formData.fullname}
                  onChange={(e) => setFormData({...formData, fullname: e.target.value})}
                  required 
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="sam@gmail.com"
                  name="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="phone">Phone *</Label>
                </div>
                <Input 
                  id="phone" 
                  name="Phone" 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required 
                />
              </div>
              <div className="grid gap-3">
                <Label>I am currently *</Label>
                <Select 
                  name="Status" 
                  value={formData.status}
                  onValueChange={(value) => setFormData({...formData, status: value})}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Type of student" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="y11student">Year 11 student</SelectItem>
                    <SelectItem value="y12student">Year 12 student</SelectItem>
                    <SelectItem value="y13student">Year 13 student</SelectItem>
                    <SelectItem value="gapyear">Gap Year student</SelectItem>
                    <SelectItem value="careerchange">Career change</SelectItem>
                    <SelectItem value="internationalstudent">International Student</SelectItem>
                    <SelectItem value="otherstudent">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3">
                <Label>Who told you about Apprentadream?</Label>
                <Select 
                  name="Referral" 
                  value={formData.referral}
                  onValueChange={(value) => setFormData({...formData, referral: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select referral" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                    <SelectItem value="tiktok">Tiktok</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="online">Online</SelectItem>
                    <SelectItem value="friendfamily">Friend/Family</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="linkedin">LinkedIn Username / Link</Label>
                <Input
                  id="linkedin"
                  type="text"
                  placeholder="linkedin.com/in/billgates"
                  name="Linkedin"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                />
              </div>
              <div className="flex flex-col gap-3">

                <Button type="submit" className="w-full" disabled={isSubmitting}>


                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Joining
                    </div>
                  ) : (
                    "Join Now"
                  )}


                </Button>
              </div>
            </div>
            <div className="mt-8 text-center text-sm">
                Let your friends join - {" "}
                <button
                    onClick={handleCopy}
                    className="underline underline-offset-5 hover:text-blue-600 hover:font-bold"
                >
                    {copied ? "Copied!" : "Copy link"}
                </button>
            </div>

          </form>
        </CardContent>
      </Card>
    </div>
  )
}
