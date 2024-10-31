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
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTheme } from "next-themes";

// Initialize Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export function CaseStudies() {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'light' ? 'bg-gradient-to-br from-blue-50 to-white' : 'bg-transparent'
      }`}>
      <div className={`max-w-6xl mx-auto relative py-16 px-4 sm:px-6 lg:px-8`}>
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h1 className={`text-3xl sm:text-4xl font-bold mb-4 ${theme === 'light' ? 'text-blue-800' : 'text-white'
            }`}>Byte-Craft Case Studies</h1>
          <p className={`text-lg ${theme === 'light' ? 'text-blue-600' : 'text-gray-300'
            }`}>
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
                  className={`group relative p-4 rounded-3xl shadow-lg transition-transform hover:shadow-2xl cursor-pointer ${theme === 'light'
                    ? 'bg-white border border-blue-100 hover:bg-blue-50'
                    : 'bg-transparent border border-gray-200 backdrop-blur-md hover:bg-gray-900'
                    }`}
                  onClick={() => window.open(caseStudy.link, "_blank")}
                >
                  <FollowerPointerCard
                    title={
                      <TitleComponent
                        title={caseStudy.author}
                        avatar={caseStudy.authorAvatar}
                        theme={theme}
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
                    <div className={`p-2 ${theme === 'light' ? 'text-blue-800' : 'text-white'}`}>
                      <h2 className="font-bold text-lg mb-2 mt-2">
                        {caseStudy.title}
                      </h2>
                      <p className={`text-sm mb-4 ${theme === 'light' ? 'text-blue-600' : 'text-white'}`}>
                        {caseStudy.description}
                      </p>

                      {/* Enhanced List Content with Dynamic Data */}
                      <ul className="list-none space-y-2 transition-all duration-300">
                        {caseStudy.bulletPoints?.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-center space-x-2">
                            <div className=""> <FaCheckCircle className={theme === 'light' ? 'text-blue-500' : 'text-green-400'} />
                            </div>
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
            className={`swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 rounded-full shadow-lg cursor-pointer ${theme === 'light' ? '' : 'hover:bg-gray-700'
              }`}
          >
            <FaChevronLeft className="text-white text-lg" />
          </div>
          <div
            className={`swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 rounded-full shadow-lg cursor-pointer ${theme === 'light' ? '' : 'hover:bg-gray-700'
              }`}
          >
            <FaChevronRight className="text-white text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

const TitleComponent = ({
  title,
  avatar,
  theme,
}: {
  title: string;
  avatar: string;
  theme: string | undefined;
}) => (
  <div className="flex space-x-2 items-center">
    <img
      src={avatar}
      alt="Avatar"
      className="rounded-full w-6 h-6 border-2 border-white"
    />
    <p className={theme === 'light' ? 'text-blue-800' : 'text-white'}>{title}</p>
  </div>
);