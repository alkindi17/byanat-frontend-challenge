import DragIndicator from "@/components/ui/drag-indicator";

import ProfitAndLossChart from "./profit-and-loss-chart";
import WidgetContainer from "./widget-container";

/**
 * A widget that shows the profit and loss.
 * @returns The profit and loss widget component.
 */
export default function ProfitAndLossWidget() {
  const title = "P & L";
  const subtitle = "Total profit growth of 25%";
  return (
    <WidgetContainer title={title} subtitle={subtitle}>
      <ProfitAndLossChart />
    </WidgetContainer>
  );
}
