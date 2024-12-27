'use client'

import React from "react";
import ImageComponent from "../shared/imageComponent";
import Heading from "../shared/heading";
import KeySpan from "../shared/keySpan";
import ImageClickMeOverlay from "./imageClickMeOverlay";
import { Codelab, KeyLearning } from "@/types/codelabs";

const getGenre = (learning: KeyLearning): string => {
  return learning.icon ? learning.content + " " + learning.icon: learning.content;
}

const CodelabsShowComponent: React.FC<{ codelab: Codelab }> = ({ codelab }) => {
  const { id, screenshotUrl, gcsUrl, title, keyLearnings, releasedDate, author } = codelab;
  return (
    <div className="overflow-hidden p-6 secondary-card-one rounded-3xl flex flex-col justify-center items-center min-h-[45vh] min-w-full xl:flex-row xl:min-h-[75vh]" id={id}>
      {/* Image Section */}
      <div className="relative flex flex-col justify-center items-center overflow-hidden xl:w-8/12">
        <ImageComponent alt={title} src={screenshotUrl} rounded={true} minHeight={300} className="absolute w-[50vw] h-[35vw]" />
        {/* <div className="absolute w-[50vw] h-[35vw] min-h-[300px] max-w-[100%] rounded-3xl secondary-image-border flex justify-center items-center"></div>  */}
        <ImageClickMeOverlay codelabId={id} link={gcsUrl} />
      </div>
      {/* Content Section */}
      <div className="p-4 flex flex-col w-[75%] justify-center items-center xl:w-1/2">
        <p className="font-semibold mb-10 lg:ml-auto">
            Last Modified: {releasedDate}
        </p>
        <div>
          <div className="mb-5">
            <Heading heading={title} />
          </div>
          <p className="font-semibold mb-10">
            By {author || "Unknown Author"}
          </p>
        </div>
        {/* Genres */}
        <div className="flex-wrap gap-2 flex">
          {keyLearnings.map((learning, index) => (
            <KeySpan key={index} genre={getGenre(learning)} variant={index % 2 + 1} />
          ))}
        </div>
    </div>
    </div>
  );
};

export default CodelabsShowComponent;