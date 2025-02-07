"use server"

import { Nav, Footer, TextSection, Landing, Focus, ContactNewsletter } from "@/components";
import { BtnProps } from "@/types/common";
import paths from "@/paths";
import TestimonialHero from "@/components/home/testimonialHero";
import { getCachedHomePageData } from "@/actions";
import { HomePageResponse } from "@/types/home";

// The is mission info
const missionStatement = "Empowering Next-Gen Coders to collaborate on real world projects";
const missionPara = "As CS students, we often come up with amazing ideas for our seminar projects. However, why is it that even with the most outrageous ideas and endless initial enthusiasm, we still end up delivering a minimal outcome?";
const missionBtnInfo: BtnProps = {
  text: "Read More",
  link: "https://docs.google.com/document/d/1x2tBB9xCMC2mENzjn5tB-RmGl0WYvLXrvyH9qrENeYs/edit?usp=sharing",
  newTab: true
};

// The is team's values
const valueStatement = "Because We Value Growth";
const valuePara = "A better developer is able to apply the documentation that comes with new software. At GDG, we believe in writing down everything we do, using codelabs and Google docs. This helps you learn and write good code.";
const valueBtnInfo: BtnProps = {
  text: "Learn More",
  link: paths.workCulture()
};

export default async function Home() {
  const homePageData: HomePageResponse = await getCachedHomePageData();
  return (
    <div className="min-h-screen flex flex-col relative">
      <Nav />
        <main className="absolute w-full overflow-hidden">
          <div className="mb-10">
            <Landing introUrl={homePageData.homeVideoUrl} />
          </div>
          <div className="my-20"><TextSection btnLink={missionBtnInfo} paragraph={missionPara} heading={missionStatement} flipLayout={true} imgURL="https://storage.googleapis.com/gdg-fisk-assets/images/empowering-next-gen.png" /></div>
          <Focus />
          <div className="relative">
            <div className="my-20"><TextSection btnLink={valueBtnInfo} paragraph={valuePara} heading={valueStatement} flipLayout={false} imgURL="https://storage.googleapis.com/gdg-fisk-assets/images/homepage-culture.png" /></div>
          </div>
          <div className="my-20">
            <TestimonialHero testimonials={homePageData.testimonials} />
          </div>
          <div className="my-20">
            <ContactNewsletter/>
          </div>
          <Footer />
        </main>
    </div>
  );
}