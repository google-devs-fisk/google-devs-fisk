'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Metric {
  label: string;
  value: string;
}

const metrics: Metric[] = [
  { label: 'Git Commits', value: '2.5K+' },
  { label: 'Ongoing Projects', value: '15' },
  { label: 'Project Leads', value: '8' },
];

const MetricsSection: React.FC = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">{metric.value}</div>
              <div className="text-gray-600">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetricsSection; 