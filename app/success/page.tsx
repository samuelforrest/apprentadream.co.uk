import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function Success () {
    return (
        <div>
            <div className="min-h-screen bg-black w-full absolute inset-0 overflow-auto">
                        <div className="flex min-h-svh w-full items-center justify-center flex-col p-6 md:p-10">
                            <div className="flex-col items-center">
                                <div>
                                    <Image src="/ad.png" alt="logo" width="100" height="50" className="mx-auto"/>
                                </div>
                                <p className="text-4xl font-bold text-center p-7 text-white">Welcome to the Apprentadream Community!</p>
                                <p className="text-lg text-center text-white">Click the link below to join the WhatsApp Community instantly.</p>
                                <div className="flex justify-center mt-10">
                                    <Link href="/join">
                                        <Button size="lg" className="px-8 py-6 text-lg text-white bg-green-700 rounded-xl cursor-pointer">
                                        <FaWhatsapp style={{ width: "1.5rem", height: "1.5rem" }}/>Join WhatsApp Community
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}