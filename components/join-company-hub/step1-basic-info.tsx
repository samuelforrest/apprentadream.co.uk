import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormData, countryCodeGroups } from "./types";
import * as Flags from "country-flag-icons/react/3x2";

type FlagComponents = Record<string, React.ComponentType<{ className?: string }>>;

interface Step1BasicInfoProps {
  formData: FormData;
  errors: { [key: string]: string };
  onUpdate: (updates: Partial<FormData>) => void;
}

/**
 * Renders the first step of the join-company-hub form collecting basic user information.
 *
 * @param formData - Current form values for first name, last name, email, countryCode, and mobile
 * @param errors - Mapping of field names to validation error messages shown beneath inputs
 * @param onUpdate - Callback invoked with partial updates to merge into the form data
 * @returns A React element containing inputs for first name, last name, email, a country-code selector with flags, and a mobile number input
 */
export function Step1BasicInfo({ formData, errors, onUpdate }: Step1BasicInfoProps) {
  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            type="text"
            placeholder="John"
            value={formData.firstName}
            onChange={(e) => onUpdate({ firstName: e.target.value })}
            className={errors.firstName ? "border-red-500" : ""}
          />
          {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            type="text"
            placeholder="Doe"
            value={formData.lastName}
            onChange={(e) => onUpdate({ lastName: e.target.value })}
            className={errors.lastName ? "border-red-500" : ""}
          />
          {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          placeholder="john.doe@example.com"
          value={formData.email}
          onChange={(e) => onUpdate({ email: e.target.value })}
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <Label>Mobile Number *</Label>
        <div className="flex gap-2">
          <Select
            value={formData.countryCode}
            onValueChange={(value) => onUpdate({ countryCode: value })}
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue>
                {formData.countryCode &&
                  (() => {
                    const country = countryCodeGroups
                      .flatMap((g) => g.codes)
                      .find((c) => c.code === formData.countryCode);
                    const FlagComponent = country
                      ? (Flags as FlagComponents)[country.country]
                      : null;
                    return (
                      <div className="flex items-center gap-2">
                        {FlagComponent && <FlagComponent className="w-5 h-4" />}
                        <span>
                          {formData.countryCode} {country?.country}
                        </span>
                      </div>
                    );
                  })()}
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="max-h-[300px] overflow-y-auto">
              {countryCodeGroups.map((group) => (
                <SelectGroup key={group.region}>
                  <SelectLabel>{group.region}</SelectLabel>
                  {group.codes.map((country) => {
                    const FlagComponent = (Flags as FlagComponents)[country.country];
                    return (
                      <SelectItem key={country.code} value={country.code}>
                        <div className="flex items-center gap-2">
                          {FlagComponent && <FlagComponent className="w-5 h-4" />}
                          <span>
                            {country.code} {country.name}
                          </span>
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              ))}
            </SelectContent>
          </Select>

          <Input
            type="tel"
            placeholder="7123456789"
            value={formData.mobile}
            onChange={(e) => onUpdate({ mobile: e.target.value })}
            className={errors.mobile ? "flex-1 border-red-500" : "flex-1"}
          />
        </div>
        {errors.mobile && <p className="text-sm text-red-500">{errors.mobile}</p>}
      </div>
    </div>
  );
}