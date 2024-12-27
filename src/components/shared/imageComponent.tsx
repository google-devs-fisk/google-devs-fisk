'use client';

import React from 'react';
import Image from 'next/image';
import { ImageComponentProps } from '@/types/common';

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt = 'Image',
  minHeight = 500, // Default minimum height
  maxWidth, // Optional maximum width
  rounded = false, // Default to no rounded borders
  opacity = 1, // Default opacity is fully visible
  className = '', // Optional additional classes
}) => {
  return (
    <div
      className={`relative overflow-hidden ${rounded ? 'rounded-3xl' : ''} ${className}`}
      style={{
        minHeight: `${minHeight}px`,
        maxWidth: maxWidth ? `${maxWidth}px` : '100%',
      }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
        style={{ opacity }}
      />
    </div>
  );
};

export default ImageComponent;
