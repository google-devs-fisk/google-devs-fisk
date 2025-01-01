import React from 'react'
import Image from 'next/image';
const Focus = () => {

    const domains = [
        {
            'src':'/images/placeholders/work-culture-placeholder2.png',
            'title': 'Full Stack Web Development',
            'width': 450,
            'margint': 0
        },
        {
            'src':'/images/placeholders/work-culture-placeholder3.jpg',
            'title': 'Machine Learning',
            'width': 300,
            'margint': 3
        },
        {
            'src':'/images/placeholders/work-culture-placeholder3.jpg',
            'title': 'Android and iOS Development',
            'width': 450,
            'margint': 0
        },
        

    ];
  return (
    <div className='flex flex-col'>
        <div className='flex flex-row justify-end mr-20 pr-3 mb-10 mt-10'>
            <h1 className='primary-heading text-6xl font-bold mb-5 mr-3'>Key Focus</h1>
            <h1 className='text-6xl font-bold mb-5'>Domains</h1>
        </div>

        <div className='flex justify-center'>
            {domains.map((domain, index) => (
                <div key={index} className={`flex flex-col m-2 p-2`}>
                    <Image
                     src={domain.src} 
                     alt={domain.title} 
                     width={domain.width}
                     height={200}
                     className={`rounded-2xl border-2 border-blue-700 mt-${domain.margint} pt-${domain.margint}`}
                     />
                     
                    <h2 className='text-3xl mt-2'>{domain.title}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Focus