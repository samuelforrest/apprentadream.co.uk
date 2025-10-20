"use client";

import { Suspense, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProgressBar } from "./progress-bar";
import { SplashScreen } from "./splash-screen";
import { Step1BasicInfo } from "./step1-basic-info";
import { Step2Interests } from "./step2-interests";
import { Step3SocialAccounts } from "./step3-social-accounts";
import { Step4AdditionalQuestions } from "./step4-additional-questions";
import { Step5Referrals } from "./step5-referrals";
import { Step6Confirmation } from "./step6-confirmation";
import type { FormData } from "./types";
import confetti from "canvas-confetti";

export function ConfettiFireworks() {
  const handleClick = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;
    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };
  return handleClick;
}

// Component that handles search params
function GamifiedFormInner({ className, ...props }: React.ComponentProps<"div">) {
  const handleClick = ConfettiFireworks();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showSplash, setShowSplash] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [referralLinkCopied, setReferralLinkCopied] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [referrerCode, setReferrerCode] = useState<string>("");

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    countryCode: "+44",
    mobile: "",
    email: "",
    industries: [],
    apprenticeshipLevel: "",
    linkedinUrl: "",
    tiktokUsername: "",
    instagramUsername: "",
    twitterUsername: "",
    website: "",
    studentType: "",
    educationalCourse: "",
    mainMotivation: "",
    applyingUniversity: "",
    appliedBefore: "",
    referral: "",
    confidenceLevel: "50",
  });

  // Detect referral code from URL
  useEffect(() => {
    const refCode = searchParams.get("ref");
    if (refCode) {
      setReferrerCode(refCode);
    }
  }, [searchParams]);

  // Generate unique referral code: 4 random digits + last 4 digits of phone number
  const generateReferralCode = (mobile: string) => {
    if (!mobile) return "";

    // Extract only digits from mobile number
    const digits = mobile.replace(/\D/g, "");

    // Get last 4 digits of phone number
    const lastFourDigits = digits.slice(-4).padStart(4, "0");

    // Generate 4 random digits
    const randomFourDigits = Math.floor(1000 + Math.random() * 9000).toString();

    // Combine: 4 random + 4 phone digits = 8 total
    return `${randomFourDigits}${lastFourDigits}`;
  };

  // Update referral code when mobile changes
  const updateFormData = (updates: Partial<FormData>) => {
    const newData = { ...formData, ...updates };
    setFormData(newData);

    // Clear errors for updated fields
    const newErrors = { ...errors };
    Object.keys(updates).forEach((key) => {
      delete newErrors[key];
    });
    setErrors(newErrors);

    // Generate referral code if we have mobile number
    if (newData.mobile && newData.mobile.length >= 4) {
      const code = generateReferralCode(newData.mobile);
      setReferralCode(code);
    }
  };

  // Email validation
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Check if current step is valid (for visual state)
  const isStepValid = (): boolean => {
    switch (currentStep) {
      case 1:
        return (
          formData.firstName.trim().length >= 2 &&
          formData.lastName.trim().length >= 2 &&
          formData.mobile.trim() !== "" &&
          formData.email.trim() !== "" &&
          isValidEmail(formData.email)
        );
      case 2:
        return formData.industries.length > 0 && formData.apprenticeshipLevel !== "";
      case 3:
        return true; // All fields optional
      case 4:
        return (
          formData.studentType !== "" &&
          formData.educationalCourse !== "" &&
          formData.mainMotivation !== ""
        );
      case 5:
        return true; // No validation needed
      case 6:
        return true; // Handled by submit button
      default:
        return false;
    }
  };

  // Validate current step (shows errors)
  const validateStep = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    switch (currentStep) {
      case 1:
        if (!formData.firstName.trim()) {
          newErrors.firstName = "First name is required";
        } else if (formData.firstName.trim().length < 2) {
          newErrors.firstName = "First name must be at least 2 characters";
        }
        if (!formData.lastName.trim()) {
          newErrors.lastName = "Last name is required";
        } else if (formData.lastName.trim().length < 2) {
          newErrors.lastName = "Last name must be at least 2 characters";
        }
        if (!formData.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!isValidEmail(formData.email)) {
          newErrors.email = "Please enter a valid email address";
        }
        if (!formData.mobile.trim()) {
          newErrors.mobile = "Mobile number is required";
        } else if (formData.mobile.replace(/\D/g, "").length < 10) {
          newErrors.mobile = "Please enter a valid mobile number";
        }
        break;
      case 2:
        if (formData.industries.length === 0) {
          newErrors.industries = "Please select at least one industry";
        }
        if (!formData.apprenticeshipLevel) {
          newErrors.apprenticeshipLevel = "Please select an apprenticeship level";
        }
        break;
      // Step 3 - LinkedIn validation if provided
      case 3:
        if (formData.linkedinUrl && formData.linkedinUrl.trim()) {
          if (!formData.linkedinUrl.includes("linkedin.com/in")) {
            newErrors.linkedinUrl =
              "Please enter a valid LinkedIn profile URL (must contain linkedin.com/in)";
          }
        }
        break;
      // Step 4 - Additional Questions (all required)
      case 4:
        if (!formData.studentType) {
          newErrors.studentType = "Please select your student type";
        }
        if (!formData.educationalCourse) {
          newErrors.educationalCourse = "Please select what course you are studying";
        }
        if (!formData.mainMotivation) {
          newErrors.mainMotivation =
            "Please select your main motivation to apply for a Degree Apprenticeship";
        }
        break;
      // Step 5 is optional
      case 5:
        break;
      case 6:
        // Terms checkbox is handled by HTML5 required attribute
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getReferralLink = () => {
    if (!referralCode) return "https://joinapprentadream.vercel.app";
    return `https://joinapprentadream.vercel.app?ref=${referralCode}`;
  };

  const totalSteps = 6;

  const getSectionName = (step: number): string => {
    switch (step) {
      case 1:
        return "Basic information";
      case 2:
        return "Which Industries interest you?";
      case 3:
        return "Connect your social accounts";
      case 4:
        return "Additional Questions";
      case 5:
        return "Refer Friends for freebies";
      case 6:
        return "What you're about to unlock...";
      default:
        return "";
    }
  };

  const handleNext = () => {
    // Validate before moving to next step
    if (!validateStep()) {
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleIndustryToggle = (value: string[]) => {
    setFormData({ ...formData, industries: value });
  };

  const handleCopy = async () => {
    const textToCopy = getReferralLink();

    try {
      // Modern clipboard API (preferred)
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setReferralLinkCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } else {
        // Fallback for older browsers or insecure contexts
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          document.execCommand("copy");
          setCopied(true);
          setReferralLinkCopied(true);
          setTimeout(() => setCopied(false), 3000);
        } catch (err) {
          console.error("Fallback copy failed: ", err);
        } finally {
          document.body.removeChild(textArea);
        }
      }
    } catch (err) {
      console.error("Failed to copy: ", err);
      // Still mark as copied so user doesn't get stuck
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    // Basic Information
    data.append("First Name", formData.firstName);
    data.append("Last Name", formData.lastName);
    data.append("Country Code", formData.countryCode);
    data.append("Mobile", formData.mobile);
    data.append("Email", formData.email);

    // Interests
    data.append("Industries", formData.industries.join(", "));
    data.append("Apprenticeship Level", formData.apprenticeshipLevel);

    // Social Accounts
    data.append("LinkedIn URL", formData.linkedinUrl);
    data.append("TikTok", formData.tiktokUsername);
    data.append("Instagram", formData.instagramUsername);
    data.append("Twitter", formData.twitterUsername);
    data.append("Website", formData.website);

    // Additional Questions
    data.append("Student Type", formData.studentType);
    data.append("Educational Course", formData.educationalCourse);
    data.append("Main Motivation", formData.mainMotivation);
    data.append("Applying University", formData.applyingUniversity);
    data.append("Applied before", formData.appliedBefore);
    data.append("Confidence Level", formData.confidenceLevel);
    data.append("Referral Source", formData.referral);

    // Referral Tracking
    data.append("Referred By Code", referrerCode); // Who referred this user
    data.append("User Referral Code", referralCode); // This user's own code
    data.append("User Referral Link", getReferralLink()); // This user's own link
    data.append("Referral Link Copied", referralLinkCopied ? "Yes" : "No");

    // Add client-side timestamp for backup
    data.append("Client Timestamp", new Date().toISOString());

    try {
      console.log("Submitting to Google Sheets...");

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw6QdhnfAMhoXWLpSrp0Pr0-bSNvLrag-roT3BcxKtEUhqT1W2N2V_dw929a1QAU9FgcQ/exec",
        {
          method: "POST",
          body: data,
          mode: "no-cors", // This helps with CORS issues
        }
      );

      console.log("Response received:", response);

      // With no-cors mode, we can't read the response, so we assume success if no error is thrown
      if (response.type === "opaque" || response.ok) {
        console.log("Form submitted successfully!");
        // Pass the referral code to the success page so user can copy their link
        const successUrl = referralCode ? `/success?ref=${referralCode}` : "/success";
        router.push(successUrl);
      } else {
        console.error("Submission failed with status:", response.status);
        alert(`Submission failed with status: ${response.status}. Please try again.`);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Fetch error:", error);

      // Provide more detailed error information
      if (error instanceof TypeError && error.message.includes("fetch")) {
        alert("Network error: Please check your internet connection and try again.");
      } else if (error instanceof Error) {
        alert(`Error: ${error.message}. Please try again.`);
      } else {
        alert("Something went wrong. Please try again.");
      }
      setIsSubmitting(false);
    }
  };

  const onErrorClear = (field: string) => {
    const newErrors = { ...errors };
    delete newErrors[field];
    setErrors(newErrors);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {/* Splash Screen */}
      {showSplash ? (
        <SplashScreen onStart={() => setShowSplash(false)} />
      ) : (
        /* Main Form */
        <>
          <Card className="border-purple-500/20">
            <CardContent>
              <ProgressBar
                currentStep={currentStep}
                totalSteps={totalSteps}
                sectionName={getSectionName(currentStep)}
              />

              <form onSubmit={handleSubmit}>
                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                  <Step1BasicInfo formData={formData} errors={errors} onUpdate={updateFormData} />
                )}

                {/* Step 2: Interests */}
                {currentStep === 2 && (
                  <Step2Interests
                    formData={formData}
                    errors={errors}
                    onUpdate={updateFormData}
                    onIndustryToggle={handleIndustryToggle}
                  />
                )}

                {/* Step 3: Social Accounts */}
                {currentStep === 3 && (
                  <Step3SocialAccounts
                    formData={formData}
                    errors={errors}
                    onUpdate={updateFormData}
                    onErrorClear={onErrorClear}
                  />
                )}

                {/* Step 4: Additional Questions */}
                {currentStep === 4 && (
                  <Step4AdditionalQuestions
                    formData={formData}
                    errors={errors}
                    onUpdate={updateFormData}
                  />
                )}

                {/* Step 5: Refer Friends */}
                {currentStep === 5 && (
                  <Step5Referrals
                    referralLink={getReferralLink()}
                    copied={copied}
                    onCopy={handleCopy}
                  />
                )}

                {/* Step 6: Confirmation */}
                {currentStep === 6 && <Step6Confirmation />}

                {/* Navigation Buttons */}
                <div className="flex gap-3 mt-8">
                  {currentStep > 1 && (
                    <Button type="button" onClick={handleBack} variant="outline" className="flex-1">
                      ← Back
                    </Button>
                  )}

                  {currentStep < totalSteps ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className={cn("flex-1", !isStepValid() && "opacity-50 cursor-not-allowed")}
                    >
                      Next →
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1"
                      onClick={handleClick}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                          Joining...
                        </div>
                      ) : (
                        "Join Community →"
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}

// Main export component with Suspense wrapper
export function GamifiedForm({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-white border-t-transparent"></div>
        </div>
      }
    >
      <GamifiedFormInner className={className} {...props} />
    </Suspense>
  );
}
