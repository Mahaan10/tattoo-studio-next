import bookingAppointmentApi, {
  getAllBookingsApi,
  getBookingByIdApi,
  walkInBookingAppointmentApi,
} from "@/components/services/bookingService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";

export default function useBooking() {
  const queryClient = useQueryClient();
  const params = useParams();

  const bookingId = typeof params?.id === "string" ? params.id : "";
  console.log("params =>", params);

  // public booking
  const {
    isPending: bookingAppointmentIsPending,
    mutateAsync: bookingAppointment,
  } = useMutation({
    mutationFn: bookingAppointmentApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["booking"],
      });
      toast.success(
        "Booking request submitted! We'll contact you within 72 hours.",
      );
    },
    onError: () => {
      toast.error("Failed to submit booking. Please try again.");
    },
  });

  // walk-in booking
  const {
    isPending: WalkInAppointmentIsPending,
    mutateAsync: walkInAppointment,
  } = useMutation({
    mutationFn: walkInBookingAppointmentApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["booking"],
      });
      toast.success("Booking request submitted!");
    },
    onError: () => {
      toast.error("Failed to submit booking. Please try again.");
    },
  });

  // get all bookings
  const {
    data: allBookings,
    isLoading: bookingIsLoading,
    isError: bookingIsError,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: getAllBookingsApi,
  });

  const bookings = allBookings?.items || [];

  // get single booking by id
  const {
    data: singleBooking,
    isLoading: singleBookingIsLoading,
    isError: singleBookingIsError,
  } = useQuery({
    queryKey: ["single-booking", bookingId],
    queryFn: () => getBookingByIdApi(bookingId),
    enabled: !!bookingId,
  });

  return {
    // public booking
    bookingAppointmentIsPending,
    bookingAppointment,

    // walk in booking
    walkInAppointment,
    WalkInAppointmentIsPending,

    // bookings
    bookings,
    bookingIsLoading,
    bookingIsError,

    // single booking
    singleBooking,
    singleBookingIsLoading,
    singleBookingIsError,
  };
}
