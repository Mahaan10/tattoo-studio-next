import * as z from "zod";

// validation schema

// client info validation

export const ClientInfoValidationSchema = z.object({
  firstName: z.string().min(3).max(10),
  lastName: z.string().min(3).max(20),
  email: z.email(),
  phone: z.string(),
  birthday: z.string(),
});

// Booking Request Validation

export const BookingRequestValidationSchema = z.object({
  description: z.string(),
  budgetRange: z.string(),
  studioChooses: z.boolean(),
  source: z.string(),
  referrer: z.string(),
});

// Medical Declaration validation

export const MedicalDeclarationValidationSchema = z.object({
  hasAllergies: z.boolean(),
  hasSkinCondition: z.boolean(),
  isPregnantOrNursing: z.boolean(),
  hasHeartCondition: z.boolean(),
  hasDiabetes: z.boolean(),
  takesBloodThinners: z.boolean(),
  takesMedication: z.boolean(),
  otherNotes: z.string().max(250).optional(),
});

// consent validation

export const ConsentValidationSchema = z.object({
  isAdultConfirmed: z.boolean(),
  termsAccepted: z.boolean(),
  privacyAccepted: z.boolean(),
});

export const BookingAppointmentSchema = z.object({
  client: z.object({
    firstName: z.string().min(3).max(10),
    lastName: z.string().min(3).max(20),
    email: z.email(),
    phone: z.string(),
    birthday: z.string(),
  }),
  bookingRequest: z.object({
    description: z.string(),
    budgetRange: z.string(),
    studioChooses: z.boolean(),
    source: z.string(),
    referrer: z.string(),
  }),
  medicalDeclaration: z.object({
    hasAllergies: z.boolean(),
    hasSkinCondition: z.boolean(),
    isPregnantOrNursing: z.boolean(),
    hasHeartCondition: z.boolean(),
    hasDiabetes: z.boolean(),
    takesBloodThinners: z.boolean(),
    takesMedication: z.boolean(),
    otherNotes: z.string().max(250).optional(),
  }),
  consent: z.object({
    isAdultConfirmed: z.boolean(),
    termsAccepted: z.boolean(),
    privacyAccepted: z.boolean(),
  }),
});

export type BookingAppointmentFormData = z.infer<
  typeof BookingAppointmentSchema
>;
