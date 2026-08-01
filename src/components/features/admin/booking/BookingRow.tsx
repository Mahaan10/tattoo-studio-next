import { BookingInfo } from "@/components/schema & types/booking/booking-appointment.types";
import { bookingStatusStyles } from "@/components/templates/admin/booking/bookingStatusStyles";
import StatusBadge from "@/components/templates/admin/StatusBadge";
import Table from "@/components/ui/Table";
import formattedDate, { formatBudgetRange } from "@/components/utils/formatter";
import { Eye, Pencil, Plus } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface BookingRowProps {
  index: number;
  onEdit: () => void;
  booking: BookingInfo;
  onCash?: (booking: BookingInfo) => void;
}

function BookingRow({ booking, index, onEdit, onCash }: BookingRowProps) {
  const t = useTranslations("admin.bookings.row");
  return (
    <Table.Row>
      <td>{index}</td>
      <td>
        {booking.client.firstName} {booking.client.lastName}
      </td>
      <td>
        <a
          href={`mailto:${booking.client.email}`}
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
        <StatusBadge status={booking.status} styles={bookingStatusStyles} />
      </td>
      <td>{formatBudgetRange(booking.budgetRange)}</td>
      <td>{formattedDate(booking.consultDate)}</td>
      <td>
        <div className="flex items-center justify-center gap-2">
          <Link
            href={`/admin/booking/${booking.id}`}
            title={t("viewDetails")}
            className="flex items-center justify-center size-9 rounded-xl border border-snow/10 hover:bg-black bg-onyx text-snow/75 text-center transition-all duration-300 hover:border-snow/25"
          >
            <Eye className="size-4" />
          </Link>

          {!["CANCELLED", "COMPLETED", "CONSULT_NO_SHOW"].includes(
            booking.status,
          ) && (
            <>
              <button
                className="flex items-center justify-center size-9 rounded-xl border border-snow/10 hover:bg-black bg-onyx text-snow/75 text-center transition-all duration-300 hover:border-snow/25"
                onClick={onEdit}
              >
                <Pencil className="size-4" />
              </button>

              {booking.status === "TATTOO_SCHEDULED" && (
                <button
                  className="flex items-center justify-center size-9 rounded-xl border border-snow/10 hover:bg-black bg-onyx text-snow/75 text-center transition-all duration-300 hover:border-snow/25"
                  onClick={() => onCash?.(booking)}
                >
                  <Plus className="size-4" />
                </button>
              )}
            </>
          )}
        </div>
      </td>
    </Table.Row>
  );
}

export default BookingRow;