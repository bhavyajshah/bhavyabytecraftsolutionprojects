"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Stethoscope, GraduationCap, ShoppingCart } from "lucide-react"

export default function AIImpact() {
    const categories = [
        {
            title: "AI in Business",
            icon: <Briefcase className="h-6 w-6" />,
            items: [
                "Predictive analytics for market trends",
                "Automated customer service chatbots",
                "Intelligent supply chain optimization",
                "Personalized marketing campaigns",
                "Fraud detection and risk assessment",
            ],
        },
        {
            title: "AI in Healthcare",
            icon: <Stethoscope className="h-6 w-6" />,
            items: [
                "Early disease detection and diagnosis",
                "Personalized treatment plans",
                "Drug discovery and development",
                "Robotic-assisted surgery",
                "Remote patient monitoring",
            ],
        },
        {
            title: "AI in Education",
            icon: <GraduationCap className="h-6 w-6" />,
            items: [
                "Adaptive learning platforms",
                "Automated grading and feedback",
                "Intelligent tutoring systems",
                "Personalized curriculum development",
                "Early intervention for at-risk students",
                "Virtual reality educational experiences",
            ],
        },
        {
            title: "AI in Retail",
            icon: <ShoppingCart className="h-6 w-6" />,
            items: [
                "Dynamic pricing strategies",
                "Visual search and product recommendations",
                "Inventory management and demand forecasting",
                "Augmented reality for virtual try-ons",
                "Automated checkout systems",
            ],
        },
    ]

    return (
        <div className="min-h-screen max-w-6xl mx-auto mb-20 text-white">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold mb-6 text-center"
            >
                AI's Transformative Impact Across Industries
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-center mb-8 max-w-3xl mx-auto"
            >
                Discover how AI is revolutionizing various sectors, driving innovation and efficiency.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                        <Card className="backdrop-blur-sm bg-gray-900/30 border-gray-700">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2 text-[#6430C2]">
                                    {category.icon}
                                    <span>{category.title}</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-none space-y-2">
                                    {category.items.map((item, itemIndex) => (
                                        <motion.li
                                            key={itemIndex}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: itemIndex * 0.1 + 0.5 }}
                                            className="flex items-center space-x-2"
                                        >
                                            <span className="text-[#6430C2]">•</span>
                                            <span className="text-white">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}