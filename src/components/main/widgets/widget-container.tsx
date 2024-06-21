/**
 * WidgetContainer component that wraps a widget.
 * @param children The children of the widget container.
 * @returns The widget container component.
 */
export default function WidgetContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-4 rounded-2xl bg-white p-6 shadow-xl">{children}</div>
  );
}
