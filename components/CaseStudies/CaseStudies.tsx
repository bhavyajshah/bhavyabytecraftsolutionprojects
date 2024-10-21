"use client";
import { FollowerPointerCard } from "../ui/following-pointer";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { caseStudies } from "../data/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import Swiper navigation styles
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Initialize Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export function CaseStudies() {
  return (
    <div className="max-w-6xl mx-auto bg-transparent relative">
      {/* Title and Description */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Byte-Craft Case Studies</h1>
        <p className="text-lg text-gray-300">
          Explore how Byte Craft Solutions has delivered cutting-edge solutions
          to help businesses succeed and grow.
        </p>
      </div>

      {/* Swiper Case Studies */}
      <div className="relative mt-12 mb-12">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {caseStudies.map((caseStudy, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="group relative p-4 bg-transparent border border-gray-200 backdrop-blur-md rounded-3xl shadow-lg transition-transform hover:bg-gray-900 hover:shadow-2xl cursor-pointer"
                onClick={() => window.open(caseStudy.link, "_blank")}
              >
                <FollowerPointerCard
                  title={
                    <TitleComponent
                      title={caseStudy.author}
                      avatar={caseStudy.authorAvatar}
                    />
                  }
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="transform object-cover transition duration-300 w-full h-64 rounded-t-2xl"
                    />
                  </div>
                  <div className="p-2 text-white">
                    <h2 className="font-bold text-lg text-white mb-2 mt-2">
                      {caseStudy.title}
                    </h2>
                    <p className="text-sm text-white mb-4">
                      {caseStudy.description}
                    </p>

                    {/* Enhanced List Content with Dynamic Data */}
                    <ul className="list-none space-y-2 transition-all duration-300">
                      {caseStudy.bulletPoints?.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-center space-x-2">
                          <FaCheckCircle className="text-green-400" />
                          <span className="text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FollowerPointerCard>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Previous and Next Buttons */}
        <div
          className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 rounded-full shadow-lg hover:bg-gray-700 cursor-pointer"
        >
          <FaChevronLeft className="text-white text-lg" />
        </div>
        <div
          className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 rounded-full shadow-lg hover:bg-gray-700 cursor-pointer"
        >
          <FaChevronRight className="text-white text-lg" />
        </div>
      </div>
    </div>
  );
}

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <img
      src={avatar}
      alt="Avatar"
      className="rounded-full w-6 h-6 border-2 border-white"
    />
    <p className="text-white">{title}</p>
  </div>
);
