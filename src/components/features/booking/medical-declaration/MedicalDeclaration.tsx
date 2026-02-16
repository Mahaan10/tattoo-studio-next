import { BookingAppointmentFormData } from "@/components/schema & types/booking/booking-appointement.schema"
import CheckBoxInput from "@/components/ui/CheckBoxInput"
import RadioInput from "@/components/ui/RadioInput"
import TextAreaField from "@/components/ui/TextAreaField"
import { useFormContext } from "react-hook-form"

interface MedicalDeclarationProps {
    onNext: () => void,
    onBack: () => void
}

function MedicalDeclaration({ onNext, onBack }: MedicalDeclarationProps) {
    const { register, formState: { errors } } = useFormContext<BookingAppointmentFormData>()
    return (
        <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-4">
                <h2 className="text-xl font-semibold mb-2">Medical Information</h2>

                <RadioInput<BookingAppointmentFormData>
                    label="Do you have any allergies?"
                    name="medicalDeclaration.hasAllergies"
                    register={register}
                    errors={errors.medicalDeclaration?.hasAllergies}
                    required
                />

                <RadioInput<BookingAppointmentFormData>
                    label="Do you have any skin conditions?"
                    name="medicalDeclaration.hasSkinCondition"
                    register={register}
                    errors={errors.medicalDeclaration?.hasSkinCondition}
                    required
                />

                <RadioInput<BookingAppointmentFormData>
                    label="Are you pregnant or nursing?"
                    name="medicalDeclaration.isPregnantOrNursing"
                    register={register}
                    errors={errors.medicalDeclaration?.isPregnantOrNursing}
                    required
                />

                <RadioInput<BookingAppointmentFormData>
                    label="Do you have any heart condition?"
                    name="medicalDeclaration.hasHeartCondition"
                    register={register}
                    errors={errors.medicalDeclaration?.hasHeartCondition}
                    required
                />

                <RadioInput<BookingAppointmentFormData>
                    label="Do you have Diabetes?"
                    name="medicalDeclaration.hasDiabetes"
                    register={register}
                    errors={errors.medicalDeclaration?.hasDiabetes}
                    required
                />

                <RadioInput<BookingAppointmentFormData>
                    label="Are you taking any blood thinners?"
                    name="medicalDeclaration.takesBloodThinners"
                    register={register}
                    errors={errors.medicalDeclaration?.takesBloodThinners}
                    required
                />

                <RadioInput<BookingAppointmentFormData>
                    label="Are you currently taking any other medication?"
                    name="medicalDeclaration.takesMedication"
                    register={register}
                    errors={errors.medicalDeclaration?.takesMedication}
                    required
                />

                <TextAreaField<BookingAppointmentFormData>
                    label="Other Medical Notes"
                    name="medicalDeclaration.otherNotes"
                    register={register}
                    errors={errors.medicalDeclaration?.otherNotes}
                    rows={3}
                />

                <hr className="border-onyx/10 my-2" />

                <h2 className="text-xl font-semibold mb-2">Final Consent</h2>

                <div className="flex flex-col gap-3 bg-snow/50 p-4 rounded-lg border border-onyx/10">
                    <CheckBoxInput<BookingAppointmentFormData>
                        label="I confirm that I am 18 years of age or older."
                        name="consent.isAdultConfirmed"
                        register={register}
                        errors={errors.consent?.isAdultConfirmed}
                    />

                    <CheckBoxInput<BookingAppointmentFormData>
                        label="I have read and accept the Terms and Conditions."
                        name="consent.termsAccepted"
                        register={register}
                        errors={errors.consent?.termsAccepted}
                    />

                    <CheckBoxInput<BookingAppointmentFormData>
                        label="I agree to the Privacy Policy regarding my medical data."
                        name="consent.privacyAccepted"
                        register={register}
                        errors={errors.consent?.privacyAccepted}
                    />
                </div>
            </div>
        </div>
    )
}

export default MedicalDeclaration