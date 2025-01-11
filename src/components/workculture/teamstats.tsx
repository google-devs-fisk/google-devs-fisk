// type Props = {
//   ongoingProjects: string;
//   completedProjects: number;
//   newLeads: number;
//   dailyGoal: number;
//   thisWeek: number;
//   githubCommits: number;
//   commitsPerWeek: number;
// };

import Rod from "../shared/rod";

const Teamstats = ({}) => {
  return (
    <div className="flex gap-12 mb-[100px]">
      <div className="mt-[150px]">
        <div className="ml-[60px] mb-[120px] flex gap-3 relative">
          <div className=" bg-gray-300/40 flex flex-col max-w-[180px] rounded-md px-5 py-3 text-[13px]">
            <p>ONGOING PROJECTS</p>
            <p className="font-bold text-[40px]">03</p>
          </div>
          <div className="bg-gray-300/40 flex flex-col max-w-[180px] rounded-md px-5 py-3 text-[13px]">
            <p>ONGOING PROJECTS</p>
            <p className="font-bold text-[40px]">06</p>
          </div>
          <div className="bg-gray-300/40 flex flex-col max-w-[180px] rounded-md px-5 py-3 text-[13px]">
            <p>ONGOING PROJECTS</p>
            <p className="font-bold text-[40px]">178</p>
          </div>
        </div>
        <div className="relative ml-[100px] w-[480px] h-[470px] rounded-tl-[60%] bg-gradient-to-b from-[#5e6cc3] via-purple-500 to-[#dc00d3] overflow-visible">
          {/* Background Content */}
          <img
            src="/images/placeholders/work-culture-placholder1.png"
            className="absolute -mt-[130px] h-[600px] w-[500px] z-10"
            alt="Overlapping image"
          />
        </div>
      </div>
      <div className="mt-[130px]">
          <Rod />
      </div>
    </div>
  );
};

export default Teamstats;

{
  /* "url('/images/placeholders/work-culture-placholder1.png')" */
}
