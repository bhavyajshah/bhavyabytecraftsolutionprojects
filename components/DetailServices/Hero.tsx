'use client'
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

type HeroProps = {
  heroImage: string;
  title: string;
  subTitle: string;
  description: string;
  headline: string
  primaryButton: {
    text: string;
    link: string;
  };
  valuePropositions: string[];
};

const Hero: React.FC<HeroProps> = ({
  heroImage,
  headline,
  title,
  subTitle,
  description,
  primaryButton,
  valuePropositions,
}) => {
  return (
    <section className="flex flex-wrap justify-between items-center min-h-screen text-white py-24 relative">

<div className="w-full lg:w-1/2 px-6 lg:pl-12 flex flex-col justify-center space-y-6 z-10">

  {/* Headline */}
  <motion.h2
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    className="relative font-medium text-sm inline-flex items-center gap-2 py-2 px-6 button-border-gradient rounded-full text-white"
    style={{ width: "fit-content" }}
  >
    {headline}
  </motion.h2>

  {/* Title and Subtitle */}
  <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl lg:text-5xl font-bold leading-tight text-left"
  >
    {title}
    <br />
    <span className="text-blue-400">{subTitle}</span>
  </motion.h1>

  {/* Description */}
  <motion.p
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.2 }}
    className="text-sm md:text-base max-w-lg text-left"
  >
    {description}
  </motion.p>

  {/* Value Propositions */}
  <ul className="flex flex-wrap gap-4 text-sm">
    {valuePropositions.map((prop, index) => (
      <motion.li
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }} key={index} className="flex items-center text-left">
        <FaCheckCircle className="mr-2" />
        {prop}
      </motion.li>
    ))}
  </ul>

  {/* Buttons */}
  <div className="mt-6 flex gap-4">
    <motion.a
      href={primaryButton.link}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}

      transition={{ duration: 0.5, delay: 0.3 }}
className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
>
      {primaryButton.text}
    </motion.a>
  </div>
</div>


      {/* Creative Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative w-[500px] h-[500px] rounded-xl overflow-hidden shadow-2xl"
        >
          <img
            src={heroImage}
            alt="Web development"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
