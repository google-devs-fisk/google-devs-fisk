import { Nav, Footer, TextSection, VideoComponent, ImageComponent} from "@/components";
import { BtnProps } from "@/types/common";
const buttonProps: BtnProps = {
  text: "Learn More",
  link: "/learn-more"
};
const para = "As CS students, we often come up with amazing ideas for our seminar projects. However, why is it that even with the most outrageous ideas and endless initial enthusiasm, we still end up delivering a minimal outcome?"
const videoData = {
  title: 'The Team Culture',
  imgUrl: '/images/placeholders/work-culture-placeholder2.png', // Replace with your image URL
  genres: ['Collaborative Learning', 'Passion', 'Sarcasm'],
};

const buttonData = {
  text: 'Watch Now',
  link: '/',
  variant: 'primary-btn', // Optional, based on your BtnProps definition
};
export default function Home() {
  return (
  <div className="h-screen flex flex-col">
    <Nav />
    <div className="flex-1 overflow-y-auto scrollable-content mt-10">
      <div className="mb-10"><VideoComponent videoContent={videoData} buttonInfo={buttonData} /></div>
      <div className="mb-10"><TextSection btnLink={buttonProps} paragraph={para} heading="Empowering Next-Gen Coders to collaborate on real world projects" flipLayout={true} imgURL="/images/placeholders/home-placeholder8.png" /></div>
      <div className="mb-10"><TextSection paragraph={para} heading="This can be used as a paragraph with no image" flipLayout={true} /></div>
      <div className="mb-10"><TextSection heading="This can be used as an image with no paragraph" flipLayout={false} imgURL="/images/placeholders/home-placeholder9.png"/></div>
      <div className="mb-10"><TextSection heading="This can be used as a heading" /></div>
      <div className="mb-10"><ImageComponent src="/images/placeholders/home-placeholder7.jpg" /></div>
      <Footer />
    </div>
  </div>
  );
}