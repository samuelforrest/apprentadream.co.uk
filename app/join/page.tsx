import { LoginForm } from "@/components/join/login-form";
/*import Image from "next/image";*/


export default function JoinPage() {
    return(
        <div className="min-h-screen bg-black w-full absolute inset-0 overflow-auto">
            <div className="flex min-h-svh w-full items-center flex-col p-6 md:p-10 pt-20">
                <div className="flex-col items-center">
                    {/*<div>
                        <Image src="/ad.png" alt="logo" width="50" height="50" className="mx-auto"/>
                    </div>*/}
                    <p className="text-4xl font-bold text-center p-7 text-white">Join Apprentadream</p>
                    <p className="text-lg text-center text-white">Complete the signup form below to gain access to the WhatsApp community instantly.</p>
                </div>
                <div className="w-full max-w-sm mt-10">
                    <LoginForm/>
                </div>
            </div>
        </div>
    )
}