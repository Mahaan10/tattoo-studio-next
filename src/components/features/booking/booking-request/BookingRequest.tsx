import { BookingAppointmentFormData } from "@/components/schema & types/booking/booking-appointement.schema";
import SelectBox from "@/components/ui/SelectBox";
import { useFormContext } from "react-hook-form";

interface BookingRequestProps {
  onNext: () => void,
  onBack: () => void
}

function BookingRequest({ onNext, onBack }: BookingRequestProps) {
  const { register, formState: { errors } } = useFormContext<BookingAppointmentFormData>()

  return (
    <>
      <SelectBox<BookingAppointmentFormData> label="Budget Range" name="bookingRequest.budgetRange" register={register} errors={errors.bookingRequest?.budgetRange} options={[
        { label: "500 - 1000", value: "500-1000" },
        { label: "1000 - 2000", value: "1000-2000" },
        { label: "2000+", value: "2000+" },
      ]} /> {/* need to define the budget range!!! */}
    </>
  )
}

export default BookingRequest;
