"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import ClientInfo from "./client/ClientInfo";
import {
  BookingAppointmentFormData,
  BookingAppointmentSchema,
} from "@/components/schema & types/booking/booking-appointement.schema";
import BookingRequest from "./booking-request/BookingRequest";
import useBooking from "./useBooking";
import MedicalDeclaration from "./medical-declaration/MedicalDeclaration";

function BookingContainer() {
  const [step, setStep] = useState<number>(1);
  const { bookingAppointment, bookingAppointmentIsPending } = useBooking();

  const methods = useForm<BookingAppointmentFormData>({
    resolver: zodResolver(BookingAppointmentSchema),
    mode: "onSubmit"
  })

  const { trigger, handleSubmit } = methods

  const nextStep = async (fields: any[]) => {
    const isValid = await trigger(fields)
    if (isValid) setStep((prev) => prev + 1)
  }

  const prevStep = () => setStep((prev) => prev - 1)


  const onSubmit = async (data: BookingAppointmentFormData) => {
    console.log(data);
    const formData = new FormData()
    formData.append("data", JSON.stringify(data))

    //await bookingAppointment(formData)
  };



  return (
    <section className="py-10 md:py-15 relative">
      <div className="h-full">
        <div className="container">
          <div className="flex justify-center">
            <div className="max-w-3xl bg-snow text-onyx rounded-lg p-6 lg:p-10 shadow shadow-bright-snow">
              <h1 className="text-3xl mb-5 font-bold">Tattoo Request</h1>

              {/* Step indicator */}
              <div className="flex justify-between mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className={`flex-1 h-2 mx-1 rounded-full ${s <= step ? "bg-carbon-black" : "bg-neutral-700/70"}`} />
                ))}
              </div>

              <FormProvider {...methods}>
                <form
                  className="grid grid-cols-1 gap-4 md:gap-6"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {step === 1 ? (
                    <ClientInfo onNext={() => nextStep(["client"])} />
                  ) : step === 2 ? (
                    <BookingRequest onNext={() => nextStep(["bookingRequest"])} onBack={prevStep} />
                  ) : (
                    <>
                      <MedicalDeclaration onNext={() => nextStep(["medicalDeclaration"])} onBack={prevStep} />
                      <button type="submit" disabled={bookingAppointmentIsPending} className="submit-btn">
                        {bookingAppointmentIsPending ? "Submitting ..." : "Submit Booking"}
                      </button>
                      <button type="button" onClick={prevStep} className="submit-btn">Back</button>
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
