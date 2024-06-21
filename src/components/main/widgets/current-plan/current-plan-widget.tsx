import CurrentPlanProgressChart from "./current-plan-progress-chart";
import CurrentPlanType from "./current-plan-type";
import WidgetContainer from "../widget-container";

/**
 * CurrentPlanWidget component shows details of the current plan
 * @returns CurrentPlanWidget component
 */
export default function CurrentPlanWidget({ listeners }: { listeners: any }) {
  const title = "Current Plan";
  const subtitle = "Information and usages of your current plan";
  return (
    <WidgetContainer title={title} subtitle={subtitle} listeners={listeners}>
      <div className="flex flex-col gap-4">
        <CurrentPlanType />
        <CurrentPlanProgressChart />
      </div>
    </WidgetContainer>
  );
}
