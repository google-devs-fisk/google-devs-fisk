'use client';

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { BtnProps } from "@/types/common";

export default function Btn({ text, link, variant, extra}: BtnProps) {
  const router = useRouter();

  const handlePress = () => {
    if (link) {
      router.push(link); // Navigate to the provided link
    }
  };

  return (
    <Button
      className={`px-6 py-3 text-xs sm:text-sm lg:text-lg rounded-xl shadow-lg hover:opacity-90 focus:outline-none ${extra ? extra : ""} ${variant ? variant : "primary-btn"}`}
      onPress={handlePress}
    >
      {text}
    </Button>
  );
}