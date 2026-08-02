"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import ChartCard from "./ChartCard";
import { RevenueTrendChartItem } from "@/components/schema & types/analytics/chart.types";

interface RevenueTrendChartProps {
  data: RevenueTrendChartItem[];
  config: ChartConfig;
}

function RevenueTrendChart({ data, config }: RevenueTrendChartProps) {
  return (
    <ChartCard
      title="Revenue Trend"
      description="Gross and net revenue over time"
    >
      <ChartContainer config={config} className="h-80 md:h-105 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
              top: 10,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} />

            <XAxis dataKey="label" tickLine={false} axisLine={false} />

            <YAxis tickLine={false} axisLine={false} />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <Area
              type="monotone"
              dataKey="gross"
              stroke="var(--color-gross)"
              fill="var(--color-gross)"
              fillOpacity={0.22}
              strokeWidth={3}
            />

            <Area
              type="monotone"
              dataKey="net"
              stroke="var(--color-net)"
              fill="var(--color-net)"
              fillOpacity={0.12}
              strokeWidth={3}
            />

            <ChartLegend verticalAlign="top" content={<ChartLegendContent />} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </ChartCard>
  );
}

export default RevenueTrendChart;
