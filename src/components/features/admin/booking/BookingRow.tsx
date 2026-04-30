import { BookingInfo, BookingStatus } from "@/components/schema & types/booking/booking-appointment.types";
import StatusBadge from "@/components/templates/admin/booking/StatusBadge";
import Table from "@/components/ui/Table";
import formattedDate, {
  formatBookingStatus,
  formatBudgetRange,
} from "@/components/utils/formatter";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";

interface BookingRowProps {
  index: number;
  onEdit: () => void;
  booking: BookingInfo;
}

function BookingRow({ booking, index, onEdit }: BookingRowProps) {
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
      <td>
        <StatusBadge status={booking.status as BookingStatus} />
      </td>
      <td>{formatBudgetRange(booking.budgetRange)}</td>
      <td>{formattedDate(booking.consultDate)}</td>
      <td>
        <Link href={`/admin/booking/${booking.id}`} className="btn">
          Booking Details
        </Link>
      </td>
      <td>
        {(booking?.status == "CANCELLED" || booking?.status === "COMPLETED") ? <span className="gap-x-2">No Operation - Booking {booking?.status === "CANCELLED" ? "Cancelled" : "Completed"}</span> : <button className="btn flex gap-x-2" onClick={onEdit}>
          <span>Update Status</span>
          <CiEdit className="size-5" />
        </button>}
      </td>
    </Table.Row>
  );
}

export default BookingRow;
