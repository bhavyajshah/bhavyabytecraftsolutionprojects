'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { techCategory } from "../data/Data";

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

const Technologies: React.FC = () => {
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
    <section id="technologies" className="pt-28 lg:pt-20 lg:pb-40">
      <div className="container mx-auto px-6">


  <div className="text-center">
        <h2 className="text-white mb-4 text-2xl font-extrabold sm:text-4xl xl:text-5xl">
          Technologies
        </h2>
        <p className="max-w-[714px] mx-auto mb-5 font-medium text-zinc-300">
         We use the latest technologies and tools to deliver top-notch solutions
        </p>
      </div>
        {/* Tabs/Filter */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => handleCategoryChange(null)}
            className={`px-4 py-2 rounded-full font-semibold transition-all ${
              activeCategory === null ? "bg-[#200F46] text-white" : "border border-[#200F46] text-white"
            } mx-2`}
          >
            All
          </button>
          {techCategory.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                activeCategory === category.id ? "bg-[#200F46] text-white" : "border border-[#200F46] text-white"
              } mx-2`}
            >
              {category.section[0].category}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8"
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
                    className="p-6 rounded-[32px] border shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 backdrop-blur-md"
                    variants={item}
                  >
                    {/* Category Title */}
                    <h3 className="text-xl font-semibold text-center text-white mb-4" dangerouslySetInnerHTML={{ __html: section.category }} />

                    {/* Description */}
                    <p className="text-center text-white mb-6">
                      {section.description ? section.description : "Explore the latest tools and frameworks for this category."}
                    </p>

                    {/* Items Grid */}
                    <div className="flex flex-wrap justify-center items-center gap-6">
                      {section.items.map((item, itemIdx) => (
                        <motion.div
                          key={itemIdx}
                          className="w-16 h-16 xl:w-20 xl:h-20 flex justify-center items-center transform transition-transform"
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
};

export default Technologies;
