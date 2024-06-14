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
          src="https://datasciencefestival.com/wp-content/uploads/2022/08/ben-parker-OhKElOkQ3RE-unsplash-scaled.jpg"
          alt="user photo"
          width={32}
          height={32}
        />
        <p> John Doe</p>
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
