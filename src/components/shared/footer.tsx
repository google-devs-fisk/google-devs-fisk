"use client";

import React from "react";
import { Link } from "@nextui-org/react";
import paths from "@/paths";
import { FooterProps } from "@/types/common";

export default function Footer({ hideUpperFooter = false }: FooterProps) {
  return (
    <footer className="pb-5">
      {/* Upper Footer */}
      {!hideUpperFooter && <div>
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-evenly gap-4 mb-6 px-4">
          <Link href={paths.home()} className="hover:underline">
            Home
          </Link>
          <Link href={paths.projects()} className="hover:underline">
            Projects
          </Link>
          <Link href={paths.codelabs()} className="hover:underline">
            CodeLabs
          </Link>
          <Link href={paths.workCulture()} className="hover:underline">
            Work Culture
          </Link>
          <Link href={paths.contact()} className="hover:underline">
            Contact
          </Link>
        </div>
      </div>}

      {/* Sub Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 px-4 font-light text-sm text-gray-400">
        <div className="flex justify-center gap-6">
          <Link href="/#" className="hover:underline">
            Terms
          </Link>
          <Link href="/#" className="hover:underline">
            Privacy
          </Link>
          <Link href="/#" className="hover:underline">
            Conditions
          </Link>
        </div>
        <div className="text-center">
          © 2025 Google Developers' Group - Fisk All Rights Reserved
        </div>
        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          <Link href="/#" target="_blank" className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M23.498 6.186a2.956 2.956 0 0 0-2.08-2.093C19.435 3.6 12 3.6 12 3.6s-7.435 0-9.418.493a2.956 2.956 0 0 0-2.08 2.093A30.293 30.293 0 0 0 0 12a30.293 30.293 0 0 0 .502 5.814 2.956 2.956 0 0 0 2.08 2.093C4.565 20.4 12 20.4 12 20.4s7.435 0 9.418-.493a2.956 2.956 0 0 0 2.08-2.093A30.293 30.293 0 0 0 24 12a30.293 30.293 0 0 0-.502-5.814zM9.75 15.568V8.432l6.364 3.568L9.75 15.568z" />
            </svg>
          </Link>
          <Link href="/#" target="_blank" className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm5.25 5.35a5.65 5.65 0 1 0 0 11.3 5.65 5.65 0 0 0 0-11.3zm6.45-.85a1.35 1.35 0 1 0 0-2.7 1.35 1.35 0 0 0 0 2.7zm-6.45 2a3.65 3.65 0 1 1 0 7.3 3.65 3.65 0 0 1 0-7.3z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
