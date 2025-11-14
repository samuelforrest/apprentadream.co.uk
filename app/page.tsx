"use client";

import { useState } from "react";
import { SplashScreen } from "@/components/common/splash-screen";
import { ApprentaDreamForm } from "@/components/join-apprentadream/gamified-form";
import { UniDreamForm } from "@/components/join-unidream/gamified-form";
import { CompanyHubForm } from "@/components/join-company-hub/gamified-form";

type FormType = "splash" | "apprentadream" | "unidream" | "company-hub";

export default function JoinPage() {
  const [currentForm, setCurrentForm] = useState<FormType>("splash");

  const handleStartApprentadream = () => {
    setCurrentForm("apprentadream");
  };

  const handleStartUnidream = () => {
    setCurrentForm("unidream");
  };

  const handleStartCompanyHub = () => {
    setCurrentForm("company-hub");
  };

  if (currentForm === "apprentadream") {
    return (
      <div className="min-h-screen bg-black w-full">
        <div className="flex min-h-screen w-full items-center justify-center px-4 py-8 md:px-6 lg:px-8">
          <div className="w-full max-w-3xl">
            <ApprentaDreamForm />
          </div>
        </div>
      </div>
    );
  }

  if (currentForm === "unidream") {
    return (
      <div className="min-h-screen bg-black w-full">
        <div className="flex min-h-screen w-full items-center justify-center px-4 py-8 md:px-6 lg:px-8">
          <div className="w-full max-w-3xl">
            <UniDreamForm />
          </div>
        </div>
      </div>
    );
  }

  if (currentForm === "company-hub") {
    return (
      <div className="min-h-screen bg-black w-full">
        <div className="flex min-h-screen w-full items-center justify-center px-4 py-8 md:px-6 lg:px-8">
          <div className="w-full max-w-3xl">
            <CompanyHubForm />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black w-full">
      <div className="flex min-h-screen w-full items-center justify-center px-4 py-8 md:px-6 lg:px-8">
        <div className="w-full max-w-3xl">
          <SplashScreen
            onStartApprentadream={handleStartApprentadream}
            onStartUnidream={handleStartUnidream}
            onStartCompanyHub={handleStartCompanyHub}
          />
        </div>
      </div>
    </div>
  );
}
