import getOverviewAnalyticsApi, {
  getRevenueAnalyticsApi,
  getTimeseriesAnalyticsApi,
} from "@/components/services/analyticService";
import { formatDate } from "@/components/utils/formatter";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

interface UseAnalyticProps {
  from: Date;
  to: Date;
  timezone: string;
  includeWalkIn: boolean;
  granularity: string;
}

export default function useAnalytic({
  from,
  to,
  timezone = "Europe/Berlin",
  includeWalkIn = true,
  granularity = "day",
}: UseAnalyticProps) {
  const fromFormattedDate = useMemo(
    () => (from ? formatDate(from) : ""),
    [from],
  );

  const toFormattedDate = useMemo(() => (to ? formatDate(to) : ""), [to]);

  const {
    data: overviewAnalyticsData,
    isLoading: overviewAnalyticsIsLoading,
    isError: overviewAnalyticsIsError,
  } = useQuery({
    queryKey: [
      "overview",
      fromFormattedDate,
      toFormattedDate,
      timezone,
      includeWalkIn,
    ],
    queryFn: () =>
      getOverviewAnalyticsApi({
        from: fromFormattedDate,
        to: toFormattedDate,
        timezone,
        includeWalkIn,
      }),
  });

  /* Revenue Analytics */
  const {
    data: revenueAnalyticsData,
    isLoading: revenueAnalyticsIsLoading,
    isError: revenueAnalyticsIsError,
  } = useQuery({
    queryKey: [
      "revenue",
      fromFormattedDate,
      toFormattedDate,
      timezone,
      includeWalkIn,
    ],
    queryFn: () =>
      getRevenueAnalyticsApi({
        from: fromFormattedDate,
        to: toFormattedDate,
        timezone,
        includeWalkIn,
      }),
  });

  /* Timeseries Analytics */
  const {
    data: timeseriesAnalyticsData,
    isLoading: timeseriesAnalyticsIsLoading,
    isError: timeseriesAnalyticsIsError,
  } = useQuery({
    queryKey: [
      "timeseries",
      fromFormattedDate,
      toFormattedDate,
      timezone,
      includeWalkIn,
      granularity,
    ],
    queryFn: () =>
      getTimeseriesAnalyticsApi({
        from: fromFormattedDate,
        to: toFormattedDate,
        timezone,
        includeWalkIn,
        granularity,
      }),
  });

  return {
    // overview analytics
    overviewAnalyticsData,
    overviewAnalyticsIsLoading,
    overviewAnalyticsIsError,
    // revenue analytics
    revenueAnalyticsData,
    revenueAnalyticsIsLoading,
    revenueAnalyticsIsError,
    // timeseries analytics
    timeseriesAnalyticsData,
    timeseriesAnalyticsIsLoading,
    timeseriesAnalyticsIsError,
  };
}
