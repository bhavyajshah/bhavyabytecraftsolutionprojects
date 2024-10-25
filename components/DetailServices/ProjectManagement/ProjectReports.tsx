"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Doughnut, Bar, Line } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Filler } from "chart.js"
import { FileText, CheckCircle, Clock, Users, Star, TrendingUp } from "lucide-react"

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Filler)

const projectData = {
    sprints: [
        {
            id: 9,
            date: "(11.05.2023-23.05.2023)",
            tasksCompleted: 72,
            completedScope: 154,
            committedScope: 213,
            bugsClosed: 15,
            storiesCompleted: 8,
        },
        {
            id: 10,
            date: "(24.05.2023-06.06.2023)",
            tasksCompleted: 50,
            completedScope: 107,
            committedScope: 215,
            bugsClosed: 10,
            storiesCompleted: 6,
        },
    ],
    projectMetrics: {
        onTimeDelivery: 95,
        clientSatisfaction: 4.8,
        teamVelocity: [80, 85, 90, 88, 92, 95],
        costSavings: 15,
        qualityScore: 98,
    },
}

const DoughnutChart = ({ percentage, label }: { percentage: number; label: string }) => {
    const data = {
        datasets: [
            {
                data: [percentage, 100 - percentage],
                backgroundColor: ["#10B981", "#4B5563"],
                borderWidth: 0,
                circumference: 270,
                rotation: 225,
            },
        ],
    }

    const options = {
        cutout: "70%",
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
    }

    return (
        <div className="relative w-32 h-32">
            <Doughnut data={data} options={options} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">{percentage}%</span>
                <span className="text-xs text-gray-300">{label}</span>
            </div>
        </div>
    )
}

const BarChart = ({ data }: { data: typeof projectData.sprints }) => {
    const chartData = {
        labels: data.map(sprint => `Sprint ${sprint.id}`),
        datasets: [
            {
                label: 'Completed Scope',
                data: data.map(sprint => sprint.completedScope),
                backgroundColor: '#10B981',
            },
            {
                label: 'Committed Scope',
                data: data.map(sprint => sprint.committedScope),
                backgroundColor: '#3B82F6',
            },
        ],
    }

    const options = {
        responsive: true,
        scales: {
            x: {
                stacked: true,
                ticks: { color: 'white' },
            },
            y: {
                stacked: true,
                ticks: { color: 'white' },
            },
        },
        plugins: {
            legend: {
                position: 'top' as const,
                labels: { color: 'white' },
            },
            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += context.parsed.y + ' hours';
                        }
                        return label;
                    },
                    afterBody: function (tooltipItems: any) {
                        const sprintIndex = tooltipItems[0].dataIndex;
                        const sprint = data[sprintIndex];
                        return [
                            `Tasks Completed: ${sprint.tasksCompleted}%`,
                            `Bugs Closed: ${sprint.bugsClosed}`,
                            `Stories Completed: ${sprint.storiesCompleted}`,
                        ];
                    },
                },
            },
        },
    }

    return <Bar data={chartData} options={options} />
}

const LineChart = ({ data }: { data: number[] }) => {
    const chartData = {
        labels: data.map((_, index) => `Sprint ${index + 1}`),
        datasets: [
            {
                label: 'Team Velocity',
                data: data,
                borderColor: '#10B981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                fill: true,
            },
        ],
    }

    const options = {
        responsive: true,
        scales: {
            x: {
                ticks: { color: 'white' },
            },
            y: {
                ticks: { color: 'white' },
            },
        },
        plugins: {
            legend: {
                labels: { color: 'white' },
            },
        },
    }

    return <Line data={chartData} options={options} />
}

export default function Component() {
    return (
        <div className="min-h-screen text-white p-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-4">Comprehensive Project Management Dashboard</h1>
                    <p className="mb-8 text-xl max-w-4xl mx-auto">
                        Discover how our project management services drive success, efficiency, and client satisfaction.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    <Card className="backdrop-blur-sm bg-gray-900/30 border-gray-700">
                        <CardHeader>
                            <CardTitle className="text-xl text-white flex items-center">
                                <TrendingUp className="mr-2 text-green-400" size={20} />
                                On-Time Delivery
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex justify-center text-white">
                            <DoughnutChart percentage={projectData.projectMetrics.onTimeDelivery} label="On-Time" />
                        </CardContent>
                    </Card>

                    <Card className="backdrop-blur-sm bg-gray-900/30 border-gray-700">
                        <CardHeader>
                            <CardTitle className="text-xl text-white flex items-center">
                                <Star className="mr-2 text-yellow-400" size={20} />
                                Client Satisfaction
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center">
                            <p className="text-4xl text-white font-bold mb-2">{projectData.projectMetrics.clientSatisfaction}/5</p>
                            <p className="text-sm text-gray-300">Average Rating</p>
                        </CardContent>
                    </Card>

                    <Card className="backdrop-blur-sm bg-gray-900/30 border-gray-700">
                        <CardHeader>
                            <CardTitle className="text-xl text-white flex items-center">
                                <Users className="mr-2 text-blue-400" size={20} />
                                Team Efficiency
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-center text-white mb-2">Velocity Trend</p>
                            <LineChart data={projectData.projectMetrics.teamVelocity} />
                        </CardContent>
                    </Card>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {projectData.sprints.map((sprint) => (
                        <Card key={sprint.id} className="backdrop-blur-sm bg-gray-900/30 border-gray-700">
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-center">
                                    <CardTitle className="text-xl text-white">Sprint {sprint.id}</CardTitle>
                                    <FileText className="text-gray-400" size={20} />
                                </div>
                                <CardDescription className="text-gray-300">{sprint.date}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-between items-center mb-4">
                                    <div>
                                        <p className="text-4xl font-bold text-white">{sprint.tasksCompleted}%</p>
                                        <p className="text-sm text-gray-300">Tasks Completed</p>
                                    </div>
                                    <div className="w-32 h-32">
                                        <DoughnutChart percentage={sprint.tasksCompleted} label="Completed" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-white">
                                    <div className="flex items-center">
                                        <CheckCircle className="mr-2 text-green-400" size={20} />
                                        <div>
                                            <p className="font-semibold">{sprint.completedScope} hr</p>
                                            <p className="text-sm text-gray-300">Completed scope</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="mr-2 text-blue-400" size={20} />
                                        <div>
                                            <p className="font-semibold">{sprint.committedScope} hr</p>
                                            <p className="text-sm text-gray-300">Committed scope</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Card className="backdrop-blur-sm bg-gray-900/30 border-gray-700">
                    <CardHeader>
                        <CardTitle className="text-xl text-white">Sprint Performance Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <BarChart data={projectData.sprints} />
                    </CardContent>
                </Card>

                <div className="mt-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Why Choose Our Project Management Services?</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Card className="backdrop-blur-sm bg-gray-900/30 border-gray-700">
                            <CardHeader>
                                <CardTitle className="text-lg text-white">Cost Savings</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold text-green-400">{projectData.projectMetrics.costSavings}%</p>
                                <p className="text-sm text-gray-300">Average project cost reduction</p>
                            </CardContent>
                        </Card>
                        <Card className="backdrop-blur-sm bg-gray-900/30 border-gray-700">
                            <CardHeader>
                                <CardTitle className="text-lg text-white">Quality Assurance</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold text-blue-400">{projectData.projectMetrics.qualityScore}/100</p>
                                <p className="text-sm text-gray-300">Average quality score</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}