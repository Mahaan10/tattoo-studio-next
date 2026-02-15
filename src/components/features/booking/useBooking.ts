import makeBookingAppointmentApi from "@/components/services/bookingService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function useBooking() {
  const queryClient = useQueryClient();

  const {
    isPending: bookingAppointmentIsPending,
    mutateAsync: bookingAppointment,
  } = useMutation({
    mutationFn: makeBookingAppointmentApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["booking"],
      });
      toast.success("Welldone!!");
    },
    onError: (data) => {
      toast.error(data?.message);
    },
  });

  return { bookingAppointmentIsPending, bookingAppointment };
}
