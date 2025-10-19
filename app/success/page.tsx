import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function Success() {
    return (
        <div className="min-h-screen bg-black w-full relative overflow-auto">
            <div className="flex min-h-screen w-full items-center justify-center flex-col p-6 md:p-10">
                <div className="max-w-2xl w-full space-y-8">
                    {/* Logo */}
                    <div className="flex justify-center">
                        <Image src="/ad.png" alt="logo" width="120" height="60" priority/>
                    </div>

    

                    {/* Welcome Message */}
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            Welcome to Apprentadream!
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300">
                            You&apos;re now part of a community of 2,200+ ambitious apprenticeship seekers
                        </p>
                    </div>

                    
                    {/* WhatsApp Button */}
                    <div className="flex flex-col items-center gap-4">
                        <Link href="https://chat.whatsapp.com/Kek6I8hE2wQBj8Znp97Q2f" className="w-full max-w-md">
                            <Button size="lg" className="w-full px-8 py-6 text-lg text-white bg-green-600 hover:bg-green-700 rounded-xl transition-all transform hover:scale-105">
                                <FaWhatsapp className="w-6 h-6 mr-2" />
                                Click to join
                            </Button>
                        </Link>
                        <p className="text-sm text-gray-400">
                            2,235 members • Active now
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}