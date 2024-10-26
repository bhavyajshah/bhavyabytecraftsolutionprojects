
import { FaShieldAlt, FaTools, FaChartLine, FaMoneyBillWave, FaCog, FaArrowsAltH } from 'react-icons/fa';

const WhyWorkWithUs = () => {
    const benefits = [
        {
            icon: <FaTools />,
            title: 'Comprehensive IT Strategy',
            description: 'Our end-to-end approach ensures that your IT strategy aligns with business goals, from initial setup to ongoing support. We manage all aspects, so you can focus on what matters most—your growth.'
        },
        {
            icon: <FaShieldAlt />,
            title: 'Robust Security Framework',
            description: 'Safeguard your data and operations with a security-first mindset. We offer advanced threat protection, data encryption, and proactive monitoring to keep your information safe and compliant with regulations.'
        },
        {
            icon: <FaChartLine />,
            title: 'Proactive Problem Resolution',
            description: 'Stay one step ahead with our proactive problem-solving. We anticipate potential issues and address them before they impact your business, reducing downtime and improving productivity.'
        },
        {
            icon: <FaMoneyBillWave />,
            title: 'Cost-Effective Solutions',
            description: 'Get the most value from your IT investments. Our solutions are tailored to meet your budget without compromising on quality, helping you achieve financial efficiency and scalability.'
        },
        {
            icon: <FaCog />,
            title: 'Resource Optimization',
            description: 'Optimize your resources for maximum efficiency. We ensure that your IT infrastructure is utilized effectively, minimizing waste and aligning with your business requirements.'
        },
        {
            icon: <FaArrowsAltH />,
            title: 'Scalable Infrastructure',
            description: 'Easily adapt to changing demands with scalable IT solutions. Our infrastructure planning and support grow with your business, ensuring seamless expansion without costly upgrades.'
        },
    ];

    return (
        <div className="flex flex-col items-center my-24 max-w-6xl mx-auto">
            <h2 className="text-2xl lg:text-5xl font-bold text-white mb-8">
                Why Partner with Us for IT Support?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="group relative flex flex-col items-center p-8 backdrop-blur-sm bg-gray-900/30 border-gray-700 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                    >
                        {/* Background gradient effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl z-0"></div>

                        <div className="text-white text-5xl mb-4 z-10 transition-transform transform group-hover:-translate-y-2">
                            {benefit.icon}
                        </div>

                        <h3 className="text-xl font-semibold text-center text-white z-10">{benefit.title}</h3>
                        <p className="text-md text-white text-center mt-3 z-10">{benefit.description}</p>

                        {/* Decorative line below title */}
                        <div className="w-12 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mt-3 mb-5 rounded-full opacity-80"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyWorkWithUs;
;
