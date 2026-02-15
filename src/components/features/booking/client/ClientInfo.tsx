import { makeBookingAppointmentSchema } from "@/components/schema/booking/make-booking-appointement.schema";
import InputField from "@/components/ui/InputField"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface ClientInfoProps {
    setStep: (step: number) => void
}

function ClientInfo({ setStep }: ClientInfoProps) {
    const {
        register,
        formState: { errors, isValid },
    } = useForm({
        resolver: zodResolver(makeBookingAppointmentSchema),
        mode: "onSubmit",
    });

    const nextStepHandler = () => {
        setStep(2)
    }

    return (
        <>
            {/* First Name */}
            <InputField label="First name" name={"client.firstName"} errors={errors.client?.firstName} register={register} required />

            {/* Last Name */}
            <InputField label="Last name" name={"client.lastName"} errors={errors.client?.lastName} register={register} required />

            {/* Email */}
            <InputField label="Email" name={"client.email"} errors={errors.client?.email} register={register} type="Email" required />

            {/* Phone Number */}
            <InputField label="Phone number" name={"client.phone"} errors=
                {errors.client?.phone} register={register} type="tel" required />

            {/* Birthday */}


            {/* Next step btn */}
            <button onClick={nextStepHandler} className="submit-btn" disabled={!isValid}>Next</button>
        </>
    )
}

export default ClientInfo