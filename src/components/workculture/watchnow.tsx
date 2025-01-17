import { VideoComponent } from "@/components"
import { BtnProps, VideoContent } from "@/types/common";

interface WatchNowComponentProps {
  culturePageVideo: VideoContent
}
const Watchnow = ({ culturePageVideo }: WatchNowComponentProps) => {
  const btnInfo: BtnProps = {
    text: 'Watch Now',
    link: culturePageVideo.videoUrl,
  };
  return (
    <div className="relative">
      {/* Top right blur */}
      <div className="absolute bottom right-10 w-[400px] h-[600px] bg-gradient-to-r from-[#dc00d3] to-[#46c6fd] rounded-full filter blur-5xl opacity-70"></div>
      {/* Bottom left blur */}
      <div className="absolute inset-0 top-[250px] -left-[200px] w-[700px] h-[700px] bg-gradient-to-r from-[#dc00d3] to-[#46c6fd] rounded-full filter blur-5xl opacity-70"></div>
      <VideoComponent videoContent={culturePageVideo} buttonInfo={btnInfo} spanVariant={1} />
    </div>
  );
};

export default Watchnow;
