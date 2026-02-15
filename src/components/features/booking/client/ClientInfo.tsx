import { BookingAppointmentFormData } from "@/components/schema & types/booking/booking-appointement.schema";
import InputField from "@/components/ui/InputField";
import { useFormContext } from "react-hook-form";


interface ClientInfoProps {
  onNext: () => void
}

function ClientInfo({ onNext }: ClientInfoProps) {
  const { register, formState: { errors } } = useFormContext<BookingAppointmentFormData>()

  return (
    <>
      {/* First Name */}
      <InputField
        label="First name"
        name="client.firstName"
        errors={errors.client?.firstName}
        register={register}
        required
      />

      {/* Last Name */}
      <InputField
        label="Last name"
        name="client.lastName"
        errors={errors.client?.lastName}
        register={register}
        required
      />

      {/* Email */}
      <InputField
        label="Email"
        name="client.email"
        errors={errors.client?.email}
        register={register}
        type="email"
        required
      />

      {/* Phone Number */}
      <InputField
        label="Phone number"
        name="client.phone"
        errors={errors.client?.phone}
        register={register}
        type="tel"
        required
      />

      {/* Birthday */}
      <InputField
        label="Birthday"
        name="client.birthday"
        errors={errors.client?.birthday} register={register}
        type="date"
        required />

      {/* Next step btn */}
      <button
        type="button"
        onClick={onNext}
        className="submit-btn"
      >
        Next
      </button>
    </>
  );
}

export default ClientInfo;
