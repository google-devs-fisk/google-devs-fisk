import React from "react";

interface IframeComponentProps {
  id: string;
  src: string;
  width?: string; // Tailwind class for width (e.g., 'w-full', 'w-[80vw]')
  height?: string; // Tailwind class for height (e.g., 'h-[80vh]', 'h-full')
}

const IframeComponent = ({
  id,
  src,
  width = "w-full",
  height = "h-[500px]",
}: IframeComponentProps) => {
  return (
    <div className={`relative ${width} ${height}`}>
      <iframe
        src={src}
        id={id}
        className="absolute inset-0 w-full h-full rounded-3xl max-h-[300px] sm:max-h-[500px] lg:max-h-[70vh]"
        style={{ border: "none" }}
        loading="lazy"
        sandbox="allow-scripts"
        title="Embedded Content"
      />
      <div className={`absolute ${width} ${height} w-full h-full max-h-[300px]sm:max-h-[500px] lg:max-h-[70vh] rounded-3xl secondary-image-border flex justify-center items-center overflow-hidden`}></div>
    </div>
  );
};

export default IframeComponent;
