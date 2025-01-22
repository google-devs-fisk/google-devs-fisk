import { Suspense } from "react";
import { Nav, Footer, TextSection, ImageComponent, Landing, Focus, ContactNewsletter, LoadingSkeleton } from "@/components";
import { BtnProps } from "@/types/common";
import paths from "@/paths";

// The mission info
const missionStatement = "Empowering Next-Gen Coders to collaborate on real world projects";
const missionPara = "As CS students, we often come up with amazing ideas for our seminar projects. However, why is it that even with the most outrageous ideas and endless initial enthusiasm, we still end up delivering a minimal outcome?";
const missionBtnInfo: BtnProps = {
  text: "Read More",
  link: "https://docs.google.com/document/d/1x2tBB9xCMC2mENzjn5tB-RmGl0WYvLXrvyH9qrENeYs/edit?usp=sharing",
  newTab: true
};

// The team's values
const valueStatement = "Because We Value Growth";
const valuePara = "A better developer is able to apply the documentation that comes with new software. At GDG, we believe in writing down everything we do, using codelabs and Google docs. This helps you learn and write good code.";
const valueBtnInfo: BtnProps = {
  text: "Learn More",
  link: paths.workCulture()
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Nav />
        <main className="absolute w-full overflow-hidden">
          <Suspense fallback={<LoadingSkeleton />}>
            <div className="mb-10">
              <Landing/>
            </div>
          </Suspense>
          <div className="my-20"><TextSection btnLink={missionBtnInfo} paragraph={missionPara} heading={missionStatement} flipLayout={true} imgURL="/images/empowering-next-gen.png" /></div>
          {/* <div className="mb-10"><Projects/></div> */}
          <div className="my-20"><Focus/></div>
          <div className="my-20"><TextSection btnLink={valueBtnInfo} paragraph={valuePara} heading={valueStatement} flipLayout={false} imgURL="/images/placeholders/home-placeholder9.png" loadOverlayContent={true} /></div>
          {/* <div className="my-20"><TextSection paragraph={para} heading="This can be used as a paragraph with no image" flipLayout={true} /></div> */}
          {/* <div className="my-20"><TextSection heading="This can be used as an image with no paragraph" flipLayout={false} imgURL="/images/placeholders/home-placeholder9.png"/></div>
          <div className="my-20"><TextSection heading="This can be used as a heading" /></div> */}
          <div className="my-20">
            <ImageComponent src="/images/placeholders/home-placeholder7.jpg" minHeight={600} opacity={0.6} />
            </div>
          <ContactNewsletter/>
          <Footer />
        </main>
    </div>
  );
}