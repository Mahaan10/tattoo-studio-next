import { PaymentStatus } from "@/components/schema & types/payment/payment.types";
import { CircleCheckBig, CircleX, RotateCcw } from "lucide-react";

export const paymentStatusStyles: Record<
  PaymentStatus,
  {
    label: string;
    className: string;
    icon: React.ReactNode;
  }
> = {
  PAID: {
    label: "Paid",
    className: "border border-green-500/20 bg-green-500/10 text-green-400",
    icon: <CircleCheckBig className="w-4 h-4" />,
  },

  REFUNDED: {
    label: "Refunded",
    className: "border border-yellow-500/20 bg-yellow-500/10 text-yellow-400",
    icon: <RotateCcw className="w-4 h-4" />,
  },

  CANCELLED: {
    label: "Cancelled",
    className: "border border-red-500/20 bg-red-500/10 text-red-400",
    icon: <CircleX className="w-4 h-4" />,
  },
};
