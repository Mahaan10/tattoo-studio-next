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
  });

  const { trigger, handleSubmit, reset } = methods;

  const nextStep = async (fields: any[]) => {
    const isValid = await trigger(fields);
    if (isValid) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit: SubmitHandler<BookingAppointmentFormData> = async (data) => {
    console.log("data =>", data);
    const formData = new FormData();

    const formatDate = (date: string | Date) => {
      const d = new Date(date);
      return d.toISOString().split("T")[0];
    };

    const { file } = data?.bookingRequest;

    // Client
    formData.append("firstName", data.client.firstName);
    formData.append("lastName", data.client.lastName);
    formData.append("email", data.client.email);
    formData.append("phone", data.client.phone);

    // Booking
    formData.append("consultDate", formatDate(data.bookingRequest.consultDate));
    formData.append("description", data.bookingRequest.description);
    formData.append("budgetRange", data.bookingRequest.budgetRange);
    formData.append("bookingType", data.bookingRequest.bookingType);
    formData.append("placement", data.bookingRequest.placement || "");

    if (file && file.length > 0) {
      file.forEach((f) => {
        formData.append("files", f);
      });
    }
    console.log("files =>", file);

    try {
      await bookingAppointment(formData);
      reset();
      setStep(1);
    } catch (error) {}
  };

  return (
    <div className="py-10 md:py-15 relative container mx-auto">
      <div className="h-full">
        <div className="container">
          <div className="flex justify-center">
            <div className="w-full max-w-xl bg-alabaster text-onyx rounded-2xl p-5 sm:p-6 md:p-6 shadow shadow-snow">
              <h1 className="text-3xl mb-5 font-bold">Tattoo Request</h1>

              {/* BreadCrumb */}

              {/* <BookingBreadCrumb
                step={step}
                setStep={setStep}
                trigger={trigger}
              /> */}

              <FormProvider {...methods}>
                <form
                  className="grid grid-cols-1 items-center justify-center gap-5 md:gap-6"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {step === 1 ? (
                    <ClientInfo onNext={() => nextStep(["client"])} />
                  ) : (
                    <>
                      <BookingRequest onBack={prevStep} />
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
                  {/* {step === 1 ? (
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
                  )} */}
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookingContainer;
