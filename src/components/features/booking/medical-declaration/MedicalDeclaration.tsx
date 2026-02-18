import { BookingAppointmentFormData } from "@/components/schema & types/booking/booking-appointement.schema";
import CheckBoxInput from "@/components/ui/CheckBoxInput";
import RadioInput from "@/components/ui/RadioInput";
import TextAreaField from "@/components/ui/TextAreaField";
import { useFormContext } from "react-hook-form";

function MedicalDeclaration() {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<BookingAppointmentFormData>();
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-4">
        <h2 className="text-xl font-semibold mb-2">Medical Information</h2>

        <RadioInput<BookingAppointmentFormData>
          label="Do you have any allergies?"
          name="medicalDeclaration.hasAllergies"
          errors={errors.medicalDeclaration?.hasAllergies}
          control={control}
          required
        />

        <RadioInput<BookingAppointmentFormData>
          label="Do you have any skin conditions?"
          name="medicalDeclaration.hasSkinCondition"
          errors={errors.medicalDeclaration?.hasSkinCondition}
          control={control}
          required
        />

        <RadioInput<BookingAppointmentFormData>
          label="Are you pregnant or nursing?"
          name="medicalDeclaration.isPregnantOrNursing"
          errors={errors.medicalDeclaration?.isPregnantOrNursing}
          control={control}
          required
        />

        <RadioInput<BookingAppointmentFormData>
          label="Do you have any heart condition?"
          name="medicalDeclaration.hasHeartCondition"
          errors={errors.medicalDeclaration?.hasHeartCondition}
          control={control}
          required
        />

        <RadioInput<BookingAppointmentFormData>
          label="Do you have Diabetes?"
          name="medicalDeclaration.hasDiabetes"
          errors={errors.medicalDeclaration?.hasDiabetes}
          control={control}
          required
        />

        <RadioInput<BookingAppointmentFormData>
          label="Are you taking any blood thinners?"
          name="medicalDeclaration.takesBloodThinners"
          errors={errors.medicalDeclaration?.takesBloodThinners}
          control={control}
          required
        />

        <RadioInput<BookingAppointmentFormData>
          label="Are you currently taking any other medication?"
          name="medicalDeclaration.takesMedication"
          errors={errors.medicalDeclaration?.takesMedication}
          control={control}
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

        <div className="flex flex-col gap-3 dark:bg-snow/50 bg-onyx/20 p-4 rounded-lg border dark:border-onyx/10 border-onyx/85">
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
  );
}

export default MedicalDeclaration;
