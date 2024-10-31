"use client";
import React, { useState } from "react";
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
  const { theme } = useTheme();
  const initialVisibleServices = showAll ? services.length : 6;
  const [visibleServices, setVisibleServices] = useState(initialVisibleServices);

  const showMoreServices = () => {
    if (showMoreLoad) {
      setVisibleServices((prevVisibleServices) => prevVisibleServices + 3);
    }
  };

  const serviceAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="features"
      className={`overflow-hidden pt-8 lg:pt-16 xl:pt-20 scroll-mt-8 ${theme === 'light' ? 'bg-gradient-to-br from-blue-50 to-white' : ''
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 xl:px-0">
        <div className="text-center" style={{ visibility: "visible" }}>
          <h2 className={`mb-4 text-2xl font-extrabold sm:text-4xl xl:text-5xl ${theme === 'light' ? 'text-blue-800' : 'text-white'
            }`}>
            Services We Offer
          </h2>
          <p className={`max-w-[714px] mx-auto mb-5 font-medium ${theme === 'light' ? 'text-blue-700' : 'text-zinc-300'
            }`}>
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
              className={`group relative z-0 h-full overflow-hidden rounded-xl p-6 transition-transform duration-300 ${theme === 'light'
                ? 'bg-white shadow-lg hover:shadow-xl'
                : 'border border-[#190C3B]'
                }`}
              variants={serviceAnimation}
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
                  <div className={`flex h-9 w-9 items-center justify-center rounded-full ${theme === 'light'
                    ? 'bg-blue-100 text-blue-600'
                    : 'border border-zinc-700 text-gray-500'
                    }`}>
                    {service.icon}
                  </div>
                  <h3 className={`font-semibold ${theme === 'light' ? 'text-blue-800' : 'text-zinc-100'
                    }`}>{service.title}</h3>
                  <p className={theme === 'light' ? 'text-blue-600' : 'text-zinc-300'}>
                    {service.description}
                  </p>
                </motion.div>
              </Link>
              {
                theme === "dark" && <motion.div className="absolute inset-0 z-0">
                  <img
                    alt={service.title}
                    className="absolute inset-0 z-0 h-full w-full object-cover"
                    src="https://floatui.com/_next/static/media/feature-cover.76d1a2e9.svg"
                  />
                </motion.div>
              }

            </motion.li>
          ))}
        </ul>

        {!showAll && visibleServices < services.length && (
          <div className="text-center mt-8">
            <button
              className={`inline-flex rounded-lg py-3 px-7 font-medium ease-in duration-300 hover:opacity-80 ${theme === 'light'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'hero-button-gradient text-white'
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