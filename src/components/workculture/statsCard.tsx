import CircularProgress from "../shared/circularProgressBar";
import ProgressBar from "./linearProgressBar";

type StatProps = {
  title: string;
  value: string;
  subValue?: string;
  subLabel: string;
  progress: number;
  isCircular?: boolean;
};

// Stats card component
const StatCard = ({
  title,
  value,
  subValue,
  subLabel,
  progress,
  isCircular,
}: StatProps) => (
  <div className="bg-gray-800/60 backdrop-blur-sm flex flex-col p-5 rounded-lg text-white min-w-[200px] sm:min-w-[220px]">
    <p className="text-sm text-gray-300">{title}</p>
    <p className="text-4xl font-bold my-2">{value}</p>
    {isCircular ? (
      <CircularProgress percentage={progress} />
    ) : (
      <ProgressBar value={progress} max={100} />
    )}
    {subValue && (
      <div className="mt-2 text-sm">
        <span className="font-semibold">{subValue}</span> {subLabel}
      </div>
    )}
  </div>
);

export default StatCard;
