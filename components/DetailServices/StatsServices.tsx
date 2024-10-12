'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { NumberTicker } from './NumberTicker';

const StatsServices = ({ title, stats }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true, 
        });
    }, []);

    return (
        <div className="relative text-white overflow-hidden">
            {/* Background Section */}
            <div className="relative w-full h-[500px]">
                <img
                    src="/statssection.jpg"
                    className="w-full h-full rounded-xl object-cover max-w-6xl mx-auto"
                    alt="Background"
                    style={{ objectPosition: 'center', filter: 'brightness(90%)' }}
                />
            </div>

            {/* Content Section */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative backdrop-blur-lg rounded-3xl shadow-lg overflow-hidden py-16 px-8 md:px-16 lg:px-20 grid grid-cols-1 lg:grid-cols-[40%_auto] gap-10">
                    {/* Title and Button Section */}
                    <div className="relative z-10 flex flex-col justify-center items-start" data-aos="fade-right">
                       <div className="">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" data-aos="fade-right" data-aos-delay="200">
                            {title}
                        </h2>
                        </div>
                        <div className="">
                        <Link
                            href="/pricing"
                            className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
                            data-aos="fade-up" data-aos-delay="400"
                        >
                            <span>Get a Consultation</span>
                            <svg className="stroke-white ml-2" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 16.5L18 12.5M18 12.5L14 8.5M18 12.5L6 12.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </Link>
                        </div>
                    </div>

                    {/* Right Stats Section */}
                    <div className="relative w-full grid grid-cols-1 sm:grid-cols-2 gap-12">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"  // Scroll animation for stats items
                                data-aos-delay={`${200 * index}`}  // Delay increases for each item
                                className="bg-black/40 group hover:hero-button-gradient transition-all flex flex-col items-center px-8 py-6 rounded-xl shadow-lg w-full"
                            >
                                <div className="-mt-12">
                                    <span className="w-20 h-20 rounded-full hero-button-gradient group-hover:bg-white grid place-items-center transition-all">
                                        {stat.icon}
                                    </span>
                                </div>
                                <h3 className="text-3xl sm:text-4xl font-semibold text-white group-hover:text-white mt-6 mb-2">
                                    <NumberTicker value={stat.number} />
                                </h3>
                                <h4 className="text-white font-bold">
                                    {stat.label}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsServices;
