"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", event: 186, ticket: 80 },
  { month: "February", event: 305, ticket: 200 },
  { month: "March", event: 237, ticket: 120 },
  { month: "April", event: 73, ticket: 190 },
  { month: "May", event: 209, ticket: 130 },
  { month: "June", event: 214, ticket: 140 },
];

const chartConfig = {
  desktop: {
    label: "Event",
    color: "purple",
  },
  mobile: {
    label: "Ticket",
    color: "pink",
  },
} satisfies ChartConfig;

export function DashboardGraph() {
  return (
    <section className="w-full overflow-hidden  p-5">
      <h3 className="text-xl font-semibold text-purple-700 mb-3">
        Event Overview
      </h3>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={true}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} />
          <Bar dataKey="event" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="ticket" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </section>
  );
}
