import { BookingAppointmentFormData } from "@/components/schema & types/booking/booking-appointement.schema";
import DatePickerField from "@/components/ui/DatePickerField";
import InputField from "@/components/ui/InputField";
import InputFile from "@/components/ui/InputFile";
import SelectBox from "@/components/ui/SelectBox";
import TextAreaField from "@/components/ui/TextAreaField";
import { FieldError, useFormContext } from "react-hook-form";
import { HiArrowLongLeft } from "react-icons/hi2";

interface BookingRequestProps {
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

const bookingType = [
  { id: 1, label: "Appointment", value: "APPOINTMENT" },
  { id: 2, label: "Consultation", value: "CONSULTATION" },
  { id: 3, label: "Cover up", value: "COVER_UP" },
];

const studioChooses = [
  { id: 1, label: "Block 13", value: "BLOCK_13" },
  { id: 2, label: "SES Studio", value: "SES_STUDIO" },
];

function BookingRequest({ onBack }: BookingRequestProps) {
  const {
    register,
    control,
    formState: { errors },
    setValue,
  } = useFormContext<BookingAppointmentFormData>();

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
      {/* Studio Chooses */}

      {/* <SelectBox<BookingAppointmentFormData> label="Studio Chooses" name="bookingRequest.studioChooses" register={register} errors={errors.bookingRequest?.studioChooses} options={studioChooses} required /> */}

      {/* Booking Type */}
      <SelectBox<BookingAppointmentFormData>
        label="Booking Type"
        name="bookingRequest.bookingType"
        register={register}
        errors={errors.bookingRequest?.bookingType}
        options={bookingType}
        required
      />

      {/* Budget Range */}
      <SelectBox<BookingAppointmentFormData>
        label="Budget Range"
        name="bookingRequest.budgetRange"
        register={register}
        errors={errors.bookingRequest?.budgetRange}
        options={budgetRange}
        required
      />

      {/* Consult Date */}
      <DatePickerField<BookingAppointmentFormData>
        label="Consult Date"
        name="bookingRequest.consultDate"
        control={control}
        errors={errors.bookingRequest?.consultDate}
        required
        disablePast
        excludeDays={[0]} // Sunday!
      />
      {/* PreferredDateFrom */}
      {/* <DatePickerField<BookingAppointmentFormData>
        label="Preferred Date"
        name="bookingRequest.preferredDateFrom"
        control={control}
        errors={errors.bookingRequest?.preferredDateFrom}
        required
        disablePast
      /> */}

      {/* PreferredDateTo */}
      {/* <DatePickerField<BookingAppointmentFormData> label="Preferred Date To" name="bookingRequest.preferredDateTo" control={control} errors={errors.bookingRequest?.preferredDateTo} /> */}

      {/* Referrer */}
      {/* <InputField<BookingAppointmentFormData>
        label="Referrer"
        name="bookingRequest.referrer"
        register={register}
        errors={errors.bookingRequest?.referrer}
      /> */}

      {/* Tattoo Image File */}
      <InputFile<BookingAppointmentFormData>
        label="Reference Images (Max 10)"
        name="bookingRequest.file"
        setValue={setValue}
        errors={errors.bookingRequest?.file as unknown as FieldError}
      />

      {/* Placement */}

      <TextAreaField<BookingAppointmentFormData>
        label="Placement ..."
        name="bookingRequest.placement"
        register={register}
        errors={errors.bookingRequest?.placement}
      />

      {/* Description / Idea */}

      <TextAreaField<BookingAppointmentFormData>
        label="Tattoo Description ..."
        name="bookingRequest.description"
        register={register}
        errors={errors.bookingRequest?.description}
      />

      {/* Next step btn */}
      {/* <button type="button" onClick={onNext} className="submit-btn w-full">
        Next
      </button> */}
    </>
  );
}

export default BookingRequest;
