import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormData } from "./types";

interface Step4AdditionalQuestionsProps {
  formData: FormData;
  onUpdate: (updates: Partial<FormData>) => void;
}

export function Step4Diversity({ formData, onUpdate }: Step4AdditionalQuestionsProps) {
  return (
    <div className="space-y-4">
      <div className="text-left mb-6">
        <p className="text-sm text-black mb-2">This section is optional and helps us understand our community better. Your responses are confidential and used for monitoring purposes only.</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="sex">Sex</Label>
        <Select
          value={formData.sex}
          onValueChange={(value) => onUpdate({ sex: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="intersex">Intersex</SelectItem>
            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="gender">Gender</Label>
        <Select
          value={formData.gender}
          onValueChange={(value) => onUpdate({ gender: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="man">Man</SelectItem>
            <SelectItem value="woman">Woman</SelectItem>
            <SelectItem value="non-binary">Non-binary</SelectItem>
            <SelectItem value="genderfluid">Genderfluid</SelectItem>
            <SelectItem value="other">Other</SelectItem>
            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="orientation">Sexual Orientation</Label>
        <Select
          value={formData.sexualOrientation}
          onValueChange={(value) => onUpdate({ sexualOrientation: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="heterosexual">Heterosexual</SelectItem>
            <SelectItem value="gay">Gay</SelectItem>
            <SelectItem value="lesbian">Lesbian</SelectItem>
            <SelectItem value="bisexual">Bisexual</SelectItem>
            <SelectItem value="pansexual">Pansexual</SelectItem>
            <SelectItem value="asexual">Asexual</SelectItem>
            <SelectItem value="other">Other</SelectItem>
            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="ethnicity">Ethnicity</Label>
        <Select
          value={formData.ethnicity}
          onValueChange={(value) => onUpdate({ ethnicity: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asian-asian-british">Asian / Asian British</SelectItem>
            <SelectItem value="black-african-caribbean-black-british">Black / African / Caribbean / Black British</SelectItem>
            <SelectItem value="mixed-multiple-ethnic">Mixed / Multiple Ethnic Groups</SelectItem>
            <SelectItem value="white">White</SelectItem>
            <SelectItem value="other">Other Ethnic Group</SelectItem>
            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="socioeconomic">Socioeconomic Status</Label>
        <Select
          value={formData.socioeconomicStatus}
          onValueChange={(value) => onUpdate({ socioeconomicStatus: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="working-class">Working Class</SelectItem>
            <SelectItem value="middle-class">Middle Class</SelectItem>
            <SelectItem value="upper-middle-class">Upper Middle Class</SelectItem>
            <SelectItem value="upper-class">Upper Class</SelectItem>
            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="religion">Religion</Label>
        <Select
          value={formData.religion}
          onValueChange={(value) => onUpdate({ religion: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="no-religion">No Religion</SelectItem>
            <SelectItem value="christian">Christian (including Church of England, Catholic, Protestant and all other Christian denominations)</SelectItem>
            <SelectItem value="muslim">Muslim</SelectItem>
            <SelectItem value="hindu">Hindu</SelectItem>
            <SelectItem value="jewish">Jewish</SelectItem>
            <SelectItem value="sikh">Sikh</SelectItem>
            <SelectItem value="buddhist">Buddhist</SelectItem>
            <SelectItem value="other">Other religion or belief</SelectItem>
            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
