"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";

const MissionSection = () => {
  const { theme } = useTheme();

  return (
    <section className="my-40">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="grid sm:grid-cols-12 gap-[30px]">
          <motion.div
            className={`sm:col-span-12 relative rounded-3xl shadow-lg ${theme === "dark" ? "features-box-border" : "border border-gray-200"
              }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`relative overflow-hidden rounded-3xl p-10 xl:p-15 ${theme === "dark" ? "box-hover" : "bg-gradient-to-br from-white to-gray-50"
              }`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between relative z-20">
                <div className="max-w-[477px] w-full mb-6 sm:mb-0">
                  <h3 className={`mb-[18px] font-bold text-[32px] ${theme === "dark" ? "text-white" : "text-gray-900"
                    }`}>
                    Mission
                  </h3>
                  <p className={`font-medium mb-10 md:text-md ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}>
                    Our mission at ByteCraftSolutions is to provide cutting-edge
                    software solutions that empower businesses to achieve their
                    goals with efficiency, innovation, and unparalleled support.
                  </p>
                  <Link
                    href="/"
                    className={`w-full sm:w-[200px] relative rounded-lg text-sm flex items-center justify-center gap-1.5 py-3 px-6 ${theme === "dark"
                      ? "button-border-gradient text-white shadow-button hover:button-gradient-hover hover:shadow-none"
                      : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                      }`}
                  >
                    Learn more
                  </Link>
                </div>
                <div className="max-w-[428px] w-full hidden sm:block">
                  <img src="/image.png" alt="icon" />
                </div>
              </div>

              {/* Background Shapes - Only visible in dark mode */}
              {theme === "dark" && (
                <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden -mx-[112px]">
                  <span className="absolute right-0 bottom-0">
                    <img
                      src="https://ai-tool-tailwind.preview.uideck.com/images/shape-01.png"
                      alt="shape"
                    />
                  </span>
                  <span className="absolute left-0 top-0">
                    <img
                      src="https://ai-tool-tailwind.preview.uideck.com/images/shape-02.svg"
                      alt="shape"
                    />
                  </span>
                  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0">
                    <img
                      src="https://ai-tool-tailwind.preview.uideck.com/images/blur-03.svg"
                      alt="blur"
                      className="max-w-none"
                    />
                  </span>
                  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0">
                    <img
                      src="https://ai-tool-tailwind.preview.uideck.com/images/blur-04.svg"
                      alt="blur"
                      className="max-w-none"
                    />
                  </span>
                  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0">
                    <img
                      src="https://ai-tool-tailwind.preview.uideck.com/images/blur-05.svg"
                      alt="blur"
                      className="max-w-none"
                    />
                  </span>
                  <span className="absolute right-0 top-0">
                    <img
                      src="https://ai-tool-tailwind.preview.uideck.com/images/shape-03.svg"
                      alt="shape"
                      className="max-w-none"
                    />
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;