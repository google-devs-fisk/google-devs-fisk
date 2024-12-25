'use client';

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface BtnProps {
  text: string;
  link: string;
  variant?: string;
}

export default function Btn({ text, link, variant}: BtnProps) {
  const router = useRouter();

  const handlePress = () => {
    if (link) {
      router.push(link); // Navigate to the provided link
    }
  };

  return (
    <Button
      className={`px-6 py-3 text-lg rounded-lg shadow-lg hover:opacity-90 focus:outline-none ${variant ? variant : "primary-btn"}`}
      onPress={handlePress}
    >
      {text}
    </Button>
  );
}