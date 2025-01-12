'use client';

import React from 'react';
import { Nav, Footer } from '@/components';
import HeroSection from '@/components/workculture/workCultureHeroSection';
import MetricsSection from '@/components/workculture/workCultureMetricsSection';
import ProjectLeadsSection from '@/components/workculture/workCultureProjectLeadsSection';
import WorkCultureShowComponent from '@/components/workculture/workCultureShowComponent';
import type { WorkCulture } from '@/types/culture';

export default function WorkCulture() {
  const cultures: WorkCulture[] = [
    {
      id: "culture1",
      imageUrl: "/images/placeholders/culture-placeholder1.jpg",
      title: "Innovation & Creativity",
      description: "We foster an environment where innovative ideas flourish and creativity knows no bounds.",
      values: [
        { content: "Innovation", icon: "💡" },
        { content: "Creativity", icon: "🎨" },
        { content: "Collaboration", icon: "🤝" }
      ],
      team: "Engineering",
      date: "2024"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <HeroSection />
        <MetricsSection />
        <ProjectLeadsSection />
        <div className="w-[80vw] mx-auto py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Culture</h2>
          <div className="flex flex-col gap-[10vh]">
            {cultures.map((culture) => (
              <WorkCultureShowComponent key={culture.id} culture={culture} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}