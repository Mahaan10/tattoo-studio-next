import getGuestArtistTableAvailabilityApi, {
  guestArtistBookingTableApi,
} from "@/components/services/guestArtistService";
import { formatDate } from "@/components/utils/formattedDate";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function useGuestArtistBooking({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate: Date;
}) {
  const queryClient = useQueryClient();

  // Available Tables
  const {
    data,
    isLoading: tableAvailabilityIsLoading,
    isError: tableAvailabilityIsError,
  } = useQuery({
    queryKey: ["table-availability", startDate, endDate],
    queryFn: () =>
      getGuestArtistTableAvailabilityApi({
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
      }),
    enabled: !!startDate && !!endDate,
  });

  const tableAvailability = data?.days || [];

  // Guest Artist Booking
  const { isPending: guestArtistBookingIsPending, mutate: guestArtistBooking } =
    useMutation({
      mutationFn: guestArtistBookingTableApi,

      onSuccess: (data) => {
        console.log("guestArtistHookSuccessData =>", data);
        queryClient.invalidateQueries({
          queryKey: ["table-availability", "guest-artist-booking"],
        });
        toast.success(
          "Booking created, check shopify checkout url for payment",
        );
      },

      onError: (error) => {
        toast.error(error?.message);
      },
    });

  return {
    tableAvailability,
    tableAvailabilityIsLoading,
    tableAvailabilityIsError,
    guestArtistBooking,
    guestArtistBookingIsPending,
  };
}
