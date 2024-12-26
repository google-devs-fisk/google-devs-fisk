import React from "react";
import { KeySpanProps } from "@/types/common";

const KeySpan: React.FC<KeySpanProps> = ({ genre, variant = 1 }) => {
    return (
      <span
        className={`px-4 py-1.5 ${
          variant === 1
            ? "bg-[var(--secondary-background-one)]"
            : "bg-[var(--secondary-background-two)]"
        } text-sm sm:text-xl font-semibold rounded-lg`}
      >
        {genre}
      </span>
    );
  };
  

export default KeySpan;