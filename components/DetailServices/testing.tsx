'use client'

import React, { useState, useRef, useEffect } from 'react'
import { FaReact, FaVuejs, FaAngular, FaNodeJs, FaPython, FaJava, FaSwift, FaAndroid, FaAws, FaMicrosoft, FaGoogle, FaWordpress, FaDrupal, FaJoomla, FaHtml5, FaCss3, FaJs, FaPhp, FaDocker, FaGit, FaSass, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { SiTypescript, SiGraphql, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiFirebase, SiKubernetes, SiJenkins, SiTerraform } from 'react-icons/si'
import { IoLogoElectron } from 'react-icons/io5'
import { TbBrandNextjs } from 'react-icons/tb'

const technologies:any = [
    { name: 'React', category: 'Frontend', icon: FaReact },
    { name: 'Vue.js', category: 'Frontend', icon: FaVuejs },
    { name: 'Angular', category: 'Frontend', icon: FaAngular },
    { name: 'Next.js', category: 'Frontend', icon: TbBrandNextjs },
    { name: 'HTML5', category: 'Frontend', icon: FaHtml5 },
    { name: 'CSS3', category: 'Frontend', icon: FaCss3 },
    { name: 'JavaScript', category: 'Frontend', icon: FaJs },
    { name: 'TypeScript', category: 'Frontend', icon: SiTypescript },
    { name: 'Sass', category: 'Frontend', icon: FaSass },
    { name: 'Node.js', category: 'Backend', icon: FaNodeJs },
    { name: 'Python', category: 'Backend', icon: FaPython },
    { name: 'Java', category: 'Backend', icon: FaJava },
    { name: 'PHP', category: 'Backend', icon: FaPhp },
    { name: 'GraphQL', category: 'Backend', icon: SiGraphql },
    { name: 'Swift', category: 'Mobile', icon: FaSwift },
    { name: 'Kotlin', category: 'Mobile', icon: FaAndroid },
    { name: 'React Native', category: 'Mobile', icon: FaReact },
    { name: 'Electron', category: 'Desktop', icon: IoLogoElectron },
    { name: 'MongoDB', category: 'Database', icon: SiMongodb },
    { name: 'PostgreSQL', category: 'Database', icon: SiPostgresql },
    { name: 'MySQL', category: 'Database', icon: SiMysql },
    { name: 'Redis', category: 'Database', icon: SiRedis },
    { name: 'Firebase', category: 'Database', icon: SiFirebase },
    { name: 'AWS', category: 'Cloud', icon: FaAws },
    { name: 'Azure', category: 'Cloud', icon: FaMicrosoft },
    { name: 'GCP', category: 'Cloud', icon: FaGoogle },
    { name: 'Docker', category: 'DevOps', icon: FaDocker },
    { name: 'Kubernetes', category: 'DevOps', icon: SiKubernetes },
    { name: 'Jenkins', category: 'DevOps', icon: SiJenkins },
    { name: 'Git', category: 'DevOps', icon: FaGit },
    { name: 'Terraform', category: 'DevOps', icon: SiTerraform },
    { name: 'WordPress', category: 'CMS', icon: FaWordpress },
    { name: 'Drupal', category: 'CMS', icon: FaDrupal },
    { name: 'Joomla', category: 'CMS', icon: FaJoomla },
]

export default function TechnologySection({title}) {
    const [activeCategory, setActiveCategory] = useState('All')
    const [currentIndex, setCurrentIndex] = useState(0)
    const categoryRef = useRef<HTMLDivElement>(null)

    const availableCategories = ['All', ...Array.from(new Set(technologies.map(tech => tech.category)))]

    const filteredTechnologies = activeCategory === 'All'
        ? technologies
        : technologies.filter(tech => tech.category === activeCategory)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredTechnologies.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredTechnologies.length) % filteredTechnologies.length)
    }

    useEffect(() => {
        setCurrentIndex(0)
    }, [activeCategory])

    const scroll = (scrollOffset: number) => {
        if (categoryRef.current) {
            categoryRef.current.scrollLeft += scrollOffset
        }
    }

    const getVisibleTechnologies = () => {
        const visibleCount = filteredTechnologies.length < 5 ? filteredTechnologies.length : 5
        const offset = Math.floor(visibleCount / 2)
        return [...Array(visibleCount)].map((_, i) => {
            const index = (currentIndex - offset + i + filteredTechnologies.length) % filteredTechnologies.length
            return filteredTechnologies[index]
        })
    }

    return (
        <div className="min-h-screen bg-transparent text-white p-8">
            <h1 className="text-5xl font-extrabold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">

            </h1>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-8 sm:mb-12 md:mb-16">
                {title}
            </h1>
            <div className="relative mb-12">
                <div
                    ref={categoryRef}
                    className="flex overflow-x-auto scrollbar-hide space-x-2 py-4"
                >
                    {availableCategories.map((category:any) => (
                        <button
                            key={category}
                            className={`px-4 py-2 text-sm rounded-full whitespace-nowrap transition-all duration-300 ${
                                activeCategory === category
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-110'
                                    : 'bg-gray-700 hover:bg-gray-600'
                            }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
                    onClick={() => scroll(-100)}
                >
                    <FaChevronLeft className="w-4 h-4" />
                </button>
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
                    onClick={() => scroll(100)}
                >
                    <FaChevronRight className="w-4 h-4" />
                </button>
            </div>

            <div className="relative mt-12">
                {filteredTechnologies.length > 1 && (
                    <>
                        <button
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full opacity-75 hover:opacity-100 transition-opacity z-10"
                            onClick={prevSlide}
                        >
                            <FaChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full opacity-75 hover:opacity-100 transition-opacity z-10"
                            onClick={nextSlide}
                        >
                            <FaChevronRight className="w-6 h-6" />
                        </button>
                    </>
                )}

                <div className="flex justify-center items-center space-x-12">
                    {getVisibleTechnologies().map((tech, index) => {
                        const Icon = tech.icon
                        const isCenter = index === Math.floor(getVisibleTechnologies().length / 2)
                        return (
                            <div
                                key={tech.name}
                                className={`text-center transition-all duration-300 ${
                                    isCenter ? 'scale-125 opacity-100' : 'scale-75 opacity-50'
                                }`}
                            >
                                <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl p-6 mb-4 mx-auto w-28 h-28 flex items-center justify-center shadow-lg">
                                    <Icon className={`w-16 h-16 ${isCenter ? 'animate-pulse' : ''}`} />
                                </div>
                                <p className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                                    {tech.name}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="flex justify-center mt-12">
                {filteredTechnologies.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
                            index === currentIndex ? 'bg-blue-500 scale-150' : 'bg-gray-600'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}