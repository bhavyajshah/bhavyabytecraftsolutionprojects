'use client'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import { BiRightTopArrowCircle } from 'react-icons/bi';
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
            <div className="container mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
            </div>

            {/* Tab Navigation */}
            <div className="mb-8 flex justify-center flex-wrap">
                {languages.map((language, index) => (
                    <button
                        key={index}
                        className={`mx-2 px-4 py-2 text-white font-semibold transition-colors duration-300 ${
                            activeTab === index ? 'bg-porange-500' : 'bg-gray-700'
                        } rounded-lg`}
                        onClick={() => handleTabClick(index)}
                    >
                        {language.title}
                    </button>
                ))}
            </div>

            {/* Swiper Slider */}
            <Swiper
                onSwiper={(swiper) => (swiperInstanceRef.current = swiper)}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 2 },
                }}
                navigation={true}
                modules={[Navigation]}
                onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
                className="mySwiper"
            >
                {languages.map((language, index) => (
                    <SwiperSlide key={index}>
                        <div className={`language-card rounded-lg p-8 overflow-hidden relative shadow-lg transition-colors duration-300 ${language.bgClass}`}>
                            <span className="gradient-text block text-xl font-semibold mb-4">
                                {language.title}
                            </span>
                            <div className={`w-36 h-36 rounded-full inline-flex items-center justify-center bg-opacity-10 ${language.bgClass} absolute -right-5 -top-5`}>
                                {language.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">{language.title}</h3>
                            <p className="text-lg text-gray-600 mb-6">{language.description}</p>
                            <Link href="/" className="text-gray-800 transition-all group hover:text-porange-500 text-base underline inline-flex items-center">
                                <span>Learn more</span>
                                <BiRightTopArrowCircle className="ml-2 group-hover:text-porange-500" />
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default LanguageSection;
