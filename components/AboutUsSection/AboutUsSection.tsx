"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useTheme } from "next-themes";

gsap.registerPlugin(ScrollTrigger);

const AboutUsSection = () => {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const statsRef = useRef<any>([]);

  useEffect(() => {
    gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const handleHoverEnter = (index: number) => {
    gsap.to(statsRef.current[index], {
      scale: 1.05,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleHoverLeave = (index: number) => {
    gsap.to(statsRef.current[index], {
      scale: 1,
      duration: 0.3,
      ease: "power3.in",
    });
  };

  return (
    <section
      className={`py-16 md:py-24 relative ${theme === 'light' ? 'bg-gradient-to-br from-blue-50 to-white' : ''
        }`}
      ref={sectionRef}
    >
      <div className="max-w-6xl px-4 md:px-8 mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className={`mb-6 text-3xl font-extrabold sm:text-4xl xl:text-5xl transition duration-500 ease-in-out ${theme === 'light' ? 'text-blue-800 hover:text-blue-600' : 'text-white hover:text-indigo-400'
            }`}>
            Who We Are
          </h2>
          <p className={`max-w-[714px] mx-auto mb-5 md:text-lg font-medium ${theme === 'light' ? 'text-blue-700' : 'text-gray-300'
            }`}>
            At our software agency, we specialize in turning ideas into digital
            reality. With over 30 years of combined experience, we&apos;ve partnered
            with startups, SMBs, and global enterprises to craft scalable,
            innovative software solutions.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "30+ Years",
                text: "Experience in Building Robust Digital Solutions",
              },
              {
                title: "150+ Projects",
                text: "Successfully Delivered with Innovation at the Core",
              },
              {
                title: "20+ Industry Awards",
                text: "Recognized for Our Technical Expertise & Creativity",
              },
              {
                title: "98% Client Satisfaction",
                text: "Our Commitment to Delivering Beyond Expectations",
              },
            ].map((stat, index) => (
              <div
                key={index}
                ref={(el: any) => (statsRef.current[index] = el)}
                className={`p-6 rounded-xl transition duration-500 ease-in-out shadow-lg cursor-pointer ${theme === 'light'
                  ? 'bg-white hover:shadow-xl'
                  : 'border backdrop hover:border-indigo-500'
                  }`}
                onMouseEnter={() => handleHoverEnter(index)}
                onMouseLeave={() => handleHoverLeave(index)}
              >
                <h4 className={`text-2xl font-bold transition duration-300 ease-in-out ${theme === 'light' ? 'text-blue-800 hover:text-blue-600' : 'text-white hover:text-indigo-400'
                  }`}>
                  {stat.title}
                </h4>
                <p className={theme === 'light' ? 'text-blue-600' : 'text-gray-300'}>
                  {stat.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center">
            <div className="relative w-full sm:w-[564px] h-[300px] sm:h-[380px] rounded-3xl overflow-hidden bg-gray-200 border-2 border-blue-500 hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105 mt-6 sm:mt-0">
              <img
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                src="https://pagedone.io/asset/uploads/1717742431.png"
                alt="Our Team"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-50"></div>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link href='/aboutus' className={`inline-flex items-center justify-center rounded-lg py-3 px-5 md:px-7 text-white font-medium ease-in duration-300 hover:opacity-80 ${theme === 'light'
            ? 'bg-blue-600 hover:bg-blue-700'
            : 'hero-button-gradient'
            }`}>
            Read More
            <svg
              className="ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M6.75 4.5L11.25 9L6.75 13.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;