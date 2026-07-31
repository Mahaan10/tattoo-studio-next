import { createAdvancePaymentApi } from "@/components/services/paymentService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function useAdvancePayment() {
  const queryClient = useQueryClient();
  const { mutate: advancePayment, isPending: advancePaymentIsPending } =
    useMutation({
      mutationFn: createAdvancePaymentApi,

      mutationKey: ["payment"],

      onSuccess: () => {
        toast.success("Advance payment created successfully");

        queryClient.invalidateQueries({
          queryKey: ["payments"],
        });
      },

      onError: () => {
        toast.error("Unable to create payment.");
      },
    });

  return {
    // advance payment
    advancePayment,
    advancePaymentIsPending,
  };
}
