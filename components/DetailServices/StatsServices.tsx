'use client'
import React, { useEffect } from 'react';
import { FaUsers, FaRegSmile, FaCode, FaLaptopCode } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StatsServices = () => {

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
                <div className="absolute inset-0 z-10"></div>
                <img
                    src="/statssection.jpg"
                    className="w-full h-full rounded-xl object-cover max-w-6xl mx-auto"
                    alt="Background"
                    style={{ objectPosition: 'center', filter: 'brightness(70%)' }}
                />
            </div>

            {/* Content Section */}
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="relative bg-gray-800 rounded-3xl shadow-lg -mt-24 md:-mt-40 lg:-mt-64 overflow-hidden py-16 px-8 md:px-16 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left Content */}
                    <div className="relative z-10" data-aos="fade-right">
                        <h2 className="text-4xl xl:text-5xl font-bold text-white mb-6">
                            Our Web Development Achievements
                        </h2>
                        <p className="text-gray-400 text-lg mb-6">
                            Over the years, we have delivered exceptional web solutions that empower businesses and enhance user experiences.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-lg">
                                <FaRegSmile className="text-teal-400" />
                                <span>Tailored solutions that meet client needs.</span>
                            </li>
                            <li className="flex items-center gap-3 text-lg">
                                <FaRegSmile className="text-teal-400" />
                                <span>Responsive designs that engage users on all devices.</span>
                            </li>
                            <li className="flex items-center gap-3 text-lg">
                                <FaRegSmile className="text-teal-400" />
                                <span>Utilizing the latest technologies for optimal performance.</span>
                            </li>
                        </ul>
                        <a
                            href="#"
                            className="inline-flex items-center px-6 py-4 rounded-lg bg-teal-500 hover:bg-teal-600 text-white transition-all"
                        >
                            <span>Get a Consultation</span>
                            <svg className="stroke-white ml-2" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 16.5L18 12.5M18 12.5L14 8.5M18 12.5L6 12.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </a>
                    </div>

                    {/* Right Stats */}
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                        {/* Stat Cards */}
                        {[
                            { icon: FaUsers, number: '1,000+', label: 'Satisfied Clients' },
                            { icon: FaRegSmile, number: '300+', label: 'Projects Completed' },
                            { icon: FaCode, number: '250', label: 'Custom Websites Developed' },
                            { icon: FaLaptopCode, number: '500+', label: 'Applications Designed' },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                className="bg-gray-700 group hover:bg-teal-500 transition-all flex flex-col items-center px-8 py-6 rounded-xl shadow-lg"
                            >
                                <div className="-mt-12">
                                    <span className="w-20 h-20 rounded-full bg-teal-500 group-hover:bg-white grid place-items-center transition-all">
                                        <stat.icon className="text-white text-3xl group-hover:text-teal-500" />
                                    </span>
                                </div>
                                <h3 className="text-4xl font-semibold text-white group-hover:text-white mt-6 mb-2">
                                    {stat.number}
                                </h3>
                                <h4 className="text-gray-400 group-hover:text-white text-lg">
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
