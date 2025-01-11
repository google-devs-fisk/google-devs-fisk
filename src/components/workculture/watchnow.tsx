import Btn from "../shared/btn";

const Watchnow = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/images/placeholders/work-culture-placeholder2.png')",
        backgroundPosition: "center",
      }}
    >
      {/* Top right blur */}
      <div className="absolute bottom right-10 w-[400px] h-[600px] bg-gradient-to-r from-[#dc00d3] to-[#46c6fd] rounded-full filter blur-5xl opacity-70"></div>
      {/* Bottom left blur */}
      <div className="absolute inset-0 top-[250px] -left-[200px] w-[700px] h-[700px] bg-gradient-to-r from-[#dc00d3] to-[#46c6fd] rounded-full filter blur-5xl opacity-70"></div>

      {/* Main content */}
      <div className="relative">
        <div className="ml-[190px] mt-[560px]">
          <p className="text-[75px] font-bold">The Team Culture</p>
          <Btn
            text=" Watch Now"
            link="/video-link"
            extra="px-7 py-3 rounded-[50px]"
          />
          <div className="flex gap-4 font-semibold text-[23px] pt-8">
            <span className="bg-gray-300/60 rounded-md px-3 py-1">
              COLLABORATIVE LEARNING
            </span>
            <span className="bg-gray-300/60 rounded-md px-3 py-1">PASSION</span>
            <span className="bg-gray-300/60 rounded-md px-3 py-1">SARCASM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watchnow;
