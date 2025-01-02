"use client";
import { Card, CardBody } from "@nextui-org/react";
import Form from "./contactForm";

const ContactCard = () => {
  return (
    <div>
      <Card
        className="bg-black pt-3 pb-10 px-5 max-w-[85svw] min-h-[40vh] max-h-[70vh] [@media(min-width:600px)]:max-w-[500px] [@media(min-height:950px)]:max-h-[65vh] rounded-3xl shadow-[0px_0px_4rem_2rem_rgba(255,255,255,0.2)]"
        >
        <CardBody>
          <Form />
        </CardBody>
      </Card>
    </div>
  );
};

export default ContactCard;
