import React from 'react';
import { Nav, WatchNow, TeamStats, Hero } from '@/components'
import { CulturePageResponse } from '@/types/culture';
import { getCachedWorkCultureData } from '@/actions';

export default async function WorkCulture() {
  // Fetch cached codelabs data (server-side logic)
  const culturePageResponse: CulturePageResponse = await getCachedWorkCultureData();
  return (
    <div className="min-h-screen flex flex-col relative">
      <Nav />
      <main className="absolute w-full overflow-hidden">
        <Hero />
        <WatchNow culturePageVideo={culturePageResponse.culturePageVideo}/>
        <TeamStats testimonials={culturePageResponse.testimonials} metrics={culturePageResponse.metrics}/>
      </main>
    </div>
  );
}