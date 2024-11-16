'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const TeamMember = ({ name, title, hourlyRate, skills, previousCompany, imgSrc }) => {
  return (
    <motion.div
      className="flex flex-col items-center dark:border-[#6430C2] border-neutral-300 dark:border-primary text-neutral-800 dark:text-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={imgSrc} alt={name} className="rounded-full w-28 h-28 border-4 border-neutral-200 dark:border-secondary mb-4" />
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-sm mb-2">{title}</p>
      <p className="text-xl font-bold mt-2">${hourlyRate}/hour</p>
      <div className="flex flex-wrap justify-center mt-2 mb-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-neutral-100 dark:bg-white text-neutral-800 dark:text-black px-3 py-1 rounded-full text-xs mr-2 mb-2">
            {skill}
          </span>
        ))}
      </div>
      <p className="mt-2">
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
        className="text-6xl font-bold leading-none text-neutral-800 dark:text-primary max-md:max-w-full max-md:text-4xl mb-8 text-center"
      >
        {title}
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembersData.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
      <div className="mt-10">
        <div className="bg-neutral-100 dark:bg-transparent dark:border-[#6430C2] dark:border-2 text-neutral-800 dark:text-primary-foreground flex flex-row items-center justify-between py-4 px-6 rounded-md text-center">
          <p className="text-lg font-semibold dark:text-white">Learn more about our Mobile team composition options</p>
          <Link href='/pricing' className="hero-button-gradient hero-button dark:text-white text-white font-semibold py-2 px-4 rounded-md transition duration-300 hover:bg-neutral-200
          ">
            Request Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopmentTeam;