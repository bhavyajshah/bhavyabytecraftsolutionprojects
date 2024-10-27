'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Code, Bug, Zap, BarChart, Shield, Users, ChevronLeft, ChevronRight } from 'lucide-react'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'

const experts = [
    {
        name: "Emily Chen",
        title: "Senior QA Strategist",
        bio: "Emily specializes in developing comprehensive QA strategies for enterprise-level software.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
        expertise: ["Test Planning", "Risk Assessment", "Process Optimization"],
        projects: [
            { name: "E-commerce Platform Overhaul", description: "Led QA strategy for a major e-commerce platform, resulting in 40% reduction in post-release defects." },
            { name: "FinTech App Launch", description: "Developed and implemented a comprehensive QA plan for a new FinTech application, ensuring 99.9% uptime post-launch." }
        ]
    },
    {
        name: "Marcus Johnson",
        title: "Automation QA Lead",
        bio: "Marcus is an expert in designing and implementing robust automated testing frameworks.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww",
        expertise: ["Test Automation", "CI/CD Integration", "API Testing"],
        projects: [
            { name: "Healthcare Management System", description: "Implemented an end-to-end automation framework, reducing testing time by 70% and improving coverage to 95%." },
            { name: "Retail Inventory Management", description: "Developed API automation suite that caught critical issues before production, saving an estimated $2M in potential losses." }
        ]
    },
    {
        name: "Sophia Patel",
        title: "Performance QA Specialist",
        bio: "Sophia excels in performance testing and optimization for high-traffic web applications.",
        image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8fHww",
        expertise: ["Load Testing", "Scalability Analysis", "Performance Optimization"],
        projects: [
            { name: "Streaming Service Optimization", description: "Identified and resolved performance bottlenecks, improving user capacity by 200% during peak times." },
            { name: "Government Portal Upgrade", description: "Conducted comprehensive performance testing, ensuring the portal could handle 10x the normal load during critical periods." }
        ]
    },
    {
        name: "Alex Rivera",
        title: "Security QA Expert",
        bio: "Alex specializes in identifying and mitigating security vulnerabilities in software applications.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww",
        expertise: ["Penetration Testing", "Security Compliance", "Threat Modeling"],
        projects: [
            { name: "Banking App Security Audit", description: "Conducted thorough security testing, identifying and helping resolve 15 critical vulnerabilities before launch." },
            { name: "IoT Device Firmware Testing", description: "Developed a security testing protocol for IoT devices, significantly reducing the risk of exploits in consumer products." }
        ]
    },
]

const qaServices = [
    { icon: Code, title: "Test Automation", description: "Cutting-edge automation solutions to improve efficiency and coverage of your testing processes." },
    { icon: Bug, title: "Defect Management", description: "Robust systems for tracking, prioritizing, and resolving software defects effectively." },
    { icon: Zap, title: "Performance Optimization", description: "In-depth analysis and tuning to ensure your applications perform under any load." },
    { icon: BarChart, title: "Quality Metrics & Reporting", description: "Comprehensive quality dashboards and reports for data-driven decision making." },
    { icon: Shield, title: "Security Testing", description: "Thorough security assessments to protect your applications from vulnerabilities and threats." },
    { icon: Users, title: "User Experience Testing", description: "Ensuring your software not only functions correctly but provides an optimal user experience." },
]

export default function QAConsultation() {
    const [selectedExpert, setSelectedExpert] = useState(experts[0])
    const [expertIndex, setExpertIndex] = useState(0)


    const nextExpert = () => {
        setExpertIndex((prevIndex) => (prevIndex + 1) % experts.length)
        setSelectedExpert(experts[(expertIndex + 1) % experts.length])
    }

    const prevExpert = () => {
        setExpertIndex((prevIndex) => (prevIndex - 1 + experts.length) % experts.length)
        setSelectedExpert(experts[(expertIndex - 1 + experts.length) % experts.length])
    }

    return (
        <div className="min-h-screen text-white p-4 md:p-8 lg:p-12">
            <div className="max-w-6xl mx-auto space-y-12">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="mt-12"
                >
                    <h3 className="text-5xl font-bold mb-6 text-center">Our QA Services</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                        {qaServices.map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Card className="border-gray-700 backdrop-blur-sm bg-gray-900/30 border-none h-full">
                                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                                        <service.icon className="w-12 h-12 text-[#6430c2] mb-4" />
                                        <h4 className="font-semibold text-white text-lg mb-2">{service.title}</h4>
                                        <p className="text-white flex-grow">{service.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="border-gray-700 backdrop-blur-sm bg-gray-900/30 border-none p-6 md:p-8 rounded-2xl shadow-xl">
                        <CardContent className="space-y-6">
                            <motion.h1
                                className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-white"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                Expert QA Consultation
                            </motion.h1>
                            <motion.p
                                className="text-gray-300 text-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                Elevate your software quality with our team of QA specialists. Get personalized strategies to overcome your testing challenges and ensure flawless product delivery.
                            </motion.p>

                        </CardContent>
                    </Card>
                </motion.div>
                <div className="space-y-6 relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedExpert.name}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-2xl md:text-3xl font-bold">{selectedExpert.name}</h2>
                                    <LinkedInLogoIcon className="w-6 h-6 text-[#6430c2] cursor-pointer transform hover:scale-110 transition-transform" />
                                </div>
                                <p className="text-gray-300 text-lg">{selectedExpert.bio}</p>
                                <ul className="space-y-2 text-gray-300">
                                    {selectedExpert.expertise.map((skill, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <CheckCircle className="text-[#6430c2] flex-shrink-0" /> {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="relative w-full max-w-[80%] aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mx-auto">
                                <Image
                                    src={selectedExpert.image}
                                    alt={selectedExpert.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-2xl"
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-between mt-4">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full border-gray-700 backdrop-blur-sm bg-gray-900/30 hover:bg-white/20"
                            onClick={prevExpert}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full border-gray-700 backdrop-blur-sm bg-gray-900/30 hover:bg-white/20"
                            onClick={nextExpert}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>


            </div>
        </div>
    )
}