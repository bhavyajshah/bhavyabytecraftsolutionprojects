'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Brain, Cpu, Zap, ChevronRight } from "lucide-react"
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function Services() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)

    const services = [
        {
            icon: Brain,
            title: "AI Strategy Consulting",
            description: "Navigate the AI landscape with our expert guidance. We'll help you identify opportunities, mitigate risks, and develop a robust AI strategy tailored to your business goals."
        },
        {
            icon: Cpu,
            title: "Custom AI Development",
            description: "From machine learning models to natural language processing systems, we build bespoke AI solutions that drive innovation and efficiency in your organization."
        },
        {
            icon: Zap,
            title: "AI Integration & Optimization",
            description: "Seamlessly integrate AI into your existing infrastructure. We optimize your systems for peak performance, ensuring you get the most out of your AI investments."
        }
    ]

    return (
        <div className="min-h-screen text-white p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                    Feature We Provide
                </h1>
                <p className="text-xl text-center mb-12 text-gray-300">
                    Empowering businesses with cutting-edge AI solutions to transform ideas into reality.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="backdrop-blur-sm bg-gray-900/30 hover:bg-gray-800/50 border-gray-700 overflow-hidden group relative"
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <CardContent className="p-6 h-full flex flex-col">
                                <service.icon className="w-6 h-6 mb-4 text-[#6430C2]" />
                                <h2 className="text-2xl font-semibold mb-4 text-gray-300">{service.title}</h2>
                                <p className="text-gray-300 flex-grow">{service.description}</p>
                            </CardContent>
                            <div className={`absolute bottom-0 left-0 w-full h-1 bg-gray-300 transition-all duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`} />
                        </Card>
                    ))}
                </div>

                <div className="backdrop-blur-sm bg-gray-900/30 hover:bg-gray-800/50 p-8 rounded-lg flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    <p className="text-xl font-semibold">Ready to revolutionize your business with AI?</p>
                    <Link href='/pricing' className="bg-[#6430C2] text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    )
}