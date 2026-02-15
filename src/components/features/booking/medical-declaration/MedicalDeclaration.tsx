import { BookingAppointmentFormData } from "@/components/schema & types/booking/booking-appointement.schema"
import { useFormContext } from "react-hook-form"

interface MedicalDeclarationProps {
    onNext: () => void,
    onBack: () => void
}

function MedicalDeclaration({ onNext, onBack }: MedicalDeclarationProps) {
    const { register, formState: { errors } } = useFormContext<BookingAppointmentFormData>()
    return (
        <>

        </>
    )
}

export default MedicalDeclaration