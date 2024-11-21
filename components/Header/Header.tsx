'use client'

import { Popover, PopoverButton, PopoverPanel, Switch } from "@headlessui/react"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { PiHandWaving } from "react-icons/pi"
import { TextLogo } from "../icons/Icons"
import { usePathname } from "next/navigation"
import { FaChevronDown, FaTimes, FaHome, FaInfoCircle, FaQuestionCircle, FaBlog, FaMoon, FaSun } from "react-icons/fa"
import { services } from "../data/Data"
import { useTheme } from "next-themes"

export default function Header() {
  const [stickyMenu, setStickyMenu] = useState(false)
  const [navigationOpen, setNavigationOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setStickyMenu(window.scrollY > 0)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Set initial theme to dark
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
  }, [])

  const navLinks = [
    { label: "Home", href: "/", as: "/", icon: <FaHome /> },
    { label: "About Us", href: "/aboutus", as: "/about-us", icon: <FaInfoCircle /> },
    { label: "FAQ's", href: "/faq", as: "/faqs", icon: <FaQuestionCircle /> },
    { label: "Blog", href: "/blog", as: "/blog", icon: <FaBlog /> },
  ]

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <>
      <header
        className={`fixed left-0 top-0 w-full z-50 py-3 lg:py-2 transition duration-200 ${stickyMenu ? "dark:bg-bg-blur backdrop-blur" : "dark:bg-bg-blur backdrop-blur"
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 xl:px-0 lg:flex items-center justify-between relative">
          <nav className="flex items-center justify-between w-full">
            {/* Logo & Mobile Menu Toggle */}
            <div className="flex flex-row items-center justify-between w-full lg:w-auto">
              <Link href="/">
                <TextLogo className="transition transform hover:scale-105" />
              </Link>

              <Link
                href="/pricing"
                className="button-border-gradient lg:hidden flex relative rounded-lg text-black dark:text-white text-sm items-center gap-1.5 py-2 px-4.5 shadow-button hover:button-gradient-hover hover:shadow-none px-4"
              >
                <PiHandWaving className="w-6 h-6" />
                Get in Touch
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex justify-center w-1/2">
              <ul className="flex gap-5">
                {navLinks.map((item, index) => (
                  <React.Fragment key={index}>
                    <li className="nav__menu">
                      <Link
                        href={item.href}
                        className="text-black dark:text-white/80 text-sm py-2 px-4 rounded-lg hover:bg-gradient-to-b from-[#918EA0]/10 to-transparent dark:from-white/10 transition-all duration-300 ease-in-out flex items-center gap-2"
                      >
                        {item.label}
                      </Link>
                    </li>
                    {item.label === "Home" && (
                      <li>
                        <Popover>
                          {({ open, close }) => (
                            <>
                              <PopoverButton className="text-black dark:text-white/80 text-sm py-2 px-4 rounded-lg hover:bg-gradient-to-b from-[#918EA0]/10 to-transparent dark:from-white/10 transition-all duration-300 ease-in-out flex items-center gap-2">
                                Services
                                <FaChevronDown
                                  className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
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
                                    className="absolute left-0 mt-3 p-3 w-full max-w-screen overflow-hidden z-50 bg-white dark:bg-[#030014] rounded-lg shadow-xl origin-top grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-y-auto max-h-[80vh]"
                                  >
                                    {services.map((service, index) => (
                                      <div
                                        key={index}
                                        className="flex flex-row gap-4 items-start space-y-2 hover:rounded-lg hover:bg-gradient-to-b from-[#918EA0]/10 to-transparent dark:from-white/10 p-2"
                                      >
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full text-black dark:text-white/50">
                                          {service.icon}
                                        </div>
                                        <div>
                                          <Link
                                            href={`/services${service.href}`}
                                            className={`flex items-center gap-2 text-black dark:text-white rounded-lg transition duration-200 ${pathname === service.href
                                              ? "bg-gradient-to-b from-[#918EA0]/10 to-transparent dark:from-white/10"
                                              : ""
                                              }`}
                                            onClick={() => close()}
                                          >
                                            {service.title}
                                          </Link>
                                          <p className="text-black dark:text-white/60 text-sm">
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

            {/* Desktop Get in Touch Button and Theme Toggle */}
            <div className="hidden lg:flex lg:w-1/4 justify-end items-center gap-4">
              <Switch
                checked={theme === 'dark'}
                onChange={toggleTheme}
                className={`${theme === 'dark' ? 'bg-[#918EA0]' : 'bg-[#918EA0]/20'
                  } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
              >
                <span
                  className={`${theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
              <Link
                href="/pricing"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 rounded-lg transition  transform hover:scale-105  inline-flex px-4 ease-in duration-300 hover:shadow-lg"
                // className="button-border-gradient relative rounded-lg text-[#918EA0] dark:text-white text-sm flex items-center gap-1.5 py-2 px-4.5 shadow-button hover:button-gradient-hover hover:shadow-none px-4"
              >
                <PiHandWaving className="w-6 h-6" />
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-3/4 h-full bg-blur backdrop-blur bg-white/80 dark:bg-[#030014]/80 shadow-lg transition-transform duration-300 ease-in-out z-50 ${navigationOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-black dark:text-white focus:outline-none"
            onClick={() => setNavigationOpen(false)}
          >
            <FaTimes className="w-6 h-6" />
          </button>

          <div className="p-6 text-black dark:text-white">
            <nav>
              <ul className="flex flex-col gap-4">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__menu">
                    <Link
                      href={item.href}
                      className="text-[#918EA0] dark:text-white/80 text-sm py-2 px-4 rounded-lg hover:bg-gradient-to-b from-[#918EA0]/10 to-transparent dark:from-white/10 transition-all duration-300 ease-in-out flex items-center gap-2"
                      onClick={() => setNavigationOpen(false)}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Popover>
                    {({ open }) => (
                      <>
                        <PopoverButton className="text-black dark:text-white/80 text-sm py-2 px-4 rounded-lg outline-none transition-all duration-300 ease-in-out flex items-center gap-2">
                          Services
                          <FaChevronDown
                            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                          />
                        </PopoverButton>
                        <AnimatePresence>
                          {open && (
                            <PopoverPanel
                              as={motion.div}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 mt-2 space-y-2"
                            >
                              {services.map((service, index) => (
                                <Link
                                  key={index}
                                  href={`/services${service.href}`}
                                  className="flex items-center gap-2 text-black dark:text-white rounded-lg p-2 transition duration-200 hover:bg-gradient-to-b from-black/10 to-transparent dark:from-white/10"
                                  onClick={() => setNavigationOpen(false)}
                                >
                                  {service.icon} {service.title}
                                </Link>
                              ))}
                            </PopoverPanel>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </Popover>
                </li>
              </ul>
            </nav>

            <div className="mt-4 flex flex-col gap-4">
              <Link
                href="/pricing"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 rounded-lg transition  transform hover:scale-105  inline-flex px-4 ease-in duration-300 hover:shadow-lg"

                onClick={() => setNavigationOpen(false)}
              >
                <PiHandWaving className="w-6 h-6" />
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-blur backdrop-blur bg-white/80 dark:bg-[#030014]/80 shadow-lg px-4 py-2 flex justify-around items-center w-full z-50">
        {navLinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-[#918EA0] dark:text-white p-2 rounded-full hover:bg-[#918EA0]/10 dark:hover:bg-white/10 transition-all duration-300 flex flex-col items-center"
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
        <Popover className="relative">
          {({ open }) => (
            <>
              <PopoverButton className="text-[#918EA0] dark:text-white p-2 rounded-full hover:bg-[#918EA0]/10 dark:hover:bg-white/10 transition-all duration-300 flex flex-col items-center">
                <FaChevronDown className={`mt-1 ${open ? "rotate-180" : ""}`} />
                <span className="text-xs mt-1">Services</span>
              </PopoverButton>

              <PopoverPanel className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-64 bg-white dark:bg-[#030014] rounded-lg shadow-lg p-4 z-50">
                <ul className="flex flex-col gap-2">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start gap-2 hover:bg-[#918EA0]/10 dark:hover:bg-white/10 rounded-lg p-2 transition-all duration-200">
                      <div className="h-6 w-6 flex-shrink-0">{service.icon}</div>
                      <Link href={`/services${service.href}`} className="text-sm text-[#918EA0] dark:text-white hover:underline">
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </PopoverPanel>
            </>
          )}
        </Popover>
        <button
          onClick={toggleTheme}
          className="text-[#918EA0] dark:text-white p-2 rounded-full hover:bg-[#918EA0]/10  dark:hover:bg-white/10 transition-all duration-300 flex flex-col items-center"
        >
          {theme === 'dark' ? <FaMoon /> : <FaSun />}
          <span className="text-xs mt-1">Theme</span>
        </button>
      </div>
    </>
  )
}