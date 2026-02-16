import * as z from "zod";

// validation schema

// client info validation

export const ClientInfoValidationSchema = z.object({
  firstName: z
    .string({ message: "First name is required" })
    .min(3, "First name must be at least 3 characters")
    .max(10, "First name must be at most 10 characters"),


  lastName: z
    .string({ message: "Last name is required" })
    .min(3, "Last name must be at least 3 characters")
    .max(20, "Last name must be at most 20 characters"),


  email: z
    .string({ message: "Email is required" })
    .min(1, "Email is required")
    .email("Please enter a valid email address"),


  phone: z
    .string({ message: "Phone number is required" })
    .min(8, "Phone number is required"),

  birthday: z
    .string({ message: "Birthday is required" })
    .min(1, "Birthday is required"),
});

// Booking Request Validation

export const BookingRequestValidationSchema = z.object({
  description: z
    .string()
    .max(300, "you can describe at most 300 characters")
    .optional(),

  budgetRange: z
    .string({ message: "Please select a budget range" })
    .min(1, "Please select a budget range"),

  // studioChooses: z
  //   .boolean({ message: "Please choose an option" }),

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
  hasAllergies: z.coerce.boolean({
    message: "Please answer this question",
  }),
  hasSkinCondition: z.coerce.boolean({
    message: "Please answer this question",
  }),
  isPregnantOrNursing: z.coerce.boolean({
    message: "Please answer this question",
  }),
  hasHeartCondition: z.coerce.boolean({
    message: "Please answer this question",
  }),
  hasDiabetes: z.coerce.boolean({
    message: "Please answer this question",
  }),
  takesBloodThinners: z.coerce.boolean({
    message: "Please answer this question",
  }),
  takesMedication: z.coerce.boolean({
    message: "Please answer this question",
  }),
  otherNotes: z.string().max(300, "you can describe your medical at most 300 characters").optional(),
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
