import { ChartConfig } from "@/components/ui/chart";

export interface ChartItem {
  name: string;
  value: number;
  fill?: string;
}

export interface ChartCardProps {
  title: string;
  description?: string;
}

export interface PieChartCardProps extends ChartCardProps {
  data: ChartItem[];
  config: ChartConfig;
}

export interface BarChartCardProps extends ChartCardProps {
  data: ChartItem[];
  config: ChartConfig;
}

export interface RevenueTrendChartItem {
  label: string;
  gross: number;
  net: number;
  vat: number;
  count: number;
}

export interface BookingTrendChartItem {
  label: string;
  total: number;
  approved: number;
  completed: number;
  cancelled: number;
  noShow: number;
}
