"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ({ title, FaqData }: { title: string, FaqData: Array<{ title: string, content: string, items: string[] }> }) {
  const [expandedSection, setExpandedSection] = useState(0)

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 dark:bg-transparent text-gray-900 dark:text-gray-100 min-h-screen py-12 sm:py-16 md:py-20 lg:py-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black dark:text-white font-bold leading-tight mb-8 sm:mb-12 md:mb-16">
        {title}
      </h1>

      {FaqData.map((section, index) => (
        <motion.div
          key={index}
          className="mb-4 md:mb-6 border-b border-gray-300 dark:border-gray-700 last:border-b-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <motion.button
            className="w-full text-left py-4 flex justify-between items-center"
            onClick={() => setExpandedSection(expandedSection === index ? -1 : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-lg md:text-xl font-semibold flex items-center">
              <span className="w-8 mr-4 text-gray-500">{(index + 1).toString().padStart(2, '0')}</span>
              {section.title}
            </span>
            <motion.div
              animate={{ rotate: expandedSection === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {expandedSection === index ? <ChevronUp className="text-gray-500" /> : <ChevronDown className="text-gray-500" />}
            </motion.div>
          </motion.button>
          <AnimatePresence initial={false}>
            {expandedSection === index && (
              <motion.div
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 }
                }}
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden"
              >
                <motion.div
                  className="pb-4 pl-12 border-l-4 border-black dark:border-[#6430c2] ml-4 bg-white dark:bg-transparent shadow-lg dark:shadow-none rounded-r-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="mb-4 text-gray-700 dark:text-gray-400 text-sm md:text-base">{section.content}</p>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400">
                    {section.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="mb-2 text-sm md:text-base"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + itemIndex * 0.1 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}