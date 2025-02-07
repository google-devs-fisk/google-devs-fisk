import { HeadingWithSpan, TextSection } from "@/components";
import { Section } from "@/types/common";

/*
  Renders the Features section, displaying a list of implemented features 
  with alternating layouts. Each feature includes descriptive text and an image.
*/
const FeaturesSection = ({ features }: { features: Section }) => {
  const featureList = features.textContents;

  return (
    <section className="relative flex flex-col items-center">
      <HeadingWithSpan
        className="text-4xl sm:text-5xl lg:text-6xl"
        heading="Implemented Features"
      />
      <div className="my-10">
        {featureList.map((feature, index) => (
          <TextSection
            key={feature.content}
            heading={feature.content}
            paragraph=""
            flipLayout={index % 2 === 1} // Alternates layout for visual variety
            imgURL={feature.imgUrl}
            loadOverlayContent={true}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
