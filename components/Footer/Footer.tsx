"use client";
import React from "react";
import { TextLogo } from "../icons/Icons";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  { title: "Facebook", link: "/", icon: <FaFacebookF />, alt: "Facebook" },
  { title: "Twitter", link: "/", icon: <FaTwitter />, alt: "Twitter" },
  { title: "Github", link: "/", icon: <FaGithub />, alt: "Github" },
];

const companyLinks = [
  { title: "About Us", link: "/" },
  { title: "Contact & Support", link: "/" },
  { title: "Setting & Privacy", link: "/" },
  { title: "FAQs", link: "/" },
];

const resourceLinks = [
  { title: "Privacy", link: "/" },
  { title: "Terms", link: "/" },
  { title: "What's New", link: "/" },
  { title: "Terms & Conditions", link: "/" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <footer className="relative z-10 pb-4 text-white">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 relative pt-10">
        <div className="w-full h-[1px] footer-divider-gradient absolute top-0 left-0"></div>
        <div className="flex flex-wrap justify-between">
          <div className="mb-10 max-w-[571px] w-full">
            <motion.div
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5 }}
              variants={fadeInUp}
            >
              <TextLogo />
              <p className="mb-6 mt-4 xl:w-4/5 text-gray-300">
                At ByteCraft Solutions, we’re shaping the future with
                cutting-edge software solutions. Whether it’s innovative mobile
                apps or AI-driven enterprise tools, we help businesses thrive in
                the digital age. Partner with us to craft bespoke solutions that
                redefine possibilities.
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
              className="mt-8 text-sm text-gray-400 space-y-2"
            >
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-white" />
                <p className="text-gray-400 text-md">
                  5123 Market St. #22B, City Name, Poland 44635
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-white text-md" />
                <p className="text-gray-400"> (434) 546-4356</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-white text-md" />
                <p className="text-gray-400">contact@bytecraftsolutions.com</p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-x-20 lg:gap-x-24 xl:gap-x-32 xl:pl-16">
            <div>
              <h2 className="font-bold text-lg leading-7 mb-4">Company</h2>
              <ul className="space-y-2">
                {companyLinks.map(({ title, link }, idx) => (
                  <li key={idx}>
                    <motion.a
                      href={link}
                      className="text-gray-400 hover:text-white transition duration-300 leading-loose"
                      whileHover={{ scale: 1.1 }}
                    >
                      {title}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-lg leading-7 mb-4">Legal</h2>
              <ul className="space-y-2">
                {resourceLinks.map(({ title, link }, idx) => (
                  <li key={idx}>
                    <motion.a
                      href={link}
                      className="text-gray-400 hover:text-white transition duration-300 leading-loose"
                      whileHover={{ scale: 1.1 }}
                    >
                      {title}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center justify-between">
          <motion.p
            className="text-gray-500 text-sm text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            &copy; 2024 ByteCraft Solutions. All rights reserved.
          </motion.p>
          <div className="flex items-center gap-5">
            {socialLinks.map(({ alt, title, link, icon }, idx) => (
              <motion.a
                key={idx}
                href={link}
                aria-label={alt}
                className="hover:text-white transition duration-300 text-lg"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
