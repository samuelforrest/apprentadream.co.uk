import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FormData, courses, degreeLevels } from "./types";

interface Step2InterestsProps {
  formData: FormData;
  errors: { [key: string]: string };
  onUpdate: (updates: Partial<FormData>) => void;
  onCoursesToggle: (value: string[]) => void;
}

export function Step2Interests({
  formData,
  errors,
  onUpdate,
  onCoursesToggle,
}: Step2InterestsProps) {
  // Safety check: ensure courses array exists
  const userCourses = formData.courses || [];

  const customCourse = userCourses.find((course) => !courses.includes(course)) || "";
  const hasCustomCourse = customCourse !== "";
  const showCustomInput = userCourses.includes("Other") || hasCustomCourse;

  const handleCoursesToggle = (values: string[]) => {
    // If "Other" is deselected, remove the custom course too
    const otherWasSelected = userCourses.includes("Other");
    const otherIsNowSelected = values.includes("Other");

    if (otherWasSelected && !otherIsNowSelected) {
      // "Other" was deselected, so remove custom course as well
      const filtered = values.filter((course) => course !== customCourse);
      onCoursesToggle(filtered);
    } else if (!otherWasSelected && otherIsNowSelected) {
      const updated =
        customCourse && !values.includes(customCourse) ? [...values, customCourse] : values;
      onCoursesToggle(updated);
    } else {
      // Keep custom course if it exists (other courses are being toggled)
      const preservedCourses =
        customCourse && !values.includes(customCourse) ? [...values, customCourse] : values;
      onCoursesToggle(preservedCourses);
    }
  };

  const handleCustomCourseChange = (value: string) => {
    // Update the custom course in the courses array
    if (value.trim()) {
      // Remove any existing custom course and add the new one
      const standardCourses = userCourses.filter((course) => courses.includes(course));
      const newCourses = [...standardCourses, value];
      onCoursesToggle(newCourses);
    } else {
      // Remove custom course if value is empty
      const standardCourses = userCourses.filter((course) => courses.includes(course));
      onCoursesToggle(standardCourses);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label>Ideal Degree Level *</Label>
        <Select
          value={formData.degreeLevel}
          onValueChange={(value) => onUpdate({ degreeLevel: value })}
        >
          <SelectTrigger className={errors.degreeLevel ? "border-red-500" : ""}>
            <SelectValue placeholder="Select degree level" />
          </SelectTrigger>
          <SelectContent>
            {degreeLevels.map((level) => (
              <SelectItem key={level.value} value={level.value}>
                {level.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.degreeLevel && <p className="text-sm text-red-500">{errors.degreeLevel}</p>}
      </div>

      <div className="space-y-5">
        <Label>Course subjects of Interest *</Label>
        <ToggleGroup
          type="multiple"
          value={userCourses.filter((course) => courses.includes(course) || course === "Other")}
          onValueChange={handleCoursesToggle}
          className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 rounded-xl"
        >
          {courses.map((course) => (
            <ToggleGroupItem
              key={course}
              value={course}
              aria-label={course}
              className="data-[state=on]:bg-black data-[state=on]:text-white rounded-lg border-2"
            >
              {course}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>

        {showCustomInput && (
          <div className="space-y-2 mt-4">
            <Label htmlFor="customCourse">Specify your other course</Label>
            <Input
              id="customCourse"
              type="text"
              placeholder="e.g. Animal behaviour, transport, etc..."
              value={customCourse}
              onChange={(e) => handleCustomCourseChange(e.target.value)}
              className="w-full"
            />
          </div>
        )}

        {errors.courses && <p className="text-sm text-red-500">{errors.courses}</p>}
      </div>
    </div>
  );
}
