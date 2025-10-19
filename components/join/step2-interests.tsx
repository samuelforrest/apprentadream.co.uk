import { Label } from "@/components/ui/label";
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

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label>Apprenticeship Level *</Label>
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
          value={formData.industries}
          onValueChange={onIndustryToggle}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 rounded-xl"
        >
          {industries.map((industry) => (
            <ToggleGroupItem
              key={industry}
              value={industry}
              aria-label={industry}
              className="data-[state=on]:bg-blue-600 data-[state=on]:text-white rounded-lg border-2"
            >
              {industry}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        {errors.industries && (
          <p className="text-sm text-red-500">{errors.industries}</p>
        )}
      </div>
    </div>
  );
}
