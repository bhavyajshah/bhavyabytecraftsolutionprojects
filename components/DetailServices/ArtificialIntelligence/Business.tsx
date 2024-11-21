'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Workflow, Database, Layers, Zap, Award, Lightbulb } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const solutions = [
    {
        title: "Automated workflows",
        description: "Streamline operations with AI-powered automation, reducing costs and errors while boosting efficiency.",
        tags: ["Healthcare", "FR"],
        icon: Workflow
    },
    {
        title: "Rapid data handling",
        description: "Harness the power of AI to process and analyze vast amounts of data for informed decision-making.",
        tags: ["Enterprise", "AT"],
        icon: Database
    },
    {
        title: "Unified digital assets",
        description: "Centralize and optimize your digital resources with AI-driven asset management solutions.",
        tags: ["Enterprise", "FR"],
        icon: Layers
    },
    {
        title: "Predictive analytics",
        description: "Forecast trends and anticipate market changes with AI-powered predictive models.",
        tags: ["Finance", "Tech"],
        icon: Lightbulb
    },
    {
        title: "AI-enhanced customer service",
        description: "Elevate customer experiences with intelligent chatbots and personalized interactions.",
        tags: ["Retail", "Service"],
        icon: Zap
    },
    {
        title: "Intelligent quality control",
        description: "Ensure product excellence with AI-driven quality assurance and defect detection systems.",
        tags: ["Manufacturing", "QA"],
        icon: Award
    }
]

export default function Business() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [avatars, setAvatars] = useState<string[]>([])

    useEffect(() => {
        const fetchAvatars = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/?results=6')
                const data = await response.json()
                const avatarUrls = data.results.map((user: any) => user.picture.medium)
                setAvatars(avatarUrls)
            } catch (error) {
                console.error('Error fetching avatars:', error)
            }
        }

        fetchAvatars()
    }, [])

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (solutions.length - 2))
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + solutions.length - 2) % (solutions.length - 2))
    }

    return (
        <div className="min-h-screen  text-neutral-800 dark:bg-transparent dark:text-white p-4 flex flex-col justify-center">
            <div className="max-w-6xl mx-auto w-full">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-neutral-800 dark:text-white">
                    How can AI revolutionize your business?
                </h1>
                <div className="relative">
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-neutral-800 border-neutral-300 hover:bg-neutral-100 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
                        onClick={prevSlide}
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-neutral-800 border-neutral-300 hover:bg-neutral-100 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
                        onClick={nextSlide}
                    >
                        <ChevronRight className="h-6 w-6" />
                    </Button>
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
                        >
                            {solutions.map((solution, index) => (
                                <Card key={index} className="w-full md:w-1/3 flex-shrink-0 bg-white border-neutral-200 dark:backdrop-blur-sm dark:bg-gray-900/30 dark:border-gray-700 m-2 overflow-hidden">
                                    <CardHeader className="relative overflow-hidden">
                                        <solution.icon className="w-6 h-6 mb-4 text-neutral-600 dark:text-[#6430C2]" />
                                        <CardTitle className="text-neutral-800 dark:text-white">{solution.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-neutral-600 dark:text-gray-300">{solution.description}</p>
                                    </CardContent>
                                    <CardFooter className="flex justify-between items-center">
                                        <div className="flex gap-2">
                                            {solution.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className="bg-neutral-200 text-neutral-700 dark:bg-gray-700 dark:text-white text-xs px-2 py-1 rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <Avatar>
                                            <AvatarImage src={avatars[index]} alt="User avatar" />
                                            <AvatarFallback>AI</AvatarFallback>
                                        </Avatar>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}