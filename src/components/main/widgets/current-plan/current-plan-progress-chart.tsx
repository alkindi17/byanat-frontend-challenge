"use client";

import { useState } from "react";

import ProgressBar from "@/components/ui/progress-bar";

const initialData = [
  {
    title: "Projects",
    progress: 1,
    total: 3,
    barColor: "#FF6A00",
    bgColor: "#FFF7F0",
  },
  {
    title: "Users",
    progress: 1,
    total: 5,
    barColor: "#551FFF",
    bgColor: "##F3F0FF",
  },
  {
    title: "Requests/day",
    progress: 7500,
    total: 10000,
    barColor: "#FD2254",
    bgColor: "#FFF2F5",
  },
];

/**
 * CurrentPlanProgressChart component shows the progress of the current plan
 * @returns CurrentPlanProgressChart component
 */
export default function CurrentPlanProgressChart() {
  // State to store data of the progress chart
  const [data, setData] = useState(initialData);

  // Function to format numbers in K and M
  const formatNumber = (number: number) => {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(number % 1000 === 0 ? 0 : 1) + "M";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(number % 1000 === 0 ? 0 : 1) + "K";
    } else {
      return number.toString();
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {data.map((item) => (
        <div key={item.title} className="flex flex-col gap-1">
          <div className="flex justify-between">
            <span className="text-xs font-normal">{item.title}</span>
            <span className="text-xs font-normal">
              {formatNumber(item.progress)}/{formatNumber(item.total)}
            </span>
          </div>
          <ProgressBar
            progress={(item.progress / item.total) * 100}
            barColor={item.barColor}
            bgColor={item.bgColor}
          />
        </div>
      ))}
    </div>
  );
}
