"use client";

import { useFormContext } from "react-hook-form";
import InputField from "@/components/ui/InputField";
import CheckBoxInput from "@/components/ui/CheckBoxInput";
import { GuestArtistBookingAppointment } from "@/components/schema & types/guest-artist/guest-artist.schema";
import { HiArrowLongLeft } from "react-icons/hi2";

interface DetailsProps {
  onBack: () => void;
  isSubmitting: boolean;
}

function Details({ onBack, isSubmitting }: DetailsProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<GuestArtistBookingAppointment>();

  return (
    <>
      <div className="flex items-center justify-start">
        <button
          type="button"
          className="flex items-center justify-center gap-x-2 hover:underline hover:underline-offset-4"
          onClick={onBack}
        >
          <HiArrowLongLeft size={22} />
          <span>Back</span>
        </button>
      </div>

      <InputField<GuestArtistBookingAppointment>
        label="Full Name"
        name="name"
        register={register}
        errors={errors.name}
        required
      />

      <InputField<GuestArtistBookingAppointment>
        label="Email"
        name="email"
        register={register}
        errors={errors.email}
        type="email"
        required
      />

      <InputField<GuestArtistBookingAppointment>
        label="Phone"
        name="phone"
        register={register}
        errors={errors.phone}
        type="tel"
        required
      />

      <CheckBoxInput<GuestArtistBookingAppointment>
        label="Agree to terms"
        name="acknowledgment"
        register={register}
        errors={errors.acknowledgment}
      />

      <button type="submit" disabled={isSubmitting} className="submit-btn">
        {isSubmitting ? "Processing..." : "Proceed to Payment"}
      </button>
    </>
  );
}

export default Details;
