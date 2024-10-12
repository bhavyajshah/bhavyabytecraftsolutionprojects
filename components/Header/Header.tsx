"use client";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PiHandWaving } from "react-icons/pi";
import { TextLogo } from "../icons/Icons";
import { usePathname } from "next/navigation";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import { services } from "../data/Data";

const Header = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/", as: "/" },
    { label: "About Us", href: "/aboutus", as: "/about-us" },
    { label: "FAQ's", href: "/faq", as: "/faqs" },
    { label: "Blog", href: "/blog", as: "/blog" },
  ];

  return (
    <header
      className={`fixed left-0 top-0 w-full z-50 py-3 lg:py-2 transition duration-200 ${stickyMenu ? "bg-[#1A0C3B]" : "bg-transparent"
        }`}
    >
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 xl:px-0 lg:flex items-center justify-between relative">
        <nav className="flex items-center justify-between w-full">
          {/* Logo & Mobile Menu Toggle */}
          <div className="flex flex-row items-center justify-between w-full lg:w-auto">
            <Link href="/">
              <TextLogo className="transition transform hover:scale-105" />
            </Link>
            <button
              className="lg:hidden block text-white focus:outline-none ml-auto"
              onClick={() => setNavigationOpen(!navigationOpen)}
              aria-label="Toggle navigation"
            >
              {navigationOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex justify-center w-1/2">
            <ul className="flex gap-5">
              {navLinks.map((item, index) => (
                <React.Fragment key={index}>
                  <li className="nav__menu">
                    <Link
                      href={item.href}
                      className="text-white/80 text-sm py-2 px-4 rounded-lg hover:bg-gradient-to-b from-white/10 to-transparent transition-all duration-300 ease-in-out flex items-center gap-2"
                    >
                      {item.label}
                    </Link>
                  </li>
                  {item.label === "Home" && (
                    <li>
                      <Popover>
                        {({ open, close }) => (
                          <>
                            <PopoverButton className="text-white/80 text-sm py-2 px-4 rounded-lg hover:bg-gradient-to-b from-white/10 to-transparent transition-all duration-300 ease-in-out flex items-center gap-2">
                              Services
                              <FaChevronDown
                                className={`transition-transform duration-200 ${open ? "rotate-180" : ""
                                  }`}
                              />
                            </PopoverButton>

                            <AnimatePresence>
                              {open && (
                                <PopoverPanel
                                  static
                                  as={motion.div}
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  className="absolute left-0 mt-3 p-3 w-full max-w-screen overflow-hidden z-50 bg-[#1A0C3B] rounded-lg shadow-xl origin-top grid grid-cols-3 gap-6 overflow-y-scroll"
                                >
                                  {services.map((service, index) => (
                                    <div
                                      key={index}
                                      className="flex flex-row gap-4 items-start space-y-2 hover:rounded-lg hover:bg-gradient-to-b from-white/10 to-transparent"
                                    >
                                      <div className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500">
                                        {service.icon}
                                      </div>
                                      <div>
                                        <Link
                                          href={`/services${service.href}`}
                                          className={`flex items-center gap-2 text-gray-200 rounded-lg transition duration-200 ${pathname === service.href
                                              ? "bg-gradient-to-b from-white/10 to-transparent"
                                              : ""
                                            }`}
                                          onClick={() => close()}
                                        >
                                          {service.title}
                                        </Link>
                                        <p className="text-gray-400 text-sm">
                                          {service.description}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </PopoverPanel>
                              )}
                            </AnimatePresence>
                          </>
                        )}
                      </Popover>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>

          {/* Desktop Get in Touch Button */}
          <div className="hidden lg:flex lg:w-1/4 justify-end">
            <Link
              href="/pricing"
              className="button-border-gradient relative rounded-lg text-white text-sm flex items-center gap-1.5 py-2 px-4.5 shadow-button hover:button-gradient-hover hover:shadow-none px-4"
            >
              <PiHandWaving className="w-6 h-6" />
              Get in Touch
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-[#1A0C3B] shadow-lg transition-transform duration-300 ease-in-out z-50 ${navigationOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white focus:outline-none"
          onClick={() => setNavigationOpen(false)}
        >
          <FaTimes className="w-6 h-6" />
        </button>

        <div className="p-6 text-white">
          <nav>
            <ul className="flex flex-col gap-4">
              {navLinks.map((item, index) => (
                <li key={index} className="nav__menu">
                  <Link
                    href={item.href}
                    className="text-white/80 text-sm py-2 px-4 rounded-lg hover:bg-gradient-to-b from-white/10 to-transparent transition-all duration-300 ease-in-out flex items-center gap-2"
                    onClick={() => setNavigationOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  className="text-white/80 text-sm py-2 px-4 rounded-lg outline-none transition-all duration-300 ease-in-out flex items-center gap-2"
                  onClick={() => setShowServices(!showServices)}
                >
                  Services
                  <FaChevronDown
                    className={`transition-transform duration-200 ${showServices ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <AnimatePresence>
                  {showServices && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-4 mt-2 space-y-2"
                    >
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          href={`/services${service.href}`}
                          className="flex items-center gap-2 text-gray-200 rounded-lg p-2 transition duration-200 hover:bg-gradient-to-b from-white/10 to-transparent"
                          onClick={() => setNavigationOpen(false)}
                        >
                          {service.icon} {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </nav>

          {/* Mobile Get in Touch Button */}
          <div className="mt-4">
            <Link
              href="/pricing"
              className="button-border-gradient relative rounded-lg text-white text-sm flex items-center gap-1.5 py-2 px-4.5 shadow-button hover:button-gradient-hover hover:shadow-none"
              onClick={() => setNavigationOpen(false)}
            >
              <PiHandWaving className="w-10 h-10" />
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;