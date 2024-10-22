'use client'

import { tabData } from "@/Servicesdata/WebDevelopment"
import React, { useEffect, useState } from "react"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

function WebDevelopmentOfferings({ title }: { title: string }) {
  const [activeTab, setActiveTab] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <main className="flex flex-col justify-center items-end px-4 sm:px-8 md:px-16 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
      <section className="w-full max-w-6xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center lg:text-6xl text-white font-bold leading-tight mb-8 sm:mb-12 md:mb-16">
          {title}
        </h1>
        <div className="flex flex-col gap-0 lg:gap-4 md:flex-row">
          <motion.nav
            className={`md:mb-0 ${isMobile ? 'overflow-x-auto custom-scrollbar' : ''}`}
          >
            <ul className={`flex py-2 gap-4 px-5 ${isMobile ? 'flex-row' : 'flex-col'}  ${isMobile ? 'overflow-x-auto' : 'overflow-y-auto'} custom-scrollbar`}>
              {tabData.map((tab, index) => (
                <li
                  key={index}
                  className={`py-2 px-5 cursor-pointer transition-all duration-200 rounded-lg shadow-md ${activeTab === index
                    ? "bg-[#6430C2] text-white text-xs shadow-xl"
                    : "bg-transparent text-white text-xs hover:bg-[#6430C2] hover:shadow-lg"
                    } ${isMobile ? 'flex-shrink-0' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div
            className="md:w-3/5 text-white mt-6 md:mt-0"
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            transition={{ duration: 0.5 }}
          >
            <article className="p-6 rounded-lg shadow-lg transition-shadow duration-300 backdrop-blur-sm bg-gray-900/30">
              <h2 className="text-2xl font-medium leading-tight mb-4">
                {tabData[activeTab].content.title}
              </h2>
              <p className="mb-6">
                {tabData[activeTab].content.description}
              </p>
              <ul>
                {tabData[activeTab].content.features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 text-[#6430C2] mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          </motion.div>
        </div>
      </section>

      {/* Custom Scrollbar CSS */}
      <style jsx global>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #6430C2 transparent;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
          height: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #6430C2;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #6430C2 transparent;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
          height: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #6430C2;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </main>
  )
}

export default WebDevelopmentOfferings