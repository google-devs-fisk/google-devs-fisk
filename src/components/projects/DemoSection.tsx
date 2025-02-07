import { WatchNow } from "@/components";
import { VideoContent } from "@/types/common";

/*
  Renders the demo section containing a video player. 
  Displays a demo video related to the project.
*/
const DemoSection = ({ demoVideo }: { demoVideo: VideoContent }) => {
  return (
    <section className="relative overflow-hidden mb-12">
      <WatchNow culturePageVideo={demoVideo} />
    </section>
  );
};

export default DemoSection;
