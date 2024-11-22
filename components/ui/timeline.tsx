"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const { theme } = useTheme();

  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={`w-full font-sans md:px-10 ${theme === 'light' ? 'bg-gradient-to-br from-gray-50 to-white' : 'bg-transparent'}`}
      ref={containerRef}
    >
      <div className="text-center ">
        <h2 className="mb-6 text-3xl font-extrabold sm:text-4xl xl:text-heading-2 transition duration-500 ease-in-out hover:text-gray-600 dark:text-white dark:hover:text-blue-400">
          How Can We Assist Your Business?
        </h2>
        <p className="max-w-[714px] mx-auto mb-5 md:text-lg font-medium text-gray-700 dark:text-gray-300">
          At our software agency, we specialize in turning ideas into digital
          reality. With over 30 years of combined experience, we&apos;ve partnered
          with startups, SMBs, and global enterprises to craft scalable,
          innovative software solutions.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-gray-500 dark:bg-blue-400 border border-gray-600 dark:border-blue-300 p-2" />
              </div>
              <h3 className="hidden md:block text-2xl md:pl-20 font-bold text-gray-800 dark:text-gray-300">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-gray-800 dark:text-gray-300">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-300 dark:via-gray-600 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-gray-600 via-gray-400 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};