import React from 'react';
import { Footer, Nav, WatchNow, TeamStats, Hero } from '@/components'
import { CulturePageResponse } from '@/types/culture';
import FirebaseFirestore from "@google-cloud/firestore";

// These are test values. This content is dynamic and should be replaced with fetched values from WorkCulturePageResponse
const testCulturePageResponse: CulturePageResponse = {
    culturePageVideo: {
      title: 'The Team Culture',
      imgUrl: '/images/placeholders/work-culture-placeholder2.png',
      videoUrl: '/',
      genres: ['COLLABORATIVE LEARNING', 'PASSION', 'SARCASM'],
    },
    testimonials: [],
    metrics: [],
    lastUpdated: FirebaseFirestore.Timestamp.now()
}
function page() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Nav />
      <main className="absolute w-full overflow-hidden">
        <Hero />
        <WatchNow culturePageVideo={testCulturePageResponse.culturePageVideo}/>
        {/* <TeamStats /> */}
        <Footer />
      </main>
    </div>
  );
}

export default page