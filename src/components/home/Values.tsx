"use client"

import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';

const Values = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className='min-h-screen flex flex-col justify-center items-center py-20 px-4'>
      <motion.div 
        className='flex flex-row items-center max-w-7xl w-full gap-8'
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className='flex flex-col flex-1 justify-center'>
          <h1 className='text-7xl font-bold'>
            <span className='text-[#46c6fd]'>Because</span>{' '}
            <span className='text-[#8B7FD3]'>We Value</span>
          </h1>

          <p className='text-2xl mt-10 text-white'>
            A better Developer is able to apply the documentation that comes with new software.
            At GDG, we believe in writing down everything we do, using codelabs and google docs. 
            This helps you learn and write code.
          </p>

          <button className="bg-gradient-to-r from-[#46c6fd] to-[#dc00d3] hover:from-[#dc00d3] hover:to-[#46c6fd] text-white px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 drop-shadow-[0_0_15px_rgba(220,0,211,0.5)] hover:drop-shadow-[0_0_25px_rgba(70,198,253,0.6)] w-fit mt-10">
            Read More
          </button>
        </div>

        <motion.div 
          className='flex flex-1 justify-center'
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className='relative group cursor-pointer'>
            <div className='absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-[#46c6fd] to-[#dc00d3] opacity-75 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
            <div className='relative rounded-[2rem] bg-[#1E1B26] p-2'>
              <Image
                src="/images/placeholders/home-placeholder9.png"
                alt="values"
                width={600}
                height={400}
                className='rounded-[1.8rem] object-cover'
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Values