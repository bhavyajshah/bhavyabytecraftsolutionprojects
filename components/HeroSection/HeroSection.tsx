'use client'

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { BackgroundImageBlur } from "../icons/Icons";
import Image from "next/image";
import { useTheme } from "next-themes";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <section
        className="relative overflow-hidden z-10 pt-20 sm:pt-35 md:pt-40 xl:pt-45"
      >
        {/* Ensure background is non-interactive */}
        <div className="max-w-6xl mx-auto">
          <div className="absolute inset-0 overflow-hidden -mx-28 pointer-events-none">
            {theme === 'dark' && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <BackgroundImageBlur />
              </div>
            )}
          </div>
        </div>

        <ContainerScroll
          titleComponent={
            <>
              <div className="relative z-20 mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0">
                {/* Ensure content is on top */}
                <div className="text-center">
                  <h2 className="mb-4 text-2xl font-semibold dark:text-white text-black">
                    Welcome to ByteCraft Solutions!
                  </h2>

                  <h1 className="mb-6 text-3xl font-extrabold sm:text-5xl xl:text-heading-1 dark:text-white bg-black bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-gray-100 dark:to-gray-300">
                    Elevate Your Business with Custom Software Solutions
                  </h1>
                  <p className="max-w-[500px] mx-auto mb-9 font-medium md:text-lg dark:text-white text-black">
                    At ByteCraft Solutions, we transform your ideas into powerful,
                    tailored applications. Experience the difference of working
                    with a dedicated team that puts your business first.
                  </p>
                  <Link
                    href="/pricing"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white inline-flex rounded-lg py-3 px-7 font-medium ease-in duration-300 hover:opacity-80"
                  >
                    Book a Free Consultation
                  </Link>
                </div>
              </div>
            </>
          }
        >
          <Image
            src={"/landingpageherosection.webp"}
            alt="hero"
            width={800}
            height={800}
            className="w-full rounded-2xl object-cover h-full"
          />
        </ContainerScroll>
        {/* <BackgroundBeams /> */}
      </section>
    </>
  );
};

export default HeroSection;
