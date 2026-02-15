import { BookingAppointmentFormData } from "@/components/schema & types/booking/booking-appointement.schema";
import { useFormContext } from "react-hook-form";

interface BookingRequestProps {
  onNext: () => void,
  onBack: () => void
}

function BookingRequest({ onNext, onBack }: BookingRequestProps) {
  const { register, formState: { errors } } = useFormContext<BookingAppointmentFormData>()

  return (
    <>

    </>
  )
}

export default BookingRequest;
