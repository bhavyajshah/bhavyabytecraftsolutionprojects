"use client"
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, Code, Users } from 'lucide-react'

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

export default function Stats() {
    const stats = [
        { value: 17, label: 'years of experience', icon: Clock },
        { value: 1000, label: 'IT projects', icon: Code },
        { value: 200, label: 'support partnerships', icon: Users },
    ]

    return (
        <div className="text-white p-8 flex items-center justify-center bg-transparent">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="text-3xl md:text-4xl font-bold leading-tight">
                        Custom software development partner for complex tech needs
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="p-4 rounded-lg text-center border border-gray-700 backdrop-blur-sm bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className="flex justify-center mb-2">
                                    <stat.icon className="w-8 h-pnpm 8 text-[#6430c2]" />
                                </div>
                                <div className="text-4xl font-bold mb-2">
                                    <AnimatedNumber value={stat.value} />
                                    {stat.value >= 1000 ? '+' : ''}
                                </div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}