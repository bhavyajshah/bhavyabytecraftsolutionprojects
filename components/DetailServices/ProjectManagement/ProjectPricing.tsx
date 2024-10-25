'use client'
import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export default function ProjectPricing() {
    const [isYearly, setIsYearly] = useState(false)
    const [expandedPlan, setExpandedPlan] = useState<string | null>(null)

    const plans = [
        {
            name: 'Starter',
            monthlyPrice: 2500,
            yearlyPrice: 25000,
            features: [
                'Basic DevOps support',
                'Limited DataOps services',
                'Up to 5 projects',
                '8/5 support',
                'Basic monitoring and alerting',
                'Monthly data analysis reports',
                'Basic CI/CD pipeline setup',
            ],
            details: [
                'Automated deployments for up to 5 projects',
                'Basic data pipeline management',
                'Incident response within 4 business hours',
                'Up to 100GB data processing per month',
                'Basic data quality checks',
                'Monthly performance optimization recommendations',
            ],
        },
        {
            name: 'Professional',
            monthlyPrice: 5000,
            yearlyPrice: 55000,
            features: [
                'Advanced DevOps support',
                'Comprehensive DataOps services',
                'Up to 15 projects',
                '24/7 support',
                'Advanced monitoring and alerting',
                'Weekly data analysis reports',
                'Advanced CI/CD pipeline optimization',
            ],
            details: [
                'Automated deployments for up to 15 projects',
                'Advanced data pipeline management and optimization',
                'Incident response within 2 business hours',
                'Up to 500GB data processing per month',
                'Advanced data quality management',
                'Weekly performance optimization implementations',
                'Custom dashboard creation',
                'Data governance and compliance support',
            ],
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            features: [
                'Full-scale DevOps and DataOps integration',
                'Unlimited projects',
                '24/7 premium support',
                'Real-time monitoring and alerting',
                'Daily data analysis and ML-powered insights',
                'Fully customized CI/CD and data pipelines',
            ],
            details: [
                'Tailored DevOps and DataOps strategy',
                'Dedicated team of specialists',
                'Custom SLAs with rapid incident response',
                'Unlimited data processing',
                'Advanced anomaly detection and predictive analytics',
                'Continuous optimization and innovation',
                'Full data lifecycle management',
                'Enterprise-grade security and compliance measures',
            ],
        },
    ]

    return (
        <div className="min-h-screen mb-20 text-white p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold mb-4 text-center text-white">
                    DevOps & DataOps Solutions
                </h1>
                <p className="mb-8 text-xl max-w-4xl mx-auto text-center text-gray-300">
                    Empower your organization with our cutting-edge DevOps and DataOps services. We offer tailored solutions to
                    streamline your development pipeline, optimize data workflows, and drive innovation at scale.
                </p>
                <div className="flex items-center justify-center mb-12">
                    <Label htmlFor="pricing-toggle" className="mr-2 text-lg">
                        Monthly
                    </Label>
                    <Switch
                        id="pricing-toggle"
                        checked={isYearly}
                        onCheckedChange={setIsYearly}
                        className="data-[state=checked]:bg-pink-500"
                    />
                    <Label htmlFor="pricing-toggle" className="ml-2 text-lg">
                        Yearly
                        {isYearly && <span className="ml-2 text-[#6430c2] font-semibold">(Save up to 17%)</span>}
                    </Label>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className="border-gray-700 backdrop-blur-sm bg-gray-900/30 rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                            <div className="text-4xl font-bold mb-4">
                                {plan.price ? (
                                    plan.price
                                ) : (
                                    <>
                                        ${isYearly ? plan.yearlyPrice.toLocaleString() : plan.monthlyPrice.toLocaleString()}
                                        <span className="text-lg font-normal"> per {isYearly ? 'year' : 'month'}</span>
                                    </>
                                )}
                            </div>
                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg
                                            className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                className="w-full mb-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                                onClick={() => setExpandedPlan(expandedPlan === plan.name ? null : plan.name)}
                            >
                                {expandedPlan === plan.name ? 'Hide Details' : 'Show Details'}
                                <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${expandedPlan === plan.name ? 'rotate-180' : ''
                                    }`} />
                            </Button>
                            {expandedPlan === plan.name && (
                                <div className="mt-4 space-y-2 text-sm">
                                    <h4 className="font-semibold text-lg mb-2">Detailed Features:</h4>
                                    {plan.details.map((detail, index) => (
                                        <p key={index} className="flex items-start">
                                            <span className="text-pink-400 mr-2">•</span>
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}