'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend)

export default function DevOpsValueComparison() {


    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                display: false,
                beginAtZero: true,
            },
            x: {
                display: false,
            },
        },
    }

    return (
        <div className="min-h-screen mb-12 text-white p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl text-center font-bold mb-4">The value DevOps adds to a project</h1>
                <p className="text-white text-xl text-center max-w-4xl mx-auto mb-8">See the difference between projects implemented with a DevOps consulting company and without one.</p>

                <div className="grid gap-8 md:grid-cols-2">
                    <Card className="backdrop-blur-sm bg-gray-900/30 border-gray-700">
                        <CardContent className="p-6">
                            <h2 className="text-xl text-white font-semibold mb-4">Time team needs for release</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-gray-400 mb-2">WITHOUT DEVOPS</p>
                                    <div className="flex items-center">
                                        <div className="w-16 h-16 rounded-full border-8 border-yellow-400 mr-4"></div>
                                        <span className="text-4xl font-bold text-white">8<span className="text-xl">h</span></span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-gray-400 mb-2">WITH DEVOPS</p>
                                    <div className="flex items-center">
                                        <div className="w-16 h-16 rounded-full border-8 border-gray-400 mr-4 relative">
                                            <div className="absolute top-0 left-0 w-4 h-4 bg-gray-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                                        </div>
                                        <span className="text-4xl font-bold text-white">0.1<span className="text-xl">h</span></span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="backdrop-blur-sm bg-gray-900/30 border-gray-700">
                        <CardContent className="p-6">
                            <h2 className="text-xl text-white font-semibold mb-4">Quantity of specialists required for release</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-white mb-2">WITHOUT DEVOPS</p>
                                    <div className="flex items-center">
                                        <span className="text-4xl text-white font-bold mr-2">5-10</span>
                                        <span className="text-white">specialists</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-white mb-2">WITH DEVOPS</p>
                                    <div className="flex items-center">
                                        <span className="text-4xl text-white font-bold mr-2">2-3</span>
                                        <span className="text-white">specialists</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="backdrop-blur-sm bg-gray-900/30 border-gray-700 md:col-span-2">
                        <CardContent className="p-6">
                            <h2 className="text-xl font-semibold mb-4 text-white">Quantity of issues after release</h2>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <p className="text-white mb-2">WITHOUT DEVOPS</p>
                                    <div className="h-48">
                                        <Bar
                                            data={{
                                                labels: ['1 sprint', '2 sprint'],
                                                datasets: [{
                                                    data: [11, 13],
                                                    backgroundColor: '#fbbf24',
                                                }]
                                            }}
                                            options={commonOptions}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-white mb-2">WITH DEVOPS</p>
                                    <div className="h-48">
                                        <Bar
                                            data={{
                                                labels: ['1 sprint', '2 sprint'],
                                                datasets: [{
                                                    data: [15, 3],
                                                    backgroundColor: '#e2e8f0',
                                                }]
                                            }}
                                            options={commonOptions}
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}