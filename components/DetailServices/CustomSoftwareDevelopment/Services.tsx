import { Code, Layers, Zap, CheckCircle } from "lucide-react"
import Link from "next/link"

const solutions = [
    {
        icon: Code,
        title: "Custom Software Development",
        description: "ByteCraft Solutions specializes in creating bespoke software tailored to your unique business needs. Our expert developers craft scalable, efficient, and innovative solutions that drive your business forward.",
        benefits: ["Tailored to your needs", "Scalable architecture", "Cutting-edge technologies"]
    },
    {
        icon: Layers,
        title: "Enterprise Solutions",
        description: "We help large organizations streamline their operations with powerful enterprise software. From ERP systems to data analytics platforms, ByteCraft ensures seamless integration, enhanced productivity, and data-driven decision making.",
        benefits: ["Seamless integration", "Enhanced productivity", "Advanced analytics"]
    },
    {
        icon: Zap,
        title: "Rapid Prototyping",
        description: "Turn your ideas into reality quickly with our rapid prototyping services. We help startups and innovators validate their concepts, test market fit, and iterate rapidly to bring groundbreaking products to market faster.",
        benefits: ["Quick turnaround", "Iterative development", "Market validation"]
    }
]

export default function CustomSoftWareDevelopmentServices() {
    return (
        <div className="text-gray-800 dark:text-white min-h-screen dark:bg-transparent">
            <div className="container mx-auto py-16 max-w-6xl">
                <h1 className="text-4xl font-bold mb-6 text-center">Crafting Digital Excellence</h1>
                <p className="mb-12 text-lg text-center max-w-3xl mx-auto">
                    ByteCraft Solutions understands the diverse needs of modern businesses in the digital landscape. Our team of expert developers and designers creates custom software solutions that empower your business to thrive in an ever-evolving technological world.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {solutions.map((solution, index) => (
                        <div key={index} className="space-y-6 bg-white dark:backdrop-blur-sm dark:bg-gray-900/30 hover:bg-gray-50 dark:hover:bg-gray-800/50 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
                            <solution.icon className="w-16 h-16 text-[#6430c2] mx-auto" />
                            <h2 className="text-2xl font-semibold text-center">{solution.title}</h2>
                            <p className="text-gray-600 dark:text-gray-300">{solution.description}</p>
                            <ul className="space-y-2">
                                {solution.benefits.map((benefit, benefitIndex) => (
                                    <li key={benefitIndex} className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-[#6430c2] mr-2 flex-shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
                    <p className="mb-8 text-lg">Let ByteCraft Solutions bring your digital vision to life with our expert custom software development services.</p>
                    <Link href="/pricing" className="hero-button hero-button-gradient text-white font-bold py-3 px-6 rounded-lg transition-colors">
                        Contact Us Now
                    </Link>
                </div>
            </div>
        </div>
    )
}