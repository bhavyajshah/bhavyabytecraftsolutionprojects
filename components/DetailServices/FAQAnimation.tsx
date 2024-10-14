"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  StarIcon,
  ChevronDown,
} from "lucide-react";


const ByteCraftReviews = ({reviews, deliveryPhases, title}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [expandedPhase, setExpandedPhase] = useState(null);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const togglePhase = (index) => {
    setExpandedPhase(expandedPhase === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 relative">

      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        animate={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, transparent 80%)`,
        }}
      />

      <div className="w-full max-w-6xl relative z-10">
       <motion.h2
          className="text-4xl z-60 font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Our Client Work Reviews
        </motion.h2>

     <div className="absolute top-0 -right-4 w-64 h-64 bg-yellow-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <motion.div
          className="relative perspective-1000 mb-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-5xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-200 border-opacity-20"
            >
              <div className="flex flex-col md:flex-row items-center mb-6">
                <img
                  className="w-20 h-20 rounded-full mb-4 md:mb-0 md:mr-4 border-4 border-purple-500 transform hover:scale-110 transition-transform duration-300"
                  src={reviews[currentIndex].avatar}
                  alt={`Avatar of ${reviews[currentIndex].name}`}
                />
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-white">
                    {reviews[currentIndex].name}
                  </h3>
                  <p className="text-lg text-purple-300">
                    {reviews[currentIndex].role}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 italic mb-6 text-lg leading-relaxed">
                {reviews[currentIndex].comment}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-6 h-6 ${
                        i < reviews[currentIndex].rating
                          ? "text-yellow-400"
                          : "text-gray-600"
                      } transform hover:scale-125 transition-transform duration-300`}
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-purple-500 text-white p-3 rounded-full hover:bg-purple-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-purple-500 text-white p-3 rounded-full hover:bg-purple-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>

        <motion.h2
          className="text-4xl font-bold text-center text-white my-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {title}
        </motion.h2>
        <motion.div
          className="w-full mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {deliveryPhases.map((phase, index) => (
            <motion.div
              key={index}
              className="mb-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden border-2 border-transparent hover:border-purple-500 transition-colors duration-300"
              initial={false}
              animate={{ height: expandedPhase === index ? "auto" : "80px" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div
                className={`flex items-center justify-between p-6 cursor-pointer bg-gradient-to-r ${phase.color}`}
                onClick={() => togglePhase(index)}
              >
                <div className="flex items-center">
                  {phase.icon}
                  <h3 className="text-xl font-semibold text-white">
                    {phase.title}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: expandedPhase === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>
              <AnimatePresence>
                {expandedPhase === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pt-6 pb-6"
                  >
                    <div className="flex flex-col md:flex-row items-center">
                      <img
                        src={phase.image}
                        alt={phase.title}
                        className="w-full md:w-1/3 h-auto object-cover rounded-lg mb-4 md:mb-0 md:mr-4"
                      />
                      <p className="text-gray-300">{phase.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default ByteCraftReviews