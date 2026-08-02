import {
  BookingType,
  IntakeSources,
} from "../booking/booking-appointment.types";
import { PaymentSource } from "../payment/payment.types";

export interface AnalyticsFilterForm {
  from: Date;
  to: Date;
  includeWalkIn: boolean;
  granularity: TimeseriesGranularity;
}

export type OverviewAnalyticsStatus =
  | "approved"
  | "completed"
  | "cancelled"
  | "noShow";

export interface OverviewAnalyticsInfo {
  timezone: string;
  range: {
    startUtc: Date;
    endUtc: Date;
  };
  total: number;
  status: Record<OverviewAnalyticsStatus, number>;
  bySource: Partial<Record<IntakeSources, number>>;
  byBookingType: Partial<Record<BookingType, number>>;
}

export interface RevenueAnalyticsInfo {
  grossCents: number;
  netCents: number;
  vatAmountCents: number;
  count: number;
  vatRateBps?: number;
}

export interface RevenueAnalyticsResponse {
  timezone: string;
  range: {
    startUtc: Date;
    endUtc: Date;
  };
  currency: string;
  totals: RevenueAnalyticsInfo;
  bySource: {
    VOUCHER: RevenueAnalyticsInfo;
    TATTOO: RevenueAnalyticsInfo;
    GUEST_TABLE: RevenueAnalyticsInfo;
  };
  byVatRate: RevenueAnalyticsInfo[];
}

export type TimeseriesGranularity = "day" | "week" | "month";

export interface TimeseriesAnalyticsInfo {
  key: string;
  label: string;
  startUtc: Date | string;
  endUtc: Date | string;
  total: number;
  approved: number;
  completed: number;
  cancelled: number;
  noShow: number;
}

export interface TimeseriesAnalyticsResponse {
  timezone: string;
  range: {
    startUtc: Date;
    endUtc: Date;
  };
  granularity: TimeseriesGranularity;
  items: TimeseriesAnalyticsInfo[];
}

export interface RevenueTimeseriesItem {
  key: string;
  label: string;

  startUtc: Date | string;
  endUtc: Date | string;

  totals: RevenueAnalyticsInfo;

  bySource: Partial<Record<PaymentSource, RevenueAnalyticsInfo>>;
}

export interface RevenueTimeseriesAnalyticsResponse {
  timezone: string;

  range: {
    startUtc: Date;
    endUtc: Date;
  };

  granularity: TimeseriesGranularity;

  currency: string;

  items: RevenueTimeseriesItem[];
}
