import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Gift, Link } from "lucide-react";

interface Step5ReferralsProps {
  referralLink: string;
  copied: boolean;
  onCopy: () => void;
}

/**
 * Render a referral UI section with a labeled referral link, a read-only input, and a copy button.
 *
 * @param referralLink - The referral URL displayed in the read-only input.
 * @param copied - If `true`, displays the copied confirmation label on the button; otherwise shows "Copy".
 * @param onCopy - Callback invoked when the copy button is clicked.
 * @returns A JSX element containing the referral description, label with icon, read-only input, and copy button.
 */
export function Step5Referrals({ referralLink, copied, onCopy }: Step5ReferralsProps) {
  return (
    <div className="space-y-6">
      <div className="text-start text-sm">
        <p>
          We will soon be releasing something exciting. Those who refer 3+ people using their unique
          link will get{" "}
          <span className="inline-flex items-center gap-1">
            <Gift className="h-4 w-4 text-blue-600" />
          </span>{" "}
          feebies when we launch!
        </p>
      </div>

      <Label className="text-black font-semibold text-md">
        <Link className="h-5 w-5 text-blue-600" /> Your Unique Referral Link
      </Label>
      <div className="flex gap-2">
        <Input value={referralLink} readOnly className="flex-1 bg-white font-mono text-sm" />
        <Button
          type="button"
          onClick={onCopy}
          variant="outline"
          className="shrink-0 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white"
        >
          {copied ? "✓ Copied!" : "Copy"}
        </Button>
      </div>

      <div className="gap-2"></div>
    </div>
  );
}