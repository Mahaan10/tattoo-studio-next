import { AppointmentInfo } from "@/components/schema & types/appointment/appointment.types";
import { BookingInfo } from "@/components/schema & types/booking/booking-appointment.types";
import { bookingStatusStyles } from "@/components/templates/admin/booking/bookingStatusStyles";
import StatusBadge from "@/components/templates/admin/StatusBadge";
import Table from "@/components/ui/Table";
import formattedDate from "@/components/utils/formatter";
import { CircleCheck, Eye, Plus } from "lucide-react";
import Link from "next/link";

interface AppointmentRowProps {
  index: number;
  onCheckIn: () => void;
  appointment: AppointmentInfo;
  onCash?: (booking: BookingInfo) => void;
}

function AppointmentRow({
  appointment,
  index,
  onCheckIn,
  onCash,
}: AppointmentRowProps) {
  return (
    <Table.Row>
      <td>{index}</td>
      <td>
        {appointment.booking.client.firstName}{" "}
        {appointment.booking.client.lastName}
      </td>
      <td>{formattedDate(appointment.scheduledFor)}</td>
      <td>
        <StatusBadge
          status={appointment.booking.status}
          styles={bookingStatusStyles}
        />
      </td>

      <td>
        <div className="flex items-center justify-center gap-2">
          <Link
            href={`/admin/booking/${appointment.booking.id}`}
            className="flex items-center justify-center size-9 rounded-xl border border-snow/10 hover:bg-black bg-onyx text-snow/75 text-center transition-all duration-300 hover:border-snow/25"
            title="View Details"
          >
            <Eye className="size-4" />
          </Link>

          {appointment.booking.status === "TATTOO_SCHEDULED" && (
            <button
              onClick={() => onCash?.(appointment.booking)}
              className="flex items-center justify-center size-9 rounded-xl border border-snow/10 hover:bg-black bg-onyx text-snow/75 text-center transition-all duration-300 hover:border-snow/25"
              title="Cash Payment"
            >
              <Plus className="size-4" />
            </button>
          )}

          {appointment.booking.checkedInAt ? (
            <div
              title={`Checked in: ${formattedDate(appointment.booking.checkedInAt)}`}
              className="flex items-center justify-center size-9 rounded-xl border border-green-500/20 bg-green-500/10 text-green-400"
            >
              <CircleCheck className="size-5" />
            </div>
          ) : (
            <button
              onClick={onCheckIn}
              className="flex items-center justify-center size-9 rounded-xl border border-snow/10 hover:bg-black bg-onyx text-snow/75 text-center transition-all duration-300 hover:border-snow/25"
              title="Check In"
            >
              <CircleCheck className="size-5" />
            </button>
          )}
        </div>
      </td>
    </Table.Row>
  );
}

export default AppointmentRow;
