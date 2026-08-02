import { AxiosResponse } from "axios";
import {
  OverviewAnalyticsInfo,
  RevenueAnalyticsResponse,
  TimeseriesAnalyticsResponse,
} from "../schema & types/analytics/analytics.types";
import http from "./httpService";

interface OverviewAnalyticsParams {
  from: string;
  to: string;
  timezone: string;
  includeWalkIn: boolean;
}

interface TimeseriesAnalyticsParams extends OverviewAnalyticsParams {
  granularity: string;
}

export default function getOverviewAnalyticsApi({
  from,
  to,
  timezone,
  includeWalkIn,
}: OverviewAnalyticsParams): Promise<OverviewAnalyticsInfo> {
  return http
    .get("/admin/analytics/overview", {
      params: {
        from,
        to,
        timezone,
        includeWalkIn,
      },
    })
    .then(({ data }: AxiosResponse<OverviewAnalyticsInfo>) => data);
}

export function getRevenueAnalyticsApi({
  from,
  includeWalkIn,
  timezone,
  to,
}: OverviewAnalyticsParams): Promise<RevenueAnalyticsResponse> {
  return http
    .get("admin/analytics/revenue", {
      params: {
        from,
        to,
        timezone,
        includeWalkIn,
      },
    })
    .then(({ data }: AxiosResponse<RevenueAnalyticsResponse>) => data);
}

export function getTimeseriesAnalyticsApi({
  from,
  to,
  timezone,
  includeWalkIn,
  granularity,
}: TimeseriesAnalyticsParams): Promise<TimeseriesAnalyticsResponse> {
  return http
    .get("/admin/analytics/timeseries", {
      params: {
        from,
        to,
        timezone,
        includeWalkIn,
        granularity,
      },
    })
    .then(({ data }: AxiosResponse<TimeseriesAnalyticsResponse>) => data);
}
