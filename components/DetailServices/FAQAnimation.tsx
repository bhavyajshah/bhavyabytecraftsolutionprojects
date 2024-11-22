"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Component({ reviews }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
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

  return (
    <div className="flex flex-col items-center mt-20 justify-center p-4 relative">
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        animate={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1) 0%, transparent 80%)`,
        }}
      />

      <div className="w-full max-w-6xl relative z-10">
        <h1 className="text-6xl font-bold leading-none text-center text-gray-900 dark:text-white max-md:max-w-full max-md:text-4xl mb-8">
          Our Client Work Reviews
        </h1>
        <div className="absolute top-0 -right-4 w-64 h-64 bg-gray-200 dark:bg-yellow-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-gray-300 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

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
              className="w-full max-w-5xl mx-auto bg-gray-100 dark:bg-white dark:bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-200 dark:border-opacity-20"
            >
              <div className="flex flex-col md:flex-row items-center mb-6">
                <img
                  className="w-20 h-20 rounded-full mb-4 md:mb-0 md:mr-4 border-4 border-gray-300 dark:border-purple-500 transform hover:scale-110 transition-transform duration-300"
                  src={reviews[currentIndex].avatar}
                  alt={`Avatar of ${reviews[currentIndex].name}`}
                />
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    {reviews[currentIndex].name}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-purple-300">
                    {reviews[currentIndex].role}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-6 text-lg leading-relaxed">
                {reviews[currentIndex].comment}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${i < reviews[currentIndex].rating
                          ? "text-yellow-400"
                          : "text-gray-400 dark:text-gray-600"
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
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-gray-300 dark:bg-purple-500 text-gray-700 dark:text-white p-3 rounded-full hover:bg-gray-400 dark:hover:bg-purple-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-purple-400 focus:ring-opacity-50"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-gray-300 dark:bg-purple-500 text-gray-700 dark:text-white p-3 rounded-full hover:bg-gray-400 dark:hover:bg-purple-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-purple-400 focus:ring-opacity-50"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}