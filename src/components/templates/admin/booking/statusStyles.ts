// statusStyles.ts

import { BookingStatus } from "@/components/schema & types/booking/booking-appointment.types";


export const bookingStatusStyles: Record<
  BookingStatus,
  { label: string; className: string }
> = {
  PENDING_CONSULT: {
    label: "Pending",
    className: "bg-yellow-100 text-yellow-800 border-yellow-300",
  },
  CONSULT_APPROVED: {
    label: "Approved",
    className: "bg-blue-100 text-blue-800 border-blue-300",
  },
  CONSULT_NO_SHOW: {
    label: "No Show",
    className: "bg-gray-200 text-gray-700 border-gray-300",
  },
  TATTOO_SCHEDULED: {
    label: "Scheduled",
    className: "bg-purple-100 text-purple-800 border-purple-300",
  },
  COMPLETED: {
    label: "Completed",
    className: "bg-green-100 text-green-800 border-green-300",
  },
  CANCELLED: {
    label: "Cancelled",
    className: "bg-red-100 text-red-800 border-red-300",
  },
};