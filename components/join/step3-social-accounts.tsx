import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormData } from "./types";

interface Step3SocialAccountsProps {
  formData: FormData;
  errors: {[key: string]: string};
  onUpdate: (updates: Partial<FormData>) => void;
  onErrorClear: (field: string) => void;
}

export function Step3SocialAccounts({ formData, errors, onUpdate, onErrorClear }: Step3SocialAccountsProps) {
  return (
    <div className="space-y-4 mb-4">
      <div className="text-left mb-10 md:mb-12">
        <p className="text-sm text-black mb-2">This section is optional. When we launch our online platform, these will be added to your profile. We highly recommend you add them.</p>
      </div>

      <div className="relative my-8">
  <hr className="border-t border-gray-300" />
  <span className="absolute left-1/2 -top-2 -translate-x-1/2 md:left-1/2 md:-top-3 md:-translate-x-1/2 bg-white px-2 text-xs md:text-sm text-gray-500">
    Optional questions
  </span>
</div>

      <div className="space-y-2 pt-5">
        <Label htmlFor="linkedinUrl">LinkedIn Profile URL</Label>
        <Input
          id="linkedinUrl"
          type="url"
          placeholder="https://linkedin.com/in/yourprofile"
          value={formData.linkedinUrl}
          onChange={(e) => {
            onUpdate({ linkedinUrl: e.target.value });
            if (errors.linkedinUrl) {
              onErrorClear('linkedinUrl');
            }
          }}
          className={errors.linkedinUrl ? "border-red-500" : ""}
        />
        {errors.linkedinUrl && (
          <p className="text-sm text-red-500">{errors.linkedinUrl}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="tiktok">TikTok Username</Label>
        <Input
          id="tiktok"
          type="text"
          placeholder="@yourusername"
          value={formData.tiktokUsername}
          onChange={(e) => onUpdate({ tiktokUsername: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="instagram">Instagram Username</Label>
        <Input
          id="instagram"
          type="text"
          placeholder="@yourusername"
          value={formData.instagramUsername}
          onChange={(e) => onUpdate({ instagramUsername: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="twitter">Twitter/X Username</Label>
        <Input
          id="twitter"
          type="text"
          placeholder="@yourusername"
          value={formData.twitterUsername}
          onChange={(e) => onUpdate({ twitterUsername: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="website">Personal Website</Label>
        <Input
          id="website"
          type="url"
          placeholder="https://yourwebsite.com"
          value={formData.website}
          onChange={(e) => onUpdate({ website: e.target.value })}
        />
      </div>
    </div>
  );
}
