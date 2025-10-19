import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, ListCheckIcon, LucideHandshake, Megaphone } from "lucide-react";

interface Step5ReferralsProps {
  referralLink: string;
  copied: boolean;
  onCopy: () => void;
}

export function Step5Referrals({ referralLink, copied, onCopy }: Step5ReferralsProps) {
  return (
    <div className="space-y-6">

      <Label className="text-black font-semibold text-md"><Link className="h-5 w-5" /> Your Unique Referral Link</Label>
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
          className="shrink-0 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white"
        >
          {copied ? "✓ Copied!" : "Copy"}
        </Button>
      </div>

      <div className="gap-2">
        <h4 className="font-semibold text-black mb-4 flex items-center gap-2">
          <ListCheckIcon className="h-5 w-5" />
          Instructions
        </h4>
        <ol className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span>1. Copy your unique referral link above</span>
          </li>
          <li className="flex items-start gap-2">
            <span>2. Share it via WhatsApp, Instagram, TikTok, or any platform</span>
          </li>
          <li className="flex items-start gap-2">
            <span>3. Top referrer wins the £25 Amazon voucher and will recieve an email / text message</span>
          </li>
        </ol>
      </div>

    </div>
  );
}
