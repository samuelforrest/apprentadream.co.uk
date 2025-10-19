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

                    {/* Success Animation */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                                <span className="text-6xl">🎉</span>
                            </div>
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                                <span className="text-2xl">✨</span>
                            </div>
                        </div>
                    </div>

                    {/* Welcome Message */}
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            Welcome to Apprentadream!
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300">
                            You&apos;re now part of a community of 1,000+ ambitious apprenticeship seekers
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 border border-purple-500/30 rounded-lg p-4 text-center">
                            <div className="text-3xl mb-2">📚</div>
                            <div className="text-2xl font-bold text-white">50+</div>
                            <div className="text-sm text-gray-400">Resources</div>
                        </div>
                        <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/30 border border-pink-500/30 rounded-lg p-4 text-center">
                            <div className="text-3xl mb-2">🎯</div>
                            <div className="text-2xl font-bold text-white">100+</div>
                            <div className="text-sm text-gray-400">Opportunities</div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 border border-blue-500/30 rounded-lg p-4 text-center">
                            <div className="text-3xl mb-2">🤝</div>
                            <div className="text-2xl font-bold text-white">24/7</div>
                            <div className="text-sm text-gray-400">Support</div>
                        </div>
                    </div>

                    {/* What's Next */}
                    <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6 space-y-4">
                        <h3 className="text-xl font-bold text-white">What&apos;s Next?</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-xl">✅</span>
                                <p className="text-gray-300">Click the button below to join our WhatsApp community</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-xl">✅</span>
                                <p className="text-gray-300">Introduce yourself to the community</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-xl">✅</span>
                                <p className="text-gray-300">Access exclusive resources pinned in the chat</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-xl">✅</span>
                                <p className="text-gray-300">Share your referral link to climb the leaderboard!</p>
                            </li>
                        </ul>
                    </div>

                    {/* WhatsApp Button */}
                    <div className="flex flex-col items-center gap-4">
                        <Link href="https://chat.whatsapp.com/Kek6I8hE2wQBj8Znp97Q2f" className="w-full max-w-md">
                            <Button size="lg" className="w-full px-8 py-6 text-lg text-white bg-green-600 hover:bg-green-700 rounded-xl transition-all transform hover:scale-105">
                                <FaWhatsapp className="w-6 h-6 mr-2" />
                                Join WhatsApp Community Now
                            </Button>
                        </Link>
                        <p className="text-sm text-gray-400">
                            1,234 members • Active now
                        </p>
                    </div>

                    {/* Referral Reminder */}
                    <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-lg p-6 text-center">
                        <div className="text-3xl mb-3">🏆</div>
                        <h4 className="font-bold text-white mb-2">Earn Leaderboard Points!</h4>
                        <p className="text-sm text-gray-300 mb-4">
                            Share your referral link with friends. Each successful referral = 10 points!
                        </p>
                        <Link href="/" className="text-purple-400 hover:underline font-medium">
                            View Leaderboard →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}