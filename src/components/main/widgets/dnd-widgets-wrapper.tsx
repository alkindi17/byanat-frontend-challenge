import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

/**
 * Wrapper component for the widgets that handles the drag and drop functionality
 * @param id The id of the widget
 * @param Component The widget component
 * @returns The widget component wrapped in a div with the necessary props
 */
export default function DndWidgetsWrapper({
  id,
  Component,
  isDragging,
}: {
  id: string;
  Component: React.ElementType;
  isDragging: boolean;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    setActivatorNodeRef,
  } = useSortable({ id: String(id) });

  const verticalTransform = transform
    ? { ...transform, x: 0 } // This locks the movement along the x-axis
    : undefined;

  const style = {
    transform: verticalTransform
      ? CSS.Transform.toString(verticalTransform)
      : undefined,
    transition,
    opacity: isDragging ? 0.2 : 1, // This sets the opacity of the widget when it is being dragged
  };

  return (
    <li ref={setNodeRef} style={style} {...attributes}>
      <Component ref={setActivatorNodeRef} listeners={listeners} />
    </li>
  );
}
