"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "../data/Data";
import { useTheme } from "next-themes";

interface FeaturesSectionProps {
  showMoreAction?: string;
  showMoreLoad?: boolean;
  showAll?: boolean;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  showMoreAction,
  showMoreLoad = false,
  showAll = false,
}) => {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const initialVisibleServices = showAll ? services.length : 6;
  const [visibleServices, setVisibleServices] = useState(initialVisibleServices);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const showMoreServices = () => {
    if (showMoreLoad) {
      setVisibleServices((prevVisibleServices) => prevVisibleServices + 3);
    }
  };

  const serviceAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const currentTheme = isMounted ? resolvedTheme : "light";

  return (
    <section
      id="features"
      className={`overflow-hidden pt-8 lg:pt-16 xl:pt-20 scroll-mt-8 ${currentTheme === "light" ? "bg-white" : ""
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 xl:px-0">
        <div className="text-center">
          <h2
            className={`mb-4 text-2xl font-extrabold sm:text-4xl xl:text-5xl ${currentTheme === "light" ? "text-black" : "text-white"
              }`}
          >
            Services We Offer
          </h2>
          <p
            className={`max-w-[714px] mx-auto mb-5 font-medium ${currentTheme === "light" ? "text-gray-700" : "text-zinc-300"
              }`}
          >
            At Byte Craft Systems, we offer a comprehensive suite of software
            solutions designed to empower your business. Our expert team
            leverages cutting-edge technologies to deliver innovative, scalable,
            and efficient solutions tailored to your unique needs.
          </p>
        </div>

        <ul className="mx-auto mt-8 max-w-7xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, visibleServices).map((service, index) => (
            <motion.li
              key={index}
              className={`group relative z-0 h-full overflow-hidden rounded-xl p-6 border transition-transform duration-300 ${currentTheme === "light"
                ? "bg-white border-gray-200 shadow-md hover:shadow-lg"
                : " border-gray-700"
                }`}
              variants={serviceAnimation}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/services${service.href}`}>
                <motion.div
                  className="relative z-10 space-y-3"
                  initial={{ x: 0 }}
                  whileHover={{
                    cursor: "pointer",
                    x: [0, -5, 0],
                    transition: { duration: 0.3 },
                  }}
                >
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${currentTheme === "light"
                      ? "bg-gray-100 text-gray-800 border border-gray-300"
                      : "bg-gray-700 text-gray-300"
                      }`}
                  >
                    {service.icon}
                  </div>
                  <h3
                    className={`font-semibold ${currentTheme === "light" ? "text-black" : "text-zinc-100"
                      }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={
                      currentTheme === "light" ? "text-gray-700" : "text-zinc-300"
                    }
                  >
                    {service.description}
                  </p>
                </motion.div>
              </Link>
              {currentTheme === "dark" && (
                <motion.div className="absolute inset-0 z-0">
                  <img
                    alt={service.title}
                    className="absolute inset-0 z-0 h-full w-full object-cover"
                    src="https://floatui.com/_next/static/media/feature-cover.76d1a2e9.svg"
                  />
                </motion.div>
              )}
            </motion.li>
          ))}
        </ul>

        {!showAll && visibleServices < services.length && (
          <div className="text-center mt-8">
            <button
              className={`inline-flex rounded-lg py-3 px-7 font-medium ease-in duration-300 hover:opacity-80 ${currentTheme === "light"
                ? "bg-black text-white border border-gray-300 shadow-md hover:shadow-lg"
                : "hero-button-gradient text-white"
                }`}
              onClick={() => {
                if (showMoreAction) {
                  window.location.href = showMoreAction;
                } else {
                  showMoreServices();
                }
              }}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;
