"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  CashPaymentSchema,
  CashPaymentSchemaForm,
} from "@/components/schema & types/payment/payment.schema";

import { PaymentInfo } from "@/components/schema & types/payment/payment.types";

import InputField from "@/components/ui/InputField";
import TextAreaField from "@/components/ui/TextAreaField";
import { euroToCents, formatEuro } from "@/components/utils/formatter";
import useCashPayment from "./useCashPayment";
import { z } from "zod";

interface CashPaymentProps {
  onClose: () => void;
  payment: PaymentInfo;
}

function CashPaymentForm({ onClose, payment }: CashPaymentProps) {
  const { cashPayment, cashPaymentIsPending } = useCashPayment();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<
    z.input<typeof CashPaymentSchema>,
    any,
    z.output<typeof CashPaymentSchema>
  >({
    resolver: zodResolver(CashPaymentSchema),
  });
  console.log("selectedPayment =>", payment);
  const onSubmit: SubmitHandler<CashPaymentSchemaForm> = (data) => {
    console.log("data =>", data);

    const newCashPayment = {
      source: payment.source,
      grossCents: euroToCents(data.grossEuro),
      bookingRequestId:
        payment.source === "TATTOO" ? payment.context.reference : undefined,
      guestArtistBookingId:
        payment.source === "GUEST_TABLE"
          ? payment.context.reference
          : undefined,
      note: data.note,
      paidAt: new Date().toISOString(),
    };

    cashPayment(newCashPayment);

    reset();
    onClose();
    console.log("newCashPayment =>", newCashPayment);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <InputField<CashPaymentSchemaForm>
        label="Amount (€)"
        name="grossEuro"
        type="tel"
        register={register}
        registerOptions={{ valueAsNumber: true }}
        errors={errors.grossEuro}
      />

      <TextAreaField<CashPaymentSchemaForm>
        label="Note"
        name="note"
        register={register}
        errors={errors.note}
      />

      <div className="flex justify-end gap-3 pt-4">
        <button type="button" className="btn" onClick={onClose}>
          Cancel
        </button>

        <button
          type="submit"
          disabled={cashPaymentIsPending}
          className="submit-btn"
        >
          {cashPaymentIsPending ? "Saving..." : "Save Payment"}
        </button>
      </div>
    </form>
  );
}

export default CashPaymentForm;
