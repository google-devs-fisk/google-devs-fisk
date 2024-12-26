import { Nav, Footer, TextSection} from "@/components";
import { BtnProps } from "@/types/common";
const buttonProps: BtnProps = {
  text: "Learn More",
  link: "/learn-more"
};
const para = "As CS students, we often come up with amazing ideas for our seminar projects. However, why is it that even with the most outrageous ideas and endless initial enthusiasm, we still end up delivering a minimal outcome?"
export default function Home() {
  return (
  <div className="h-screen flex flex-col">
    <Nav />
    <div className="flex-1 overflow-y-auto scrollable-content mt-8">
      <div><TextSection btnLink={buttonProps} paragraph={para} heading="Empowering Next-Gen Coders to collaborate on real world projects" flipLayout={true} imgURL="/images/placeholders/home-placeholder8.png" /></div>
      <div><TextSection paragraph={para} heading="This can be used as a paragraph with no image" flipLayout={true} /></div>
      <div><TextSection heading="This can be used as an image with no paragraph" flipLayout={false} imgURL="/images/placeholders/home-placeholder9.png"/></div>
      <div><TextSection heading="This can be used as a heading" /></div>
      <Footer />
    </div>
  </div>
  );
}
