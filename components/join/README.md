# Gamified Form Components

This directory contains a modular, multi-step form system for the Apprentadream join process.

## Structure

The form has been split into focused, maintainable components:

### Core Files

- **`gamified-form.tsx`** - Main orchestrator component
  - Manages form state and validation
  - Handles navigation between steps
  - Controls form submission
  - Coordinates all step components

- **`types.ts`** - Shared TypeScript interfaces and constants
  - `FormData` interface
  - Country codes array
  - Industries list
  - Apprenticeship levels

### UI Components

- **`splash-screen.tsx`** - Initial landing screen
  - Logo and title
  - Call-to-action button
  - Community stats (members, offer rate)

- **`progress-bar.tsx`** - Step progress indicator
  - Visual progress tracking
  - Section name display

### Step Components

Each step is a self-contained component with clear responsibilities:

1. **`step1-basic-info.tsx`** - Basic Information
   - First name, last name
   - Email address
   - Mobile number with country code selector
   - Field validation with error messages

2. **`step2-interests.tsx`** - Industries & Level
   - Apprenticeship level selection (dropdown)
   - Industries toggle group (multi-select)
   - Required field validation

3. **`step3-social-accounts.tsx`** - Social Profiles (Optional)
   - LinkedIn URL (with validation)
   - TikTok, Instagram, Twitter usernames
   - Personal website
   - Optional fields with format validation

4. **`step4-diversity.tsx`** - Diversity Information (Optional)
   - Sex, gender, sexual orientation
   - Ethnicity
   - Socioeconomic status
   - All fields optional for monitoring purposes

5. **`step5-referrals.tsx`** - Referral System
   - Unique 8-digit referral code generation
   - Copy-to-clipboard functionality
   - Referral tracking
   - Prize information

6. **`step6-confirmation.tsx`** - Final Step
   - "What Happens Next" (3-column grid)
   - WhatsApp access, opportunities, networking
   - Terms & conditions checkbox

## Props Interface Pattern

All step components follow a consistent props pattern:

```typescript
interface StepProps {
  formData: FormData;                           // Current form state
  errors?: {[key: string]: string};            // Validation errors
  onUpdate: (updates: Partial<FormData>) => void; // Update handler
}
```

## Key Features

### State Management
- Centralized state in `gamified-form.tsx`
- Props drilling for data flow
- Callback functions for updates

### Validation
- Field-level validation on navigation
- Email format checking
- LinkedIn URL validation
- Mobile number validation
- Real-time error clearing

### Referral System
- 8-digit code: 4 random + 4 phone digits
- Automatic generation when mobile entered
- Copy tracking for analytics
- Unique referral links

### Form Submission
- Google Sheets API integration
- Loading states
- Success redirect
- Error handling

## Benefits of Component Split

1. **Maintainability** - Each file has single responsibility
2. **Reusability** - Components can be used independently
3. **Testability** - Easier to unit test individual steps
4. **Readability** - Reduced file size (from 856 to ~100-150 lines per file)
5. **Collaboration** - Multiple developers can work on different steps
6. **Performance** - Easier code splitting and lazy loading

## File Size Reduction

- **Before**: Single 856-line monolithic file
- **After**: 9 files averaging 100-150 lines each
- **Result**: 5-8x more maintainable codebase

## Usage

```tsx
import { GamifiedForm } from "@/components/join/gamified-form";

export default function JoinPage() {
  return <GamifiedForm />;
}
```

## Development Guidelines

When adding new fields or steps:

1. Add field to `FormData` interface in `types.ts`
2. Create new step component or update existing one
3. Add validation logic in `gamified-form.tsx`
4. Update form submission data in `handleSubmit`
5. Test all navigation and validation flows
