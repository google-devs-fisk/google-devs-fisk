import React from 'react';
import { Footer, Nav, WatchNow, TeamStats, Hero } from '@/components'
import { CulturePageResponse } from '@/types/culture';
import FirebaseFirestore from "@google-cloud/firestore";
import { getCachedWorkCultureData } from '@/actions/workculture/getCachedWorkCultureData';

// These are test values. This content is dynamic and should be replaced with fetched values from WorkCulturePageResponse
// const testCulturePageResponse: CulturePageResponse =
//       await getCachedWorkCultureData();
const testCulturePageResponse: CulturePageResponse = {
  
    culturePageVideo: {
      title: 'The Team Culture',
      imgUrl: 'https://storage.googleapis.com/gdg-fisk-assets/images/work-culture-placeholder2.png',
      videoUrl: '/',
      genres: ['COLLABORATIVE LEARNING', 'PASSION', 'SARCASM'],
    },
    testimonials: [
      {
        id: "person1-id",      // Every optional field given
        authorImgUrl: "/images/placeholders/projects-placeholder8.png",
        author: "Person 1",
        content: "Innovative Community! Everyone works extremely passionately",
        classification: "Junior",
        teamDomain: "Core Design Team"
      },
      {
        id: "person2-id",     // No author name and image given
        content: "Coding together is the best part.",
        classification: "Senior",
        teamDomain: "ML Team"
      },
      {
        id: "person3-id",
        author: "Person 3",       // No image given
        content: "Built for growth. Happy to be part of it.",
        classification: "Senior",
        teamDomain: "Cyber Team"
        },
    ],
    metrics: [
      {
        metricHeading: "ONGOING PROJECTS", // No goals
        stat: { value: 3, isPercent: false },
        metricSubHeading: "COMPLETED PROJECTS",
        subHeadingStat: { value: 1, isPercent: false },
      },
      {
        metricHeading: "NEW LEADS", // No metric subheading and subheading stats
        stat: { value: 6, isPercent: false },
        goals: [
          { heading: "Daily Growth", stat: { value: 55, isPercent: true } }, // First goal should be in the circular chart
          { heading: "This Week", stat: { value: 15, isPercent: false } },
        ],
      },
      {
        metricHeading: "GITHUB COMMITS", // No goals
        stat: { value: 178, isPercent: false },
        metricSubHeading: "PER WEEK",
        subHeadingStat: { value: 13, isPercent: false },
      },
    ],
    lastUpdated: FirebaseFirestore.Timestamp.now()
}
function page() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Nav />
      <main className="absolute w-full overflow-hidden">
        <Hero />
        <WatchNow culturePageVideo={testCulturePageResponse.culturePageVideo}/>
        <TeamStats testimonials={testCulturePageResponse.testimonials} metrics={testCulturePageResponse.metrics}/>
        <Footer />
      </main>
    </div>
  );
}

export default page