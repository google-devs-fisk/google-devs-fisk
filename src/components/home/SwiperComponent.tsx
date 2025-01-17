// 'use client';
// import React from 'react';
// // import dynamic from 'next/dynamic';
// import Image from 'next/image';
// import {Carousel} from 'react-bootstrap'


// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // Import required Swiper modules
// import { Navigation, Pagination } from 'swiper/modules';

// const ProjectCarousel: React.FC = () => {
//   const projects = [
//     {
//       name: 'Project Alpha',
//       description: 'This is a project that focuses on AI development and innovation.',
//       image: '/images/placeholders/projects-placeholder7.png',
//     },
//     {
//       name: 'Project Beta',
//       description: 'A revolutionary platform for decentralized communication.',
//       image: '/images/placeholders/projects-placeholder8.png',
//     },
//     {
//       name: 'Project Gamma',
//       description: 'An eco-friendly initiative to reduce carbon footprints.',
//       image: '/images/placeholders/projects-placeholder9.png',
//     },
//   ];

//   return (
//     <Carousel>
//       {projects.map((project, index) => (
//         <Carousel.Item key={index} className="swiper-slide">
//           <div className="flex flex-row items-center justify-between p-10 bg-gray-100 rounded-lg shadow-md">
//             <div className="w-1/2 pr-5">
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">{project.name}</h2>
//               <p className="text-lg text-gray-600">{project.description}</p>
//             </div>

//             <div className="relative w-1/2 h-64">
//               <Image
//                 src={project.image}
//                 fill
//                 alt={project.name}
//                 style={{ objectFit: 'cover', borderRadius: '10px' }}
//               />
//             </div>
//           </div>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// export default ProjectCarousel;

export default function ProjectCarousel () {
    return (<div></div>)
}