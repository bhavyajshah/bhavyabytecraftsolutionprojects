import React from 'react';
import { FaUsers, FaRegSmile, FaCode, FaLaptopCode } from 'react-icons/fa';

const StatsServices = () => {
    return (
        <div>
            <section className="">
                <div>
                    <img
                        src="/statssection.jpg"
                        className="w-full h-auto object-cover"
                        alt="Background"
                    />
                </div>
                <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="bg-white rounded-lg shadow-lg -mt-16 md:-mt-40 lg:-mt-64 overflow-hidden relative z-10 py-20 px-8 md:px-16 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12">

                        <div>
                            <div className="absolute top-[50%] -left-24 z-0 hidden lg:block">
                                <img
                                    src="/bgstatuscircle.png"
                                    alt="Circle Decoration"
                                    className="w-64 h-auto"
                                />
                            </div>
                            <div className="relative z-10">
                                <h2 className="text-4xl leading-normal xl:text-5xl font-bold text-interface-700 mb-4 xl:leading-sung">
                                    Our Web Development Achievements
                                </h2>
                                <p className="text-interface-200 text-lg mb-4">
                                    Over the years, we have delivered exceptional web solutions that empower businesses and enhance user experiences.
                                </p>
                                <ul className="space-y-2.5 mb-10">
                                    <li className="flex items-center gap-3 text-lg text-interface-100">
                                        <FaRegSmile className="text-pblue-500" />
                                        <span>Tailored solutions that meet client needs.</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-lg text-interface-100">
                                        <FaRegSmile className="text-pblue-500" />
                                        <span>Responsive designs that engage users on all devices.</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-lg text-interface-100">
                                        <FaRegSmile className="text-pblue-500" />
                                        <span>Utilizing the latest technologies for optimal performance.</span>
                                    </li>
                                </ul>
                                <a
                                    href="#"
                                    className="inline-flex justify-center gap-1 items-center px-6 py-4 rounded-lg bg-pblue-500 hover:bg-pblue-600 text-white transition-all"
                                >
                                    <span>Get a Consultation</span>
                                    <svg className="stroke-white" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 16.5L18 12.5M18 12.5L14 8.5M18 12.5L6 12.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 pt-5">
                            <div className="bg-[#F2F6FE] group hover:bg-pblue-500 transition-all flex flex-col items-center px-8 py-6 rounded-lg shadow-md">
                                <div className="-mt-16">
                                    <span className="w-20 h-20 rounded-full transition border border-pblue-500 group-hover:border-white bg-pblue-500 grid place-items-center">
                                        <FaUsers className="text-white text-3xl" />
                                    </span>
                                </div>
                                <h3 className="text-4xl -space-x-3 text-interface-700 group-hover:text-white font-semibold mb-2 mt-6">
                                    <span className="counter">1,000</span>
                                    <span>+</span>
                                </h3>
                                <h4 className="text-pcolor-500 text-lg group-hover:text-white">
                                    Satisfied Clients
                                </h4>
                            </div>
                            <div className="bg-[#F2F6FE] group hover:bg-pblue-500 transition-all flex flex-col items-center px-8 py-6 rounded-lg shadow-md">
                                <div className="-mt-16">
                                    <span className="w-20 h-20 rounded-full transition border border-pblue-500 group-hover:border-white bg-pblue-500 grid place-items-center">
                                        <FaRegSmile className="text-white text-3xl" />
                                    </span>
                                </div>
                                <h3 className="text-4xl -space-x-3 text-interface-700 group-hover:text-white font-semibold mb-2 mt-6">
                                    <span className="counter">300</span>
                                    <span>+</span>
                                </h3>
                                <h4 className="text-pcolor-500 text-lg group-hover:text-white">
                                    Projects Completed
                                </h4>
                            </div>
                            <div className="bg-[#F2F6FE] group hover:bg-pblue-500 transition-all flex flex-col items-center px-8 py-6 rounded-lg shadow-md">
                                <div className="-mt-16">
                                    <span className="w-20 h-20 rounded-full transition border border-pblue-500 group-hover:border-white bg-pblue-500 grid place-items-center">
                                        <FaCode className="text-white text-3xl" />
                                    </span>
                                </div>
                                <h3 className="text-4xl -space-x-3 text-interface-700 group-hover:text-white font-semibold mb-2 mt-6">
                                    <span className="counter">250</span>
                                </h3>
                                <h4 className="text-pcolor-500 text-lg group-hover:text-white">
                                    Custom Websites Developed
                                </h4>
                            </div>
                            <div className="bg-[#F2F6FE] group hover:bg-pblue-500 transition-all flex flex-col items-center px-8 py-6 rounded-lg shadow-md">
                                <div className="-mt-16">
                                    <span className="w-20 h-20 rounded-full transition border border-pblue-500 group-hover:border-white bg-pblue-500 grid place-items-center">
                                        <FaLaptopCode className="text-white text-3xl" />
                                    </span>
                                </div>
                                <h3 className="text-4xl -space-x-3 text-interface-700 group-hover:text-white font-semibold mb-2 mt-6">
                                    <span className="counter">500</span>
                                    <span>+</span>
                                </h3>
                                <h4 className="text-pcolor-500 text-lg group-hover:text-white">
                                    Applications Designed
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StatsServices;
