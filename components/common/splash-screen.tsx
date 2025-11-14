import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Briefcase, Building2 } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { AvatarCircles } from "../ui/avatar-circles";
import { Highlighter } from "../ui/highlighter";
import Link from "next/link";

interface SplashScreenProps {
  onStartApprentadream: () => void;
  onStartUnidream: () => void;
  onStartCompanyHub: () => void;
}

const sloganWords = [
  ["skip", "the", "maybe"],
  ["get", "the", "yes"],
];

/**
 * Renders the app's splash screen with an animated slogan intro followed by interactive entry cards.
 *
 * After mounting, shows the slogan word-by-word then transitions to the main splash UI that includes
 * a logo, highlighted tagline, two feature cards (Apprentadream and Company Hub) with avatar clusters,
 * and terms links. Clicking a card invokes its corresponding start callback.
 *
 * @param onStartApprentadream - Callback invoked when the "Apprentadream" card is clicked
 * @param onStartCompanyHub - Callback invoked when the "Company Hub" card is clicked
 * @returns The splash screen React element
 */
export function SplashScreen({ onStartApprentadream, onStartCompanyHub }: SplashScreenProps) {
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
    },
    {
      imageUrl: "https://avatar.iran.liara.run/public/10",
    },
    {
      imageUrl: "https://avatar.iran.liara.run/public/59",
    },
    {
      imageUrl: "https://avatar.iran.liara.run/public/30",
    },
    {
      imageUrl: "https://avatar.iran.liara.run/public/96",
    },
    {
      imageUrl: "https://avatar.iran.liara.run/public/50",
    },
  ];

  const avatars2 = [
    {
      imageUrl: "https://avatar.iran.liara.run/public/2",
    },
    {
      imageUrl: "https://avatar.iran.liara.run/public/11",
    },
    {
      imageUrl: "https://avatar.iran.liara.run/public/69",
    },
    {
      imageUrl: "https://avatar.iran.liara.run/public/27",
    },
    {
      imageUrl: "https://avatar.iran.liara.run/public/95",
    },
    {
      imageUrl: "https://avatar.iran.liara.run/public/93",
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
            placeholder="blur"
            blurDataURL="data:image/png;base64,..."
          />
        </div>

        <div className="inline-block justify-center items-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            Build{" "}
            <Highlighter action="underline" color="#FF9800">
              your future
            </Highlighter>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-5 mb-10 max-w-4xl mx-auto">
          <Card
            className="bg-white/5 backdrop-blur border-white/30 hover:bg-blue-500/10 w-full lg:w-1/2 flex flex-col min-h-[140px] rounded-3xl cursor-pointer"
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
                The original Apprentadream community
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
            className="bg-white/5 backdrop-blur border-white/30 hover:bg-orange-500/10 w-full lg:w-1/2 flex flex-col min-h-[140px] rounded-3xl cursor-pointer"
            onClick={onStartCompanyHub}
          >
            <CardContent className="flex flex-col items-center justify-center h-full">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-orange-500 rounded-full p-2 flex-shrink-0">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Company Hub</h3>
                <div className="rounded-full flex-shrink-0">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-sm text-gray-300 text-center pb-4 px-5">
                Chat about companies & applications
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-gray-400 pt-2">
                <div className="flex items-center gap-2">
                  <span className="flex flex-col items-center">
                    <AvatarCircles
                      avatarUrls={avatars2}
                      className="z-10 flex -space-x-3 rtl:space-x-reverse [&>a>img]:h-8 [&>a>img]:w-8"
                    />
                    <span className="text-sm text-gray-400 mt-1">+400 others</span>
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
            Both Apprentadream and Company Hub are{" "}
            <Link
              href="https://faq.whatsapp.com/495856382464992"
              className="underline underline-offset-4"
            >
              {" "}
              WhatsApp Communities
            </Link>{" "}
            owned by Apprentadream.
          </p>
        </div>
      </div>
    </div>
  );
}