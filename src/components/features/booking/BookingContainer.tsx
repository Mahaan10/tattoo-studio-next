"use client";


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MakeBookingAppointmentFormData, makeBookingAppointmentSchema } from "@/components/schema/booking/make-booking-appointement.schema";
import { useState } from "react";
import ClientInfo from "./client/ClientInfo";



function BookingContainer() {
    const [step, setStep] = useState<number>(1)

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: zodResolver(makeBookingAppointmentSchema),
        mode: "onSubmit",
    });

    const onSubmit = (data: MakeBookingAppointmentFormData) => {
        console.log(data);
    }



    return (
        <section className="py-10 md:py-15 relative">
            <div className="h-full">
                <div className="container">
                    <div className="flex justify-center">
                        <div className="max-w-3xl bg-snow text-onyx rounded-lg p-6 lg:p-10 shadow shadow-bright-snow">
                            <h1 className="text-3xl mb-5 font-bold">Tattoo Request</h1>
                            <form className="grid grid-cols-1 gap-4 md:gap-6" onSubmit={handleSubmit(onSubmit)}>
                                {step === 1 ? <ClientInfo setStep={ setStep} /> : step === 2 ? "" : ""}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default BookingContainer;
