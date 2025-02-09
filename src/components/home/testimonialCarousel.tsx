"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HeadingWithSpan } from "@/components";
import { Testimonial } from "@/types/common";

const truncateTestimonialContent = (content: string): string => {
  const words = content.split(" ");
  if (words.length > 25) {
    return `${words.slice(0, 24).join(" ")} ... ${words[words.length - 1]}`;
  }
  return content;
};

const TestimonialCarousel = ({ testimonials }: { testimonials: Testimonial[] }) => {
  return (
    <div className="max-w-6xl mx-auto relative">
      {/* Section Heading - Fully Centered */}
      <div className="text-center mb-[70px]">
        <HeadingWithSpan heading="What Our Members Say" />
      </div>

      {/* Swiper Container */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, el: ".custom-pagination" }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        className="relative w-full pb-14"
      >
        {testimonials && testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg transition-all transform hover:scale-105 backdrop-blur-lg bg-opacity-70 border border-gray-200 dark:border-gray-700 h-[80%] flex flex-col justify-center items-center text-center">
              {/* Circular Image */}
              <Image
                src={testimonial.authorImgUrl || "https://storage.googleapis.com/gdg-fisk-assets/images/placeholder-profile-pic.png"}
                alt={testimonial.author || "This is author image"}
                width={180}
                height={180}
                className="w-[180px] h-[180px] rounded-full object-cover border-4 border-blue-500 shadow-lg mb-6"
              />
              {/* Author Info */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {testimonial.author}
              </h3>
              <p className="text-md text-gray-500 dark:text-gray-400 font-medium">
                {testimonial.classification} · {testimonial.teamDomain}
              </p>

              {/* Testimonial Text */}
              <p className="mt-6 text-gray-700 dark:text-gray-300 italic text-lg font-light leading-relaxed">
                {testimonial.content ? `"${truncateTestimonialContent(testimonial.content)}"` : "No testimonial available."}
              </p>

              {/* Glass Effect Background */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-10 rounded-2xl"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination - Always Centered */}
      <div className="custom-pagination absolute bottom-[-40px] left-1/2 transform -translate-x-1/2"></div>
    </div>
  );
};

export default TestimonialCarousel;
