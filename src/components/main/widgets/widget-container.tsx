import DragIndicator from "@/components/ui/drag-indicator";

/**
 * WidgetContainer component that wraps a widget.
 * @param children The children of the widget container.
 * @param title The title of the widget
 * @param subtitle The subtitle of the widget
 * @returns The widget container component.
 */
export default function WidgetContainer({
  children,
  title,
  subtitle,
  listeners,
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  listeners?: any;
}) {
  return (
    <div className="mx-4 cursor-default rounded-2xl bg-white p-6 shadow-xl">
      <div className="flex h-full flex-col gap-6">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-xs text-gray-400">{subtitle}</p>
          </div>
          <div
            className="h-fit cursor-grab rounded-md p-1 text-gray-400 hover:bg-gray-100"
            {...listeners}
          >
            <DragIndicator className="w-5" />
          </div>
        </div>
        <div className="min-h-[140px] flex-1 items-center">{children}</div>
      </div>
    </div>
  );
}
