'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Feature = ({ features, title }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 120, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center font-bold leading-tight mb-8 sm:mb-12 md:mb-16">
        {title}
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={`${index * 150}`}
            className="p-6 flex gap-6 rounded-lg border border-gray-600 shadow-lg transition-transform transform hover:scale-105 hover:rotate-1 duration-300 ease-in-out"
          >
            <div className="w-12 h-12 hero-button-gradient p-3 rounded-lg shrink-0 flex justify-center items-center text-white">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
