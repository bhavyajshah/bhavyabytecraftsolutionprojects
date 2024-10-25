'use client'

import { Popover, PopoverButton, PopoverPanel, Switch } from "@headlessui/react"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { PiHandWaving } from "react-icons/pi"
import { TextLogo } from "../icons/Icons"
import { usePathname } from "next/navigation"
import { FaBars, FaChevronDown, FaTimes, FaHome, FaInfoCircle, FaQuestionCircle, FaBlog } from "react-icons/fa"
import { services } from "../data/Data"
import { useTheme } from "next-themes"

const Header = () => {
  const [stickyMenu, setStickyMenu] = useState(false)
  const [navigationOpen, setNavigationOpen] = useState(false)
  const [showServices, setShowServices] = useState(false)
  const { theme, setTheme } = useTheme()

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Home", href: "/", as: "/", icon: <FaHome /> },
    { label: "About Us", href: "/aboutus", as: "/about-us", icon: <FaInfoCircle /> },
    { label: "FAQ's", href: "/faq", as: "/faqs", icon: <FaQuestionCircle /> },
    { label: "Blog", href: "/blog", as: "/blog", icon: <FaBlog /> },
  ]

  return (
    <header
      className={`fixed left-0 top-0 w-full z-50 py-3 lg:py-2 transition duration-200 ${stickyMenu && "bg-blur backdrop-blur dark:bg-[#030014]"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 xl:px-0 lg:flex items-center justify-between relative">
        <nav className="flex items-center justify-between w-full">
          {/* Logo & Mobile Menu Toggle */}
          <div className="flex flex-row items-center justify-between w-full lg:w-auto">
            <Link href="/">
              <TextLogo className="transition transform hover:scale-105" />
            </Link>
            <button
              className="lg:hidden block text-primary-foreground dark:text-primary-dark-foreground focus:outline-none ml-auto"
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
                      className="text-primary-foreground/80 dark:text-primary-dark-foreground/80 text-sm py-2 px-4 rounded-lg hover:bg-gradient-to-b from-primary-foreground/10 to-transparent dark:from-primary-dark-foreground/10 transition-all duration-300 ease-in-out flex items-center gap-2"
                    >
                      {item.label}
                    </Link>
                  </li>
                  {item.label === "Home" && (
                    <li>
                      <Popover>
                        {({ open, close }) => (
                          <>
                            <PopoverButton className="text-primary-foreground/80 dark:text-primary-dark-foreground/80 text-sm py-2 px-4 rounded-lg hover:bg-gradient-to-b from-primary-foreground/10 to-transparent transition-all duration-300 ease-in-out flex items-center gap-2">
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
                                  className="absolute left-0 mt-3 p-3 w-full max-w-screen overflow-hidden z-50 bg-[#030014] dark:bg-white rounded-lg shadow-xl origin-top grid grid-cols-3 gap-6 overflow-y-scroll"
                                >
                                  {services.map((service, index) => (
                                    <div
                                      key={index}
                                      className="flex flex-row gap-4 items-start space-y-2 hover:rounded-lg hover:bg-gradient-to-b from-primary-foreground/10 to-transparent dark:from-primary-dark-foreground/10"
                                    >
                                      <div className="flex h-10 w-10 items-center justify-center rounded-full text-primary-foreground/50 dark:text-primary-dark-foreground/50">
                                        {service.icon}
                                      </div>
                                      <div>
                                        <Link
                                          href={`/services${service.href}`}
                                          className={`flex items-center gap-2 text-primary-foreground dark:text-primary-dark-foreground rounded-lg transition duration-200 ${pathname === service.href
                                            ? "bg-gradient-to-b from-primary-foreground/10 to-transparent dark:from-primary-dark-foreground/10"
                                            : ""
                                            }`}
                                          onClick={() => close()}
                                        >
                                          {service.title}
                                        </Link>
                                        <p className="text-primary-foreground/60 dark:text-primary-dark-foreground/60 text-sm">
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
              onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`${theme === 'dark' ? 'bg-primary-foreground' : 'bg-primary-foreground/20'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none `}
            >
              <span
                className={`${theme === 'dark' ? 'translate-x-1' : 'translate-x-6'
                  } inline-block h-4 w-4 transform rounded-full bg-primary transition-transform`}
              />
            </Switch>
            <Link
              href="/pricing"
              className="button-border-gradient relative rounded-lg text-primary-foreground dark:text-primary-dark-foreground text-sm flex items-center gap-1.5 py-2 px-4.5 shadow-button hover:button-gradient-hover hover:shadow-none px-4"
            >
              <PiHandWaving className="w-6 h-6" />
              Get in Touch
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-primary dark:bg-primary-dark shadow-lg transition-transform duration-300 ease-in-out z-50 ${navigationOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-primary-foreground dark:text-primary-dark-foreground focus:outline-none"
          onClick={() => setNavigationOpen(false)}
        >
          <FaTimes className="w-6 h-6" />
        </button>

        <div className="p-6 text-primary-foreground dark:text-primary-dark-foreground">
          <nav>
            <ul className="flex flex-col gap-4">
              {navLinks.map((item, index) => (
                <li key={index} className="nav__menu">
                  <Link
                    href={item.href}
                    className="text-primary-foreground/80 dark:text-primary-dark-foreground/80 text-sm py-2 px-4 rounded-lg hover:bg-gradient-to-b from-primary-foreground/10 to-transparent dark:from-primary-dark-foreground/10 transition-all duration-300 ease-in-out flex items-center gap-2"
                    onClick={() => setNavigationOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  className="text-primary-foreground/80 dark:text-primary-dark-foreground/80 text-sm py-2 px-4 rounded-lg outline-none transition-all duration-300 ease-in-out flex items-center gap-2"
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
                          className="flex items-center gap-2 text-primary-foreground dark:text-primary-dark-foreground rounded-lg p-2 transition duration-200 hover:bg-gradient-to-b from-primary-foreground/10 to-transparent dark:from-primary-dark-foreground/10"
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

          {/* Mobile Get in Touch Button and Theme Toggle */}
          <div className="mt-4 flex flex-col gap-4">
            <Switch
              checked={theme === 'dark'}
              onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`${theme === 'dark' ? 'bg-primary-foreground' : 'bg-primary-foreground/20'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2`}
            >
              <span
                className={`${theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-primary transition-transform`}
              />
            </Switch>
            <Link
              href="/pricing"
              className="button-border-gradient relative rounded-lg text-primary-foreground dark:text-primary-dark-foreground text-sm flex items-center gap-1.5 py-2 px-4.5 shadow-button hover:button-gradient-hover hover:shadow-none"
              onClick={() => setNavigationOpen(false)}
            >
              <PiHandWaving className="w-10 h-10" />
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Menu */}
      <div className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-primary dark:bg-primary-dark rounded-full shadow-lg px-4 py-2 flex justify-around items-center w-11/12 max-w-md">
        {navLinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-primary-foreground dark:text-primary-dark-foreground p-2 rounded-full hover:bg-primary-foreground/10 dark:hover:bg-primary-dark-foreground/10 transition-all duration-300"
          >
            {item.icon}
          </Link>
        ))}
        <button
          onClick={() => setTheme(theme === 'light' ? 'light' : 'dark')}
          className="text-primary-foreground dark:text-primary-dark-foreground p-2 rounded-full hover:bg-primary-foreground/10 dark:hover:bg-primary-dark-foreground/10 transition-all duration-300"
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  )
}

export default Header