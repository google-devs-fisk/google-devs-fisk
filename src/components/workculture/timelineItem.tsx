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
  <div className="relative flex gap-6 items-center mb-20 transform hover:scale-[1.02] transition-transform duration-300">
    <div className="bg-[#1d0f2d]/80 rounded-3xl flex-1 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
      {/* Message Content */}
      <p className={`${bgColor} rounded-2xl px-8 py-6 text-white font-semibold text-base sm:text-lg leading-relaxed`}>
        {message}
      </p>

      {/* Profile Details */}
      <div className="relative mx-auto w-full flex flex-col sm:flex-row justify-between items-center gap-6 mt-3">
        <div className="text-center sm:text-left">
          <p className="font-bold text-white text-2xl sm:text-3xl mb-1">{name}</p>
          <p className="text-white/60 text-lg sm:text-xl">{role}</p>
        </div>

        <ImageComponent
          src={avatarSrc}
          alt={name}
          minHeight={170}
          className="min-w-[170px] sm:h-[170px] rounded-full border-2 border-white/10 shadow-md"
        />
      </div>
    </div>
  </div>
);

export default TimelineItem;
