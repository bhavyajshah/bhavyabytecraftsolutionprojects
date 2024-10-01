"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaGlobe,
  FaRobot,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";
import { GrTestDesktop } from "react-icons/gr";

const FeaturesSection = () => {
  const services = [
    {
      title: "Mobile Development",
      description:
        "Crafting seamless mobile experiences across platforms for businesses and users alike.",
      icon: <FaMobileAlt />,
    },
    {
      title: "Web Apps and Portals",
      description:
        "Building responsive, scalable, and secure web applications tailored to your needs.",
      icon: <FaGlobe />,
    },
    {
      title: "AI Programming & Technical Solutions",
      description:
        "Leveraging AI to deliver cutting-edge solutions and enhance operational efficiency.",
      icon: <FaRobot />,
    },
    {
      title: "Backend Development",
      description:
        "Developing robust backend architectures that ensure reliability, security, and performance.",
      icon: <FaDatabase />,
    },
    {
      title: "Q/A & Testing",
      description:
        "Ensuring the highest quality and reliability for your software.",
      icon: <GrTestDesktop />,
    },
    {
      title: "Cloud Solutions & DevOps",
      description:
        "Empowering your infrastructure with cloud integration and continuous delivery pipelines.",
      icon: <FaCloud />,
    },
  ];

  return (
    <section
      id="features"
      className="overflow-hidden pt-8 lg:pt-16 xl:pt-20 scroll-mt-8"
    >
      <div className="max-w-[1222px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="text-center" style={{ visibility: "visible" }}>
          <h2 className="text-white mb-4 text-2xl font-extrabold sm:text-4xl xl:text-5xl">
            Services We Offer
          </h2>
          <p className="max-w-[714px] mx-auto mb-5 font-medium text-zinc-300">
            At Byte Craft Systems, we offer a comprehensive suite of software
            solutions designed to empower your business. Our expert team
            leverages cutting-edge technologies to deliver innovative, scalable,
            and efficient solutions tailored to your unique needs.
          </p>
        </div>

        <ul className="mx-auto mt-8 max-w-7xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.li
              key={index}
              className="group relative z-0 h-full overflow-hidden rounded-xl border border-[#190C3B] p-6 transition-transform duration-300"
            >
              <motion.div
                className="relative z-10 space-y-3"
                initial={{ x: 0 }}
                whileHover={{
                  cursor: "pointer",
                  x: [0, -5, 0],
                  transition: { duration: 0.3 },
                }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-gray-500">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-zinc-100">{service.title}</h3>
                <p className="text-zinc-300">{service.description}</p>
              </motion.div>
              <motion.div className="absolute inset-0 z-0">
                <img
                  alt={service.title}
                  className="absolute inset-0 z-0 h-full w-full object-cover"
                  src="https://floatui.com/_next/static/media/feature-cover.76d1a2e9.svg"
                />
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;
