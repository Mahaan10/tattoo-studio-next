import { BookingInfo } from "@/components/schema & types/booking/booking-appointment.types";
import Table from "@/components/ui/Table";
import formattedDate, { formatBudgetRange } from "@/components/utils/formatter";
import Link from "next/link";

interface BookingRowProps {
  index: number;
  onEdit: () => void;
  booking: BookingInfo;
}

function BookingRow({ booking, index, onEdit }: BookingRowProps) {
  //   const { editArtistStatus, editArtistStatusIsPending } = useArtist();

  //   const handleActiveToggle = () => {
  //     editArtistStatus({
  //       artistId: artist?.id,
  //       status: artist.status === "ACTIVE" ? "INACTIVE" : "ACTIVE",
  //     });
  //   };

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>
        {booking.client.firstName} {booking.client.lastName}
      </td>
      <td>
        <a
          href={`email:${booking.client.email}`}
          className="btn text-xs mx-auto"
        >
          {booking.client.email}
        </a>
      </td>
      <td>
        <a href={`tel:${booking.client.phone}`} className="btn text-xs mx-auto">
          {booking.client.phone}
        </a>
      </td>
      <td>{booking.status}</td>
      <td>{formatBudgetRange(booking.budgetRange)}</td>
      <td>{formattedDate(booking.consultDate)}</td>
      <td>
        <Link href={`/admin/booking/${booking.id}`} className="btn">
          Booking Details
        </Link>
      </td>
      <td>Operation</td>
    </Table.Row>
  );
}

export default BookingRow;
