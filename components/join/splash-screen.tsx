import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChartNoAxesCombined, Users } from "lucide-react";
import { ShimmerButton } from "../ui/shimmer-button";

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
  const [hasSavedProgress, setHasSavedProgress] = useState(false);

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

  // Detect saved progress
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const has = Object.keys(localStorage).some((k) => k.startsWith("join-form."));
      setHasSavedProgress(has);
    } catch {
      // ignore storage access issues
    }
  }, []);

  const clearJoinFormStorage = () => {
    if (typeof window === "undefined") return;
    try {
      Object.keys(localStorage)
        .filter((k) => k.startsWith("join-form."))
        .forEach((k) => localStorage.removeItem(k));
    } catch {
      // ignore
    }
  };

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
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Join Apprentadream
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Join the Apprentadream WhatsApp community today to network with current and future
            apprentices.
          </p>
        </div>

        {/* Start / Resume Buttons */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          {hasSavedProgress ? (
            <>
              <ShimmerButton
                onClick={onStart}
                shimmerColor="#3b82f6"
                shimmerSize="0.7em"
                shimmerDuration="1.3s"
                borderRadius="9999px"
                background="rgb(37 99 235)"
                className="text-white font-semibold text-base px-6 py-3 shadow-lg hover:scale-110"
              >
                <div className="flex items-center gap-2">
                  Resume your sign up
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </ShimmerButton>
              <ShimmerButton
                onClick={() => {
                  clearJoinFormStorage();
                  // Ensure in-memory state resets by reloading
                  window.location.reload();
                }}
                shimmerColor="#9ca3af"
                shimmerSize="0.7em"
                shimmerDuration="1.3s"
                borderRadius="9999px"
                background="rgb(31 41 55)"
                className="text-white font-semibold text-base px-6 py-3 shadow-lg hover:scale-110"
              >
                Start over
              </ShimmerButton>
            </>
          ) : (
            <ShimmerButton
              onClick={onStart}
              shimmerColor="#3b82f6"
              shimmerSize="0.7em"
              shimmerDuration="1.3s"
              borderRadius="9999px"
              background="rgb(37 99 235)"
              className="text-white font-semibold text-base px-6 py-3 shadow-lg hover:scale-110"
            >
              <div className="flex items-center gap-2">
                Join the WhatsApp Community
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </ShimmerButton>
          )}
        </div>

        {/* Stats tagline */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-gray-400 pt-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl text-white">
              <Users />
            </span>
            <span>
              <span className="font-bold text-white">2,300+</span> members
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl text-white">
              <ChartNoAxesCombined />
            </span>
            <span>
              <span className="font-bold text-white">4</span> offers/member
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
