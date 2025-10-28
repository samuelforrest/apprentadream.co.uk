"use client";

import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { LinkIcon } from "lucide-react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const [copied, setCopied] = useState(false);

  // Get the referral code from URL params (passed from form submission)
  const referralCode = searchParams.get("ref") || "";

  // Generate the referral link
  const getReferralLink = () => {
    if (typeof window !== "undefined" && referralCode) {
      return `${window.location.origin}/?ref=${referralCode}`;
    }
    return "";
  };

  const handleCopyLink = async () => {
    const textToCopy = getReferralLink();

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        // older browser fallback
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Still mark as copied so user doesn't get stuck
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };
  return (
    <div className="min-h-screen bg-black w-full relative overflow-auto">
      <div className="flex min-h-screen w-full items-center justify-center flex-col p-6 md:p-10">
        <div className="max-w-2xl w-full space-y-4">
          <div className="">
            <Image
              src="/ad.png"
              alt="logo"
              width={250}
              height={100}
              className="mx-auto"
              priority
              loading="eager"
            />
          </div>

          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Welcome to Apprentadream!</h1>
            <p className="text-lg md:text-xl text-gray-300 pb-10">
              You&apos;re now part of an apprentice community of 2,200+
            </p>
          </div>

          <div className="flex flex-col items-center gap-8">
            <Link
              href="https://chat.whatsapp.com/Kek6I8hE2wQBj8Znp97Q2f"
              className="w-full max-w-md"
            >
              <Button
                size="lg"
                className="w-full px-8 py-6 text-lg text-white bg-green-600 hover:bg-green-700 rounded-xl transition-all transform hover:scale-105"
              >
                <FaWhatsapp className="w-8 h-8 mr-2" />
                Join the WhatsApp Community
              </Button>
            </Link>

            {referralCode && (
              <Button
                onClick={handleCopyLink}
                size="lg"
                className={`w-full max-w-md px-8 py-6 text-lg rounded-xl transition-all transform hover:scale-105 ${
                  copied
                    ? "text-white bg-blue-800 hover:bg-blue-900"
                    : "text-white bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {copied ? (
                  <>
                    <LinkIcon className="w-8 h-8 mr-2" />
                    Link Copied!
                  </>
                ) : (
                  <>
                    <LinkIcon className="w-6 h-6 mr-2" />
                    Copy your unique referral link
                  </>
                )}
              </Button>
            )}

            <p className="text-sm text-gray-400">2,235 members • Active now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Success() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
            <p>Loading...</p>
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
