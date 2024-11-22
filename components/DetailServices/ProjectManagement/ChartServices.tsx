"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie, ResponsiveContainer, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { Users, CheckCircle, TrendingUp, BarChart as BarChartIcon, Zap, ThumbsUp, PieChartIcon } from "lucide-react"

const projectManagerData = [
    { name: "Completion Ratio", value: 97 },
    { name: "Budget Efficiency", value: 85 },
    { name: "Team Productivity", value: 78 },
    { name: "Stakeholder Satisfaction", value: 92 },
]

const COLORS = ['#8C8C8C', '#B3B3B3', '#D9D9D9', '#F2F2F2']

const projectProgressData = [
    { month: "Jan", withPM: 30, withoutPM: 20 },
    { month: "Feb", withPM: 45, withoutPM: 30 },
    { month: "Mar", withPM: 65, withoutPM: 40 },
    { month: "Apr", withPM: 80, withoutPM: 55 },
    { month: "May", withPM: 95, withoutPM: 65 },
    { month: "Jun", withPM: 100, withoutPM: 75 },
]

const comparisonData = [
    { metric: "Project Completion Rate", withPM: "97%", withoutPM: "60%", icon: Zap },
    { metric: "Budget Adherence", withPM: "95%", withoutPM: "70%", icon: BarChartIcon },
    { metric: "Team Productivity", withPM: "High", withoutPM: "Medium", icon: Users },
    { metric: "Stakeholder Satisfaction", withPM: "92%", withoutPM: "65%", icon: ThumbsUp },
]

export default function OptimizedPMValue() {
    return (
        <div className="w-full min-h-screen py-16 text-gray-800">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto space-y-12"
            >
                <CardHeader>
                    <CardTitle className="text-5xl font-bold text-center text-gray-800 dark:text-white">
                        Unleash Your Project&apos;s Potential with Professional Management
                    </CardTitle>
                </CardHeader>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-8">
                        <Card className="bg-white dark:bg-transparent border-gray-200 shadow-md">
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold text-center text-gray-800 dark:text-white   flex items-center justify-center">
                                    <PieChartIcon className="mr-2 h-8 w-8" />
                                    Project Manager Impact
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer
                                    config={{
                                        value: {
                                            label: "Percentage",
                                            color: "hsl(var(--chart-1))",
                                        },
                                    }}
                                    className="h-[300px] sm:h-[200px]"
                                >
                                    <ResponsiveContainer width={700} height="80%" className="mx-auto">
                                        <PieChart>
                                            <Pie
                                                data={projectManagerData}
                                                cx="50%"
                                                cy="50%"
                                                labelLine={false}
                                                outerRadius={100}
                                                fill="#8884d8"
                                                dataKey="value"
                                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                            >
                                                {projectManagerData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <ChartTooltip content={<ChartTooltipContent />} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </ChartContainer>
                            </CardContent>
                        </Card>

                        <Card className="bg-white  dark:bg-transparent border-gray-200 shadow-md">
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold text-center text-gray-800 dark:text-white flex items-center justify-center">
                                    <TrendingUp className="mr-2 h-8 w-8" />
                                    Project Progress Acceleration
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer
                                    config={{
                                        withPM: {
                                            label: "With PM",
                                            color: "hsl(var(--chart-2))",
                                        },
                                        withoutPM: {
                                            label: "Without PM",
                                            color: "hsl(var(--chart-3))",
                                        },
                                    }}
                                    className="h-[300px] sm:h-[200px]"
                                >
                                    <ResponsiveContainer width={700} height="80%">
                                        <LineChart data={projectProgressData}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                                            <XAxis dataKey="month" stroke="#333" />
                                            <YAxis stroke="#333" />
                                            <ChartTooltip content={<ChartTooltipContent />} />
                                            <Legend />
                                            <Line type="monotone" dataKey="withPM" stroke="#8C8C8C" strokeWidth={2} />
                                            <Line type="monotone" dataKey="withoutPM" stroke="#D9D9D9" strokeWidth={2} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </ChartContainer>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-8">
                        <Card className="bg-white  dark:bg-transparent border-gray-200 shadow-md">
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold text-center text-gray-800 dark:text-white flex items-center justify-center">
                                    <BarChartIcon className="mr-2 h-8 w-8" />
                                    PM vs No PM: The Clear Advantage
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {comparisonData.map((item, index) => (
                                    <Card key={index} className="bg-gray-50  dark:bg-transparent dark:text-white border-gray-200">
                                        <CardContent className="p-4 flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <item.icon className="h-8 w-8" />
                                                <div>
                                                    <h3 className="font-semibold text-lg">{item.metric}</h3>
                                                    <p className="">With PM: {item.withPM}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="">Without PM: {item.withoutPM}</p>
                                                <p className="font-semibold">
                                                    +{parseInt(item.withPM) - parseInt(item.withoutPM)}% Improvement
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </CardContent>
                        </Card>

                        <Card className="bg-white dark:bg-transparent dark:text-white border-gray-200 shadow-md">
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold text-center flex items-center justify-center">
                                    <CheckCircle className="mr-2 h-8 w-8" />
                                    Key Benefits
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                                        <span>Boost project completion rates by up to 37%</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                                        <span>Enhance budget adherence, saving valuable resources</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                                        <span>Elevate team productivity to new heights</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                                        <span>Delight stakeholders with exceptional results</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <Card className="backdrop-blur-sm bg-gray-50 dark:bg-transparent border-gray-700 shadow-xl">
                    <CardContent className="p-8">
                        <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-4">Take the First Step Towards Project Success</h2>
                        <p className="text-center text-black dark:text-white text-lg">Let us help you achieve your project goals effectively and efficiently. Contact us to learn more about how a professional Project Manager can make a difference in your project outcomes.</p>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}