import { BookingStatus } from "@/components/schema & types/booking/booking-appointment.types";

import {
  Clock3,
  CircleCheckBig,
  CalendarDays,
  CircleX,
  UserX,
  BadgeCheck,
} from "lucide-react";

export const bookingStatusStyles: Record<
  BookingStatus,
  { label: string; className: string; icon: React.ReactNode }
> = {
  PENDING_CONSULT: {
    label: "Pending",
    className: "border border-yellow-500/20 bg-yellow-500/10 text-yellow-400",
    icon: <Clock3 className="w-4 h-4" />,
  },

  CONSULT_APPROVED: {
    label: "Approved",
    className: "border border-blue-500/20 bg-blue-500/10 text-blue-400",
    icon: <CircleCheckBig className="w-4 h-4" />,
  },

  CONSULT_NO_SHOW: {
    label: "No Show",
    className: "border border-orange-500/20 bg-orange-500/10 text-orange-400",
    icon: <UserX className="w-4 h-4" />,
  },

  TATTOO_SCHEDULED: {
    label: "Scheduled",
    className: "border border-purple-500/20 bg-purple-500/10 text-purple-400",
    icon: <CalendarDays className="w-4 h-4" />,
  },

  COMPLETED: {
    label: "Completed",
    className: "border border-green-500/20 bg-green-500/10 text-green-400",
    icon: <BadgeCheck className="w-4 h-4" />,
  },

  CANCELLED: {
    label: "Cancelled",
    className: "border border-red-500/20 bg-red-500/10 text-red-400",
    icon: <CircleX className="w-4 h-4" />,
  },
};
