"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from 'lucide-react'
import { Switch } from "@/components/ui/switch"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function BusinessAnalysisGrowth() {
    const [withBA, setWithBA] = useState(true)

    const metrics = [
        {
            title: "Task-switching time",
            withBA: "1",
            withoutBA: "5",
            unit: "hours",
            description: "In the absence of detailed documentation, developers have to spend more time on research when switching between tasks. Without an analyst, developers are directly confronted by stakeholders and frequently distracted from building the solution."
        },
        {
            title: "Requirements ambiguity",
            withBA: "1",
            withoutBA: "5",
            unit: "%",
            description: "An increased share of requirements is not properly elicited and analyzed, failing to consider evolving business needs. Poor change management leads to scope creep and contradictions in documentation, undermining solution quality and predictable delivery."
        },
        {
            title: "On-time delivery",
            withBA: "70",
            withoutBA: "50",
            unit: "%",
            description: "Solution features are not duly investigated and prioritized, with the delivery roadmap based on unrealistic and poorly documented stakeholder expectations. Requirements are fragmented, with a shrinking number of features and releases delivered on time."
        }
    ]

    return (
        <motion.div
            className="min-h-screen max-w-6xl mx-auto bg-transparent text-gray-800 dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >

            <motion.div
                className="text-center mb-12"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <h1 className="text-5xl text-gray-900 dark:text-white font-bold mb-4">
                    Business Analysts: Catalysts for Growth and Profit
                </h1>
                <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
                    Insights from over 100 projects with and without Business Analysts.
                </p>
                <div className="flex items-center justify-center space-x-4">
                    <span className={`text-lg ${withBA ? "font-bold text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-300"}`}>With BA</span>
                    <Switch
                        checked={withBA}
                        onCheckedChange={setWithBA}
                        className="data-[state=checked]:bg-gray-800 dark:data-[state=checked]:bg-white"
                    />
                    <span className={`text-lg ${!withBA ? "font-bold text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-300"}`}>Without BA</span>
                </div>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, staggerChildren: 0.1 }}
            >
                {metrics.map((metric, index) => (
                    <motion.div
                        key={metric.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/30 backdrop-blur-sm border">
                            <CardContent className="p-6">
                                <h2 className="text-xl text-gray-900 dark:text-white font-semibold mb-4">{metric.title}</h2>
                                <motion.div
                                    className="text-4xl text-gray-900 dark:text-white font-bold mb-4"
                                    key={withBA ? metric.withBA : metric.withoutBA}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                >
                                    {withBA ? metric.withBA : metric.withoutBA}
                                    <span className="text-2xl ml-1 text-gray-700 dark:text-gray-300">{metric.unit}</span>
                                </motion.div>
                                <p className="text-md text-gray-600 dark:text-gray-300">{metric.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                    Elevate Your Project with Expert Business Analysts
                </h2>
                <Link href="/pricing"
                    className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80 bg-gray-800 dark:bg-white dark:text-gray-900"
                >
                    Request Consultation <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
            </motion.div>

        </motion.div>
    )
}

