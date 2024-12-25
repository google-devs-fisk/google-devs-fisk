'use client';

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface BtnProps {
  text: string;
  link: string;
}

export default function Btn({ text, link }: BtnProps) {
  const router = useRouter();

  const handlePress = () => {
    if (link) {
      router.push(link); // Navigate to the provided link
    }
  };

  return (
    <Button
      className="button text-lg focus:outline-none"
      onPress={handlePress}
    >
      {text}
    </Button>
  );
}