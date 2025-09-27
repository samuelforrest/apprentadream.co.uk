"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
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

  const handleCopy = async () => {
    {
      await navigator.clipboard.writeText("https://apprentadream.com/joi") //WILL NEED TO REPLACE WITH ACTUAL URL
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    }
  }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Join Apprentadream</CardTitle>
          <CardDescription>
            The only apprenticeship community you need
          </CardDescription>
        </CardHeader>
        <CardContent>
            
          <form>
            
            <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="text">Full Name</Label>
                </div>
                <Input id="fullname" type="text" required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="sam@gmail.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="phone">Phone</Label>
                </div>
                <Input id="password" type="tel" required />
              </div>
              <div className="grid gap-3">
                <Label>I am currently</Label>
                <Select name="status" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your current status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Year 11 student</SelectItem>
                    <SelectItem value="graduate">Year 12 student</SelectItem>
                    <SelectItem value="professional">Year 13 student</SelectItem>
                    <SelectItem value="otherstudent">International / Other student</SelectItem>
                    <SelectItem value="gapyear">Gap Year student</SelectItem>
                    <SelectItem value="careerchange">Career change</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3">
                <Label>Who told you about Apprentadream?</Label>
                <Select name="refferal" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select refferal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                    <SelectItem value="tiktok">Tiktok</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="online">Online</SelectItem>
                    <SelectItem value="friendfamily">Friend/Family</SelectItem>
                    <SelectItem value="otherrefferal">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>



              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Join Now
                </Button>
              </div>
            </div>
            <div className="mt-8 text-center text-sm">
      Let your friends join Apprentadream{" "}
      <button
        onClick={handleCopy}
        className="underline underline-offset-4 hover:text-blue-600"
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
