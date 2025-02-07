'use client'

import React from 'react';
import LeftHalfRectangle from './leftHalfRectangle';
import ImageComponent from './imageComponent';

interface OverflowContentProps {
  imgURL: string; // URL of the image to display
  altText?: string; // Alternative text for the image
}

const OverflowContent: React.FC<OverflowContentProps> = ({
  imgURL,
  altText = 'Overflow Image',
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center pt-15">
      {/* Background Shape */}
      <div className="w-[350px] h-[350px] flex items-center justify-center rounded-full">
        <LeftHalfRectangle className="w-full h-full" />
      </div>

      {/* Foreground Image */}
      <div className="w-[470px] h-[450px] flex items-center justify-center rounded-lg -mt-[445px]">
          <ImageComponent
            src={imgURL}
            alt={altText}
            minHeight={500}
            rounded={true}
            className="w-full h-auto"
          />
      </div>
    </div>
  );
};

export default OverflowContent;
