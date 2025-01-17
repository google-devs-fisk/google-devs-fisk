import { Code2, Users, Heart, Circle, Blocks } from "lucide-react";

const iconData = [
  { Icon: Circle, size: 6, color: "text-blue-300/60", left: "10%", top: "20%", animation: "animate-float-slow" },
  { Icon: Blocks, size: 7, color: "text-pink-300/60", left: "50%", top: "30%", animation: "animate-float-slow" },
  { Icon: Circle, size: 5, color: "text-blue-300/60", left: "70%", top: "50%", animation: "animate-float-slower" },
  { Icon: Circle, size: 6, color: "text-purple-300/60", left: "90%", top: "20%", animation: "animate-float-slow" },
  { Icon: Code2, size: 8, color: "text-blue-300/60", left: "20%", top: "10%", animation: "animate-float-slow" },
  { Icon: Users, size: 7, color: "text-purple-300/60", left: "40%", top: "70%", animation: "animate-float-slower" },
  { Icon: Heart, size: 8, color: "text-pink-300/60", left: "60%", top: "80%", animation: "animate-float-slow" },
  { Icon: Blocks, size: 6, color: "text-purple-300/60", left: "50%", top: "90%", animation: "animate-float-slow" },
  { Icon: Code2, size: 7, color: "text-pink-300/60", left: "15%", top: "35%", animation: "animate-float-slow" },
  { Icon: Users, size: 6, color: "text-blue-300/60", left: "35%", top: "25%", animation: "animate-float-slower" },
  { Icon: Heart, size: 9, color: "text-purple-300/60", left: "55%", top: "15%", animation: "animate-float-slow" },
  { Icon: Circle, size: 7, color: "text-blue-300/60", left: "75%", top: "85%", animation: "animate-float-slower" },
  { Icon: Blocks, size: 8, color: "text-pink-300/60", left: "85%", top: "60%", animation: "animate-float-slow" },
  { Icon: Code2, size: 5, color: "text-purple-300/60", left: "30%", top: "90%", animation: "animate-float-slower" },
  { Icon: Users, size: 8, color: "text-blue-300/60", left: "65%", top: "40%", animation: "animate-float-slow" },
  { Icon: Circle, size: 6, color: "text-purple-300/60", left: "5%", top: "75%", animation: "animate-float-slow" },
  { Icon: Heart, size: 7, color: "text-pink-300/60", left: "15%", top: "85%", animation: "animate-float-slower" },
  { Icon: Users, size: 6, color: "text-blue-300/60", left: "25%", top: "15%", animation: "animate-float-slow" },
  { Icon: Blocks, size: 7, color: "text-purple-300/60", left: "35%", top: "50%", animation: "animate-float-slower" },
  { Icon: Code2, size: 9, color: "text-pink-300/60", left: "45%", top: "65%", animation: "animate-float-slow" },
  { Icon: Heart, size: 5, color: "text-blue-300/60", left: "55%", top: "5%", animation: "animate-float-slower" },
  { Icon: Circle, size: 8, color: "text-purple-300/60", left: "65%", top: "90%", animation: "animate-float-slow" },
  { Icon: Users, size: 6, color: "text-blue-300/60", left: "75%", top: "10%", animation: "animate-float-slower" },
  { Icon: Blocks, size: 7, color: "text-pink-300/60", left: "85%", top: "75%", animation: "animate-float-slow" },
  { Icon: Code2, size: 6, color: "text-purple-300/60", left: "95%", top: "50%", animation: "animate-float-slower" },
];

const FloatingIcons = () => {
  return (
    <>
      {/* Floating Icons */}
      <div className="absolute top-0 left-0 w-full h-full">
        {iconData.map(({ Icon, size, color, left, top, animation }, index) => (
          <div key={index} className={`absolute ${animation} z-5`} style={{ left, top }}>
            <Icon className={`w-${size} h-${size} ${color}`} />
          </div>
        ))}
      </div>
    </>
  );
};

export default FloatingIcons;
