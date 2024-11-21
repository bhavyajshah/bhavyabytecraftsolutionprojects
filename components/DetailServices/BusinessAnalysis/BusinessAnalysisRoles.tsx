'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const tabs = ['BUSINESS ANALYST', 'SYSTEM ANALYST', 'PRODUCT OWNER']

const tabContent = {
    'BUSINESS ANALYST': {
        description: "Andersen's Business Analysts have experience with various projects, helping our customers resolve their project issues, perform solution reviews, and ensure business process optimization. You can select appropriate experts and add value to your project in order to reach your business goals.",
        responsibilities: [
            'Requirements engineering',
            'Technical writing',
            'Domain expertise',
            'Proxy product ownership'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1661689077583-1f04fcdc7a81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    'SYSTEM ANALYST': {
        description: "Our System Analysts specialize in analyzing, designing, and implementing information systems. They bridge the gap between business needs and technology solutions, ensuring that systems are efficient, scalable, and aligned with organizational goals.",
        responsibilities: [
            'System architecture design',
            'Process modeling',
            'Data flow analysis',
            'Integration planning'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1663050693144-6b5bc76d2214?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U1lTVEVNJTIwQU5BTFlTVHxlbnwwfHwwfHx8MA%3D%3D'
    },
    'PRODUCT OWNER': {
        description: "Andersen's Product Owners are responsible for maximizing the value of the products created by the development team. They manage the product backlog, define user stories, and ensure that the team delivers a product that meets customer needs and business objectives.",
        responsibilities: [
            'Backlog management',
            'Stakeholder communication',
            'Feature prioritization',
            'Product vision maintenance'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
}

export default function BusinessAnalysisRoles() {
    const [activeTab, setActiveTab] = useState('BUSINESS ANALYST')

    return (
        <div className="min-h-screen text-gray-800 dark:text-white my-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto"
            >
                <motion.h1
                    className="text-3xl lg:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    The Variety of Business Analysis Roles We Provide
                </motion.h1>
                <motion.p
                    className="mb-8 text-center text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    Andersen offers BA professionals who differ in areas of responsibilities and approaches to solving project
                    issues.
                </motion.p>

                <div className="mb-8 flex flex-wrap justify-center">
                    {tabs.map((tab, index) => (
                        <motion.button
                            key={tab}
                            className={`mr-4 mb-2 pb-2 px-4 py-2 text-sm rounded-full ${activeTab === tab
                                    ? 'bg-[#6430C2] text-white'
                                    : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white'
                                } transition-colors duration-300`}
                            onClick={() => setActiveTab(tab)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                        >
                            {tab}
                        </motion.button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white dark:bg-gray-900/30 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-lg"
                        >
                            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{activeTab}</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">{tabContent[activeTab].description}</p>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Key Responsibilities:</h3>
                            <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
                                {tabContent[activeTab].responsibilities.map((item, index) => (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
                    >
                        <Image
                            src={tabContent[activeTab].imageUrl}
                            alt={`${activeTab} professional`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                        <motion.div
                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.3 }}
                        >
                            <motion.a
                                href={tabContent[activeTab].videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                        Request a 30-minute Business Analysis and Technology consultation
                    </h3>
                    <motion.button
                        className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Request Consultation
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    )
}

