'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = [
    "Databases",
    "Performance testing",
    "Performance monitoring and logging",
    "Containers and orchestration",
]

const techStack = {
    "Databases": [
        { name: "PostgreSQL", logo: "https://banner2.cleanpng.com/20180315/eaq/av0cw3km1.webp" },
        { name: "MySQL", logo: "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png" },
        { name: "Oracle Database", logo: "https://allvectorlogo.com/img/2017/02/oracle-database-logo.png" },
        { name: "Microsoft SQL Server", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWHWHPvxQz-DbX5dWbytK3z0uFP_marvzUhw&s" },
        { name: "MongoDB", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThmT8HtltidnDUJvGcRYzg8B9h8zM-2O-FZw&s" },
    ],
    "Performance testing": [
        { name: "JMeter", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-IQ9WpQekquJXwg-ottmTnqJvoqDJf__7dA&s" },
        { name: "LoadRunner", logo: "https://upload.wikimedia.org/wikipedia/en/6/61/HPE_LoadRunner_logo.png" },
        { name: "Gatling", logo: "https://pbs.twimg.com/profile_images/1404369013266911234/GfN-UKHl_400x400.png" },
        { name: "Apache Bench", logo: "https://miro.medium.com/v2/resize:fit:370/0*7zv2SNeQYkL8H0gE.png" },
    ],
    "Performance monitoring and logging": [
        { name: "Prometheus", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/2066px-Prometheus_software_logo.svg.png" },
        { name: "Grafana", logo: "https://cdn.worldvectorlogo.com/logos/grafana.svg" },
        { name: "ELK Stack", logo: "https://miro.medium.com/v2/resize:fit:1400/1*vZDu4Bwj2GxQh8t1IjDq4w.png" },
        { name: "New Relic", logo: "https://newrelic.com/themes/custom/erno/assets/mediakit/new_relic_logo_vertical_white.png" },
        { name: "Datadog", logo: "https://imgix.datadoghq.com/img/about/presskit/logo-v/dd_vertical_white.png?auto=format&fit=max&w=847&dpr=2" },
    ],
    "Containers and orchestration": [
        { name: "Docker", logo: "https://www.docker.com/wp-content/uploads/2023/08/logo-guide-logos-1.svg" },
        { name: "Kubernetes", logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
        { name: "OpenShift", logo: "https://w7.pngwing.com/pngs/801/867/png-transparent-openshift-red-hat-docker-github-logo-red-hat-nodejs-thumbnail.png" },
        { name: "Docker Swarm", logo: "https://miro.medium.com/v2/resize:fit:449/1*WcJNMuTTsXH98Rj20pzBbQ.png" },
    ],
}

export default function TechnologyStack() {
    const [activeCategory, setActiveCategory] = useState("Databases")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(4)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerPage(1)
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2)
            } else {
                setItemsPerPage(4)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + itemsPerPage >= techStack[activeCategory].length) ? 0 : prevIndex + itemsPerPage
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - itemsPerPage < 0) ? Math.max(techStack[activeCategory].length - itemsPerPage, 0) : prevIndex - itemsPerPage
        )
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <motion.h1
                className="text-center text-3xl text-gray-800 dark:text-white lg:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Our tech stack for IT support
            </motion.h1>
            <motion.p
                className="mb-8 text-gray-600 dark:text-white md:text-xl max-w-4xl mx-auto text-center lg:text-xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                When providing IT support services, Andersen uses a range of robust and popular tools that are both time-tested and regularly expanded.
            </motion.p>

            <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => {
                            setActiveCategory(category)
                            setCurrentIndex(0)
                        }}
                        className={`px-4 py-2 rounded-full text-xs md:text-sm lg:text-base transition-colors duration-200 ${category === activeCategory
                                ? 'bg-gray-800 text-white dark:bg-[#6430c2] dark:text-white'
                                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-white dark:text-black dark:hover:bg-gray-300'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory + currentIndex}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                    >
                        {techStack[activeCategory].slice(currentIndex, currentIndex + itemsPerPage).map((item) => (
                            <div key={item.name} className="bg-white dark:bg-gray-900/30 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center justify-center h-48">
                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="w-16 h-16 mb-4 object-contain"
                                />
                                <h3 className="text-lg md:text-xl font-semibold text-center text-gray-800 dark:text-white">
                                    {item.name}
                                </h3>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full p-2 shadow-md z-10 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
                    aria-label="Previous slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full p-2 shadow-md z-10 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
                    aria-label="Next slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(techStack[activeCategory].length / itemsPerPage) }).map((_, index) => (
                    <motion.div
                        key={index}
                        className={`h-2 w-2 rounded-full mx-1 ${index === Math.floor(currentIndex / itemsPerPage)
                                ? 'bg-gray-800 dark:bg-primary'
                                : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                    />
                ))}
            </div>
        </div>
    )
}