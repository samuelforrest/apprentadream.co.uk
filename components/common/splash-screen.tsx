import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { AvatarCircles } from "../ui/avatar-circles";
import { Highlighter } from "../ui/highlighter";
import Link from "next/link";

interface SplashScreenProps {
  onStartApprentadream: () => void;
  onStartUnidream: () => void;
}

const sloganWords = [
  ["skip", "the", "maybe"],
  ["get", "the", "yes"],
];

export function SplashScreen({ onStartApprentadream, onStartUnidream }: SplashScreenProps) {
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

  const avatars2 = [
    {
      imageUrl: "https://avatar.iran.liara.run/public/52",
      profileUrl: "https://github.com/dillionverma",
    },
    {
      imageUrl: "https://avatar.iran.liara.run/public/57",
      profileUrl: "https://github.com/tomonarifeehan",
    },
    {
      imageUrl: "https://avatar.iran.liara.run/public/19",
      profileUrl: "https://github.com/BankkRoll",
    },
    {
      imageUrl: "https://avatar.iran.liara.run/public/47",
      profileUrl: "https://github.com/safethecode",
    },
    {
      imageUrl: "https://avatar.iran.liara.run/public/42",
      profileUrl: "https://github.com/sanjay-mali",
    },
    {
      imageUrl: "https://avatar.iran.liara.run/public/26",
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

        <div className="inline-block justify-center items-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            Select{" "}
            <Highlighter action="underline" color="#FF9800">
              your future
            </Highlighter>
          </h1>
        </div>

        {/* Path Selection Cards */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 mb-10 max-w-2xl mx-auto">
          <Card
            className="bg-white/5 backdrop-blur border-white/30 hover:bg-blue-500/10 w-full md:w-1/2 flex flex-col min-h-[140px] rounded-3xl cursor-pointer"
            onClick={onStartApprentadream}
          >
            <CardContent className="flex flex-col items-center justify-center h-full">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-500 rounded-full p-2 flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Apprentadream</h3>
                <div className="rounded-full flex-shrink-0">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-sm text-gray-300 text-center pb-4 px-5">
                For aspiring & current apprentices
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-gray-400 pt-2">
                <div className="flex items-center gap-2">
                  <span className="flex flex-col items-center">
                    <AvatarCircles
                      avatarUrls={avatars}
                      className="z-10 flex -space-x-3 rtl:space-x-reverse [&>a>img]:h-8 [&>a>img]:w-8"
                    />
                    <span className="text-sm text-gray-400 mt-1">+2300 others</span>
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="bg-white/5 backdrop-blur border-white/30 hover:bg-purple-700/10 w-full md:w-1/2 flex flex-col min-h-[140px] rounded-3xl cursor-pointer"
            onClick={onStartUnidream}
          >
            <CardContent className="flex flex-col items-center justify-center h-full">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-purple-600 rounded-full p-2 flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Unidream</h3>
                <div className="rounded-full flex-shrink-0">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-sm text-gray-300 text-center pb-4">
                For aspiring & current university students
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-gray-400 pt-2">
                <div className="flex items-center gap-2">
                  <span className="flex flex-col items-center">
                    <AvatarCircles
                      avatarUrls={avatars2}
                      className="z-10 flex -space-x-3 rtl:space-x-reverse [&>a>img]:h-8 [&>a>img]:w-8"
                    />
                    <span className="text-sm text-gray-400 mt-1">+60 others</span>
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-white mt-20">
          <p>
            <Link href="/terms" className="underline underline-offset-4">
              Terms apply.
            </Link>{" "}
            Both Apprentadream and Unidream are{" "}
            <Link
              href="https://faq.whatsapp.com/495856382464992"
              className="underline underline-offset-4"
            >
              {" "}
              Whatsapp Communities
            </Link>
            . Unidream is in Beta.
          </p>
        </div>
      </div>
    </div>
  );
}
