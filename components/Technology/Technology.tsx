'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import { techCategory } from "../data/Data";
import { useTheme } from "next-themes";

interface Item {
  icon: string;
  name: string;
}

interface Section {
  category: string;
  items: Item[];
  description?: string;
}

interface Category {
  id: number;
  section: Section[];
}

export default function Technologies() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const handleCategoryChange = (id: number | null) => {
    setActiveCategory(id);
  };

  return (
    <section
      id="technologies"
      className={`pt-20 lg:pb-40 ${theme === 'light' ? 'bg-gradient-to-br from-gray-50 to-white' : ''
        }`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className={`mb-4 text-2xl font-extrabold sm:text-4xl xl:text-5xl ${theme === 'light' ? 'text-gray-800' : 'text-white'
            }`}>
            Technologies
          </h2>
          <p className={`max-w-[714px] mx-auto mb-8 font-medium ${theme === 'light' ? 'text-gray-600' : 'text-zinc-300'
            }`}>
            We use the latest technologies and tools to deliver top-notch solutions
          </p>
        </div>

        {/* Tabs/Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => handleCategoryChange(null)}
            className={`px-4 py-2 rounded-full font-semibold transition-all ${theme === 'light'
              ? activeCategory === null
                ? 'bg-gray-800 text-white'
                : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
              : activeCategory === null
                ? 'bg-[#200F46] text-white'
                : 'border border-[#200F46] text-white'
              }`}
          >
            All
          </button>
          {techCategory.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${theme === 'light'
                ? activeCategory === category.id
                  ? 'bg-gray-800 text-white'
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                : activeCategory === category.id
                  ? 'bg-[#200F46] text-white'
                  : 'border border-[#200F46] text-white'
                }`}
            >
              {category.section[0].category}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {techCategory
            .filter((category) => activeCategory === null || category.id === activeCategory)
            .map((category: Category) => (
              <React.Fragment key={category.id}>
                {category.section.map((section, idx) => (
                  <motion.div
                    key={idx}
                    className={`p-6 md:p-8 rounded-[32px] transition-all transform hover:scale-105 ${theme === 'light'
                      ? 'bg-white shadow-lg hover:shadow-xl'
                      : 'border shadow-lg hover:shadow-2xl backdrop-blur-md'
                      }`}
                    variants={item}
                  >
                    {/* Category Title */}
                    <h3
                      className={`text-xl font-semibold text-center mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'
                        }`}
                      dangerouslySetInnerHTML={{ __html: section.category }}
                    />

                    {/* Description */}
                    <p className={`text-center mb-6 ${theme === 'light' ? 'text-gray-600' : 'text-white'
                      }`}>
                      {section.description || "Explore the latest tools and frameworks for this category."}
                    </p>

                    {/* Items Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
                      {section.items.map((item, itemIdx) => (
                        <motion.div
                          key={itemIdx}
                          className="w-14 h-14 sm:w-16 sm:h-16 xl:w-20 xl:h-20 flex justify-center items-center"
                          whileHover={{ scale: 1.15, rotate: 5 }}
                        >
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </React.Fragment>
            ))}
        </motion.div>
      </div>
    </section>
  );
}