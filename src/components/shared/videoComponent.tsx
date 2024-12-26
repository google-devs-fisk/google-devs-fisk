'use client';

import React from 'react';
import Image from 'next/image';

interface VideoContentProps {
  title: string; // Video title
  genres: string[]; // Array of video genres
  videoURL: string; // URL of the video or poster image
}

const VideoContent: React.FC<VideoContentProps> = ({ title, genres, videoURL }) => {
  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
      {/* Background Image */}
      <Image
        src={videoURL}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        {/* Video Title */}
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">{title}</h1>

        {/* Watch Button */}
        <button className="mb-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">
          Watch Now
        </button>

        {/* Genres */}
        <div className="flex flex-wrap gap-2">
          {genres.map((genre, index) => (
            <span
              key={index}
              className="px-4 py-1 bg-white text-black text-sm rounded-full"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoContent;
