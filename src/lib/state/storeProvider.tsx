"use client";
import { useRef } from "react";

import { Provider } from "react-redux";

import { makeStore, AppStore } from "./store";

/**
 * A provider component that wraps the application in a Redux store.
 * @param children The child components to render.
 * @returns The rendered StoreProvider component.
 */
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
