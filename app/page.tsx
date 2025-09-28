import { LoginForm } from "@/components/join/login-form";
import Image from "next/image";

export default function JoinPage() {
    return(
        <div className="min-h-screen bg-black w-full">
            <div className="flex min-h-screen w-full justify-center px-4 py-8 md:p-10 md:items-center">
                <div className="w-full max-w-md space-y-6">
                    <div className="text-center space-y-4 pt-8 md:pt-0">
                        <div>
                           <Image src="/ad.png" alt="logo" width="100" height="50" className="mx-auto" priority/>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white">Join Apprentadream</h1>
                        <p className="text-base md:text-lg text-white/90 px-4 pb-5">Complete the signup form below to gain access to the WhatsApp community instantly.</p>
                    </div>
                    <div className="pb-16">
                        <LoginForm/>
                    </div>
                </div>
            </div>

        </div>
    )
}
