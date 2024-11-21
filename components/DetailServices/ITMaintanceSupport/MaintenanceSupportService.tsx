'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Wrench, AlertTriangle, BarChart3 } from "lucide-react"

export default function MaintenanceSupportService() {
    return (
        <div className="min-h-screen text-gray-800 dark:text-white my-12 md:p-8">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="max-w-6xl mx-auto"
            >
                <h1 className="text-4xl text-gray-900 dark:text-white md:text-5xl font-bold mb-4 text-center">IT Maintenance Support Services</h1>
                <p className="text-gray-700 dark:text-white text-xl mb-12 text-center max-w-4xl mx-auto">
                    Providing reliable, proactive IT support services to keep your systems running smoothly, minimize downtime, and ensure data integrity. Our expertise in IT maintenance allows us to tailor support solutions that meet your organization&apos;s unique needs.
                </p>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {supportCategories.map((category, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="backdrop-blur-sm bg-gray-100 dark:bg-gray-900/30 border-gray-300 dark:border-gray-700 overflow-hidden group hover:shadow-2xl transform transition-transform duration-500 hover:-translate-y-2">
                                <CardHeader className="relative p-6">
                                    <motion.div
                                        className="absolute top-4 right-4 text-gray-700 dark:text-white"
                                        whileHover={{ scale: 1.3, rotate: 360 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    >
                                        {category.icon}
                                    </motion.div>
                                    <CardTitle className="text-2xl text-gray-800 dark:text-white font-semibold group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                                        {category.title}
                                    </CardTitle>
                                    <CardDescription className="text-gray-600 dark:text-white mt-2">{category.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <ul className="space-y-3">
                                        {category.services.map((service, serviceIndex) => (
                                            <motion.li
                                                key={serviceIndex}
                                                className="flex items-center text-gray-700 dark:text-white"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 * serviceIndex }}
                                            >
                                                <motion.div
                                                    className="w-2.5 h-2.5 bg-gray-400 dark:bg-white rounded-full mr-2"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 0.1 * serviceIndex, type: "spring", stiffness: 300, damping: 10 }}
                                                />
                                                {service}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.3
        }
    }
}

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 120,
        }
    }
}

const supportCategories = [
    {
        title: "System Monitoring & Alerts",
        description: "24/7 monitoring to identify and resolve issues before they impact operations.",
        icon: <Wrench size={26} />,
        services: [
            "Real-time system health checks",
            "Automated alerts for anomalies",
            "Proactive issue resolution",
            "Performance optimization",
        ],
    },
    {
        title: "Data Backup & Recovery",
        description: "Ensuring data security and quick recovery in case of data loss.",
        icon: <AlertTriangle size={26} />,
        services: [
            "Scheduled data backups",
            "Disaster recovery planning",
            "Data encryption and protection",
            "Rapid data restoration",
            "Cloud backup solutions",
        ],
    },
    {
        title: "Network & Security Management",
        description: "Robust security protocols to protect your IT infrastructure from threats.",
        icon: <BarChart3 size={26} />,
        services: [
            "Firewall and intrusion detection",
            "Anti-virus and malware protection",
            "Security policy enforcement",
            "Network performance tuning",
            "Vulnerability assessments",
        ],
    },
]