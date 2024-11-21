'use client';

import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { SiFiverr, SiFreelancer, SiToptal } from "react-icons/si";
import { motion } from "framer-motion";
import AnimatedShinyText from "../../hooks/AnimatedGradientText";
import { cn } from "@/lib/utils";
import { CgArrowRight } from "react-icons/cg";
import Link from "next/link";

type Logo = {
  icon: JSX.Element;
  link: string;
  hoverColor: string;
};

type HeroProps = {
  heroImage?: string;
  title: string;
  subTitle: string;
  description: string;
  headline: string;
  primaryButton: {
    text: string;
    link: string;
  };
  valuePropositions: string[];
};

const logos: Logo[] = [
  {
    icon: <FaUpwork className="text-4xl" />,
    link: "https://www.upwork.com",
    hoverColor: "text-green-500",
  },
  {
    icon: <SiFiverr className="text-4xl" />,
    link: "https://clutch.co",
    hoverColor: "text-orange-500",
  },
  {
    icon: <SiToptal className="text-4xl" />,
    link: "https://github.com",
    hoverColor: "text-gray-400",
  },
  {
    icon: <SiFreelancer className="text-4xl" />,
    link: "https://linkedin.com",
    hoverColor: "text-blue-600",
  },
];

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
    <section className="hero-section flex max-w-6xl mx-auto flex-wrap justify-between items-center min-h-screen text-black dark:text-white py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 z-10"
      >
        <div className="z-10 flex items-center justify-start">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={cn(
              "group rounded-full border border-black/10 bg-neutral-100 text-base text-black transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-white",
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out dark:text-white">
              <span>{headline}</span>
              <CgArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </motion.div>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hero-title text-4xl lg:text-5xl font-bold leading-tight text-left"
        >
          {title}
          <br />
          <span className="text-[#6430c2]">{subTitle}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hero-description text-sm md:text-base max-w-lg text-left"
        >
          {description}
        </motion.p>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-4 text-sm"
        >
          {valuePropositions.map((prop, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              className="hero-value flex items-center text-left"
            >
              <FaCheckCircle className="mr-2 text-[#6430c2] transition-colors duration-300" />
              {prop}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 flex gap-4"
        >
          <Link href={primaryButton.link}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hero-button hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80 bg-[#6430c2]"
            >
              {primaryButton.text}
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0 relative z-10"
      >
        <div className="relative w-full lg:w-[600px] h-[400px] lg:h-[600px] overflow-hidden">
          <iframe
            src={heroImage}
            className="w-full h-full"
            style={{
              border: "none",
              background: "transparent",
              pointerEvents: "none"
            }}
            title="Lottie Animation"
          ></iframe>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="text-center w-full mt-12"
      >
        <p className="mb-4 text-base font-medium text-black dark:text-white">
          Trusted by Leading Companies
        </p>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {logos.map((logo, index) => (
            <Link
              key={index}
              href={logo.link}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`text-black/60 dark:text-white/60 duration-300 ease-in-out hover:${logo.hoverColor}`}
              >
                {logo.icon}
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;