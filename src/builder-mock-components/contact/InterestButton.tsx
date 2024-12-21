import * as React from "react";
import { InterestButtonProps } from "./types";

export const InterestButton: React.FC<InterestButtonProps> = ({
  text,
  isActive,
}) => (
  <button
    className={`flex-1 shrink gap-2.5 p-4 rounded-lg ${
      isActive ? "text-white" : "border-2 border-white border-solid"
    }`}
  >
    {text}
  </button>
);
