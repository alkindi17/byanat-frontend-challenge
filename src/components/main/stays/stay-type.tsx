import {
  FaceSmileIcon,
  HomeIcon,
  HomeModernIcon,
} from "@heroicons/react/24/solid";

/**
 * Represents the type of stay.
 */
export type StayType =
  | "Entire Home"
  | "Entire Studio Apartment"
  | "Share With Super Host";

/**
 * Renders an icon based on the type of stay.
 * @param type - The type of stay.
 * @returns The JSX element representing the stay type icon.
 */
export default function StayTypeIcon({ type }: { type: StayType }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-400 text-white">
      {type === "Entire Home" && <HomeModernIcon className="h-5 w-5" />}
      {type === "Entire Studio Apartment" && <HomeIcon className="h-5 w-5" />}
      {type === "Share With Super Host" && (
        <FaceSmileIcon className="h-5 w-5" />
      )}
    </div>
  );
}
