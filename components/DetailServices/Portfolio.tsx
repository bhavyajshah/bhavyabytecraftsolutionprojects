import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import { PinContainer } from '../ui/3d-pin';
import 'swiper/css';
import 'swiper/css/navigation';

// Initialize Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const WebDevelopmentWork = ({ works, sectionTitle, sectionSubtitle }) => {
  return (
    <div className="pt-32 h-screen">
      <div className="text-center mb-8">
        <h2 className="text-white sm:text-4xl text-2xl font-extrabold text-center mb-4">
          {sectionTitle}
        </h2>
        <p className="text-gray-300 text-center mb-16">
          {sectionSubtitle}
        </p>
      </div>

      {/* Swiper Slider */}
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
          <SwiperSlide key={index} className="swiper-slide flex h-full">
            <PinContainer title={work.title} href={work.href}>
              <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-full h-full">
                <h3 className="font-bold text-lg text-slate-100 mb-1">
                  {work.title}
                </h3>
                <h4 className="font-semibold text-sm text-slate-300 mb-2">
                  {work.subTitle}
                </h4>
                <div className="text-base font-normal text-slate-500 mb-4">
                  {work.description}
                </div>
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-auto mb-4 rounded-lg object-cover"
                />
              </div>
            </PinContainer>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2">
        </div>
        <div className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2">
        </div>
      </Swiper>
    </div>
  );
};

export default WebDevelopmentWork;
