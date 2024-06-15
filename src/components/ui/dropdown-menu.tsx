import {
  Menu,
  MenuButton as OriginalMenuButton,
  MenuItems,
  MenuItem as OriginalMenuItem,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

/**
 * Renders a dropdown menu component.
 *
 * @param children - The content of the dropdown menu.
 * @returns The dropdown menu component.
 */
export function DropDownMenu({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Menu>{children}</Menu>;
}

/**
 * Renders a button for the dropdown menu.
 *
 * @param children - The content of the dropdown menu button.
 * @param arrowIcon - Whether to show an arrow icon. Defaults to true.
 * @returns The dropdown menu button component.
 */
export function DropDownMenuButton({
  children,
  arrowIcon = true,
}: Readonly<{
  children: React.ReactNode;
  arrowIcon?: boolean;
}>) {
  return (
    <OriginalMenuButton className="group/button flex items-center rounded-full text-sm font-medium text-gray-900 hover:text-primary-600">
      {children}
      {arrowIcon && (
        <ChevronDownIcon className="ms-1 h-5 w-5 text-gray-700 group-hover/button:text-primary-600" />
      )}
    </OriginalMenuButton>
  );
}

/**
 * Renders the content of the dropdown menu.
 *
 * @param children - The content of the dropdown menu.
 * @param anchor - The anchor position of the dropdown menu content. Defaults to "bottom".
 * @returns The dropdown menu content component.
 */
export function DropDownMenuContent({
  children,
  anchor = "bottom",
}: Readonly<{
  children: React.ReactNode;
  anchor?: "top" | "right" | "bottom" | "left";
}>) {
  return (
    <MenuItems
      anchor={anchor}
      className="z-40 mt-2 divide-y divide-gray-100 rounded-lg border bg-white shadow"
    >
      {children}
    </MenuItems>
  );
}

/**
 * Renders a section within the dropdown menu content.
 *
 * @param children - The content of the dropdown menu section.
 * @returns The dropdown menu section component.
 */
export function DropDownMenuContentSection({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ul className="py-2 text-sm text-gray-700">{children}</ul>;
}

/**
 * Renders an item within a dropdown menu section.
 *
 * @param children - The content of the dropdown menu section item.
 * @returns The dropdown menu section item component.
 */
export function DropDownMenuContentSectionItem({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <OriginalMenuItem>
      <li className="block px-4 py-2">{children}</li>
    </OriginalMenuItem>
  );
}

/**
 * Renders a link item within a dropdown menu section.
 *
 * @param children - The content of the dropdown menu section item link.
 * @param href - The URL of the link.
 * @param danger - Whether the link is considered dangerous. This will change the color of the link to red. Defaults to false.
 * @returns The dropdown menu section item link component.
 */
export function DropDownMenuContentSectionItemLink({
  children,
  href,
  danger = false,
}: Readonly<{
  children: React.ReactNode;
  href: string;
  danger?: boolean;
}>) {
  return (
    <OriginalMenuItem>
      <li>
        <Link
          className={`block px-4 py-2 hover:bg-gray-100 ${danger ? "text-red-500" : ""}`}
          href={href}
        >
          {children}
        </Link>
      </li>
    </OriginalMenuItem>
  );
}
