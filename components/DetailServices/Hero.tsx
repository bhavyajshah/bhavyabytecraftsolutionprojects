'use client';
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FaUpwork } from "react-icons/fa6";
import { SiFiverr, SiFreelancer, SiToptal } from "react-icons/si";
import AnimatedShinyText from "../../hooks/AnimatedGradientText";
import { cn } from "@/lib/utils";
import { CgArrowRight } from "react-icons/cg";
import Link from "next/link";

gsap.registerPlugin(ScrollToPlugin);

type Logo = {
  icon: JSX.Element;
  link: string;
  hoverColor: string;
};

type HeroProps = {
  heroImage?: any;
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
  // Add more logos here
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
    <section className="hero-section flex max-w-6xl mx-auto flex-wrap justify-between items-center min-h-screen text-white py-24 relative">
      <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 z-10">
        <div className="z-10 flex items-center justify-start">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>{headline}</span>
              <CgArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>
        <h1 className="hero-title text-4xl lg:text-5xl font-bold leading-tight text-left">
          {title}
          <br />
          <span className="text-[#6430c2]">{subTitle}</span>
        </h1>

        <p className="hero-description text-sm md:text-base max-w-lg text-left">
          {description}
        </p>
        <ul className="flex flex-wrap gap-4 text-sm">
          {valuePropositions.map((prop, index) => (
            <li
              className="hero-value flex items-center text-left"
              key={index}
            >
              <FaCheckCircle className="mr-2 text-[#6430c2] transition-colors duration-300" />
              {prop}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-4">
          <Link
            href={primaryButton.link}
            className="hero-button hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80 transform hover:scale-105"
          >
            {primaryButton.text}
          </Link>
        </div>
      </div>


      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0 relative z-10">
        <div className="relative w-full lg:w-[600px] h-[400px] lg:h-[600px] overflow-hidden shadow-2xl">
          <iframe
            src={heroImage}
            className="w-full h-full rounded-lg"
            style={{ border: "none" }}
            title="Lottie Animation"
          ></iframe>
        </div>
      </div>


      <div className="text-center w-full">
        <p className="mb-4 text-base font-medium text-white">
          Trusted by Leading Companies
        </p>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {logos.map((logo, index) => (
            <Link
              key={index}
              href={logo.link}
              className={`text-white/60 duration-300 ease-in-out hover:${logo.hoverColor}`}
            >
              {logo.icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
