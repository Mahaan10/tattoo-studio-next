"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { PaymentInfo } from "@/components/schema & types/payment/payment.types";

import InputField from "@/components/ui/InputField";
import TextAreaField from "@/components/ui/TextAreaField";
import { euroToCents } from "@/components/utils/formatter";
import { z } from "zod";
import useAdvancePayment from "./useAdvancePayment";
import {
  AdvancePaymentSchema,
  AdvancePaymentSchemaForm,
} from "@/components/schema & types/payment/payment.schema";

interface AdvancePaymentProps {
  onClose: () => void;
  bookingId: string;
}

function AdvancePaymentForm({ onClose, bookingId }: AdvancePaymentProps) {
  const { advancePayment, advancePaymentIsPending } = useAdvancePayment();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<
    z.input<typeof AdvancePaymentSchema>,
    any,
    z.output<typeof AdvancePaymentSchema>
  >({
    resolver: zodResolver(AdvancePaymentSchema),
  });

  const onSubmit: SubmitHandler<AdvancePaymentSchemaForm> = (data) => {
    console.log("data =>", data);

    const newAdvancePayment = {
      source: "TATTOO",
      grossCents: euroToCents(data.grossEuro),
      bookingRequestId: bookingId,
      // guestArtistBookingId:
      //   payment.source === "GUEST_TABLE"
      //     ? payment.context.reference
      //     : undefined,
      note: data.note,
    };

    advancePayment(newAdvancePayment);

    reset();
    onClose();
    console.log("newAdvancePayment =>", newAdvancePayment);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <InputField<AdvancePaymentSchemaForm>
        label="Amount (€)"
        name="grossEuro"
        type="tel"
        register={register}
        registerOptions={{ valueAsNumber: true }}
        errors={errors.grossEuro}
      />

      <TextAreaField<AdvancePaymentSchemaForm>
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
          disabled={advancePaymentIsPending}
          className="submit-btn"
        >
          {advancePaymentIsPending ? "Saving..." : "Save Payment"}
        </button>
      </div>
    </form>
  );
}

export default AdvancePaymentForm;
