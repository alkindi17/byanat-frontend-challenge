import Image from "next/image";

import {
  DropDownMenu,
  DropDownMenuButton,
  DropDownMenuContent,
  DropDownMenuContentSection,
  DropDownMenuContentSectionItem,
  DropDownMenuContentSectionItemLink,
} from "../ui/dropdown-menu";

/**
 * Renders the profile dropdown menu component.
 */
export default function ProfileDropDown() {
  return (
    <DropDownMenu>
      {/* Button showing the user's profile */}
      <DropDownMenuButton>
        <span className="sr-only">Open user menu</span>
        <Image
          className="me-2 h-8 w-8 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="user photo"
          width={32}
          height={32}
        />
        <p> John Dahl</p>
      </DropDownMenuButton>

      {/* Dropdown menu content */}
      <DropDownMenuContent>
        {/* User's email */}
        <DropDownMenuContentSection>
          <DropDownMenuContentSectionItem>
            <p className="truncate font-extralight">john.dahl@byanat.ai</p>
          </DropDownMenuContentSectionItem>
        </DropDownMenuContentSection>

        {/* Actions */}
        <DropDownMenuContentSection>
          <DropDownMenuContentSectionItemLink href="#">
            Profile
          </DropDownMenuContentSectionItemLink>

          <DropDownMenuContentSectionItemLink href="#">
            Settings
          </DropDownMenuContentSectionItemLink>
        </DropDownMenuContentSection>

        {/* Sign out */}
        <DropDownMenuContentSection>
          <DropDownMenuContentSectionItemLink href="#" danger>
            Sign out
          </DropDownMenuContentSectionItemLink>
        </DropDownMenuContentSection>
      </DropDownMenuContent>
    </DropDownMenu>
  );
}
