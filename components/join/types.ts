// Form data interface
export interface FormData {
  // Basic Information
  firstName: string;
  lastName: string;
  countryCode: string;
  mobile: string;
  email: string;
  
  // Interests
  industries: string[];
  apprenticeshipLevel: string;
  
  // Social Accounts
  linkedinUrl: string;
  tiktokUsername: string;
  instagramUsername: string;
  twitterUsername: string;
  website: string;
  
  // Diversity Information
  sex: string;
  gender: string;
  sexualOrientation: string;
  ethnicity: string;
  socioeconomicStatus: string;
}

// Country codes for phone numbers
export const countryCodes = [
  { code: "+44", country: "UK" },
  { code: "+1", country: "US/CA" },
  { code: "+91", country: "IN" },
  { code: "+234", country: "NG" },
  { code: "+27", country: "ZA" },
  { code: "+61", country: "AU" },
  { code: "+33", country: "FR" },
  { code: "+49", country: "DE" },
];

// Industries data
export const industries = [
  "Technology",
  "Finance",
  "Healthcare",
  "Engineering",
  "Marketing & Media",
  "Law",
  "Consulting",
  "Construction",
  "Retail",
  "Education",
  "Other"
];

// Apprenticeship levels
export const apprenticeshipLevels = [
  { value: "intermediate", label: "Intermediate (Level 2)" },
  { value: "advanced", label: "Advanced (Level 3)" },
  { value: "higher", label: "Higher (Level 4-5)" },
  { value: "degree", label: "Degree (Level 6-7)" },
  { value: "notsure", label: "Not Sure Yet" },
];
