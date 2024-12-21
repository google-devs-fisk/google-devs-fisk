import * as React from "react";
import { ContactInfoItemProps } from "./types";

export const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon,
  text,
}) => (
  <div className="flex gap-4 items-center py-6 pr-32 pl-6 whitespace-nowrap rounded-2xl max-md:px-5">
    <img
      loading="lazy"
      src={icon}
      alt=""
      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
    />
    <div className="self-stretch my-auto">{text}</div>
  </div>
);
