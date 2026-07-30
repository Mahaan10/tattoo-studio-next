import { z } from "zod";

export const CashPaymentSchema = z.object({
  grossEuro: z.number().positive("Amount is required"),
  note: z.string().trim().optional(),
});

export type CashPaymentSchemaForm = z.infer<typeof CashPaymentSchema>;
