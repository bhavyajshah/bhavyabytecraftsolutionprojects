'use client'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';
import { BiRightTopArrowCircle } from 'react-icons/bi';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const LanguageSection = ({languages, title}) => {
    const sectionRef = useRef(null);

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

    return (
        <section className="py-16 mx-auto max-w-6xl" ref={sectionRef}>
            <div className="container mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {languages.map((language, index) => (
                    <div key={index} className={`language-card rounded-lg p-8 overflow-hidden relative shadow-lg transition-colors duration-300 ${language.bgClass}`}>
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
                ))}
            </div>
        </section>
    );
};

export default LanguageSection;
