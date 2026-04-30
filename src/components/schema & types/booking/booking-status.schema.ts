import * as z from "zod";
import {
  BOOKING_STATUS,
  BOOKING_STATUS_CANCEL_REASON,
} from "./booking-appointment.types";

export const UpdateStatusValidationSchema = z
  .object({
    status: z.enum(BOOKING_STATUS),

    adminNotes: z.string().optional(),

    cancelReason: z.enum(BOOKING_STATUS_CANCEL_REASON).optional(),

    scheduledDate: z.string().optional(),
    artistId: z.string().optional(),
    stationId: z.string().optional(),
    durationNote: z.string().optional(),
    notes: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.status === "CANCELLED" && !data.cancelReason) {
      ctx.addIssue({
        path: ["cancelReason"],
        code: z.ZodIssueCode.custom,
        message: "Cancel reason is required",
      });
    }

    if (data.status === "TATTOO_SCHEDULED") {
      if (!data.scheduledDate || !data.artistId || !data.stationId) {
        ctx.addIssue({
          path: ["scheduledDate"],
          code: z.ZodIssueCode.custom,
          message: "All scheduling fields are required",
        });
      }
    }
  });

export type UpdateStatusFormValues = z.infer<
  typeof UpdateStatusValidationSchema
>;
