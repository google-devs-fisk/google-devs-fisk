"use client"

import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { HeadingWithSpan } from "@/components";

const Focus = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const domains = [
        {
            'src':'/images/web-dev-image.png',
            'title': 'Full Stack\nWeb Development',
            'width': 400,
            'height': 400
        },
        {
            'src':'/images/mobile-app-dev.jpg',
            'title': 'Android and iOS\nDevelopment',
            'width': 300,
            'height': 300
        },
        {
            'src':'/images/ml-image.png',
            'title': 'Machine Learning',
            'width': 400,
            'height': 400
        },
    ];

    return (
        <div ref={ref} className='flex flex-col justify-center items-center px-4'>
            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='flex flex-col items-center max-w-7xl w-full'
            >
                <div className='mb-20'>
                    <HeadingWithSpan heading='Key Focus Domains' />
                </div>
                <motion.div 
                    className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full'
                    initial={{ y: 50, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                    {domains.map((domain, index) => (
                        <motion.div 
                            key={index} 
                            className='flex flex-col items-center'
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                        >
                            <div className='relative group cursor-pointer'>
                                <div className='absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-[#46c6fd] to-[#dc00d3] opacity-75 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
                                <div className='relative rounded-[2rem] bg-[#1E1B26] p-2'>
                                    <Image
                                        src={domain.src} 
                                        alt={domain.title} 
                                        width={domain.width}
                                        height={domain.height}
                                        className='rounded-[1.8rem] aspect-square object-cover'
                                    />
                                </div>
                            </div>
                            <h2 className='secondary-color text-xl sm:text-2xl lg:text-3xl font-light leading-tight mt-6 whitespace-pre-line'>
                                {domain.title}
                            </h2>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Focus;