import React from "react";
import { KeySpanProps } from "@/types/common";

const processGenre = (genre: string, truncateGenreSmall: boolean): string => {
  const words = genre.split(" ");
  // For small screens
  if (truncateGenreSmall && words.length >= 3) {
    return `${words.slice(0, 1).join(" ")} ... ${words[words.length - 1]}`;
  }
  // For longer genres
  if (words.length > 4) {
    return `${words.slice(0, 3).join(" ")} ... ${words[words.length - 1]}`;
  }
  return genre;
};

const KeySpan: React.FC<KeySpanProps> = ({ genre, variant = 1, truncateGenreSmall = false }) => {
  return (
    <span
      className={`px-4 py-1.5 ${
        variant === 0
          ? "bg-[var(--secondary-background-one)]"
          : variant === 1
          ? "bg-[var(--secondary-background-two)]"
          : "bg-[var(--secondary-background-three)]"
      } text-sm sm:text-xl font-semibold rounded-lg`}
    >
      {processGenre(genre, truncateGenreSmall)}
    </span>
  );
};

export default KeySpan;