"use client";
import React from "react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  return (
    <section className="pt-[50px]">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="grid sm:grid-cols-12 gap-[30px]">
          {/* Statement */}
          <motion.div
            className="sm:col-span-12 relative rounded-3xl features-box-border"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-3xl p-10 xl:p-15 box-hover">
              <div className="flex items-center justify-between relative z-20">
                <div className="max-w-[477px] w-full">
                  <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-[18px] rounded-full">
                    <img
                      src="https://ai-tool-tailwind.preview.uideck.com/images/icon-title.svg"
                      alt="icon"
                    />
                    <span className="hero-subtitle-text">
                      ByteCraftSolutions Statement
                    </span>
                  </span>
                  <h3 className="text-white mb-[18px] font-bold text-[32px]">
                    Crafting Digital Solutions with Precision
                  </h3>
                  <p className="font-medium mb-10 md:text-md">
                    At ByteCraftSolutions, we are dedicated to delivering
                    innovative and scalable software solutions that drive
                    business success and technological advancement.
                  </p>
                  <a
                    href="#"
                    className="features-button-gradient relative inline-flex items-center gap-1.5 rounded-full py-3 px-6 text-white text-sm ease-in duration-300 hover:shadow-button"
                  >
                    Learn more
                    <svg
                      width="14"
                      height="12"
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3992 5.60002L8.22422 0.350024C7.99922 0.125024 7.64922 0.125024 7.42422 0.350024C7.19922 0.575024 7.19922 0.925025 7.42422 1.15002L11.6242 5.42503H0.999219C0.699219 5.42503 0.449219 5.67502 0.449219 5.97502C0.449219 6.27502 0.699219 6.55003 0.999219 6.55003H11.6742L7.42422 10.875C7.19922 11.1 7.19922 11.45 7.42422 11.675C7.52422 11.775 7.67422 11.825 7.82422 11.825C7.97422 11.825 8.12422 11.775 8.22422 11.65L13.3992 6.40002C13.6242 6.17502 13.6242 5.82502 13.3992 5.60002Z"
                        fill="white"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="max-w-[428px] w-full hidden sm:block">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images/big-icon.svg"
                    alt="icon"
                  />
                </div>
              </div>

              {/* Background Shapes */}
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
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="sm:col-span-7 relative rounded-3xl features-box-border"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-3xl px-11 pt-[50px] pb-[56px] box-hover box-hover-small">
              <div className="relative z-20">
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-[54px] mx-auto">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images/icon-05.svg"
                    alt="icon"
                  />
                </span>
                <h3 className="text-white mb-[18px] font-semibold text-[24px]">
                  Mission
                </h3>
                <p className="font-medium md:text-md">
                  Our mission at ByteCraftSolutions is to provide cutting-edge
                  software solutions that empower businesses to achieve their
                  goals with efficiency, innovation, and unparalleled support.
                </p>
              </div>

              {/* Background Shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute left-0 bottom-0">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images/blur-06.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
                <span className="absolute right-0 top-0">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images/blur-07.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
                <span className="absolute right-[16%] top-[16%]">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images/shape-04.svg"
                    alt="shape"
                  />
                </span>
                <span className="absolute left-0 bottom-0">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images/blur-08.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
                <span className="absolute left-0 bottom-0">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images/blur-09.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="sm:col-span-5 relative rounded-3xl features-box-border"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative overflow-hidden rounded-3xl px-11 pt-[50px] pb-[56px] box-hover box-hover-small">
              <div className="relative z-20">
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-[54px] mx-auto">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images/icon-07.svg"
                    alt="icon"
                  />
                </span>
                <h3 className="text-white mb-[18px] font-semibold text-[24px]">
                  Vision
                </h3>
                <p className="font-medium md:text-md">
                  Our vision is to be a global leader in software development,
                  recognized for our commitment to innovation, quality, and
                  excellence in every project we undertake.
                </p>
              </div>

              {/* Background Shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-[14%] top-[17%]">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images/shape-05.svg"
                    alt="shape"
                  />
                </span>
                <span className="absolute left-0 bottom-0">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images/blur-10.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
                <span className="absolute top-0 right-0">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images/blur-11.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
                <span className="absolute top-0 right-0">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images/blur-12.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
                <span className="absolute left-0 bottom-0">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images/blur-09.svg"
                    alt="shape"
                  />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
