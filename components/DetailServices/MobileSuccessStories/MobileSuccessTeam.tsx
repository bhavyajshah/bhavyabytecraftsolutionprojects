'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const TeamMember = ({ name, title, hourlyRate, skills, previousCompany, imgSrc }) => {
  return (
    <motion.div
      className="flex flex-col items-center border-[#6430C2] text-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={imgSrc} alt={name} className="rounded-full w-28 h-28 border-4 border-gray-200 mb-4" />
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-sm  mb-2">{title}</p>
      <p className="text-xl font-bold mt-2">${hourlyRate}/hour</p>
      <div className="flex flex-wrap justify-center mt-2 mb-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-gray-200 text-black px-3 py-1 rounded-full text-xs mr-2 mb-2">
            {skill}
          </span>
        ))}
      </div>
      <p className=" mt-2">
        Previously at: <span className="font-semibold">{previousCompany}</span>
      </p>
    </motion.div>
  );
};

const AppDevelopmentTeam = ({ title, teamMembersData }) => {


  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-bold leading-none text-white max-md:max-w-full max-md:text-4xl mb-8 text-center"
      >
        {title}
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembersData.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
      <div className="mt-10">
        <div className="bg-[#6430C2] text-white flex flex-row items-center justify-between py-4 px-6 rounded-md text-center">
          <p className="text-lg font-semibold">Learn more about our Mobile team composition options</p>
          <Link href='/pricing' className="bg-white text-[#6430C2] font-semibold py-2 px-4 rounded-md transition duration-300 hover:bg-gray-100">
            Request Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopmentTeam;
