'use client';

import React from 'react';
import Image from 'next/image';
import Btn from './btn';
import Heading from './heading';
import KeySpan from './keySpan';
import { VideoComponentProps } from '@/types/common';

const VideoComponent: React.FC<VideoComponentProps> = ({
  videoContent,
  buttonInfo,
  spanVariant,
}) => {
  const { title, imgUrl, genres } = videoContent;

  return (
    <div className="relative w-full min-h-[350px] max-h-screen aspect-[16/9] overflow-hidden rounded-lg">
      {/* Background Image */}
      <Image
        src={imgUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
      {/* Content */}
      <div className="absolute top-[13%] left-[13%] right-[13%] bottom-[13%] flex flex-col justify-end">
        {/* Video Title */}
        <div className="mb-4">
            <Heading heading={title} />
        </div>

        {/* Watch Button */}
        <div className="mb-4">
          <Btn {...buttonInfo} />
        </div>

        {/* Genres */}
        <div className="flex-wrap gap-2 flex">
          {genres.map((genre, index) => (
            <KeySpan key={index} genre={genre} variant={spanVariant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
