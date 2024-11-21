'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function DevOpsValueComparison() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        setIsDarkMode(darkModeMediaQuery.matches)

        const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches)
        darkModeMediaQuery.addEventListener('change', handleChange)

        return () => darkModeMediaQuery.removeEventListener('change', handleChange)
    }, [])

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
        document.documentElement.classList.toggle('dark')
    }

    const chartData = [
        { sprint: 'Sprint 1', withoutDevOps: 11, withDevOps: 15 },
        { sprint: 'Sprint 2', withoutDevOps: 13, withDevOps: 3 },
    ]

    return (
        <div className={`min-h-screen p-8 transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">The Value DevOps Adds to a Project</h1>
                    <div className="flex items-center space-x-2">
                        <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={toggleDarkMode} />
                        <Label htmlFor="dark-mode">Dark Mode</Label>
                    </div>
                </div>
                <p className="text-xl text-center max-w-4xl mx-auto mb-12 text-gray-700 dark:text-gray-300">
                    Discover the significant impact of implementing DevOps practices in your projects.
                </p>

                <div className="grid gap-8 md:grid-cols-2">
                    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Time Needed for Release</h2>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex flex-col items-center">
                                    <p className="mb-3 text-sm font-medium text-gray-600 dark:text-gray-400">WITHOUT DEVOPS</p>
                                    <div className="w-24 h-24 rounded-full border-8 border-blue-500 dark:border-blue-400 flex items-center justify-center mb-2">
                                        <span className="text-3xl font-bold text-gray-800 dark:text-gray-100">8<span className="text-xl">h</span></span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="mb-3 text-sm font-medium text-gray-600 dark:text-gray-400">WITH DEVOPS</p>
                                    <div className="w-24 h-24 rounded-full border-8 border-green-500 dark:border-green-400 flex items-center justify-center mb-2 relative">
                                        <div className="absolute top-0 left-0 w-4 h-4 bg-green-500 dark:bg-green-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                                        <span className="text-3xl font-bold text-gray-800 dark:text-gray-100">0.1<span className="text-xl">h</span></span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Specialists Required for Release</h2>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex flex-col items-center">
                                    <p className="mb-3 text-sm font-medium text-gray-600 dark:text-gray-400">WITHOUT DEVOPS</p>
                                    <div className="flex items-center">
                                        <span className="text-4xl font-bold mr-2 text-gray-800 dark:text-gray-100">5-10</span>
                                    </div>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">specialists</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="mb-3 text-sm font-medium text-gray-600 dark:text-gray-400">WITH DEVOPS</p>
                                    <div className="flex items-center">
                                        <span className="text-4xl font-bold mr-2 text-gray-800 dark:text-gray-100">2-3</span>
                                    </div>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">specialists</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Issues After Release</h2>
                            <ChartContainer
                                config={{
                                    withoutDevOps: {
                                        label: "Without DevOps",
                                        color: "hsl(var(--chart-1))",
                                    },
                                    withDevOps: {
                                        label: "With DevOps",
                                        color: "hsl(var(--chart-2))",
                                    },
                                }}
                            >
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={chartData}>
                                        <XAxis dataKey="sprint" />
                                        <YAxis />
                                        <Tooltip content={<ChartTooltip />} />
                                        <Legend />
                                        <Bar dataKey="withoutDevOps" fill="var(--color-withoutDevOps)" name="Without DevOps" />
                                        <Bar dataKey="withDevOps" fill="var(--color-withDevOps)" name="With DevOps" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}