import * as React from "react";
import { FooterLinkProps } from "./types";

export const FooterLink: React.FC<FooterLinkProps> = ({ text, href }) => (
  <a href={href} className="text-lg leading-tight text-center text-white">
    {text}
  </a>
);
