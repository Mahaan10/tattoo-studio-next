"use client";

import { UseFormTrigger } from "react-hook-form";
import { BookingAppointmentFormData } from "@/components/schema & types/booking/booking-appointement.schema";

type StepConfig = {
  id: number;
  label: string;
  fields: (keyof BookingAppointmentFormData)[];
};

interface BookingBreadCrumbProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  trigger: UseFormTrigger<BookingAppointmentFormData>;
}

const steps: StepConfig[] = [
  { id: 1, label: "Client Info", fields: ["client"] },
  { id: 2, label: "Tattoo Details", fields: ["bookingRequest"] },
  {
    id: 3,
    label: "Medical & Consent",
    fields: ["medicalDeclaration", "consent"],
  },
];

function BookingBreadCrumb({ step, setStep, trigger }: BookingBreadCrumbProps) {
  const handleClick = async (targetStep: StepConfig) => {
    // Always allow going backwards
    if (targetStep.id < step) {
      setStep(targetStep.id);
      return;
    }

    // Prevent skipping multiple steps
    if (targetStep.id > step + 1) return;

    // Validate current step before moving forward
    if (targetStep.id > step) {
      const currentStep = steps.find((s) => s.id === step);
      if (!currentStep) return;

      const isValid = await trigger(currentStep.fields as any);
      if (isValid) setStep(targetStep.id);
    }
  };

  return (
    <nav aria-label="Booking steps" className="mb-8">
      <ol className="flex items-center justify-between text-sm font-medium">
        {steps.map((item, index) => {
          const isActive = step === item.id;
          const isCompleted = step > item.id;

          return (
            <li key={item.id} className="flex items-center w-full">
              <button
                type="button"
                onClick={() => handleClick(item)}
                className="flex items-center focus:outline-none"
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full border transition
                    ${
                      isActive
                        ? "bg-carbon-black text-white border-carbon-black"
                        : isCompleted
                          ? "bg-carbon-black/80 text-white border-carbon-black"
                          : "bg-transparent border-neutral-500 text-neutral-400"
                    }`}
                >
                  {item.id}
                </div>

                <span
                  className={`ml-2 hidden sm:inline transition
                    ${
                      isActive || isCompleted
                        ? "text-carbon-black"
                        : "text-neutral-400"
                    }`}
                >
                  {item.label}
                </span>
              </button>

              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-px mx-3 transition
                    ${isCompleted ? "bg-carbon-black" : "bg-neutral-600"}`}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default BookingBreadCrumb;
