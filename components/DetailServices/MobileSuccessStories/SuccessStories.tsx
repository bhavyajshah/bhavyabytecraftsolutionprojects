'use client'
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Story {
  logo: string
  title: string
  location: string
  image: string
  description: string
}

interface StoriesProps {
  title: string
  stories: Record<string, Story>
}

const SuccessStories: React.FC<StoriesProps> = ({ title, stories }) => {
  const categories = Object.keys(stories || {})
  const [activeIndex, setActiveIndex] = useState(0)
  const activeCategory = categories[activeIndex]
  const activeStory = stories?.[activeCategory] || {
    title: 'No Title Available',
    location: 'Location Unknown',
    description: 'No description available.',
    image: '/placeholder.svg?height=400&width=600',
    logo: '/placeholder.svg?height=98&width=98',
  }

  const tabsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (tabsRef.current) {
      const activeTab = tabsRef.current.children[activeIndex] as HTMLElement
      if (activeTab) {
        activeTab.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        })
      }
    }
  }, [activeIndex])

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length)
  }

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % categories.length)
  }

  if (!stories || Object.keys(stories).length === 0) {
    return <div className="text-center text-gray-600">No success stories available.</div>
  }

  return (
    <section className="max-w-6xl mx-auto py-16 text-gray-800 dark:text-white">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-gray-800 dark:text-white"
      >
        {title}
      </motion.h2>

      <div className="my-8 relative">
        <div
          ref={tabsRef}
          className="flex overflow-x-auto scrollbar-hide space-x-2 pb-4"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveIndex(index)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${index === activeIndex
                  ? 'bg-gray-800 text-white dark:bg-[#6430C2] dark:text-white shadow-lg transform scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-white dark:bg-opacity-10 dark:text-gray-300 dark:hover:bg-opacity-20'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="bg-gray-100 dark:bg-white dark:bg-opacity-10 h-full backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-6 border border-gray-200 dark:border-white dark:border-opacity-20">
              <img
                src={activeStory.logo}
                alt={`${activeStory.title} logo`}
                className="w-16 h-16 rounded-full mb-4 border-2 border-gray-800 dark:border-[#6430C2]"
              />
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-[#6430C2]">{activeStory.title}</h3>
              <p className="text-sm text-gray-600 dark:text-indigo-300 mb-4">{activeStory.location}</p>
              <p className="text-gray-700 dark:text-gray-200">{activeStory.description}</p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={activeStory.image}
                alt={`${activeStory.title} project`}
                className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20 p-2 rounded-full text-gray-800 dark:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-pink-500"
          onClick={handlePrevious}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous story</span>
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20 p-2 rounded-full text-gray-800 dark:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-pink-500"
          onClick={handleNext}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next story</span>
        </button>
      </div>
    </section>
  )
}

export default SuccessStories