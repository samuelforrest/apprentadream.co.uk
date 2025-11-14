interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  sectionName: string;
}

/**
 * Renders a horizontal progress bar showing the current step, percentage complete, and a section title.
 *
 * @param currentStep - The current step number (1-based)
 * @param totalSteps - The total number of steps
 * @param sectionName - The label displayed below the progress bar
 * @returns The rendered progress bar element reflecting the current progress
 */
export function ProgressBar({ currentStep, totalSteps, sectionName }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-black">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-medium text-black">{Math.round(progress)}% Complete</span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-5 overflow-hidden border-2 border-orange-700">
        <div
          className="h-full bg-orange-700 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-6 text-left">
        <span className="text-xl font-bold text-black">{sectionName}</span>
      </div>
    </div>
  );
}