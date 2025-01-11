import { Code2, Users, Heart, Circle, Hash, Blocks } from "lucide-react";

const FloatingIcons = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-[200px] overflow-hidden">
        <div className="absolute left-[10%] top-[20%] animate-float-slow">
          <Circle className="w-6 h-6 text-blue-300/20" />
        </div>
        <div className="absolute left-[30%] top-[40%] animate-float-slower">
          <Hash className="w-8 h-8 text-purple-300/20" />
        </div>
        <div className="absolute left-[50%] top-[30%] animate-float-slow">
          <Blocks className="w-7 h-7 text-pink-300/20" />
        </div>
        <div className="absolute left-[70%] top-[50%] animate-float-slower">
          <Circle className="w-5 h-5 text-blue-300/20" />
        </div>
        <div className="absolute left-[90%] top-[20%] animate-float-slow">
          <Hash className="w-6 h-6 text-purple-300/20" />
        </div>

        {/* Subtle gradient lines */}
        <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-300/10 to-transparent" />
        <div className="absolute top-[70%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-300/10 to-transparent" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[20%] animate-bounce delay-100">
          <Code2 className="w-8 h-8 text-blue-300/20" />
        </div>
        <div className="absolute top-40 right-[30%] animate-bounce delay-300">
          <Users className="w-8 h-8 text-purple-300/20" />
        </div>
        <div className="absolute bottom-40 left-[30%] animate-bounce delay-500">
          <Heart className="w-8 h-8 text-pink-300/20" />
        </div>
      </div>
    </>
  );
};

export default FloatingIcons;
