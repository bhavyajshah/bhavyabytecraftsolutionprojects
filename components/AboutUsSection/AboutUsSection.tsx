"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const AboutUsSection = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef<any>([]);

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
    <section className="py-16 md:py-24 relative" ref={sectionRef}>
      <div className="absolute inset-0 opacity-20"></div>
      <div className="max-w-7xl px-4 md:px-8 mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-white mb-6 text-3xl font-extrabold sm:text-4xl xl:text-heading-2 transition duration-500 ease-in-out hover:text-indigo-400">
            Who We Are
          </h2>
          <p className="max-w-[714px] mx-auto mb-5 md:text-lg font-medium text-gray-300">
            At our software agency, we specialize in turning ideas into digital
            reality. With over 30 years of combined experience, we’ve partnered
            with startups, SMBs, and global enterprises to craft scalable,
            innovative software solutions.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-start">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className="p-6 border rounded-xl  backdrop hover:border-indigo-500 transition duration-500 ease-in-out shadow-lg cursor-pointer"
                onMouseEnter={() => handleHoverEnter(index)}
                onMouseLeave={() => handleHoverLeave(index)}
              >
                <h4 className="text-white text-2xl font-bold transition duration-300 ease-in-out hover:text-indigo-400">
                  {stat.title}
                </h4>
                <p className="text-gray-300">{stat.text}</p>
              </div>
            ))}
        <Link href='/aboutus' className="hero-button-gradient inline-flex self-start w-full sm:w-auto justify-center items-center rounded-lg py-3 px-5 md:px-7 text-white font-medium ease-in duration-300 hover:opacity-80">
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
      stroke="white"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</Link>

          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center">
            <div className="relative w-full sm:w-[564px] h-[300px] sm:h-[380px] rounded-3xl overflow-hidden bg-gray-200 border-2 border-indigo-500 hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105 mt-6 sm:mt-0">
              <img
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                src="https://pagedone.io/asset/uploads/1717742431.png"
                alt="Our Team"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
