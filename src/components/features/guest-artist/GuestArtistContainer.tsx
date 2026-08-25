"use client";

import {
  GuestArtistBookingAppointment,
  GuestArtistBookingSchema,
} from "@/components/schema & types/guest-artist/guest-artist.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import useGuestArtistBooking from "./useGuestArtistBooking";
import { formatDate } from "@/components/utils/formatter";
import { useState } from "react";
import FormStepper from "@/components/ui/FormStepper";
import Availability from "./availability/Availability";
import Details from "./details/Details";

const GUEST_ARTIST_STEPS = [
  { id: 1, label: "Availability" },
  { id: 2, label: "Your Details" },
];

function GuestArtistContainer() {
  const [step, setStep] = useState<number>(1);

  const methods = useForm<GuestArtistBookingAppointment>({
    resolver: zodResolver(GuestArtistBookingSchema as any),
    mode: "onTouched",
  });

  const { handleSubmit, watch, trigger, reset } = methods;

  const startDate = watch("startDate");
  const endDate = watch("endDate");

  const { guestArtistBooking, guestArtistBookingIsPending } =
    useGuestArtistBooking({
      startDate,
      endDate,
    });

  const nextStep = async () => {
    const valid = await trigger(["startDate", "endDate", "numberOfTables"]);

    if (!valid) return;

    await new Promise((resolve) => setTimeout(resolve, 150));

    setStep(2);
  };

  const prevStep = () => {
    setStep(1);
  };

  const onSubmit: SubmitHandler<GuestArtistBookingAppointment> = async (
    data,
  ) => {
    console.log("data =>", data);

    const guestArtistBookingData = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      startDate: formatDate(data.startDate),
      endDate: formatDate(data.endDate),
      numberOfTables: Number(data.numberOfTables),
      acknowledgment: data.acknowledgment,
    };

    console.log("payload", JSON.stringify(guestArtistBookingData, null, 2));

    guestArtistBooking(guestArtistBookingData);

    await new Promise((resolve) => setTimeout(resolve, 150));

    reset();
    setStep(1);
  };

  return (
    <section className="bg-onyx px-[5%] py-20 text-alabaster md:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-alabaster/40">
            Artist Space
          </span>

          <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl">
            Book your space.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-alabaster/50 md:text-base">
            Choose your dates and workspace requirements to check availability
            at Block13.
          </p>
        </div>

        {/* Booking area */}
        <div className="mx-auto mt-14 max-w-2xl">
          <div className="rounded-3xl bg-alabaster p-5 text-onyx shadow-2xl md:p-8 lg:p-10">
            {/* Stepper */}
            <div className="mb-10">
              <FormStepper
                step={step}
                setStep={setStep}
                trigger={trigger}
                steps={GUEST_ARTIST_STEPS}
              />
            </div>

            <FormProvider {...methods}>
              <form
                className="flex flex-col gap-5"
                onSubmit={handleSubmit(onSubmit)}
              >
                {step === 1 && <Availability onNext={nextStep} />}

                {step === 2 && (
                  <Details
                    onBack={prevStep}
                    isSubmitting={guestArtistBookingIsPending}
                  />
                )}
              </form>
            </FormProvider>
          </div>

          {/* Payment reassurance */}
          <p className="mt-5 text-center text-xs text-alabaster/35">
            Secure payment via Stripe after submitting your booking request.
          </p>
        </div>
      </div>
    </section>
  );
}

export default GuestArtistContainer;
