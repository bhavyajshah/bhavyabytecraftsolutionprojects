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
    <footer className="relative z-10 pb-8 bg-blue-50 text-blue-900 dark:bg-transparent dark:text-white">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 relative pt-12">
        <div className="w-full h-[1px] bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 dark:from-gray-700 dark:via-gray-500 dark:to-gray-700 absolute top-0 left-0"></div>
        <div className="flex flex-wrap justify-between lg:justify-start gap-8 lg:gap-16">
          {/* Company Information Section */}
          <div className="lg:flex-1 mb-10 w-full lg:max-w-[450px]">
            <motion.div
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5 }}
              variants={fadeInUp}
            >
              <TextLogo />
              <p className="mb-6 mt-4 text-blue-700 dark:text-gray-300 leading-relaxed">
                At ByteCraft Solutions, we&apos;re shaping the future with
                cutting-edge software solutions. Whether it&apos;s innovative mobile
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
              className="mt-8 text-sm text-blue-600 dark:text-gray-400 space-y-3"
            >
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-500 dark:text-white" />
                <p>5123 Market St. #22B, City Name, Poland 44635</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-500 dark:text-white" />
                <p>(434) 546-4356</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-500 dark:text-white" />
                <p>contact@bytecraftsolutions.com</p>
              </div>
            </motion.div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 lg:gap-20 lg:flex-1">
            {/* Company Links */}
            <div>
              <h2 className="font-bold text-xl mb-6 inline-block border-b-2 border-blue-300 dark:border-gray-700 pb-2">
                Company
              </h2>
              <ul className="space-y-3">
                {companyLinks.map(({ title, link }, idx) => (
                  <li key={idx}>
                    <motion.a
                      href={link}
                      className="text-blue-600 hover:text-blue-800 dark:text-gray-400 dark:hover:text-white transition duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {title}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h2 className="font-bold text-xl mb-6 inline-block border-b-2 border-blue-300 dark:border-gray-700 pb-2">
                Legal
              </h2>
              <ul className="space-y-3">
                {resourceLinks.map(({ title, link }, idx) => (
                  <li key={idx}>
                    <motion.a
                      href={link}
                      className="text-blue-600 hover:text-blue-800 dark:text-gray-400 dark:hover:text-white transition duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {title}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Icons and Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-12 border-t border-blue-200 dark:border-gray-700 pt-6">
          <div className="flex items-center gap-6 mb-4 sm:mb-0">
            {socialLinks.map(({ alt, link, icon }, idx) => (
              <motion.a
                key={idx}
                href={link}
                aria-label={alt}
                className="text-blue-600 hover:text-blue-800 dark:text-gray-400 dark:hover:text-white transition duration-300 text-2xl"
                whileHover={{ scale: 1.2 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
          <motion.p
            className="text-blue-500 dark:text-gray-500 text-sm text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            &copy; 2024 ByteCraft Solutions. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;