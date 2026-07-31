import { z } from "zod";

export const AdvancePaymentSchema = z.object({
  grossEuro: z.number().positive("Amount is required"),
  note: z.string().trim().optional(),
});

export type AdvancePaymentSchemaForm = z.infer<typeof AdvancePaymentSchema>;
