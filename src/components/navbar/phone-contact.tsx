import { PhoneIcon } from "@heroicons/react/24/solid";

/**
 * Renders a phone contact component.
 * Displays a phone icon and a phone number.
 */
export default function PhoneContact() {
  return (
    <div className="flex items-center gap-2">
      <PhoneIcon className="h-4 w-4" />
      <p className="font-light max-sm:text-xs">+1 (800) 657 8976</p>
    </div>
  );
}
