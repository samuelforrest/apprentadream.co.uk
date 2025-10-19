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
  
  // Additional Questions
  sex: string;
  gender: string;
  sexualOrientation: string;
  ethnicity: string;
  socioeconomicStatus: string;
  religion: string;
}

// Country codes for phone numbers organized by region
export const countryCodeGroups = [
  {
    region: "UK & Ireland",
    codes: [
      { code: "+44", country: "GB", name: "United Kingdom" },
      { code: "+353", country: "IE", name: "Ireland" },
    ]
  },
  {
    region: "Europe",
    codes: [
      { code: "+33", country: "FR", name: "France" },
      { code: "+49", country: "DE", name: "Germany" },
      { code: "+34", country: "ES", name: "Spain" },
      { code: "+39", country: "IT", name: "Italy" },
      { code: "+31", country: "NL", name: "Netherlands" },
      { code: "+48", country: "PL", name: "Poland" },
      { code: "+46", country: "SE", name: "Sweden" },
      { code: "+47", country: "NO", name: "Norway" },
      { code: "+41", country: "CH", name: "Switzerland" },
    ]
  },
  {
    region: "Americas",
    codes: [
      { code: "+1", country: "US", name: "United States / Canada" },
    ]
  },
  {
    region: "Asia & Pacific",
    codes: [
      { code: "+91", country: "IN", name: "India" },
      { code: "+92", country: "PK", name: "Pakistan" },
      { code: "+880", country: "BD", name: "Bangladesh" },
      { code: "+86", country: "CN", name: "China" },
      { code: "+81", country: "JP", name: "Japan" },
      { code: "+82", country: "KR", name: "South Korea" },
      { code: "+65", country: "SG", name: "Singapore" },
      { code: "+60", country: "MY", name: "Malaysia" },
      { code: "+62", country: "ID", name: "Indonesia" },
      { code: "+61", country: "AU", name: "Australia" },
      { code: "+64", country: "NZ", name: "New Zealand" },
    ]
  },
  {
    region: "Middle East & Africa",
    codes: [
      { code: "+971", country: "AE", name: "United Arab Emirates" },
      { code: "+90", country: "TR", name: "Turkey" },
      { code: "+234", country: "NG", name: "Nigeria" },
      { code: "+27", country: "ZA", name: "South Africa" },
    ]
  }
];

// Flat list for backward compatibility
export const countryCodes = countryCodeGroups.flatMap(group => group.codes);

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
