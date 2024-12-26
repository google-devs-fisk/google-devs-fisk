'use client';

import React, { useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import NavCenterSeparator from "./navCenterSeparator";
import paths from "@/paths";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <Navbar shouldHideOnScroll className="sticky top-0 z-50 max-w-[800px] mx-auto align-middle font-medium">
      <NavbarContent className="flex justify-between w-full">
        {/* Left Section */}
        <div className="items-center gap-8 mt-3 hidden sm:flex">
          <NavbarItem>
            <Link href={paths.home()} className="hover:underline">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={paths.projects()} className="hover:underline">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={paths.codelabs()} className="hover:underline">
              CodeLabs
            </Link>
          </NavbarItem>
        </div>

        {/* Middle Separator */}
        <div className="hidden custom-740:block"><NavCenterSeparator /></div>

        {/* Right Section */}
        <div className="items-center gap-8 mt-3 hidden sm:flex">
          <NavbarItem>
            <Link href={paths.workCulture()} className="hover:underline">
              Work Culture
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={paths.contact()} className="hover:underline">
              Contact
            </Link>
          </NavbarItem>
        </div>

        {/* Toggle Button for Smaller Screens */}
        <Button
          isIconOnly
          variant="light"
          className="sm:hidden mt-3"
          onPress={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </Button>
      </NavbarContent>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="flex flex-col gap-4 p-4 sm:hidden list-none">
          <li className="text-center">
            <Link href={paths.home()} className="hover:underline">
              Home
            </Link>
          </li>
          <li className="text-center">
            <Link href={paths.projects()} className="hover:underline">
              Projects
            </Link>
          </li>
          <li className="text-center">
            <Link href={paths.codelabs()} className="hover:underline">
              CodeLabs
            </Link>
          </li>
          <li className="text-center">
            <Link className="whitespace-nowrap hover:underline" href={paths.workCulture()}>
              Work Culture
            </Link>
          </li>
          <li className="text-center">
            <Link href={paths.contact()} className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </Navbar>
  );
}
