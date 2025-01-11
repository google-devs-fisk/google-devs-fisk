import { Footer, Nav } from '@/components'
import Hero from '@/components/workculture/hero';
import Teamstats from '@/components/workculture/teamstats';
import Watchnow from '@/components/workculture/watchnow';
import React from 'react'

function page() {
  return (
    <div className="h-screen flex flex-col">
          <Hero />
          <Watchnow />
          <Teamstats />
      <Footer />
    </div>
  );
}

export default page