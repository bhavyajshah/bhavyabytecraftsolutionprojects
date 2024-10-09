'use client'
import { motion } from "framer-motion";

const TechnologySection = ({ title, subtitle, technologies }) => {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-300 md:px-8">
        <div className="text-center space-y-3">
          <motion.h3
            className="text-white text-3xl font-semibold sm:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {subtitle}
          </motion.p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech, idx) => (
              <motion.li
                key={idx}
                className="flex gap-x-4 p-4 rounded-lg transition duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="flex-none w-12 h-12 hero-button-gradient text-white rounded-lg flex items-center justify-center">
                  {tech.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg text-white font-semibold">
                    {tech.title}
                  </h4>
                  <p className="text-gray-400">{tech.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
