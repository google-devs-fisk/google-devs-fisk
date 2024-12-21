import * as React from "react";
import { NavItemProps } from "./types";

export const NavItem: React.FC<NavItemProps> = ({ text, href }) => (
  <a href={href} className="mt-5 text-lg font-semibold text-white">
    {text}
  </a>
);
