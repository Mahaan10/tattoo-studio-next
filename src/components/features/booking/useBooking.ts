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
      toast.success(
        "Booking request submitted! We'll contact you within 48 hours.",
      );
    },
    onError: () => {
      toast.error("Failed to submit booking. Please try again.");
    },
  });

  return { bookingAppointmentIsPending, bookingAppointment };
}
