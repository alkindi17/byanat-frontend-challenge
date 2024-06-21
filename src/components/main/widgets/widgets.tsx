"use client";

import React, { useState } from "react";

import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  closestCenter,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import CurrentPlanWidget from "./current-plan/current-plan-widget";
import DndWidgetsWrapper from "./dnd-widgets-wrapper";
import ProfitAndLossWidget from "./profit-and-loss/profit-and-loss-widget";
import RevenueWidget from "./revenue/revenue-widget";

// The widget components
const widgetComponents: { [key: string]: any } = {
  profitAndLoss: ProfitAndLossWidget,
  currentPlan: CurrentPlanWidget,
  revenue: RevenueWidget,
};

/**
 * The main widgets component
 * @returns widgets component
 */
export default function Widgets() {
  // The initial order of the widgets
  const [widgets, setWidgets] = useState([
    "profitAndLoss",
    "currentPlan",
    "revenue",
  ]);

  // The id of the active widget
  const [activeId, setActiveId] = useState<string | null>(null);

  // This function is called when the drag ends to update the order of the widgets
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    // Reset the active id
    setActiveId(null);

    if (active.id !== over!.id) {
      setWidgets((widgets) => {
        const oldIndex = widgets.indexOf(active.id as string);
        const newIndex = widgets.indexOf(over!.id as string);
        return arrayMove(widgets, oldIndex, newIndex);
      });
    }
  };

  // This function is called when the drag starts to set the active id
  const handleDragStart = (event: any) => {
    setActiveId(event.active.id);
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <SortableContext items={widgets} strategy={verticalListSortingStrategy}>
        <ul className="flex h-full flex-col gap-6 overflow-scroll pb-7 pt-9">
          {widgets.map((widget) => (
            <DndWidgetsWrapper
              key={widget}
              id={widget}
              Component={widgetComponents[widget]}
              isDragging={activeId === widget}
            />
          ))}
        </ul>
      </SortableContext>

      <DragOverlay
        dropAnimation={{
          duration: 200,
          easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
        }}
        modifiers={[restrictToVerticalAxis]}
      >
        {activeId ? (
          <div className="shadow-lg">
            {React.createElement(widgetComponents[activeId])}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
