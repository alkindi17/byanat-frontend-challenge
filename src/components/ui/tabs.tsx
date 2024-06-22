"use client";

import { useState } from "react";

/**
 * Tabs component to switch between different tabs
 * @param tabsData Array of objects containing title and component
 * @param defaultTab Default tab to be active on load
 * @returns the tabs component
 */
export default function Tabs({
  tabsData,
  defaultTab,
}: {
  tabsData: {
    title: string;
    component: JSX.Element;
  }[];
  defaultTab: string;
}) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <>
      <div className="mb-4 border-b border-gray-200">
        <ul
          className="-mb-px flex flex-wrap divide-x text-center text-sm font-medium"
          role="tablist"
        >
          {tabsData.map((tab, index) => (
            <li key={index} className="flex flex-1 items-center justify-center">
              <button
                className={`inline-block w-full rounded-t-lg border-b-2 p-4 focus:outline-none ${activeTab === tab.title ? "border-primary-500 text-primary-500" : "border-transparent"}`}
                id={`${tab.title.toLowerCase()}-tab`}
                type="button"
                role="tab"
                onClick={() => setActiveTab(tab.title)}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-full">
        {tabsData.map((tab) => {
          return (
            tab.title === activeTab && (
              <div className="h-full" key={tab.title}>
                {tab.component}
              </div>
            )
          );
        })}
      </div>
    </>
  );
}
