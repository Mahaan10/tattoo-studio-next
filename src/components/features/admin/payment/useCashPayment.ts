import { createCashPaymentApi } from "@/components/services/paymentService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function useCashPayment() {
  const queryClient = useQueryClient();
  const { mutate: cashPayment, isPending: cashPaymentIsPending } = useMutation({
    mutationFn: createCashPaymentApi,

    mutationKey: ["payment"],

    onSuccess: () => {
      toast.success("Cash payment created successfully");

      queryClient.invalidateQueries({
        queryKey: ["payments"],
      });
    },

    onError: () => {
      toast.error("Unable to create payment.");
    },
  });

  return {
    // cash payment
    cashPayment,
    cashPaymentIsPending,
  };
}
