import { ImageComponent } from "@/components";

type TimelineProps = {
  avatarSrc: string;
  message: string;
  name: string;
  role: string;
  bgColor: string;
};

// Timeline item component
const TimelineItem = ({
  avatarSrc,
  message,
  name,
  role,
  bgColor = "bg-blue-400",
}: TimelineProps) => (
  <div className="relative flex gap-4 items-center mb-20 transform hover:scale-[1.02] transition-transform duration-300">
    <div className="bg-[#1d0f2d]/80 rounded-3xl flex-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <p
        className={`${bgColor} rounded-3xl p-7 text-white font-bold text-sm sm:text-base`}
      >
        {message}
      </p>
      <div className="relative mx-auto w-[100%] sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3 -mt-8">
        <div className="mt-16">
          <p className="font-semibold text-white text-xl sm:text-[25px] text-center sm:text-left mb-2">
            {name}
          </p>
          <p className="text-white/80 text-base sm:text-[18px] text-center sm:text-left">
            {role}
          </p>
        </div>
        <ImageComponent
          src={avatarSrc}
          alt={name}
          minHeight={170}
          className="min-w-[170px] sm:h-[170px]"
        />
      </div>
    </div>
  </div>
);

export default TimelineItem;
