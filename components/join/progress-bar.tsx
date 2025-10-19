interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  sectionName: string;
}

export function ProgressBar({ currentStep, totalSteps, sectionName }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-black">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-medium text-black">
          {Math.round(progress)}% Complete
        </span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-5 overflow-hidden border-2 border-blue-600">
        <div
          className="h-full bg-blue-600 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-6 text-left">
        <span className="text-xl font-bold text-black">{sectionName}</span>
      </div>
    </div>
  );
}
