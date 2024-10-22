'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Link from 'next/link';

SwiperCore.use([Navigation, Autoplay]);

const WebDevelopmentWork = ({ works, sectionTitle }) => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="pt-20  max-w-6xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-8 sm:mb-12 md:mb-16">
        {sectionTitle}
      </h1>
      <Swiper
        className="h-full"
        direction="horizontal"
        slidesPerView={1}
        spaceBetween={32}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {works.map((work, index) => (
          <SwiperSlide key={index} className="swiper-slide flex h-full shadow-[0_8px_16px_rgb(0_0_0/0.4)] p-4 rounded-2xl backdrop-blur-sm bg-gray-900/30 border border-white/[0.1] group-hover/pin:border-white/[0.2]">
            <Link href={work.href}>
              <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-full h-full cursor-pointer">
                <h3 className="font-bold text-lg text-slate-100 mb-1 sm:text-xl">
                  {work.title}
                </h3>
                <h4 className="font-semibold text-sm text-slate-300 mb-2 sm:text-base">
                  {work.subTitle}
                </h4>
                <div className="text-base font-normal text-slate-500 mb-4 sm:text-md">
                  {work.description}
                </div>
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-[200px] mb-4 rounded-lg object-cover"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2"></div>
        <div className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2"></div>
      </Swiper>
    </div>
  );
};

export default WebDevelopmentWork;
