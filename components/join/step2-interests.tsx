import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FormData, industries, apprenticeshipLevels } from "./types";

interface Step2InterestsProps {
  formData: FormData;
  errors: {[key: string]: string};
  onUpdate: (updates: Partial<FormData>) => void;
  onIndustryToggle: (value: string[]) => void;
}

export function Step2Interests({ formData, errors, onUpdate, onIndustryToggle }: Step2InterestsProps) {
  // Get custom industry from formData (any industry not in the predefined list)
  const customIndustry = formData.industries.find(ind => !industries.includes(ind)) || "";
  const hasCustomIndustry = customIndustry !== "";
  const showCustomInput = formData.industries.includes("Other") || hasCustomIndustry;

  const handleIndustryToggle = (values: string[]) => {
    // If "Other" is deselected, remove the custom industry too
    const otherWasSelected = formData.industries.includes("Other");
    const otherIsNowSelected = values.includes("Other");
    
    if (otherWasSelected && !otherIsNowSelected) {
      // "Other" was deselected, so remove custom industry as well
      const filtered = values.filter(ind => ind !== customIndustry);
      onIndustryToggle(filtered);
    } else if (!otherWasSelected && otherIsNowSelected) {
      // "Other" was just selected, preserve custom industry if it exists
      const updated = customIndustry && !values.includes(customIndustry)
        ? [...values, customIndustry]
        : values;
      onIndustryToggle(updated);
    } else {
      // Keep custom industry if it exists (other industries are being toggled)
      const preservedIndustries = customIndustry && !values.includes(customIndustry) 
        ? [...values, customIndustry]
        : values;
      onIndustryToggle(preservedIndustries);
    }
  };

  const handleCustomIndustryChange = (value: string) => {
    const trimmedValue = value.trim();
    
    if (trimmedValue) {
      // Keep "Other" and add/update the custom industry
      const withoutCustom = formData.industries.filter(ind => 
        industries.includes(ind) || ind === "Other"
      );
      
      // Ensure "Other" is in the array and add the custom value
      const withOther = withoutCustom.includes("Other") ? withoutCustom : [...withoutCustom, "Other"];
      const updated = withOther.includes(trimmedValue) ? withOther : [...withOther, trimmedValue];
      onIndustryToggle(updated);
    } else {
      // Clear custom value, keep "Other" selected if it was selected
      const withoutCustom = formData.industries.filter(ind => 
        industries.includes(ind) || ind === "Other"
      );
      onIndustryToggle(withoutCustom);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label>Ideal Apprenticeship Level *</Label>
        <Select
          value={formData.apprenticeshipLevel}
          onValueChange={(value) => onUpdate({ apprenticeshipLevel: value })}
        >
          <SelectTrigger className={errors.apprenticeshipLevel ? "border-red-500" : ""}>
            <SelectValue placeholder="Select level" />
          </SelectTrigger>
          <SelectContent>
            {apprenticeshipLevels.map((level) => (
              <SelectItem key={level.value} value={level.value}>
                {level.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.apprenticeshipLevel && (
          <p className="text-sm text-red-500">{errors.apprenticeshipLevel}</p>
        )}
      </div>
      
      <div className="space-y-5">
        <Label>Industries of Interest *</Label>
        <ToggleGroup
          type="multiple"
          value={formData.industries.filter(ind => industries.includes(ind) || ind === "Other")}
          onValueChange={handleIndustryToggle}
          className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 rounded-xl"
        >
          {industries.map((industry) => (
            <ToggleGroupItem
              key={industry}
              value={industry}
              aria-label={industry}
              className="data-[state=on]:bg-black data-[state=on]:text-white rounded-lg border-2"
            >
              {industry}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        
        {showCustomInput && (
          <div className="space-y-2 mt-4">
            <Label htmlFor="customIndustry">Specify your other industry</Label>
            <Input
              id="customIndustry"
              type="text"
              placeholder="e.g., Biotechnology, Renewable Energy..."
              value={customIndustry}
              onChange={(e) => handleCustomIndustryChange(e.target.value)}
              className="w-full"
            />
          </div>
        )}
        
        {errors.industries && (
          <p className="text-sm text-red-500">{errors.industries}</p>
        )}
      </div>
    </div>
  );
}
