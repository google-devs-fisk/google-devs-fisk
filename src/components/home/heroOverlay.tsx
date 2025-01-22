import React from 'react';

const HeroOverlay: React.FC = () => {
  return (
    <div className="absolute w-[100%] h-[100%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-[rgba(217,217,217,0.1)]
                    shadow-[inset_75.8333px_-75.8333px_75.8333px_rgba(165,165,165,0.1),_inset_-75.8333px_75.8333px_75.8333px_rgba(255,255,255,0.1)]
                    backdrop-blur-[75.8333px] z-[-50]">
    </div>
  );
};

export default HeroOverlay;