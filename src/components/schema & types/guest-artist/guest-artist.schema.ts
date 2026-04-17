import * as z from "zod";

export const GuestArtistBookingSchema = z
  .object({
    name: z
      .string({ message: "Name is required" })
      .min(6, "Full name must be at least 6 characters")
      .max(100, "Full name must be at most 100 characters"),

    phone: z
      .string({ message: "Phone number is required" })
      .min(1, { message: "Phone number is required" }),

    email: z
      .string({ message: "Email is required" })
      .email("Please enter a valid email address"),

    startDate: z.date({ message: "Start date is required" }),

    endDate: z.date({ message: "End date is required" }),

    numberOfTables: z.coerce
      .number({ message: "Number of tables is required" })
      .min(1, "Please select number of tables"),

    acknowledgment: z.literal(true, {
      message: "You must accept the terms",
    }),
  })
  .refine((data) => data.endDate >= data.startDate, {
    message: "End date must be after start date",
    path: ["endDate"],
  });

export type GuestArtistBookingAppointment = z.infer<
  typeof GuestArtistBookingSchema
>;
