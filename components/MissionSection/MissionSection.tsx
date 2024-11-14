"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const MissionSection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="my-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 xl:px-0">
        <div className="grid sm:grid-cols-12 gap-[30px]">
          <motion.div
            className={`sm:col-span-12 relative rounded-3xl shadow-lg transition-all duration-500 ${theme === "dark"
              ? "border border-gradient-to-r"
              : "bg-gradient-to-br from-white to-gray-50 shadow-md border border-gray-200"
              }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className={`relative overflow-hidden rounded-3xl p-10 xl:p-15 transition-all duration-500 ${theme === "dark"
                ? "text-gray-200"
                : "bg-gradient-to-br from-white to-gray-50 text-gray-800"
                }`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between relative z-20">
                <div className="max-w-[477px] w-full mb-6 sm:mb-0">
                  <motion.h3
                    className={`mb-[18px] font-bold text-[32px] transition-colors duration-500 ${theme === "dark" ? "text-purple-400" : "text-blue-700"
                      }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    Mission
                  </motion.h3>
                  <p
                    className={`font-medium mb-10 md:text-md transition-colors duration-500 ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                  >
                    Our mission at ByteCraftSolutions is to provide cutting-edge
                    software solutions that empower businesses to achieve their
                    goals with efficiency, innovation, and unparalleled support.
                  </p>
                  <Link
                    href="/"
                    className={`w-full sm:w-[200px] relative rounded-lg text-sm flex items-center justify-center gap-1.5 py-3 px-6 transition-all duration-300 ${theme === "dark"
                      ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg hover:shadow-none hover:from-indigo-500 hover:to-purple-500"
                      : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                      }`}
                  >
                    Learn more
                  </Link>
                </div>
                <div className="max-w-[428px] w-full hidden sm:block">
                  <Image src="/image.png" alt="icon" width={428} height={300} />
                </div>
              </div>

              {theme === "dark" && (
                <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden -mx-[112px]">
                  <span className="absolute right-0 bottom-0">
                    <Image
                      src="https://ai-tool-tailwind.preview.uideck.com/images/shape-01.png"
                      alt="shape"
                      width={500}
                      height={500}
                    />
                  </span>
                  <span className="absolute left-0 top-0">
                    <Image
                      src="https://ai-tool-tailwind.preview.uideck.com/images/shape-02.svg"
                      alt="shape"
                      width={500}
                      height={500}
                    />
                  </span>

                  <span className="absolute right-0 top-0">
                    <Image
                      src="https://ai-tool-tailwind.preview.uideck.com/images/shape-03.svg"
                      alt="shape"
                      className="max-w-none"
                      width={500}
                      height={500}
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
