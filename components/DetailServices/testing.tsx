'use client'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaSass, FaFigma } from 'react-icons/fa';
import Link from 'next/link';
import { BiRightTopArrowCircle } from 'react-icons/bi';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const languages = [
    {
        title: 'HTML5',
        description: 'The standard markup language for creating web pages.',
        icon: <FaHtml5 className="text-orange-500 text-6xl" />,
        bgClass: 'bg-orange-100',
    },
    {
        title: 'CSS3',
        description: 'A style sheet language used for describing the presentation of a document.',
        icon: <FaCss3Alt className="text-blue-500 text-6xl" />,
        bgClass: 'bg-blue-100',
    },
    {
        title: 'JavaScript',
        description: 'A programming language that allows you to implement complex features on web pages.',
        icon: <FaJsSquare className="text-yellow-500 text-6xl" />,
        bgClass: 'bg-yellow-100',
    },
    {
        title: 'React',
        description: 'A JavaScript library for building user interfaces.',
        icon: <FaReact className="text-cyan-500 text-6xl" />,
        bgClass: 'bg-cyan-100',
    },
    {
        title: 'Node.js',
        description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
        icon: <FaNodeJs className="text-green-500 text-6xl" />,
        bgClass: 'bg-green-100',
    },
    {
        title: 'Git',
        description: 'A distributed version-control system for tracking changes in source code.',
        icon: <FaGitAlt className="text-red-500 text-6xl" />,
        bgClass: 'bg-red-100',
    },
    {
        title: 'Sass',
        description: 'A preprocessor scripting language that is interpreted or compiled into CSS.',
        icon: <FaSass className="text-pink-500 text-6xl" />,
        bgClass: 'bg-pink-100',
    },
    {
        title: 'Figma',
        description: 'A web-based app for interface design and prototyping.',
        icon: <FaFigma className="text-purple-500 text-6xl" />,
        bgClass: 'bg-purple-100',
    },
];

const LanguageSection = () => {
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
                <h2 className="text-4xl font-bold text-white mb-4">Web Development Languages</h2>
                <p className="text-lg text-white">Stay updated with the latest technologies.</p>
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
