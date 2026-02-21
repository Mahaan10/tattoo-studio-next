"use client";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import ClientInfo from "./client/ClientInfo";
import {
  BookingAppointmentFormData,
  BookingAppointmentSchema,
} from "@/components/schema & types/booking/booking-appointement.schema";
import BookingRequest from "./booking-request/BookingRequest";
import useBooking from "./useBooking";
import MedicalDeclaration from "./medical-declaration/MedicalDeclaration";
import { zodResolver } from "@hookform/resolvers/zod";
import BookingBreadCrumb from "@/components/templates/booking/BookingBreadCrumb";

function BookingContainer() {
  const [step, setStep] = useState<number>(1);
  const { bookingAppointment, bookingAppointmentIsPending } = useBooking();

  const methods = useForm<BookingAppointmentFormData>({
    resolver: zodResolver(BookingAppointmentSchema as any),
    mode: "onTouched",
    defaultValues: {
      // medicalDeclaration: {
      //   hasAllergies: undefined,
      //   hasDiabetes: undefined,
      //   hasHeartCondition: undefined,
      //   hasSkinCondition: undefined,
      //   isPregnantOrNursing: undefined,
      //   takesBloodThinners: undefined,
      //   takesMedication: undefined
      // }
    },
  });

  const { trigger, handleSubmit } = methods;

  const nextStep = async (fields: any[]) => {
    const isValid = await trigger(fields);
    if (isValid) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit: SubmitHandler<BookingAppointmentFormData> = async (data) => {
    console.log("data =>", data);
    const formData = new FormData();

    const { file, ...bookingRequestData } = data?.bookingRequest;

    const payload = {
      client: data?.client,
      bookingRequest: bookingRequestData,
      medicalDeclaration: data?.medicalDeclaration,
      consent: data?.consent,
    };

    // const payload = {
    //   client: {
    //     firstName: data.client.firstName,
    //     lastName: data.client.lastName,
    //     email: data.client.email || undefined,
    //     phone: data.client.phone || undefined,
    //     //birthday: data.client.birthday || undefined,
    //   },
    //   bookingRequest: {
    //     description: bookingRequestData.description,
    //     budgetRange: bookingRequestData.budgetRange, // Ensure this is "_200_400" etc.
    //     referrer: bookingRequestData.referrer || "",
    //     // Add other optional fields if your form has them, otherwise omit
    //   },
    //   medicalDeclaration: {
    //     hasAllergies: !!data.medicalDeclaration.hasAllergies,
    //     hasSkinCondition: !!data.medicalDeclaration.hasSkinCondition,
    //     isPregnantOrNursing: !!data.medicalDeclaration.isPregnantOrNursing,
    //     hasHeartCondition: !!data.medicalDeclaration.hasHeartCondition,
    //     hasDiabetes: !!data.medicalDeclaration.hasDiabetes,
    //     takesBloodThinners: !!data.medicalDeclaration.takesBloodThinners,
    //     takesMedication: !!data.medicalDeclaration.takesMedication,
    //     otherNotes: data.medicalDeclaration.otherNotes || undefined,
    //   },
    //   consent: {
    //     isAdultConfirmed: !!data.consent.isAdultConfirmed,
    //     termsAccepted: !!data.consent.termsAccepted,
    //     privacyAccepted: !!data.consent.privacyAccepted,
    //   },
    // };

    formData.append("payload", JSON.stringify(payload));

    if (file && file.length > 0) {
      file.forEach((f) => {
        formData.append("files", f);
      });
    }
    console.log("files =>", file);
    console.log("Submitting payload:", payload);
    await bookingAppointment(formData);
  };

  return (
    <section className="py-10 md:py-15 relative">
      <div className="h-full">
        <div className="container">
          <div className="flex justify-center">
            <div className="w-full max-w-xl bg-alabaster text-onyx rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 shadow shadow-bright-snow">
              <h1 className="text-3xl mb-5 font-bold">Tattoo Request</h1>

              {/* Step indicator */}
              {/* <div className="flex justify-between mb-8">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`flex-1 h-2 mx-1 rounded-full ${s <= step ? "bg-carbon-black" : "bg-neutral-700/70"}`}
                  />
                ))}
              </div> */}

              <BookingBreadCrumb
                step={step}
                setStep={setStep}
                trigger={trigger}
              />

              <FormProvider {...methods}>
                <form
                  className="grid grid-cols-1 items-center justify-center gap-5 md:gap-6"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {step === 1 ? (
                    <ClientInfo onNext={() => nextStep(["client"])} />
                  ) : step === 2 ? (
                    <BookingRequest
                      onNext={() => nextStep(["bookingRequest"])}
                      onBack={prevStep}
                    />
                  ) : (
                    <>
                      <MedicalDeclaration onBack={prevStep} />
                      <button
                        type="submit"
                        disabled={bookingAppointmentIsPending}
                        className="submit-btn"
                      >
                        {bookingAppointmentIsPending
                          ? "Submitting ..."
                          : "Submit Booking"}
                      </button>
                    </>
                  )}
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BookingContainer;
