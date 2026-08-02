"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";

import ChartCard from "./ChartCard";
import { ChartItem } from "@/components/schema & types/analytics/chart.types";

interface HorizontalBarChartProps {
  title: string;
  description?: string;
  data: ChartItem[];
  config: ChartConfig;
}

function HorizontalBarChart({
  title,
  description,
  data,
  config,
}: HorizontalBarChartProps) {
  return (
    <ChartCard title={title} description={description}>
      <ChartContainer config={config}  className="h-65 sm:h-80 lg:h-90 xl:h-95 w-full">
        <BarChart
          accessibilityLayer
          data={data}
          layout="vertical"
          barCategoryGap={18}
          margin={{
            left: 20,
            right: 20,
          }}
        >
          <CartesianGrid horizontal={false} />

          <YAxis
            dataKey="name"
            type="category"
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => (config[value]?.label as string) ?? value}
          />

          <XAxis type="number" hide />

          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

          <Bar dataKey="value" radius={[0,8,8,0]} />
        </BarChart>
      </ChartContainer>
    </ChartCard>
  );
}

export default HorizontalBarChart;
