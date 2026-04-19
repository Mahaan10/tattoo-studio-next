"use client";

import { UseFormTrigger, FieldValues, Path } from "react-hook-form";

interface StepConfig<T extends FieldValues> {
  id: number;
  label: string;
  fields?: Path<T>[];
}

interface FormStepperProps<T extends FieldValues> {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  trigger?: UseFormTrigger<T>;
  steps: StepConfig<T>[];
}

function FormStepper<T extends FieldValues>({
  step,
  setStep,
  trigger,
  steps,
}: FormStepperProps<T>) {
  const handleClick = async (targetStep: StepConfig<T>) => {
    if (targetStep.id < step) {
      setStep(targetStep.id);
      return;
    }

    if (targetStep.id > step + 1) return;

    if (targetStep.id > step && trigger) {
      const currentStep = steps.find((s) => s.id === step);
      if (!currentStep) return;

      if (!currentStep.fields || currentStep.fields.length === 0) {
        setStep(targetStep.id);
        return;
      }

      const isValid = await trigger(currentStep.fields);
      if (isValid) setStep(targetStep.id);
    } else {
      setStep(targetStep.id);
    }
  };

  return (
    <nav aria-label="Booking steps" className="mb-6">
      <ul className="flex items-center justify-center gap-2">
        {steps.map((s, idx) => {
          const isActive = step === s.id;
          const isDone = step > s.id;
          return (
            <li key={s.id} className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold transition-colors
                    ${isDone ? "bg-dried-mustard text-onyx" : isActive ? "bg-onyx text-snow" : "border border-onyx/30 text-onyx/40"}`}
                >
                  {isDone ? "✓" : s.id}
                </span>
                <span
                  className={`text-xs font-medium transition-colors ${isActive ? "text-onyx" : isDone ? "text-onyx/60" : "text-onyx/30"}`}
                >
                  {s.label}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <span className="text-onyx/20 text-xs">›</span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default FormStepper;
