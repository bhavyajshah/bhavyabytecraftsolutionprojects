"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

const AnimatedNumber = ({ value, duration = 2 }) => {
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        let startTime
        let animationFrame
        const updateValue = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = (timestamp - startTime) / (duration * 1000)

            if (progress < 1) {
                setDisplayValue(Math.floor(value * progress))
                animationFrame = requestAnimationFrame(updateValue)
            } else {
                setDisplayValue(value)
            }
        }

        animationFrame = requestAnimationFrame(updateValue)

        return () => cancelAnimationFrame(animationFrame)
    }, [value, duration])

    return <span>{displayValue}</span>
}

export default function Stats({ stats = [], title = "Stats" }) {
    const { theme } = useTheme()

    return (
        <div className={`p-8 flex items-center justify-center bg-transparent ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="text-3xl md:text-4xl font-bold leading-tight">
                        {title}
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className={`p-4 rounded-lg text-center transition-all duration-300 ${theme === 'dark'
                                        ? 'border border-gray-700 backdrop-blur-sm bg-gray-900/30 hover:bg-gray-800/50'
                                        : 'border border-gray-200 bg-white shadow-md hover:shadow-lg'
                                    }`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className="flex justify-center mb-2">
                                    {stat?.icon}
                                </div>
                                <div className={`text-4xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                    <AnimatedNumber value={stat.value} />
                                    {stat.value >= 100 ? '+' : ''}
                                </div>
                                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}