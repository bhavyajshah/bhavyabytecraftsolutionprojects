"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const AboutUsSection = () => {
  const { theme } = useTheme();

  const stats = [
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
  ];

  return (
    <section
      className={`py-16 md:py-24 relative ${theme === 'light' ? '' : ''
        }`}
    >
      <div className="max-w-6xl px-4 md:px-8 mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className={`mb-6 text-3xl font-extrabold sm:text-4xl xl:text-5xl ${theme === 'light' ? 'text-gray-800' : 'text-white'
            }`}>
            Who We Are
          </h2>
          <p className={`max-w-[714px] mx-auto mb-5 md:text-lg font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
            At our software agency, we specialize in turning ideas into digital
            reality. With over 30 years of combined experience, we&apos;ve partnered
            with startups, SMBs, and global enterprises to craft scalable,
            innovative software solutions.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                className={`p-6 rounded-xl shadow-lg cursor-pointer transition-transform duration-300 ease-in-out ${theme === 'light'
                  ? 'bg-white hover:shadow-xl'
                  : 'border backdrop '
                  }`}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className={`text-2xl font-bold ${theme === 'light' ? 'text-gray-800 ' : 'text-white hover:text-indigo-400'
                  }`}>
                  {stat.title}
                </h4>
                <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-300'}>
                  {stat.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full sm:w-[564px] h-[300px] sm:h-[380px] rounded-3xl overflow-hidden bg-gray-200 border-2 border-blue-500 hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105 mt-6 sm:mt-0">
              <Image
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                src="https://pagedone.io/asset/uploads/1717742431.png"
                alt="Our Team"
                width={564}
                height={380}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-50"></div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link href='/aboutus'>
            <div className={`inline-flex items-center justify-center rounded-lg py-3 px-5 md:px-7 text-white font-medium transition-opacity duration-300 hover:opacity-80 ${theme === 'light'
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
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
