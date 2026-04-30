import { BookingStatus } from "@/components/schema & types/booking/booking-appointment.types";
import { bookingStatusStyles } from "./statusStyles";


interface StatusBadgeProps {
  status: BookingStatus;
}

function StatusBadge({ status }: StatusBadgeProps) {
  const config = bookingStatusStyles[status];

  if (!config) return null;

  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-lg border ${config.className}`}
    >
      {config.label}
    </span>
  );
}

export default StatusBadge;