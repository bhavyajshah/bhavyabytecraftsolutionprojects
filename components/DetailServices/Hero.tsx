'use client';
import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FaUpwork } from "react-icons/fa6";
import { SiFiverr, SiFreelancer, SiToptal } from "react-icons/si";

// Register the ScrollToPlugin
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
    <section className="hero-section flex flex-wrap justify-between items-center min-h-screen text-white py-24 relative">
      {/* Left Content Section */}
      <div className="w-full lg:w-1/2 px-6 lg:pl-12 flex flex-col justify-center space-y-6 z-10">
        <h2 className="hero-headline relative font-medium text-sm inline-flex items-center gap-2 py-2 px-6 button-border-gradient rounded-full text-white">
          {headline}
        </h2>
        <h1 className="hero-title text-4xl lg:text-5xl font-bold leading-tight text-left">
          {title}
          <br />
          <span className="text-blue-400">{subTitle}</span>
        </h1>

        <p className="hero-description text-sm md:text-base max-w-lg text-left">
          {description}
        </p>

        {/* Value Propositions */}
        <ul className="flex flex-wrap gap-4 text-sm">
          {valuePropositions.map((prop, index) => (
            <li
              className="hero-value flex items-center text-left"
              key={index}
            >
              <FaCheckCircle className="mr-2 text-green-400 hover:text-green-300 transition-colors duration-300" />
              {prop}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <a
            href={primaryButton.link}
            className="hero-button hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80 transform hover:scale-105"
          >
            {primaryButton.text}
          </a>
        </div>
      </div>

      {/* Creative iFrame Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0 relative z-10">
        <div className="relative w-full lg:w-[600px] h-[400px] lg:h-[500px] overflow-hidden shadow-2xl">
          <iframe
            src={heroImage}
            className="w-full h-full rounded-lg"
            style={{ border: "none" }}
            title="Lottie Animation"
          ></iframe>
        </div>
      </div>

      {/* Company Logos Section */}
      <div className="text-center mt-8 w-full">
        <p className="mb-4 text-base font-medium text-white">
          Trusted by Leading Companies
        </p>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {logos.map((logo, index) => (
            <a
              key={index}
              href={logo.link}
              className={`text-white/60 duration-300 ease-in-out hover:${logo.hoverColor}`}
            >
              {logo.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
