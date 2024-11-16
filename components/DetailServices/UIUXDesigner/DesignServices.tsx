"use client"

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from 'next/link'
import { services } from '@/Servicesdata/UIUXDesigner'

export default function Component() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    useEffect(() => {
        let interval: NodeJS.Timeout
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % services.length)
            }, 5000)
        }
        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % services.length)
        setIsAutoPlaying(false)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
        setIsAutoPlaying(false)
    }

    return (
        <div className="min-h-screen text-gray-900 dark:text-gray-100 p-4 sm:p-8 transition-all duration-300">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center text-black dark:text-white">Design Services We Provide</h1>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                            className="p-6 sm:p-10"
                        >
                            <div className="flex flex-col lg:flex-row justify-between gap-8">
                                <div className="w-full lg:w-1/2">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="rounded-lg overflow-hidden shadow-lg"
                                    >
                                        <Image
                                            src={services[currentSlide].image}
                                            alt={services[currentSlide].title}
                                            width={600}
                                            height={400}
                                            className="w-full h-auto object-cover"
                                        />
                                    </motion.div>
                                </div>
                                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                    <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">{services[currentSlide].title}</h2>
                                    <p className="mb-6 text-lg leading-relaxed">{services[currentSlide].description}</p>
                                    <div className="flex flex-wrap gap-3">
                                        {services[currentSlide].tags.map((tag, index) => (
                                            <motion.span
                                                key={index}
                                                className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md hover:shadow-lg transition-shadow duration-300"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-white text-blue-600 dark:text-blue-400 p-3 rounded-full shadow-lg hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors duration-300"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-white text-blue-600 dark:text-blue-400 p-3 rounded-full shadow-lg hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors duration-300"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
                <div className="flex justify-center mt-6 space-x-3">
                    {services.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setCurrentSlide(index)
                                setIsAutoPlaying(false)
                            }}
                            className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentSlide
                                    ? 'bg-neutral-900 scale-125'
                                    : 'bg-gray-300 dark:bg-white hover:bg-blue-400 dark:hover:bg-blue-600'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Ready to elevate your design?</h3>
                    <p className="text-lg mb-6">Select professional design services for your software project and watch your vision come to life.</p>
                    <Link href='/pricing'
                        className="inline-flex items-center justify-center rounded-full py-3 px-8 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                    >
                        Request Services
                    </Link>
                </div>
            </div>
        </div>
    )
}