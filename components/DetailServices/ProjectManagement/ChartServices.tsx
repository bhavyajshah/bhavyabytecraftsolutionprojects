"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Users, Briefcase, Target } from "lucide-react"

const projectManagerData = [
    { name: "Without PM", completionRatio: 60, budget: 23380, developmentCost: 1016.52 },
    { name: "With PM", completionRatio: 97, budget: 25880, developmentCost: 761.17 },
]

const roleData = [
    { title: "Project Manager", icon: Users, color: "bg-blue-500" },
    { title: "Product Owner", icon: Briefcase, color: "bg-green-500" },
    { title: "Scrum Master", icon: Target, color: "bg-purple-500" },
]

export default function ChartServices() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="w-full min-h-screen bg-gray-900 text-white p-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto space-y-8"
            >
                <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-center text-blue-400">
                            Professional IT Project Managers
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {roleData.map((role, index) => (
                                <motion.div
                                    key={role.title}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`p-6 ${role.color} rounded-lg text-center shadow-lg`}
                                >
                                    <role.icon className="w-12 h-12 mx-auto mb-4" />
                                    <h3 className="font-semibold text-xl">{role.title}</h3>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-center text-gray-300">
                            Select professional IT services for your software development project.
                        </p>
                        <div className="flex justify-center">
                            <Button
                                className="bg-blue-500 hover:bg-blue-600 text-white"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <motion.span
                                    animate={{ x: isHovered ? 10 : 0 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    Request specialists
                                </motion.span>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-center text-green-400">
                            Value Added by a Project Manager
                        </CardTitle>
                        <p className="text-center text-gray-400">
                            See the difference between a project with and without a Project Manager.
                        </p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <ChartContainer
                            config={{
                                completionRatio: {
                                    label: "Completion ratio/Iteration",
                                    color: "hsl(var(--chart-1))",
                                },
                                budget: {
                                    label: "Budget",
                                    color: "hsl(var(--chart-2))",
                                },
                                developmentCost: {
                                    label: "Development cost/SP",
                                    color: "hsl(var(--chart-3))",
                                },
                            }}
                            className="h-[400px]"
                        >
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={projectManagerData}>
                                    <XAxis dataKey="name" stroke="#fff" />
                                    <YAxis yAxisId="left" orientation="left" stroke="hsl(var(--chart-1))" />
                                    <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--chart-2))" />
                                    <ChartTooltip content={<ChartTooltipContent />} />
                                    <Bar
                                        yAxisId="left"
                                        dataKey="completionRatio"
                                        fill="var(--color-completionRatio)"
                                        animationBegin={0}
                                        animationDuration={1500}
                                    />
                                    <Bar
                                        yAxisId="right"
                                        dataKey="budget"
                                        fill="var(--color-budget)"
                                        animationBegin={500}
                                        animationDuration={1500}
                                    />
                                    <Bar
                                        yAxisId="right"
                                        dataKey="developmentCost"
                                        fill="var(--color-developmentCost)"
                                        animationBegin={1000}
                                        animationDuration={1500}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                        <div className="space-y-4">
                            <p className="text-gray-300 text-center">
                                Adding a PM to the Team increased Completion Ratio by 62% and reduced Development Cost by 25%.
                            </p>
                            <div className="flex justify-center">
                                <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white">
                                    View detailed example
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}