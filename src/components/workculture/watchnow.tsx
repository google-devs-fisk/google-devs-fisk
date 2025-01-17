import Btn from "../shared/btn";

const Watchnow = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage:
          "url('/images/placeholders/work-culture-placeholder2.png')",
        backgroundPosition: "center",
      }}
    >
      {/* Top right blur - Adjusted for responsive design */}
      <div className="absolute right-0 top-0 w-[200px] h-[300px] sm:w-[300px] sm:h-[400px] lg:w-[400px] lg:h-[600px] bg-gradient-to-r from-[#dc00d3] to-[#46c6fd] rounded-full filter blur-5xl opacity-70"></div>

      {/* Bottom left blur - Adjusted for responsive design */}
      <div className="absolute -left-[100px] top-[150px] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] bg-gradient-to-r from-[#dc00d3] to-[#46c6fd] rounded-full filter blur-5xl opacity-70"></div>

      {/* Main content - Positioned at bottom */}
      <div className="relative min-h-screen flex items-end pb-16 sm:pb-20 lg:pb-24">
        <div className="w-full transform lg:ml-[190px] transition-all duration-300 ease-in-out">
          {/* Heading with responsive size */}
          <h1 className="text-[40px] sm:text-[55px] md:text-[65px] lg:text-[75px] font-bold leading-tight mb-6 transition-all duration-300">
            The Team Culture
          </h1>

          {/* Button */}
          <div className="mb-8">
            <Btn
              text="Watch Now"
              link="/video-link"
              extra="px-5 py-2 sm:px-6 sm:py-2.5 lg:px-7 lg:py-3 rounded-[50px] text-base sm:text-lg lg:text-xl"
            />
          </div>

          {/* Tags section */}
          <div className="flex flex-wrap gap-3 sm:gap-4 font-semibold text-base sm:text-lg lg:text-[23px] transition-all duration-300">
            {["COLLABORATIVE LEARNING", "PASSION", "SARCASM"].map(
              (tag, index) => (
                <span
                  key={index}
                  className="bg-gray-300/60 rounded-md px-2 py-1 sm:px-3 sm:py-1 
                          whitespace-nowrap backdrop-blur-sm
                          transform hover:scale-105 transition-all duration-300
                          hover:bg-gray-300/80"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watchnow;
