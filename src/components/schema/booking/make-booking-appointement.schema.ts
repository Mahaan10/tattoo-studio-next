import * as z from "zod"

export interface MakeBookingAppointmentSchema {
    client: {
        firstName: string
        lastName: string
        email: string
        phone: string
        birthday: string
    }
    bookingRequest: {
        description: string
        budgetRange: string
        studioChooses: boolean
        source: string
        referrer: string
    }
    medicalDeclaration: {
        hasAllergies: boolean
        hasSkinCondition: boolean,
        isPregnantOrNursing: boolean,
        hasHeartCondition: boolean,
        hasDiabetes: boolean,
        takesBloodThinners: boolean,
        takesMedication: boolean,
        otherNotes?: string
    }
    consent: {
        isAdultConfirmed: boolean
        termsAccepted: boolean
        privacyAccepted: boolean
    }
}

export const makeBookingAppointmentSchema = z.object({
    client: z.object({
        firstName: z.string().min(3).max(10),
        lastName: z.string().min(3).max(20),
        email: z.email(),
        phone: z.string(),
        birthday: z.string()
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
        otherNotes: z.string().max(250).optional()
    }),
    consent: z.object({
        isAdultConfirmed: z.boolean(),
        termsAccepted: z.boolean(),
        privacyAccepted: z.boolean(),
    }),
})

export type MakeBookingAppointmentFormData = z.infer<typeof makeBookingAppointmentSchema>