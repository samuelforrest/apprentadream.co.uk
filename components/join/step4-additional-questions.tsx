import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormData } from "./types";

interface Step4AdditionalQuestionsProps {
  formData: FormData;
  errors: {[key: string]: string};
  onUpdate: (updates: Partial<FormData>) => void;
}

export function Step4AdditionalQuestions({ formData, errors, onUpdate }: Step4AdditionalQuestionsProps) {
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
            <SelectItem value="gap-year">Gap Year</SelectItem>
            <SelectItem value="year-10-S3-student">Year 10 (S3) Student</SelectItem>
            <SelectItem value="year-11-S4-student">Year 11 (S4) Student</SelectItem>
            <SelectItem value="year-12-S5-student">Year 12 (S5) Student</SelectItem>
            <SelectItem value="year-13-S6-student">Year 13 (S6) Student</SelectItem>
            <SelectItem value="international-student">International Student</SelectItem>
            <SelectItem value="career-change">Career Changer</SelectItem>
            <SelectItem value="other">Other / not listed</SelectItem>
          </SelectContent>
        </Select>
        {errors.studentType && (
          <p className="text-sm text-red-500">{errors.studentType}</p>
        )}
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
            <SelectItem value="a-levels">A Levels</SelectItem>
            <SelectItem value="t-levels">T Levels</SelectItem>
            <SelectItem value="btec">BTEC</SelectItem>
            <SelectItem value="ib">IB</SelectItem>
            <SelectItem value="scottish-highers">Scottish Highers</SelectItem>
            <SelectItem value="gcse-igcse">GCSEs / IGCSEs</SelectItem>
            <SelectItem value="national-4">National 4</SelectItem>
            <SelectItem value="other">Other / not listed</SelectItem>
          </SelectContent>
        </Select>
        {errors.educationalCourse && (
          <p className="text-sm text-red-500">{errors.educationalCourse}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="mainMotivation">What motivates you to do an apprenticeship? *</Label>
        <Select
          value={formData.mainMotivation}
          onValueChange={(value) => onUpdate({ mainMotivation: value })}
        >
          <SelectTrigger className={errors.mainMotivation ? "border-red-500" : ""}>
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="salary">Build wealth early</SelectItem>
            <SelectItem value="work-experience">Gain experience</SelectItem>
            <SelectItem value="avoid-debt">Avoid university debt</SelectItem>
            <SelectItem value="start-early">Start my career early</SelectItem>
            <SelectItem value="practical-hands-on">Prefer practical / hands on</SelectItem>
            <SelectItem value="prestige-networking">Prestige and networking</SelectItem>
            <SelectItem value="unsure-other">Other / unsure</SelectItem>
          </SelectContent>
        </Select>
        {errors.mainMotivation && (
          <p className="text-sm text-red-500">{errors.mainMotivation}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="applyingUniversity">Are you applying / already at university?</Label>
        <Select
          value={formData.applyingUniversity}
          onValueChange={(value) => onUpdate({ applyingUniversity: value })}
        >
          <SelectTrigger className={errors.applyingUniversity ? "border-red-500" : ""}>
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes</SelectItem>
            <SelectItem value="no">No</SelectItem>
            <SelectItem value="not-decided">Have not yet decided</SelectItem>
            <SelectItem value="already-at-university">I&apos;m already at university</SelectItem>
          </SelectContent>
        </Select>
        {errors.applyingUniversity && (
          <p className="text-sm text-red-500">{errors.applyingUniversity}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="socioeconomic">Socioeconomic Status *</Label>
        <Select
          value={formData.socioeconomicStatus}
          onValueChange={(value) => onUpdate({ socioeconomicStatus: value })}
        >
          <SelectTrigger className={errors.socioeconomicStatus ? "border-red-500" : ""}>
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
        {errors.socioeconomicStatus && (
          <p className="text-sm text-red-500">{errors.socioeconomicStatus}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="religion">Religion *</Label>
        <Select
          value={formData.religion}
          onValueChange={(value) => onUpdate({ religion: value })}
        >
          <SelectTrigger className={errors.religion ? "border-red-500" : ""}>
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
        {errors.religion && (
          <p className="text-sm text-red-500">{errors.religion}</p>
        )}
      </div>
    </div>
  );
}
