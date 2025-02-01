import { HeadingWithSpan, TextSection } from "@/components";
import { Section } from "@/types/common";

/*
  Renders the overview section of the project, displaying key details 
  in a structured format with alternating layouts for readability.
*/
const OverviewSection = ({ overview }: { overview: Section }) => {
  const overviews = overview.textContents;

  return (
    <section className="relative overview flex flex-col items-center pt-24">
      <HeadingWithSpan
        className="text-4xl sm:text-5xl lg:text-6xl"
        heading="Overview of the project"
      />
      <div className="pt-28">
        {overviews.map((overview, index) => (
          <TextSection
            key={overview.content}
            paragraph={overview.content}
            heading=""
            flipLayout={index % 2 === 1} // Alternates layout for visual balance
            imgURL={overview.imgUrl}
            loadOverlayContent={true}
          />
        ))}
      </div>
    </section>
  );
};

export default OverviewSection;
