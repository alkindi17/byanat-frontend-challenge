import ProfitAndLossChart from "./profit-and-loss-chart";
import WidgetContainer from "../widget-container";

/**
 * A widget that shows the profit and loss.
 * @returns The profit and loss widget component.
 */
export default function ProfitAndLossWidget({ listeners }: { listeners: any }) {
  const title = "P & L";
  const subtitle = "Total profit growth of 25%";

  return (
    <WidgetContainer title={title} subtitle={subtitle} listeners={listeners}>
      <ProfitAndLossChart />
    </WidgetContainer>
  );
}
