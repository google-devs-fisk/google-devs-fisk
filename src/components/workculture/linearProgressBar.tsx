// Progress bar component
type ProgressProps = {
  value: number;
  max: number;
  color?: string;
};

const ProgressBar = ({ value, max, color = "bg-pink-500" }: ProgressProps) => (
  <div className="w-full bg-gray-600/40 h-2 rounded-full mt-2">
    <div
      className={`${color} h-full rounded-full`}
      style={{ width: `${(value / max) * 100}%` }}
    ></div>
  </div>
);
export default ProgressBar;
