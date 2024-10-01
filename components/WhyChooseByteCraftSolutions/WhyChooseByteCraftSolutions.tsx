"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const styles = [
  {
    id: 1,
    title: "Expertise",
    description: "Write a wedding toast in the style of a 1930s gangster",
  },
  {
    id: 2,
    title: "Quality Assurance",
    description:
      "Write the introductory paragraph of an essay on the paradox of free will in the style of Friedrich Nietzsche",
  },
  {
    id: 3,
    title: "Customer-Centric Approach",
    description:
      "Write a rap about how to take over the world in the style of Eminem",
  },
  {
    id: 4,
    title: "Innovation",
    description:
      "Create groundbreaking tech solutions to elevate your business.",
  },
];

const WhyChooseByteCraftSolutions = () => {
  const [activeStyle, setActiveStyle] = useState(styles[0]);

  useEffect(() => {
    // GSAP parallax effect for left side buttons
    gsap.to(".parallax", {
      y: 100,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".parallax",
        start: "top bottom",
        scrub: 1,
      },
    });

    // Sticky effect for right content section
    gsap.to(".sticky-section", {
      scrollTrigger: {
        trigger: ".sticky-section",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <div className="relative w-full px-4 py-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-extrabold text-white transition duration-500 hover:text-indigo-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Why Choose ByteCraft Solutions?
        </motion.h2>
        <p className="max-w-[714px] mx-auto mt-4 text-lg text-gray-300">
          At ByteCraft, we turn your visions into scalable digital solutions.
          Our team’s combined expertise of over 30 years helps us create
          innovative software for all business sizes.
        </p>
      </div>

      {/* Main Grid: Tabs and Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Left Side: Tabs */}
        <div className="parallax flex flex-col space-y-6 overflow-y-auto h-full">
          {styles.map((style) => (
            <motion.button
              key={style.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveStyle(style)}
              className={`mb-4 w-full rounded-lg p-6 text-left shadow-lg transition-transform ${
                activeStyle.id === style.id
                  ? "bg-transparent border"
                  : "bg-gray-700 text-gray-200"
              } hover:shadow-2xl`}
            >
              <h6 className="text-xl font-semibold">{style.title}</h6>
              <p className="mt-2 hidden md:block text-base">
                {style.description}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Right Side: Sticky Content */}
        <div className="col-span-2 sticky-section">
          <motion.div
            className="relative mx-auto max-w-full rounded-lg shadow-2xl transition duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex h-6 items-center bg-gray-700 px-3 space-x-1 rounded-t-lg">
              <span className="h-3 w-3 rounded-full bg-red-400"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
              <span className="h-3 w-3 rounded-full bg-green-400"></span>
            </div>
            <div className="p-8 text-gray-200">
              <p className="inline-block text-xl font-light">
                {activeStyle.description}
              </p>
              <div className="mt-4">
                <h2 className="text-2xl font-bold">
                  {activeStyle.title} Writing Style
                </h2>
                <p className="mt-2 text-base">
                  This is an example of the {activeStyle.title} writing style.
                  We can tailor it to match your needs and vision.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseByteCraftSolutions;
