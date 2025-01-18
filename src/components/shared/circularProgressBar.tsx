// Circular progress component
const CircularProgress = ({ percentage }: { percentage: number }) => (
  <div className="relative w-28 h-28 -mt-14">
    <svg className="w-full h-full" viewBox="0 0 100 100">
      <circle
        className="text-gray-600/40 stroke-current"
        strokeWidth="10"
        fill="transparent"
        r="40"
        cx="50"
        cy="50"
      />
      <circle
        className="text-pink-500 stroke-current"
        strokeWidth="10"
        strokeLinecap="round"
        fill="transparent"
        r="40"
        cx="50"
        cy="50"
        strokeDasharray={`${percentage * 2.51}, 251`}
        transform="rotate(-90 50 50)"
      />
    </svg>
    <span className="absolute inset-0 flex items-center justify-center text-sm font-medium">
      {percentage}%
    </span>
  </div>
);

export default CircularProgress;