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
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["booking"],
      });
      // toast.success("Welldone!!");
      console.log("successData =>", data);
    },
    onError: (data) => {
      // toast.error(data?.message);
      console.log("errorData =>", data);
    },
  });

  return { bookingAppointmentIsPending, bookingAppointment };
}
