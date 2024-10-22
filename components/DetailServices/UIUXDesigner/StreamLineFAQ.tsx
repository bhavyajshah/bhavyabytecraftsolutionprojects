'use client'
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Check } from "lucide-react"
import Image from "next/image"

export default function StreamLineFAQ() {
    const [openStep, setOpenStep] = useState(0)

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
        <div className=" text-white p-4 md:p-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto space-y-12"
            >
                <header className="text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-white">
                        Elevate Your Digital Experience
                    </h1>
                    <p className="text-xl text-gray-400">Crafting intuitive and engaging UI/UX designs</p>
                </header>

                <section className="grid md:grid-cols-2 gap-8 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Our Design Process</h2>
                        <p className="text-gray-400 mb-6">
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
                                    className="bg-gray-800 rounded-lg overflow-hidden"
                                >
                                    <button
                                        className="w-full flex justify-between items-center p-4 font-semibold"
                                        onClick={() => setOpenStep(openStep === index ? -1 : index)}
                                    >
                                        <span>{step.title}</span>
                                        {openStep === index ? (
                                            <ChevronUp className="h-5 w-5 text-purple-400" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5 text-purple-400" />
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
                                                <div className="p-4 pt-0 text-sm text-gray-400">{step.description}</div>
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
                                className="bg-gray-800 p-4 rounded-lg flex items-start space-x-2"
                            >
                                <Check className="h-5 w-5 text-[#6430C2] mt-1 flex-shrink-0" />
                                <span>{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </motion.div>
        </div>
    )
}