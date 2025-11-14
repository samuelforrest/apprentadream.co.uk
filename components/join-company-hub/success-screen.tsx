import { useState } from "react";
import { Button } from "@/components/ui/button";

interface SuccessScreenProps {
  referralCode: string;
}

export function SuccessScreen({ referralCode }: SuccessScreenProps) {
  const [copied, setCopied] = useState(false);

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
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center px-4 max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-green-600 rounded-full">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Apprentadream!</h1>
          <p className="text-xl text-gray-300 mb-14">
            You&apos;re now part of a community of 2,300+ ambitious members
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <a
            href="https://chat.whatsapp.com/Kek6I8hE2wQBj8Znp97Q2f"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button
              size="lg"
              className="w-full max-w-md mx-auto px-8 py-6 text-lg text-white bg-green-600 hover:bg-green-700 rounded-xl transition-all transform hover:scale-105"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.692z" />
              </svg>
              Join WhatsApp Community
            </Button>
          </a>

          {referralCode && (
            <Button
              onClick={handleCopyLink}
              size="lg"
              className={`w-full max-w-md mx-auto px-8 py-6 text-lg rounded-xl transition-all transform hover:scale-105 ${
                copied
                  ? "text-white bg-blue-500 hover:bg-blue-400"
                  : "text-white bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {copied ? (
                <>
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Link Copied!
                </>
              ) : (
                <>
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    />
                  </svg>
                  Copy Your Referral Link
                </>
              )}
            </Button>
          )}
        </div>

        <p className="text-sm text-gray-400">2,235 members • Active now</p>
      </div>
    </div>
  );
}
