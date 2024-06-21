import CurrentPlanWidget from "./current-plan/current-plan-widget";
import ProfitAndLossWidget from "./profit-and-loss/profit-and-loss-widget";
import RevenueWidget from "./revenue/revenue-widget";

/**
 * The widgets component that wraps the widget components.
 * @returns The widgets component.
 */
export default function Widgets() {
  return (
    <div className="flex h-full flex-col gap-6 overflow-scroll pb-7 pt-9">
      <ProfitAndLossWidget />
      <CurrentPlanWidget />
      <RevenueWidget />
    </div>
  );
}
