'use client';

import React from "react";
import IframeComponent from "./iframeComponent";
import { Codelab } from "@/types/codelabs"
import { BtnProps } from "@/types/common";
import {Heading, Btn} from "@/components";

const CodelabInfoCardComponent: React.FC<{ codelab: Codelab }> = ({ codelab }) => {
  const { id, releasedDate, title, author, gcsUrl } = codelab;
  const btnInfo: BtnProps = {
    text: "Read the entire codelab",
    link: codelab.gcsUrl,
    variant: "secondary-btn-one",
    newTab: true   
  };
  return (
    <div className="overflow-hidden p-6 secondary-card-one rounded-3xl flex flex-col justify-center items-center min-w-full">
      <p className="font-semibold mb-10 ml-auto">
        Last Modified: {releasedDate}
      </p>
      <div>
        <div className="mb-5 w-full mx-auto">
          <Heading heading={title} />
        </div>
        <p className="font-semibold mb-10">
          By {author || "Unknown Author"}
        </p>
        <div>
          <div className="block sm:hidden">
            <Btn {...btnInfo} />
          </div>
          <div className="hidden sm:block mx-auto">
            <IframeComponent src={gcsUrl} id={id} width="w-[75vw]" height="h-[50vw] max-h-[70vh]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodelabInfoCardComponent;
