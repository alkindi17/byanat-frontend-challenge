import RevenueWidgetChart from "./revenue-widget-chart";
import WidgetContainer from "../widget-container";

/**
 * The revenue widget component.
 * @returns The revenue widget component.
 */
export default function RevenueWidget({ listeners }: { listeners: any }) {
  return (
    <WidgetContainer listeners={listeners}>
      <RevenueWidgetChart />
    </WidgetContainer>
  );
}
