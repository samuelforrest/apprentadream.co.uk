import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LucideHandshake, Megaphone } from "lucide-react";

interface Step5ReferralsProps {
  referralLink: string;
  copied: boolean;
  onCopy: () => void;
}

export function Step5Referrals({ referralLink, copied, onCopy }: Step5ReferralsProps) {
  return (
    <div className="space-y-6">
      <div className="text-left mb-9">
        <p className="text-gray-600">Share your unique referral link with friends, family and on LinkedIn.</p>
      </div>

      <Label className="text-black font-semibold">Your Unique Referral Link</Label>
      <div className="flex gap-2">
        <Input
          value={referralLink}
          readOnly
          className="flex-1 bg-white font-mono text-sm"
        />
        <Button
          type="button"
          onClick={onCopy}
          variant="outline"
          className="shrink-0 border-green-500 text-green-600 hover:bg-green-50"
        >
          {copied ? "✓ Copied!" : "Copy"}
        </Button>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        💡 Share this link with anyone interested in apprenticeships. When they sign up using your link, you&apos;ll earn points toward the prize!
      </p>

      <div className="bg-white/50 rounded-lg p-4 mt-4">
        <h4 className="font-semibold text-black mb-2 flex items-center gap-2">
          <Megaphone className="h-4 w-4" />
          How it works:
        </h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span>1️⃣</span>
            <span>Copy your unique referral link above</span>
          </li>
          <li className="flex items-start gap-2">
            <span>2️⃣</span>
            <span>Share it via WhatsApp, Instagram, TikTok, or any platform</span>
          </li>
          <li className="flex items-start gap-2">
            <span>3️⃣</span>
            <span>Each person who joins using your link earns you 10 points</span>
          </li>
          <li className="flex items-start gap-2">
            <span>🏆</span>
            <span>Top referrer wins the £25 Amazon voucher!</span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-lg p-4 mt-4">
        <div className="flex items-center gap-2 mb-2">
          <LucideHandshake className="h-5 w-5 text-green-600" />
          <h4 className="font-semibold text-black">Win £25 Amazon Voucher!</h4>
        </div>
        <p className="text-sm text-gray-700">
          Whoever refers the most valid connections will receive a <span className="font-bold text-green-600">£25 Amazon Gift Voucher</span>
        </p>
        <p className="text-xs text-gray-500 mt-2">Draw date: 31st January 2025</p>
      </div>

      <div className="text-center text-xs text-gray-500">
        <p>Track your referrals and ranking on the leaderboard below the form</p>
      </div>
    </div>
  );
}
