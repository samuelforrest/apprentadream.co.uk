import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Handshake, Megaphone } from "lucide-react";

export function Step6Confirmation() {
  return (
    <div className="space-y-6 pt-3">
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <span className="text-4xl"><FaWhatsapp className="h-10 w-10 text-green-500"/></span>
            <p className="font-semibold text-black">Instant WhatsApp Access</p>
            <p className="text-sm text-gray-600">Join 2,200+ members</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <span className="text-4xl"><Megaphone className="h-10 w-10 text-red-500"/></span>
            <p className="font-semibold text-black">Daily Opportunities</p>
            <p className="text-sm text-gray-600">New apprenticeships posted daily</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 col-span-2 md:col-span-1 justify-self-center">
            <span className="text-4xl"><Handshake className="h-10 w-10 text-blue-600"/></span>
            <p className="font-semibold text-black">Grow your network</p>
            <p className="text-sm text-gray-600">Connect with current & aspiring apprentices</p>
          </div>
        </div>
      </div>

    <div className="border border-white/20 rounded-lg p-2 sm:p-3">
  <label className="flex items-start gap-2 text-sm cursor-pointer">
    <input
      type="checkbox"
      required
      className="mt-0.5 h-5 w-5 shrink-0 accent-blue-600 cursor-pointer"
    />
    <span className="leading-snug text-gray-800">
      I agree to the{" "}
      <Link
        href="/terms"
        className="font-semibold hover:opacity-80"
        target="_blank"
      >
        Terms &amp; Conditions
      </Link>{" "}
      (Link to terms will reset form progress)
    </span>
  </label>
</div>
    </div>
  );
}
