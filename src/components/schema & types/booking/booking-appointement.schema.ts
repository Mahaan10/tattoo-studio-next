import * as z from "zod";

// validation schema

// client info validation

export const ClientInfoValidationSchema = z.object({
  firstName: z
    .string()
    .min(3, "First name must be at least 3 characters")
    .max(10, "First name must be at most 10 characters"),


  lastName: z
    .string()
    .min(3, "Last name must be at least 3 characters")
    .max(20, "Last name must be at most 20 characters"),


  email: z
    .string()
    .email("Please enter a valid email address"),


  phone: z
    .string()
    .min(8, "Phone number is required"),

  birthday: z
    .string()
    .min(1, "Birthday is required"),
});

// Booking Request Validation

export const BookingRequestValidationSchema = z.object({
  description: z
    .string()
    .min(5, "Please describe what you want"),

  budgetRange: z
    .string()
    .min(1, "Please select a budget range"),

  studioChooses: z.boolean({
    error: "Please choose an option",
  }),

  // source: z
  //   .string()
  //   .min(1, "Please select how you found us"),

  referrer: z
    .string()
    .optional(),

  file: z.array(
    z
      .instanceof(File)
      .refine((file) => file.size <= 6 * 1024 * 1024, {
        message: "Each image must be less than 6MG"
      })
      .refine((file) => file.type.startsWith("image/"), {
        message: "Only image files are allowed"
      })
  )
    .max(10, "You can upload maxmimum 10 images")
    .optional()
});

// Medical Declaration validation

export const MedicalDeclarationValidationSchema = z.object({
  hasAllergies: z.boolean({
    error: "Please answer this question",
  }),
  hasSkinCondition: z.boolean({
    error: "Please answer this question",
  }),
  isPregnantOrNursing: z.boolean({
    error: "Please answer this question",
  }),
  hasHeartCondition: z.boolean({
    error: "Please answer this question",
  }),
  hasDiabetes: z.boolean({
    error: "Please answer this question",
  }),
  takesBloodThinners: z.boolean({
    error: "Please answer this question",
  }),
  takesMedication: z.boolean({
    error: "Please answer this question",
  }),
  otherNotes: z.string().max(250).optional(),
});

// consent validation

export const ConsentValidationSchema = z.object({
  isAdultConfirmed: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must confirm you are 18+"
    }),

  termsAccepted: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must accept the terms",
    }),

  privacyAccepted: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must accept the privacy policy",
    }),
});

export const BookingAppointmentSchema = z.object({
  client: ClientInfoValidationSchema,
  bookingRequest: BookingRequestValidationSchema,
  medicalDeclaration: MedicalDeclarationValidationSchema,
  consent: ConsentValidationSchema
});

export type BookingAppointmentFormData = z.infer<
  typeof BookingAppointmentSchema
>;
