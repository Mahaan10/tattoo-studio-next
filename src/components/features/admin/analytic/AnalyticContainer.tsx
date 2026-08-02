"use client";

import { useMemo, useState } from "react";
import { startOfMonth } from "date-fns";

import useAnalytic from "./useAnalytic";
import OverviewFilters from "./overview/OverviewFilters";
import { AnalyticsFilterForm } from "@/components/schema & types/analytics/analytics.types";
import AnalyticsCards from "./AnalyticsCards";
import PieChartCard from "./charts/PieChartCard";
import {
  bookingSourceConfig,
  bookingStatusConfig,
  bookingTypeConfig,
  revenueTrendConfig,
} from "./charts/chartConfig";
import BarChartCard from "./charts/BarChartCard";
import HorizontalBarChart from "./charts/HorizontalBarChart";
import formattedDate from "@/components/utils/formatter";
import { format } from "date-fns";
import RevenueTrendChart from "./charts/RevenueTrendChart";

function AnalyticContainer() {
  const [filters, setFilters] = useState<AnalyticsFilterForm>({
    from: startOfMonth(new Date()),
    to: new Date(),
    includeWalkIn: true,
    granularity: "day",
  });

  const {
    overviewAnalyticsData,
    overviewAnalyticsIsLoading,
    overviewAnalyticsIsError,
    revenueTimelineData,
    revenueTimelineIsLoading,
    revenueTimelineIsError,
  } = useAnalytic({
    from: filters.from,
    to: filters.to,
    timezone: "Europe/Berlin",
    includeWalkIn: filters.includeWalkIn,
    granularity: filters.granularity,
  });

  console.log("revenueTimeline =>", revenueTimelineData);

  const bookingSourceData = useMemo(() => {
    if (!overviewAnalyticsData) return [];

    return Object.entries(overviewAnalyticsData.bySource).map(
      ([name, value]) => ({
        name,
        value,
        fill: `var(--color-${name})`,
      }),
    );
  }, [overviewAnalyticsData]);

  const bookingTypeData = useMemo(() => {
    if (!overviewAnalyticsData) return [];

    return Object.entries(overviewAnalyticsData.byBookingType).map(
      ([name, value]) => ({
        name,
        value,
        fill: `var(--color-${name})`,
      }),
    );
  }, [overviewAnalyticsData]);

  const bookingStatusData = useMemo(() => {
    if (!overviewAnalyticsData) return [];

    return Object.entries(overviewAnalyticsData.status).map(
      ([name, value]) => ({
        name,
        value,
        fill: `var(--color-${name})`,
      }),
    );
  }, [overviewAnalyticsData]);

  const revenueTrendData = useMemo(() => {
    if (!revenueTimelineData) return [];

    return revenueTimelineData.items.map((item) => ({
      label: format(new Date(item.startUtc), "MMM d"),
      gross: item.totals.grossCents / 100,
      net: item.totals.netCents / 100,
      vat: item.totals.vatAmountCents / 100,
      count: item.totals.count,
    }));
  }, [revenueTimelineData]);

  if (overviewAnalyticsIsLoading || revenueTimelineIsLoading)
    return <p>Loading...</p>;

  if (!overviewAnalyticsData || !revenueTimelineData) {
    return null;
  }

  return (
    <div className="space-y-8">
      <OverviewFilters defaultValues={filters} onSubmit={setFilters} />

      <AnalyticsCards analytics={overviewAnalyticsData} />

      <RevenueTrendChart data={revenueTrendData} config={revenueTrendConfig} />

      <div className="grid gap-6 grid-cols-1 2xl:grid-cols-2">
        <PieChartCard
          title="Booking Sources"
          description="Distribution by intake source"
          data={bookingSourceData}
          config={bookingSourceConfig}
        />

        <BarChartCard
          title="Booking Types"
          description="Bookings by type"
          data={bookingTypeData}
          config={bookingTypeConfig}
        />
      </div>

      <HorizontalBarChart
        title="Booking Status"
        description="Booking lifecycle overview"
        data={bookingStatusData}
        config={bookingStatusConfig}
      />
    </div>
  );
}

export default AnalyticContainer;
