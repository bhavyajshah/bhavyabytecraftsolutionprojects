"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";

import { gsap } from "gsap";
import { steps } from "../data/Data";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const hoverEffect = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export function TimelineDemo() {
  const data = steps.map((step) => ({
    title: step.title,
    content: (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        className="mb-12"
      >
        <motion.div
          whileHover="hover"
          className="border border-blue-200 dark:border-gray-700 p-4 rounded-xl shadow-lg bg-white dark:bg-gray-800"
          variants={hoverEffect}
        >
          <p className="text-blue-800 dark:text-white text-lg md:text-md font-semibold items-center flex flex-row mb-4">
            <step.icon className="text-blue-600 dark:text-blue-400 text-xl mr-4" />
            {step.title}
          </p>
          <p className="text-blue-700 dark:text-gray-300 text-md md:text-sm font-normal mb-4">
            {step.description}
          </p>
          <ul className="list-disc ml-8 text-md md:text-sm text-blue-600 dark:text-gray-400 mb-4">
            {step.list.map((item, index) => (
              <motion.li
                key={index}
                className="mb-2 text-blue-700 dark:text-gray-300 text-md md:text-sm"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
          <motion.div whileHover="hover" className="rounded-lg shadow-lg">
            <div className="w-full h-[250px] md:h-[400px]">
              <img
                src={step.image.src}
                alt={step.title}
                className="rounded-lg object-cover w-full h-full shadow-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    ),
  }));

  React.useEffect(() => {
    gsap.from(".timeline-step", {
      opacity: 0,
      y: 100,
      stagger: 0.3,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="w-full py-16">
      <Timeline data={data} />
    </div>
  );
}