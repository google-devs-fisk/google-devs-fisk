import { HeadingWithSpan } from "@/components";

/*
  Renders the problem statement section, highlighting the key challenge 
  the project aims to solve. The section includes a centered heading 
  and a blurred gradient background for visual emphasis.
*/
const ProblemStatementSection = ({
  problemStatement,
}: {
  problemStatement: string;
}) => (
  <section className="relative h-screen">
    <div className="px-4 sm:px-4 md:px-8 lg:px-44 w-full h-full">
      {/* Centered heading displaying the problem statement */}
      <HeadingWithSpan
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-8 lg:px-32"
        heading={`Problem Statement: ${problemStatement}`}
      />
      {/* Decorative blurred gradient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#dc00d3] to-[#46c6fd] rounded-full filter blur-5xl opacity-70"></div>
    </div>
  </section>
);

export default ProblemStatementSection;
