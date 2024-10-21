import { expertise, ExpertiseData, technologies } from "@/Servicesdata/CrossAppDevelopment"
import Link from "next/link"

export default function WhyChooseUs() {
    return (
        <div className="text-white p-8 pt-12 pb-12">
            <div className="max-w-7xl mx-auto space-y-12">
                <header className="text-center space-y-4">
                    <h1 className="text-5xl font-bold mb-6">
                        Cross-Platform Mobile App Development
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Empowering businesses with cutting-edge cross-platform solutions. Transform your ideas into reality across all devices and platforms.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {ExpertiseData.map((item, index) => (
                        <div key={index} className="p-6 border border-gray-700 rounded-lg transition-all duration-300 hover:border-purple-500">
                            <item.icon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                            <div className="text-3xl font-bold text-center mb-2">{item.value}</div>
                            <div className="text-sm text-center text-gray-400">{item.title}</div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/2 space-y-8">
                        <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">Our Expertise</h2>
                        <div className="grid grid-cols-1 gap-6">
                            {expertise.map((item, index) => (
                                <div key={index} className="p-6 bg-white/10 rounded-lg backdrop-blur-md hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 mr-4 bg-purple-500 rounded-full flex items-center justify-center">
                                            <item.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-semibold">{item.text || item.name}</h3>
                                    </div>
                                    <p className="text-gray-300">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 space-y-8">
                        <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">Technologies We Use</h2>
                        <div className="grid grid-cols-3 sm:grid-cols-3 gap-6">
                            {technologies.map((tech, index) => (
                                <div key={index} className="p-4 bg-white/10 rounded-lg backdrop-blur-md hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center text-center">
                                    <tech.icon className="w-12 h-12 mb-2 text-purple-300" />
                                    <h3 className="text-lg font-semibold mb-1">{tech.name}</h3>
                                    <p className="text-xs text-gray-300">{tech.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center space-y-6 mt-12">
                    <h2 className="text-3xl font-bold">Ready to Build Your Cross-Platform App?</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Let's turn your vision into a powerful, scalable, and user-friendly cross-platform application that reaches users on every device.
                    </p>
                    <div className="">
                    <Link href='/pricing' className="px-8 py-4 bg-purple-600 text-white text-lg font-semibold rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105">
                        Start Your Project
                    </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
