import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { FormData } from "./types";

interface Step4AdditionalQuestionsProps {
  formData: FormData;
  errors: { [key: string]: string };
  onUpdate: (updates: Partial<FormData>) => void;
}

/**
 * Renders the "Additional Questions" form section used in step 4 of the join flow.
 *
 * Renders several select inputs (student type, educational course, main motivation,
 * applying to university, previous application status, referral) and a confidence-level
 * slider, showing inline validation messages and applying error styling when `errors`
 * contains entries. User interactions call `onUpdate` with partial updates to `formData`.
 *
 * @param formData - Current form values for the fields rendered by this component
 * @param errors - Mapping of field names to validation messages; presence of a key applies error styling and displays the message
 * @param onUpdate - Callback invoked with a Partial<FormData> to update the parent form state
 * @returns The rendered Step4AdditionalQuestions React element
 */
export function Step4AdditionalQuestions({
  formData,
  errors,
  onUpdate,
}: Step4AdditionalQuestionsProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="studentType">I am currently *</Label>
        <Select
          value={formData.studentType}
          onValueChange={(value) => onUpdate({ studentType: value })}
        >
          <SelectTrigger className={errors.studentType ? "border-red-500" : ""}>
            <SelectValue placeholder="Select type of student" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Already an apprentice">Already an apprentice</SelectItem>
            <SelectItem value="On a gap year">Gap Year</SelectItem>
            <SelectItem value="Year 10/S3 student">Year 10 (S3) Student</SelectItem>
            <SelectItem value="Year 11/S4 student">Year 11 (S4) Student</SelectItem>
            <SelectItem value="Year 12/S5 student">Year 12 (S5) Student</SelectItem>
            <SelectItem value="Year 13/S6 student">Year 13 (S6) Student</SelectItem>
            <SelectItem value="International student">International Student</SelectItem>
            <SelectItem value="Career Change">Career Changer</SelectItem>
            <SelectItem value="Other / not listed">Other / not listed</SelectItem>
          </SelectContent>
        </Select>
        {errors.studentType && <p className="text-sm text-red-500">{errors.studentType}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="educationalCourse">Main qualification working towards / achieved *</Label>
        <Select
          value={formData.educationalCourse}
          onValueChange={(value) => onUpdate({ educationalCourse: value })}
        >
          <SelectTrigger className={errors.educationalCourse ? "border-red-500" : ""}>
            <SelectValue placeholder="Select course" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="A Levels">A Levels</SelectItem>
            <SelectItem value="T Levels">T Levels</SelectItem>
            <SelectItem value="BTEC">BTEC</SelectItem>
            <SelectItem value="IB">IB</SelectItem>
            <SelectItem value="Scottish Highers">Scottish Highers</SelectItem>
            <SelectItem value="GCSEs / IGCSEs">GCSEs / IGCSEs</SelectItem>
            <SelectItem value="National 4">National 4</SelectItem>
            <SelectItem value="Apprenticeship">Apprenticeship</SelectItem>
            <SelectItem value="Other / not listed">Other / not listed</SelectItem>
          </SelectContent>
        </Select>
        {errors.educationalCourse && (
          <p className="text-sm text-red-500">{errors.educationalCourse}</p>
        )}
      </div>

      <div className="space-y-2 pb-4">
        <Label htmlFor="mainMotivation">What motivates you to do an apprenticeship? *</Label>
        <Select
          value={formData.mainMotivation}
          onValueChange={(value) => onUpdate({ mainMotivation: value })}
        >
          <SelectTrigger className={errors.mainMotivation ? "border-red-500" : ""}>
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Build wealth early">Build wealth early</SelectItem>
            <SelectItem value="Gain experience">Gain experience</SelectItem>
            <SelectItem value="Avoid university debt">Avoid university debt</SelectItem>
            <SelectItem value="Start my career early">Start my career early</SelectItem>
            <SelectItem value="Prefer practical / hands on learning">
              Prefer practical / hands on
            </SelectItem>
            <SelectItem value="Prestige and networking">Prestige and networking</SelectItem>
            <SelectItem value="Other / unsure">Other / unsure</SelectItem>
          </SelectContent>
        </Select>
        {errors.mainMotivation && <p className="text-sm text-red-500">{errors.mainMotivation}</p>}
      </div>

      <div className="relative my-8">
        <hr className="border-t border-gray-300" />
        <span className="absolute left-1/2 -top-2 -translate-x-1/2 md:left-1/2 md:-top-3 md:-translate-x-1/2 bg-white px-2 text-xs md:text-sm text-gray-500">
          Optional questions
        </span>
      </div>

      <div className="space-y-2 pt-5">
        <Label htmlFor="applyingUniversity">Are you applying / at university?</Label>
        <Select
          value={formData.applyingUniversity}
          onValueChange={(value) => onUpdate({ applyingUniversity: value })}
        >
          <SelectTrigger className={errors.applyingUniversity ? "border-red-500" : ""}>
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Yes, applying to uni">Yes</SelectItem>
            <SelectItem value="No, not applying to uni">No</SelectItem>
            <SelectItem value="Have not decided">Have not yet decided</SelectItem>
            <SelectItem value="I'm already at university">
              I&apos;m already at university
            </SelectItem>
          </SelectContent>
        </Select>
        {errors.applyingUniversity && (
          <p className="text-sm text-red-500">{errors.applyingUniversity}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="appliedBefore">Did you apply last season?</Label>
        <Select
          value={formData.appliedBefore}
          onValueChange={(value) => onUpdate({ appliedBefore: value })}
        >
          <SelectTrigger className={errors.appliedBefore ? "border-red-500" : ""}>
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="No">No</SelectItem>
            <SelectItem value="Yes, did not reach further rounds">
              Yes, did not reach further rounds
            </SelectItem>
            <SelectItem value="Yes, I reached assesment center stage">
              Yes, reached assesment center
            </SelectItem>
            <SelectItem value="Yes, I declined an offer">Yes, declined an offer</SelectItem>
            <SelectItem value="Yes, I'm a current apprentice">
              Yes, I&apos;m a current apprentice
            </SelectItem>
          </SelectContent>
        </Select>
        {errors.appliedBefore && <p className="text-sm text-red-500">{errors.appliedBefore}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="referral">Referral</Label>
        <Select value={formData.referral} onValueChange={(value) => onUpdate({ referral: value })}>
          <SelectTrigger className={errors.referral ? "border-red-500" : ""}>
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Friend / Family">Friend / Family</SelectItem>
            <SelectItem value="LinkedIn">LinkedIn</SelectItem>
            <SelectItem value="TikTok">TikTok</SelectItem>
            <SelectItem value="Instagram">Instagram</SelectItem>
            <SelectItem value="News Source">News Source</SelectItem>
            <SelectItem value="Networking Event">Networking Event</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.referral && <p className="text-sm text-red-500">{errors.referral}</p>}
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="confidenceLevel">How confident are you about getting one?</Label>

          <div className="pt-2">
            <Slider
              id="confidenceLevel"
              min={0}
              max={100}
              step={1}
              value={[parseInt(formData.confidenceLevel) || 50]}
              onValueChange={(value: number[]) =>
                onUpdate({ confidenceLevel: value[0].toString() })
              }
              className={`${
                errors.confidenceLevel ? "border-red-500" : ""
              } cursor-pointer bg-black`}
            />
          </div>

          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Not confident</span>
            <span className="font-semibold text-white">{formData.confidenceLevel || 50}%</span>
            <span>Very confident</span>
          </div>
        </div>

        {errors.confidenceLevel && <p className="text-sm text-red-500">{errors.confidenceLevel}</p>}
      </div>
    </div>
  );
}