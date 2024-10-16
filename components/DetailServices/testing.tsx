'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

const LanguageSection = ({ languages, title }) => {
    const sectionRef = useRef(null);
    const [activeTab, setActiveTab] = useState(0);
    const swiperInstanceRef = useRef(null);

    useEffect(() => {
        const animateOnScroll = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.fromTo(entry.target, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
                }
            });
        };

        const observer = new IntersectionObserver(animateOnScroll, { threshold: 0.1 });
        const elements = sectionRef.current.querySelectorAll('.language-card');
        elements.forEach(element => observer.observe(element));
        return () => {
            elements.forEach(element => observer.unobserve(element));
        };
    }, []);

    const handleTabClick = (index) => {
        setActiveTab(index);
        if (swiperInstanceRef.current) {
            swiperInstanceRef.current.slideTo(index);
        }
    };

    return (
        <section className="py-16 mx-auto max-w-6xl" ref={sectionRef}>
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-8 md:mb-12">
                    {title}
                </h1>
                            <div className="flex max-w-6xl mx-auto justify-start flex-wrap gap-4 mb-12">
                {languages.map((language, index) => (
                    <button
                        key={index}
                        className={`px-6 py-2 font-semibold transition-transform duration-300 transform hover:scale-105 ${activeTab === index
                                ? 'bg-[#6430C2] text-white'
                                : 'bg-gray-200 text-[#6430C2]'
                            } rounded-full shadow-lg`}
                        onClick={() => handleTabClick(index)}
                    >
                        {language.title}
                    </button>
                ))}
            </div>
            </div>


            <Swiper
                onSwiper={(swiper) => (swiperInstanceRef.current = swiper)}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 6 },
                }}
                navigation={true}
                modules={[Navigation]}
                onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
                className="mySwiper"
            >
                {languages.map((language, index) => (
                    <SwiperSlide key={index}>
                        <div className="language-card text-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 rounded-full flex items-center justify-center text-[#6430C2]">
                                    {language.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-center">{language.title}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default LanguageSection;
