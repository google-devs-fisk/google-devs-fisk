'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectLead {
  name: string;
  role: string;
  image: string;
  project: string;
}

const projectLeads: ProjectLead[] = [
  {
    name: 'Sarah Johnson',
    role: 'Frontend Lead',
    image: '/images/placeholders/lead2.jpeg',
    project: 'UI/UX Modernization'
  },
  {
    name: 'Michael Chen',
    role: 'Backend Lead',
    image: '/images/placeholders/lead1.jpeg',
    project: 'API Architecture'
  },
  {
    name: 'Emma Williams',
    role: 'DevOps Lead',
    image: '/images/placeholders/lead3.jpeg',
    project: 'Cloud Infrastructure'
  },
];

const ProjectLeadsSection: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-600 text-center mb-12">Project Leads</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectLeads.map((lead, index) => (
            <motion.div
              key={lead.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={lead.image}
                  alt={lead.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-purple-400 font-medium">{lead.name}</h3>
              <p className="text-gray-600 mb-2">{lead.role}</p>
              <span className="text-purple-400 font-medium">{lead.project}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectLeadsSection; 