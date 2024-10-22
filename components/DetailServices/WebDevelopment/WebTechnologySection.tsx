'use client'
import React, { useState, useRef } from 'react'
import {
    FaReact, FaVuejs, FaAngular, FaNodeJs, FaPython, FaJava, FaSwift, FaAndroid,
    FaAws, FaMicrosoft, FaGoogle, FaWordpress, FaDrupal, FaJoomla, FaHtml5,
    FaCss3, FaJs, FaPhp, FaDocker, FaGit, FaSass, FaChevronLeft, FaChevronRight
} from 'react-icons/fa'
import {
    SiTypescript, SiGraphql, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiFirebase,
    SiKubernetes, SiJenkins, SiTerraform
} from 'react-icons/si'
import { IoLogoElectron } from 'react-icons/io5'
import { TbBrandNextjs } from 'react-icons/tb'

const technologies = [
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

export default function TechnologyShowcase({ title }: { title: string }) {
    const [activeCategory, setActiveCategory] = useState<string>('All')
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [filteredTechnologies] = useState(technologies)
    const categoryRef = useRef<HTMLDivElement>(null)

    const availableCategories = ['All', ...Array.from(new Set(technologies.map(tech => tech.category)))]

    const nextSlide = () => {
        if (filteredTechnologies.length > 1) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredTechnologies.length)
        }
    }

    const prevSlide = () => {
        if (filteredTechnologies.length > 1) {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredTechnologies.length) % filteredTechnologies.length)
        }
    }

    const scroll = (scrollOffset: number) => {
        if (categoryRef.current) {
            categoryRef.current.scrollLeft += scrollOffset
        }
    }

    const getVisibleCount = () => {
        if (typeof window !== 'undefined') {
            const width = window.innerWidth
            return width < 640 ? 1 : width < 1024 ? 3 : 5
        }
        return 5 // Default count
    }

    const getVisibleTechnologies = () => {
        const visibleCount = getVisibleCount()
        const filtered = activeCategory === 'All'
            ? filteredTechnologies
            : filteredTechnologies.filter(tech => tech.category === activeCategory)

        if (filtered.length <= visibleCount) {
            return filtered
        }
        const offset = Math.floor(visibleCount / 2)
        return [...Array(visibleCount)].map((_, i) => {
            const index = (currentIndex - offset + i + filtered.length) % filtered.length
            return filtered[index]
        })
    }

    return (
        <div className="w-full text-white px-4 pb-24 max-w-6xl mx-auto overflow-x-hidden">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold leading-tight mb-8 sm:mb-12">
                {title}
            </h1>
            <div className="relative mb-8 sm:mb-12">
                <div
                    ref={categoryRef}
                    className="flex overflow-x-hidden justify-center space-x-2 py-4 px-10"
                >
                    {availableCategories.map((category) => (
                        <button
                            key={category}
                            className={`px-4 py-2 text-sm rounded-full whitespace-nowrap transition-all duration-300 ${activeCategory === category
                                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                                : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                                }`}
                            onClick={() => {
                                setActiveCategory(category)
                                setCurrentIndex(0) // Reset index on category change
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <button
                    className="absolute left-0 top-1/2 lg:hidden block transform -translate-y-1/2 bg-gray-800 p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
                    onClick={() => scroll(-100)}
                >
                    <FaChevronLeft className="w-4 h-4" />
                </button>
                <button
                    className="absolute right-0 top-1/2 lg:hidden block transform -translate-y-1/2 bg-gray-800 p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
                    onClick={() => scroll(100)}
                >
                    <FaChevronRight className="w-4 h-4" />
                </button>
            </div>

            <div className="relative mt-12 px-8">
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

                <div className="flex justify-center items-center space-x-4 sm:space-x-8 md:space-x-12 overflow-hidden">
                    {getVisibleTechnologies().map((tech, index) => {
                        const Icon = tech.icon
                        const isCenter = index === Math.floor(getVisibleTechnologies().length / 2)
                        return (
                            <div
                                key={tech.name}
                                className={`text-center transition-all duration-300 ${isCenter ? '' : 'opacity-50'
                                    }`}
                            >
                                <div className="text-5xl mb-2">
                                    <Icon />
                                </div>
                                <p className="text-lg">{tech.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
