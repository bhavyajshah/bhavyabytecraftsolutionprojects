'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

SwiperCore.use([Autoplay, Pagination]);


const TestimonialSlider = ({ title, subTitle, testimonials }) => {
  return (
    <section className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-white sm:text-4xl text-2xl font-extrabold text-center mb-4">
            {title}
          </h2>
          <p className="text-gray-300 text-center mb-16">
            {subTitle}
          </p>
        </div>

        <Swiper
          className="swiper-container"
          direction="horizontal"
          slidesPerView={1}
          spaceBetween={32}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
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
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="swiper-slide flex">
              <div className="bg-white flex flex-col p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    className="w-14 h-14 rounded-full object-cover"
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {testimonial.feedback}
                </p>
                <div className="flex items-center text-amber-500 gap-1">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.04907 2.92702C9.41607 2.17346 10.584 2.17346 10.951 2.92702L12.7535 6.56663C12.8996 6.86166 13.1808 7.06667 13.5064 7.11379L17.9405 7.7886C18.7613 7.90759 19.0897 8.91438 18.4959 9.49255L15.2296 12.6065C14.9937 12.836 14.886 13.1665 14.9415 13.4911L15.7397 17.9399C15.8798 18.7554 14.9998 19.379 14.2666 18.9927L10.3499 17.0653C10.0593 16.9116 9.71127 16.9116 9.42074 17.0653L5.50403 18.9927C4.77078 19.379 3.8908 18.7554 4.0309 17.9399L4.82907 13.4911C4.88456 13.1665 4.77685 12.836 4.541 12.6065L1.2747 9.49255C0.680954 8.91438 1.00941 7.90759 1.83024 7.7886L6.2643 7.11379C6.58995 7.06667 6.87111 6.86166 7.01723 6.56663L8.8197 2.92702Z" />
                    </svg>
                  ))}
                  <span className="text-sm font-medium text-gray-600 ml-2">
                    {testimonial.rating} / 5.0
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;
