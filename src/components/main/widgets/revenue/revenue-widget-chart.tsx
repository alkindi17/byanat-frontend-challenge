"use client";

import { useEffect, useState } from "react";

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

import ChartSkeleton from "../chart-skeleton";

// Format a number with commas, e.g. 1000 -> 1,000.
const formatNumber = (value: number) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// The initial options for the donut chart.
const initialOptions: ApexOptions = {
  chart: {
    id: "profit-and-loss-donut-chart",
    type: "donut",
    height: "200px",
    width: "200px",
  },
  labels: [
    "Re-used APIs",
    "Webhooks",
    "API Calls",
    "API Requests",
    "API Responses",
  ],
  series: [360, 380, 250, 500, 750],
  colors: ["#D74B8E", "#00B7FE", "#6A68C5", "#12C9BE", "#D26515"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            show: true,
            fontFamily: "Inter, sans-serif",
            offsetY: 14,
          },
          total: {
            showAlways: true,
            show: true,
            label: "in April",
            fontSize: "10px",
            color: "#5A596D",
            // The formatter function is used to generate the total value of the donut chart, e.g. $1,000.
            formatter: function (w) {
              const sum = w.globals.seriesTotals.reduce(
                (a: number, b: number) => {
                  return a + b;
                },
                0,
              );
              return "$" + formatNumber(sum);
            },
          },
          value: {
            show: true,
            offsetY: -16,
            fontSize: "18px",
            formatter: function (value) {
              return value + "k";
            },
          },
        },
        size: "60%",
      },
    },
  },
  legend: {
    show: false,
  },
};

/**
 * The revenue widget chart component.
 * @returns The revenue widget chart component.
 */
export default function RevenueWidgetChart() {
  // The options for the donut chart.
  const [options, setOptions] = useState<ApexOptions>(initialOptions);

  // Whether the component is mounted.
  const [mounted, setMounted] = useState(false);

  // Dynamically import the chart component, because it depends on the window object, which is not available on the server.
  const Chart = dynamic(() => import("react-apexcharts"), {
    loading: () => <p></p>,
    ssr: false, // This line is important. It's what prevents server-side render
  });

  // Once the chart component is mounted, set the mounted state to true.
  useEffect(() => {
    if (Chart) {
      setMounted(true);
    }
  }, [Chart]);

  if (!mounted) return <ChartSkeleton />;

  return (
    <Chart
      options={options}
      series={options.series}
      type={options.chart?.type}
      height={options.chart?.height}
      width={options.chart?.width}
      className="flex w-full justify-center"
    />
  );
}
