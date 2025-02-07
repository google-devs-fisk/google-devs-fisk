'use client';

import { useRouter } from 'next/navigation';
import paths from '@/paths';

const FocusClickMeOverlay = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(paths.projects());
  };

  return (
    <div
        onClick={handleClick}
        className="group absolute w-full h-full min-h-[300px] rounded-3xl secondary-image-border flex justify-center items-center cursor-pointer overflow-hidden"
    >
        {/* Add pseudo hover effect */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Main Content */}
        <p className="z-10 font-semibold p-4 text-3xl m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">See Our Projects!</p>
    </div>
  );
};

export default FocusClickMeOverlay;