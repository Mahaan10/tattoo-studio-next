import { BookingAppointmentFormData } from "@/components/schema & types/booking/booking-appointement.schema";
import InputField from "@/components/ui/InputField";
import InputFile from "@/components/ui/InputFile";
import SelectBox from "@/components/ui/SelectBox";
import TextAreaField from "@/components/ui/TextAreaField";
import { FieldError, useFormContext } from "react-hook-form";

interface BookingRequestProps {
  onNext: () => void;
  onBack: () => void;
}

const budgetRange = [
  { id: 1, label: "under 200 €", value: "UNDER_200" },
  { id: 2, label: "200-400 €", value: "_200_400" },
  { id: 3, label: "400-700 €", value: "_400_700" },
  { id: 4, label: "700-1000 €", value: "_700_1000" },
  { id: 5, label: "1000-1500 €", value: "_1000_1500" },
  { id: 6, label: "1500-2000 €", value: "_1500_2000" },
  { id: 7, label: "over 2000 €", value: "OVER_2000" },
];

const studioChooses = [
  { id: 1, label: "Block 13", value: "BLOCK_13" },
  { id: 2, label: "SES Studio", value: "SES_STUDIO" },
];

function BookingRequest({ onNext, onBack }: BookingRequestProps) {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext<BookingAppointmentFormData>();

  return (
    <>
      {/* Studio Chooses */}

      {/* <SelectBox<BookingAppointmentFormData> label="Studio Chooses" name="bookingRequest.studioChooses" register={register} errors={errors.bookingRequest?.studioChooses} options={studioChooses} required /> */}

      {/* Budget Range */}
      <SelectBox<BookingAppointmentFormData>
        label="Budget Range"
        name="bookingRequest.budgetRange"
        register={register}
        errors={errors.bookingRequest?.budgetRange}
        options={budgetRange}
        required
      />

      {/* Referrer */}
      <InputField<BookingAppointmentFormData>
        label="Referrer"
        name="bookingRequest.referrer"
        register={register}
        errors={errors.bookingRequest?.referrer}
      />

      {/* Tattoo Image File */}
      <InputFile<BookingAppointmentFormData>
        label="Reference Images (Max 10)"
        name="bookingRequest.file"
        setValue={setValue}
        errors={errors.bookingRequest?.file as unknown as FieldError}
      />

      {/* Description / Idea */}

      <TextAreaField<BookingAppointmentFormData>
        label="Tattoo Description ..."
        name="bookingRequest.description"
        register={register}
        errors={errors.bookingRequest?.description}
      />

      <div className="flex items-center justify-center gap-x-2 w-full">
        {/* Next step btn */}
        <button
          type="button"
          onClick={onNext}
          className="submit-btn min-w-63.75"
        >
          Next
        </button>

        {/* Back step btn */}
        <button
          type="button"
          onClick={onBack}
          className="submit-btn min-w-63.75"
        >
          Back
        </button>
      </div>
    </>
  );
}

export default BookingRequest;
