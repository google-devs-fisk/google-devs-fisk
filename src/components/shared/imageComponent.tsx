'use client'

import React from 'react';
import Image from 'next/image';
import { ImageComponentProps } from '@/types/common';

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt = 'Image', // Default alt text
  width = 500, // Default width
  height = 500, // Default height
  className = '', // Optional additional classes
}) => {
  return (
    <div className={`flex items-center justify-center rounded-lg ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto rounded-lg"
      />
    </div>
  );
};

export default ImageComponent;
