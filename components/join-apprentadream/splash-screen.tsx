import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Briefcase } from "lucide-react";
import { AvatarCircles } from "../ui/avatar-circles";
import { Highlighter } from "../ui/highlighter";

interface SplashScreenProps {
  onStart: () => void;
}

const sloganWords = [
  ["skip", "the", "maybe"],
  ["get", "the", "yes"],
];

export function SplashScreen({ onStart }: SplashScreenProps) {
  const [showIntro, setShowIntro] = useState(true);
  const [visibleWords, setVisibleWords] = useState<number>(0);

  useEffect(() => {
    if (!showIntro) return;

    const totalWords = sloganWords.flat().length;

    // Show each word with a delay
    const wordTimers = Array.from({ length: totalWords }, (_, index) => {
      return setTimeout(() => {
        setVisibleWords(index + 1);
      }, index * 200); // 200ms between each word
    });

    // Transition to main splash screen after all words shown
    const transitionTimer = setTimeout(
      () => {
        setShowIntro(false);
      },
      totalWords * 200 + 1000
    ); // Extra 1 second after last word

    return () => {
      wordTimers.forEach((timer) => clearTimeout(timer));
      clearTimeout(transitionTimer);
    };
  }, [showIntro]);

  // Animated intro screen
  if (showIntro) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] animate-in fade-in duration-500">
        <div className="text-center space-y-4 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white space-y-2">
            {sloganWords.map((line, lineIndex) => {
              const lineStartIndex = lineIndex * 3; // 2 lines, of 3 words each
              return (
                <div key={lineIndex} className="block">
                  {line.map((word, wordIndex) => {
                    const globalIndex = lineStartIndex + wordIndex;
                    return (
                      <span
                        key={wordIndex}
                        className={`inline-block mx-2 transition-all duration-500 ${
                          globalIndex < visibleWords
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`}
                      >
                        {word}
                      </span>
                    );
                  })}
                </div>
              );
            })}
          </h1>
        </div>
      </div>
    );
  }

  const avatars = [
    {
      imageUrl: "https://avatar.iran.liara.run/public/1",
      profileUrl: "https://github.com/dillionverma",
    },
    {
      imageUrl: "https://avatar.iran.liara.run/public/10",
      profileUrl: "https://github.com/tomonarifeehan",
    },
    {
      imageUrl: "https://avatar.iran.liara.run/public/59",
      profileUrl: "https://github.com/BankkRoll",
    },
    {
      imageUrl: "https://avatar.iran.liara.run/public/30",
      profileUrl: "https://github.com/safethecode",
    },
    {
      imageUrl: "https://avatar.iran.liara.run/public/96",
      profileUrl: "https://github.com/sanjay-mali",
    },
    {
      imageUrl: "https://avatar.iran.liara.run/public/50",
      profileUrl: "https://github.com/itsarghyadas",
    },
  ];

  // Main splash screen
  return (
    <div className="flex flex-col items-center justify-center animate-in fade-in duration-700">
      <div className="text-center px-4">
        {/* Logo */}
        <div>
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

        {/* Title */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Welcome to{" "}
            <Highlighter action="underline" color="#3B82F6">
              Apprentadream
            </Highlighter>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Join the UK&apos;s largest apprenticeship community
          </p>
        </div>

        {/* Community Stats */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-gray-400 mb-8">
          <div className="flex items-center gap-2">
            <span className="flex flex-col items-center">
              <AvatarCircles
                avatarUrls={avatars}
                className="z-10 flex -space-x-3 rtl:space-x-reverse [&>a>img]:h-8 [&>a>img]:w-8"
              />
              <span className="text-sm text-gray-400 mt-1">+2300 others</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl text-white">
              <Briefcase />
            </span>
            <span>
              <span className="font-bold text-white">4</span> offers/member
            </span>
          </div>
        </div>

        {/* Start / Resume Buttons */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onStart}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            Join the WhatsApp Community
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="text-white mt-20">
          <p>
            Terms apply. This community is a WhatsApp Community. You must be at least 13 years of
            age to use WhatsApp. Apprentadream is managed by Cenk Mustafa & his team.
          </p>
        </div>
      </div>
    </div>
  );
}
