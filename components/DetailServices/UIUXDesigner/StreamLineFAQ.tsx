'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Check, Sun, Moon } from 'lucide-react'
import Image from "next/image"

export default function StreamLineFAQ() {
    const [openStep, setOpenStep] = useState(0)
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        document.documentElement.className = theme
    }, [theme])

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
    }

    const steps = [
        {
            title: "User Research",
            description: "We dive deep into understanding your users' needs, behaviors, and pain points.",
        },
        {
            title: "Wireframing",
            description: "We create low-fidelity sketches to establish the basic structure of your interface.",
        },
        {
            title: "UI Design",
            description: "We craft visually appealing interfaces that align with your brand and user expectations.",
        },
        {
            title: "Prototyping",
            description: "We build interactive prototypes to test and refine the user experience before development.",
        },
    ]

    const benefits = [
        "Increased user satisfaction",
        "Higher conversion rates",
        "Reduced development costs",
        "Faster time-to-market",
        "Improved brand perception",
        "Enhanced accessibility",
    ]

    return (
        <div className="p-4 md:p-8 bg-background text-foreground transition-all duration-300 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto space-y-12 bg-card shadow-lg rounded-2xl p-8"
            >
                <header className="text-center space-y-4 relative">

                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-foreground">
                        Elevate Your Digital Experience
                    </h1>
                    <p className="text-xl text-muted-foreground">Crafting intuitive and engaging UI/UX designs</p>
                </header>

                <section className="grid md:grid-cols-2 gap-8 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Our Design Process</h2>
                        <p className="text-muted-foreground mb-6">
                            We follow a comprehensive approach to ensure your product not only looks great but also delivers an
                            exceptional user experience.
                        </p>
                        <div className="space-y-4">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                                >
                                    <button
                                        className="w-full flex justify-between items-center p-4 font-semibold"
                                        onClick={() => setOpenStep(openStep === index ? -1 : index)}
                                    >
                                        <span>{step.title}</span>
                                        {openStep === index ? (
                                            <ChevronUp className="h-5 w-5 text-primary" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5 text-primary" />
                                        )}
                                    </button>
                                    <AnimatePresence>
                                        {openStep === index && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="p-4 pt-0 text-sm text-muted-foreground">{step.description}</div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative h-[450px] rounded-lg overflow-hidden"
                    >
                        <Image
                            src={'https://www.ticworks.com/blog/images/effective-ux-research.webp'}
                            alt="UI/UX Design Process"
                            width={300}
                            height={300}
                            className="rounded-lg object-cover w-full h-full"
                        />
                    </motion.div>
                </section>

                <section className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">Why Choose Our UI/UX Design Services?</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="bg-card p-4 rounded-lg flex items-start space-x-2 shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                <span>{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </motion.div>
            <style jsx global>{`
                :root {
                    --background: #f5f5f7;
                    --foreground: #1d1d1f;
                    --card: #ffffff;
                    --card-foreground: #1d1d1f;
                    --primary: #0071e3;
                    --primary-foreground: #ffffff;
                    --muted-foreground: #6e6e73;
                    --shadow: rgba(0, 0, 0, 0.1);
                }

                .dark {
                    --background: #000000;
                    --foreground: #ffffff;
                    --card: #1f1f1f;
                    --card-foreground: #ffffff;
                    --primary: #6430C2;
                    --primary-foreground: #ffffff;
                    --muted-foreground: #a0a0a0;
                }
            `}</style>
        </div>
    )
}