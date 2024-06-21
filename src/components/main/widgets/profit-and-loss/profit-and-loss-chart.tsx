"use client";

import { useEffect, useState } from "react";

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

import ChartSkeleton from "../chart-skeleton";

/**
 * A donut chart that shows the profit and loss.
 * @returns The profit and loss chart component.
 */
export default function ProfitAndLossChart() {
  // The initial options for the donut chart.
  const initialOptions: ApexOptions = {
    chart: {
      id: "profit-and-loss-donut-chart",
      type: "donut",
      height: "100%",
      width: "100%",
    },
    labels: ["Re-used APIs", "Webhooks", "API Calls"],
    series: [36, 38, 25],
    colors: ["#FD2254", "#00B7FE", "#D0D2DA"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
        },
      },
    },
    legend: {
      show: false,
      formatter: function (seriesName, opts) {
        return (
          seriesName + "\n" + opts.w.globals.series[opts.seriesIndex] + "%"
        );
      },
      position: "left",
      fontSize: "10px",
      fontWeight: 100,
      markers: {
        width: 5,
        height: 5,
      },
      width: 100,
    },
  };

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
    <div className="flex h-full">
      {/* The legend for the donut chart. */}
      {mounted && (
        <ul className="flex w-fit flex-col justify-center gap-2">
          {options.labels?.map((label, index) => (
            <li className="flex gap-2 text-[10px]" key={index}>
              <div
                className="mt-1 h-[5px] w-[5px] rounded-full"
                style={{ backgroundColor: options.colors?.[index] }}
              ></div>
              <div className="flex flex-col">
                <p className="text-nowrap">{label}</p>
                <p className="text-sm">
                  {(options.series as unknown as String[])[index]}%
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* The donut chart. */}
      <div className="flex flex-1 justify-center">
        <Chart
          options={options}
          series={options.series}
          type={options.chart?.type}
          height={options.chart?.height}
          width={options.chart?.width}
        />
      </div>
    </div>
  );
}
