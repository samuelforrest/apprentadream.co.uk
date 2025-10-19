import Link from "next/link";
import { Label } from "@/components/ui/label";

export function Step6Confirmation() {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-bold text-black mb-6 text-lg text-center">What Happens Next?</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <span className="text-4xl">✅</span>
            <p className="font-medium text-black">Instant WhatsApp Access</p>
            <p className="text-sm text-gray-600">Join 1,000+ apprenticeship seekers</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <span className="text-4xl">🎯</span>
            <p className="font-medium text-black">Weekly Opportunities</p>
            <p className="text-sm text-gray-600">New apprenticeships posted daily</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <span className="text-4xl">🤝</span>
            <p className="font-medium text-black">Grow your network</p>
            <p className="text-sm text-gray-600">Connect with industry professionals</p>
          </div>
        </div>
      </div>

      <div className="border border-white/20 rounded-lg p-4">
        <div className="flex items-start gap-2">
          <input type="checkbox" required className="mt-1" />
          <Label className="text-sm">
            I agree to the{" "}
            <Link href="/terms" className="text-purple-400 hover:underline" target="_blank">
              Terms & Conditions
            </Link>{" "}
            and consent to Apprentadream processing my personal data
          </Label>
        </div>
      </div>
    </div>
  );
}
