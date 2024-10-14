'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const TeamMember = ({ name, title, hourlyRate, skills, previousCompany, imgSrc }) => {
  return (
    <motion.div
      className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={imgSrc} alt={name} className="rounded-full w-28 h-28 border-4 border-gray-200 mb-4" />
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{title}</p>
      <p className="text-xl font-bold mt-2">${hourlyRate}/hour</p>
      <div className="flex flex-wrap justify-center mt-2 mb-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs mr-2 mb-2">
            {skill}
          </span>
        ))}
      </div>
      <p className="text-gray-500 mt-2">
        Previously at: <span className="font-semibold">{previousCompany}</span>
      </p>
    </motion.div>
  );
};

const AppDevelopmentTeam = () => {

  const teamMembersData = [
    {
      name: 'John Doe',
      title: 'Mobile App Developer',
      hourlyRate: 65,
      skills: ['Java', 'Kotlin', 'Android Jetpack', 'Firebase', 'Gradle'],
      previousCompany: 'Company A',
      imgSrc: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Jane Smith',
      title: 'Mobile App Developer',
      hourlyRate: 50,
      skills: ['Swift', 'iOS Development', 'Xcode', 'Core Data'],
      previousCompany: 'Company B',
      imgSrc: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      name: 'Rohit Sharma',
      title: 'Mobile App Developer',
      hourlyRate: 40,
      skills: ['React Native', 'Flutter', 'Dart', 'API Integration'],
      previousCompany: 'Company C',
      imgSrc: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-bold leading-none text-white max-md:max-w-full max-md:text-4xl mb-8 text-center"
      >
        Our Successful Mobile App Team Members
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembersData.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
      <div className="mt-10">
        <div className="bg-[#6430C2] text-white flex flex-row items-center justify-between py-4 px-6 rounded-md text-center">
          <p className="text-lg font-semibold mb-2">Learn more about our Mobile team composition options</p>
          <Link href='/pricing' className="bg-white text-[#6430C2] font-semibold py-2 px-4 rounded-md transition duration-300 hover:bg-gray-100">
            Request Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopmentTeam;
