import DragIndicator from "@/components/ui/drag-indicator";

import ProfitAndLossChart from "./profit-and-loss-chart";
import WidgetContainer from "./widget-container";

/**
 * A widget that shows the profit and loss.
 * @returns The profit and loss widget component.
 */
export default function ProfitAndLossWidget() {
  return (
    <WidgetContainer>
      <div className="flex h-full flex-col gap-6">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">P & L</h3>
            <p className="text-xs text-gray-400">Total profit growth of 25%</p>
          </div>
          <div className="w-5 text-gray-400">
            <DragIndicator className="w-full" />
          </div>
        </div>
        <div className="h-[140px] flex-1 items-center">
          <ProfitAndLossChart />
        </div>
      </div>
    </WidgetContainer>
  );
}
