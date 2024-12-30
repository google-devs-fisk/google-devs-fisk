// components/ContactCard.tsx
"use client";

import { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import CHeader from "./reusables/cardHeader";
import Form from "./contactForm";

const ContactCard = () => {
  const [interests, setInterests] = useState([
    { text: "iOS Dev", isActive: true },
    { text: "Android", isActive: false },
    { text: "ML", isActive: false },
    { text: "Full Stack", isActive: false },
    { text: "System Design", isActive: false },
    { text: "Other", isActive: false },
  ]);

  const handleClick = (index: number) => {
    setInterests((prevInterests) =>
      prevInterests.map((interest, i) => {
        if (i === index) {
          return { ...interest, isActive: true };
        }
        return { ...interest, isActive: false };
      })
    );
  };

  const activeInterest =
    interests.find((interest) => interest.isActive)?.text || "None";

  return (
    <div>
      <Card
        className="bg-black pt-3 pb-10 px-5 max-w-[85svw] min-h-[40vh] max-h-[70vh] [@media(min-width:600px)]:max-w-[500px] [@media(min-height:950px)]:max-h-[65vh] rounded-3xl shadow-[0px_0px_4rem_2rem_rgba(255,255,255,0.2)]
"
      >
        <CHeader
          interests={interests}
          headingText="I'm interested in..."
          onSelectItem={handleClick}
        />
        <CardBody>
          <Form interest={activeInterest} />
        </CardBody>
      </Card>
    </div>
  );
};

export default ContactCard;
