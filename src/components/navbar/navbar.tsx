import Image from "next/image";
import Link from "next/link";

import PhoneContact from "./phone-contact";
import ProfileDropDown from "./profile";
import Searchbox from "./searchbox";

/**
 * Renders the navigation bar component.
 * @returns The rendered Navbar component.
 */
export default function Navbar() {
  return (
    <nav className="fixed z-30 w-screen bg-white drop-shadow-[0_1px_30px_rgba(0,0,0,0.06)]">
      <div className="container mx-auto flex max-w-screen-2xl flex-col gap-4 px-4 py-6">
        <div className="flex items-center justify-between gap-6">
          {/* Logo and Search Box */}
          <div className="flex flex-1 items-center gap-6">
            <div className="w-10">
              <Link href="/">
                <Image src="/logo.svg" alt="Logo" width={46} height={46} />
              </Link>
            </div>
            <div className="flex-1 max-md:hidden">
              {/* Search Box for Desktop */}
              <Searchbox />
            </div>
          </div>

          {/* Phone Contact and Profile */}
          <div className="flex items-center gap-4 md:gap-12">
            <PhoneContact />
            <ProfileDropDown />
          </div>
        </div>

        {/* Search Box for Mobile */}
        <div className="flex w-full justify-center md:hidden">
          <Searchbox />
        </div>
      </div>
    </nav>
  );
}
