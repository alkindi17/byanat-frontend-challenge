import { useDispatch, useSelector } from "react-redux";

import { toggleType } from "@/lib/state/stays/staysSlice";
import { RootState } from "@/lib/state/store";

import { StayType } from "./stay-type";

/**
 * Represents the types advanced filters component.
 * @returns The rendered TypesAdvancedFilters component.
 */
export default function TypesAdvancedFilters() {
  // Get the current state of the filters.
  const types = useSelector((state: RootState) => state.stays.filters.types);

  console.log(types);

  // Get the dispatch function.
  const dispatch = useDispatch();

  return (
    <>
      <h3 className="mb-2 text-lg font-semibold">Types</h3>
      <div className="flex flex-col gap-2">
        {Object.keys(types).map((value: string) => {
          const type = value as StayType;
          const element = types[type];
          return (
            <label key={type}>
              <input
                type="checkbox"
                value={type}
                className="mr-2"
                name="type"
                checked={element}
                onChange={() => {
                  dispatch(toggleType(type));
                }}
              />
              {type}
            </label>
          );
        })}
      </div>
    </>
  );
}
