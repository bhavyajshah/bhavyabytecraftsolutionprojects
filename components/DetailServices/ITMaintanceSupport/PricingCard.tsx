'use client'
import React, { useState } from 'react'

const supportLevels = [
    {
        id: 'l1',
        name: 'L1 CLIENT SUPPORT',
        description: 'Basic support for end-users, including troubleshooting hardware and software issues, assisting with password resets, and providing guidance on using applications effectively. This level ensures that users can resolve common issues quickly and maintain productivity.',
    },
    {
        id: 'l2',
        name: 'L2 INFRASTRUCTURE SUPPORT',
        description: 'Advanced support for IT infrastructure, focusing on network management, server maintenance, and system performance optimization. This level involves resolving escalated issues from L1 support, ensuring high availability of services, and implementing updates and patches to keep systems secure and efficient.',
    },
    {
        id: 'l3',
        name: 'L3 APPLICATION SUPPORT',
        description: 'Expert-level support for complex applications, offering in-depth troubleshooting and problem resolution for software applications. This includes analyzing application performance, resolving integration issues, and providing support for custom applications, as well as collaborating with development teams to improve software functionality and address bugs.',
    },
]

const pricingData = [
    {
        id: 'small',
        title: "Small",
        price: "$3,700",
        period: "per month",
        description: "Perfect for small businesses or startups",
        features: [
            "Source: our ticket system",
            "Initial phase: must",
            "Managed services: up to 10",
            "24/7 email support",
            "Monthly system health check",
        ],
        recommended: false,
    },
    {
        id: 'basic',
        title: "Basic",
        price: "$6,500",
        period: "per month",
        description: "Ideal for medium-sized businesses",
        features: [
            "Source: our ticket system + external ticket system",
            "Initial phase: must",
            "Managed services: up to 15",
            "Monitoring: included",
            "Maintenance: included",
            "24/7 phone and email support",
            "Weekly system health check",
            "Quarterly security audit",
        ],
        recommended: true,
    },
    {
        id: 'special',
        title: "Special",
        price: "Custom",
        period: "",
        description: "Tailored for large enterprises",
        features: [
            "Source: our ticket system + external ticket system",
            "Initial phase: must",
            "Managed services: unlimited*",
            "Monitoring: included + external monitoring",
            "Maintenance: included + custom checks + custom policies",
            "24/7 priority support with dedicated account manager",
            "Daily system health check",
            "Monthly security audit and penetration testing",
            "Custom feature development",
        ],
        recommended: false,
    }
]

export default function PricingCardUI() {
    const [activeTab, setActiveTab] = useState('l2')

    return (
        <div className="min-h-screen my-10 text-gray-800 dark:text-gray-100 md:p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                    IT Maintenance Support Services
                </h1>

                <div className="mb-12">
                    <div className="flex flex-wrap justify-center">
                        {supportLevels.map((level) => (
                            <button
                                key={level.id}
                                className={`px-4 py-3 text-xs sm:text-sm md:text-base font-semibold transition-colors duration-200 ease-in-out
                  ${activeTab === level.id
                                        ? 'bg-gray-800 text-white dark:bg-[#6430c2] dark:text-white'
                                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:backdrop-blur-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700'}
                  ${level.id === 'l2' ? 'rounded-none' : level.id === 'l1' ? 'rounded-l-lg' : 'rounded-r-lg'}`}
                                onClick={() => setActiveTab(level.id)}
                            >
                                {level.name}
                            </button>
                        ))}
                    </div>
                    <p className="text-center mt-4 max-w-4xl mx-auto text-gray-700 dark:text-white text-xl">
                        {supportLevels.find(level => level.id === activeTab)?.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingData.map((card) => (
                        <PricingCard key={card.id} {...card} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function PricingCard({ title, price, period, description, features, recommended }) {
    return (
        <div className={`bg-white dark:backdrop-blur-sm dark:bg-gray-900/30 border ${recommended ? 'border-gray-800 dark:border-[#6430c2]' : 'border-gray-300 dark:border-gray-700'} p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105`}>
            {recommended && (
                <div className="bg-gray-800 dark:bg-[#6430c2] text-white text-xs font-bold uppercase py-1 px-2 rounded-full absolute top-0 right-0 mt-4 mr-4">
                    Recommended
                </div>
            )}
            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{description}</p>
            <div className="text-4xl font-bold mb-1 text-gray-900 dark:text-white">{price}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-6">{period}</div>
            <ul className="space-y-3 mb-6">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700 dark:text-white">
                        <svg className="w-5 h-5 text-gray-800 dark:text-[#6430c2] mr-2 mt-px" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}