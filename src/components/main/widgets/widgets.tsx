import ProfitAndLossWidget from "./profit-and-loss-widget";

/**
 * The widgets component that wraps the widget components.
 * @returns The widgets component.
 */
export default function Widgets() {
  return (
    <div className="flex h-full flex-col gap-6 overflow-scroll pb-7 pt-9">
      <ProfitAndLossWidget />
    </div>
  );
}
