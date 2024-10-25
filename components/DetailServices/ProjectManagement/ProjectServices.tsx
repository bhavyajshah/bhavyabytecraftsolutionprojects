'use client'
import React from 'react';
import { FaLock, FaTools, FaChartLine, FaBolt, FaClipboardCheck, FaExclamationTriangle } from 'react-icons/fa';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const ProjectServices: React.FC = () => {
    // Bar chart data
    const barData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                label: 'Project Progress',
                data: [65, 59, 80, 81],
                backgroundColor: 'rgba(99, 102, 241, 0.6)',
                borderColor: 'rgba(99, 102, 241, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Doughnut chart data
    const doughnutData = {
        labels: ['Completed', 'In Progress', 'Pending'],
        datasets: [
            {
                label: 'Task Distribution',
                data: [300, 50, 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                ],
                hoverOffset: 4,
            },
        ],
    };

    return (
        <section className="px-4 py-12 md:px-10 lg:px-20 bg-gray-50">
            <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
                {/* Left side */}
                <Card className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-gray-800">DevOps as part of PDS</CardTitle>
                        <CardDescription className="mt-4 text-gray-600">
                            Explore our White Paper to learn more about other components of PDS and how DevOps fits into the bigger picture.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-6">
                        <div className="bg-blue-100 p-4 rounded-lg">
                            <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} height={100} />
                        </div>
                    </CardContent>
                </Card>

                {/* Right side: Accordion Cards */}
                <div className="grid gap-4">
                    {[
                        { title: 'Initial preparation', content: 'Gathering requirements, designing an NFR approach...' },
                        { title: 'Development', content: 'Handling development tasks and building the solution...' },
                        { title: 'Advanced features', content: 'Implementing advanced features for better scalability...' },
                        { title: 'Production design', content: 'Optimizing production design for deployment and delivery...' },
                    ].map((item, index) => (
                        <Card
                            key={index}
                            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <CardHeader>
                                <CardTitle className="text-lg font-medium text-gray-800">{`${index + 1}. ${item.title}`}</CardTitle>
                            </CardHeader>
                            <CardContent className="mt-2 text-gray-600">
                                {item.content}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Bottom Section: The value of DevOps Services */}
            <div className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">The value of DevOps Services for projects</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: 'Data safety and scalability',
                            description: 'Gathering requirements, designing NFR approaches...',
                            icon: <FaLock className="text-4xl text-yellow-400" />,
                        },
                        {
                            title: 'Better costs, tools, and visibility',
                            description: 'The most suitable requirement combinations manage...',
                            icon: <FaTools className="text-4xl text-yellow-400" />,
                        },
                        {
                            title: 'Metrics and knowledge transfer',
                            description: 'Clear service delivery metrics, SLAs, and knowledge transfer...',
                            icon: <FaChartLine className="text-4xl text-yellow-400" />,
                            chart: (
                                <div className="bg-blue-100 p-4 rounded-lg mt-4">
                                    <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: false }} height={100} />
                                </div>
                            ),
                        },
                        {
                            title: 'Quick start and requirements',
                            description: 'Actions and plans accelerate the team’s start...',
                            icon: <FaBolt className="text-4xl text-yellow-400" />,
                        },
                        {
                            title: 'Control and reporting',
                            description: 'Productive mechanisms for process control and detailed reporting...',
                            icon: <FaClipboardCheck className="text-4xl text-yellow-400" />,
                        },
                        {
                            title: 'Mitigated risks',
                            description: 'Minimizing competency risks and onboarding challenges...',
                            icon: <FaExclamationTriangle className="text-4xl text-yellow-400" />,
                        },
                    ].map((value, index) => (
                        <Card
                            key={index}
                            className="p-6 bg-gray-50 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <CardHeader className="flex items-start">
                                <div>{value.icon}</div>
                                <div className="ml-4">
                                    <CardTitle className="font-semibold text-gray-800 mb-2">{value.title}</CardTitle>
                                    <CardDescription className="text-gray-600">
                                        {value.description}
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent>
                                {value.chart && value.chart}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectServices;
