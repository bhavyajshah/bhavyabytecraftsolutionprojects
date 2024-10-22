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
        <div className="min-h-screen text-white p-4 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Design services we provide</h1>
            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden"
                    >
                        <div className={`bg-white text-white bg-opacity-10 h-full backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-6 border border-white border-opacity-20`}>
                            <div className="flex flex-col lg:flex-row justify-between mb-4 gap-4">
                                <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Image
                                            src={services[currentSlide].image}
                                            alt={services[currentSlide].title}
                                            width={400}
                                            height={300}
                                            className="w-full h-auto object-cover"
                                        />
                                    </motion.div>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <h2 className="text-2xl font-bold mb-4">{services[currentSlide].title}</h2>
                                    <p className="mb-4 text-sm">{services[currentSlide].description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {services[currentSlide].tags.map((tag, index) => (
                                            <motion.span
                                                key={index}
                                                className={`${services[currentSlide].accentColor} text-black px-3 py-1 rounded-full text-xs`}
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
                        </div>
                    </motion.div>
                </AnimatePresence>
                <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
                {services.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrentSlide(index)
                            setIsAutoPlaying(false)
                        }}
                        className={`h-3 w-3 rounded-full transition-colors ${index === currentSlide ? 'bg-yellow-500' : 'bg-gray-400'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div className="mt-8
            bg-white text-white bg-opacity-10 h-full backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-6 border border-white border-opacity-20
            flex flex-col sm:flex-row justify-between items-center">
                <p className="text-lg mb-4 sm:mb-0 text-center sm:text-left">Select professional design services for your software project</p>
                <Link href='/pricing'
                    className="hero-button hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80 transform hover:scale-105"
                >
                    Request services
                </Link>
            </div>
        </div>
    )
}