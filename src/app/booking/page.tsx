"use client";

import InputField from "@/components/ui/InputField";
import { useForm } from "react-hook-form";

function Booking() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  return (
    <section className="py-10 md:py-24 lg:py-28 relative">
      <div className="h-full">
        <div className="container">
          <div className="flex justify-center">
            <div className="max-w-3xl bg-snow text-onyx rounded-lg p-6 lg:p-12 shadow shadow-bright-snow">
              <h1 className="text-3xl mb-5 font-bold">Tattoo Request</h1>
              <form className="grid grid-cols-1 gap-4 md:gap-6">
                <InputField />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Booking;
