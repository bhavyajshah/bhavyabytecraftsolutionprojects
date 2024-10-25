import { Smartphone, Watch, Truck, Star, Zap, Globe, Cpu, Cloud, Database, Shield, Server, Layers, Settings, Wifi } from "lucide-react"
import { Clock, Code, Users } from 'lucide-react'

export const Data = {
    title: "Bespoke Software Solutions",
    subTitle: "Tailored Technology for Your Unique Business Needs",
    description:
        "At ByteCraft Solutions, we craft cutting-edge custom software that transforms your business vision into reality. Our expert team delivers scalable, innovative, and user-centric solutions that drive efficiency, boost productivity, and give you a competitive edge in today's digital landscape.",
    image:
        "https://lottie.host/embed/9f041be6-2c85-4c35-b642-8a6e4f34e199/ZNKrrGCMEN.json",
    headline: "#1 Custom Software Development Company",
    primaryButton: {
        text: "Start Your Custom Software Journey",
        link: "/get-started",
    },
    valuePropositions: [
        "Perfectly Aligned with Your Business Processes",
        "Scalable Architecture for Future Growth",
        "Enhanced Security and Data Protection",
        "Seamless Integration with Existing Systems",
    ],
}

export const ExpertiseData = [
    { title: "Expert Developers", value: "100+", icon: Code },
    { title: "Successful Projects", value: "80+", icon: Smartphone },
    { title: "Client Satisfaction", value: "4.9/5", icon: Star },
]


export const stats = [
    { value: 17, label: 'years of experience', icon: <Clock className="w-8 h-8 text-[#6430c2]" /> },
    { value: 1000, label: 'IT projects', icon: <Code className="w-8 h-8 text-[#6430c2]" /> },
    { value: 200, label: 'support partnerships', icon: <Users className="w-8 h-8 text-[#6430c2]" /> },
]
export const technologies = [
    { name: "Flutter", icon: Zap, description: "Google's UI toolkit for building natively compiled applications" },
    { name: "React Native", icon: Globe, description: "Facebook's framework for building native apps using React" },
    { name: "Xamarin", icon: Cpu, description: "Microsoft's platform for building Android and iOS apps with .NET and C#" },
    { name: "Ionic", icon: Smartphone, description: "Open source SDK for hybrid mobile app development" },
    { name: "Kotlin", icon: Code, description: "Modern programming language that makes developers happier" },
    { name: "Swift", icon: Star, description: "Powerful and intuitive programming language for iOS" },
    { name: "PhoneGap", icon: Cloud, description: "Open source framework for building cross-platform mobile apps" },
    { name: "Unity", icon: Layers, description: "Cross-platform game engine for creating interactive experiences" },
    { name: "Titanium", icon: Server, description: "Open-source platform for developing mobile, web and desktop apps" },
    { name: "NativeScript", icon: Wifi, description: "Open source framework for building truly native mobile apps" },
    { name: "Cordova", icon: Settings, description: "Mobile application development framework" },
    { name: "PWA", icon: Globe, description: "Progressive Web Apps for cross-platform web applications" }
]

export const expertise = [
    { text: "mCommerce Apps", icon: Smartphone, description: "Build engaging and secure mobile commerce applications" },
    { text: "Wearables & IoT", icon: Watch, description: "Develop innovative solutions for wearable devices and IoT ecosystems" },
    { text: "Logistics Solutions", icon: Truck, description: "Streamline operations with cutting-edge logistics applications" },
    { name: "Consumer Apps", icon: Users, description: "Create user-friendly apps that delight and retain customers" },
    { name: "Industrial Applications", icon: Cpu, description: "Develop robust solutions for complex industrial processes" },
    { name: "FinTech Solutions", icon: Database, description: "Build secure and efficient financial technology applications" },
    { name: "Healthcare Apps", icon: Shield, description: "Create HIPAA-compliant healthcare and telemedicine applications" }
]

export const Stories = {
    'Retail Solutions': {
        logo: 'https://randomuser.me/api/portraits/men/1.jpg',
        title: 'Personalized Shopping Experience with AI-Driven Recommendations',
        location: 'Australia',
        image: "https://cdn.dribbble.com/userupload/16217870/file/original-9b1ef4f7e5440613b4b1f0cde410e69d.png?resize=752x",
        description: 'We collaborated with a major Australian retail chain to develop an e-commerce platform that utilizes AI-driven algorithms to provide personalized shopping experiences. By analyzing user behavior and preferences, the platform delivers tailored product recommendations, improving customer satisfaction and boosting sales conversion rates significantly.',
    },
    'Real Estate Management': {
        logo: 'https://randomuser.me/api/portraits/women/1.jpg',
        title: 'Comprehensive Property Management System for Landlords',
        location: 'Canada',
        image: "https://i.pinimg.com/originals/0d/b4/cf/0db4cf8a0fab2e31c0457850a5ebeab7.png",
        description: 'We designed a robust property management system for a real estate company in Canada. This custom software allows landlords to manage properties, track maintenance requests, and handle tenant communications seamlessly. By integrating automated reminders and reporting features, we empowered landlords to enhance their operational efficiency and improve tenant satisfaction.',
    },
    'Education Technology': {
        logo: 'https://randomuser.me/api/portraits/men/2.jpg',
        title: 'Interactive Learning Platform for Remote Education',
        location: 'India',
        image: "https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2022/12/Patient-s-app.jpg",
        description: 'In response to the demand for remote education, we developed an interactive learning platform tailored for schools in India. The platform features virtual classrooms, quizzes, and collaborative tools that enhance student engagement. Our user-friendly interface and comprehensive analytics empower educators to track progress and improve teaching strategies effectively.',
    },
    'Manufacturing': {
        logo: 'https://randomuser.me/api/portraits/women/3.jpg',
        title: 'IoT-Based Production Monitoring System',
        location: 'Germany',
        image: "https://cdn.dribbble.com/userupload/8392224/file/original-c827d9112ea45a19f75180484ee55168.png?resize=400x0",
        description: 'We partnered with a manufacturing firm in Germany to create an IoT-based production monitoring system. This custom software solution integrates sensors and real-time data analytics to monitor machine performance and predict maintenance needs. By minimizing downtime and optimizing production schedules, we helped the company increase overall efficiency and reduce operational costs.',
    },
    'Hospitality': {
        logo: 'https://randomuser.me/api/portraits/men/4.jpg',
        title: 'Smart Booking System for Hotels and Resorts',
        location: 'Thailand',
        image: "https://multiqos.com/blogs/wp-content/uploads/2022/08/Cargo-Transportation-App-Design.jpg",
        description: 'For a chain of hotels in Thailand, we developed a smart booking system that simplifies the reservation process for guests. The platform includes features like dynamic pricing, customer reviews, and personalized offers. By integrating an easy-to-use interface and secure payment gateways, we enhanced the customer experience and increased booking conversions.',
    },
    'Food Delivery': {
        logo: 'https://randomuser.me/api/portraits/women/5.jpg',
        title: 'On-Demand Food Delivery App Revolutionizing Local Dining',
        location: 'United States',
        image: "https://i.pinimg.com/736x/6f/ec/40/6fec40bd7560eab58e510e45163980d0.jpg",
        description: 'We created an on-demand food delivery app for a startup in the U.S. that connects local restaurants with customers. The app features real-time order tracking, customized menus, and an easy payment process. By leveraging location-based services, we ensured quick delivery times, enhancing the overall dining experience for users and increasing visibility for local restaurants.',
    },
}

export const FaqData = [
    {
        title: "Why choose ByteCraft Solutions for Custom Software Development?",
        content: "ByteCraft Solutions offers tailored software solutions that align perfectly with your business needs. Unlike off-the-shelf products, our custom software is designed to streamline your specific processes, scale with your business, and provide a competitive edge in your industry.",
        items: [
            "Tailored solutions for your unique business needs",
            "Scalable architecture for future growth",
            "Full ownership of the software",
            "Seamless integration with existing systems",
            "Ongoing support and maintenance"
        ]
    },
    {
        title: "What is ByteCraft's approach to ensuring ROI in custom software development?",
        content: "At ByteCraft Solutions, we focus on delivering long-term value. While custom software may require a higher initial investment, it offers significant returns over time through increased efficiency, reduced operational costs, and improved business outcomes.",
        items: [
            "Thorough business analysis to identify key value drivers",
            "Agile development methodology for faster time-to-market",
            "Regular progress updates and stakeholder involvement",
            "Post-launch performance monitoring and optimization",
            "Continuous improvement based on user feedback and business metrics"
        ]
    },
    {
        title: "How does ByteCraft ensure scalability and maintainability in custom software?",
        content: "ByteCraft Solutions employs best practices in software architecture and development to create scalable and maintainable custom software. We prioritize modular design, clean code practices, and comprehensive documentation to ensure your software can grow with your business.",
        items: [
            "Modular architecture for easy scaling and updates",
            "Cloud-native development for flexibility and performance",
            "Comprehensive documentation for future maintenance",
            "Automated testing and continuous integration",
            "Regular code reviews and refactoring"
        ]
    },
    {
        title: "What kind of support does ByteCraft provide after the software is deployed?",
        content: "ByteCraft Solutions offers comprehensive post-deployment support to ensure your custom software continues to meet your business needs. We provide ongoing maintenance, updates, and enhancements to keep your software running smoothly and adapting to new requirements.",
        items: [
            "24/7 technical support",
            "Regular software updates and security patches",
            "Performance monitoring and optimization",
            "User training and documentation",
            "Feature enhancements and additions as your business evolves"
        ]
    },
    {
        title: "Can ByteCraft integrate custom software with existing systems and third-party applications?",
        content: "ByteCraft Solutions specializes in creating custom software that seamlessly integrates with your existing systems and third-party applications. We ensure smooth data flow and process continuity across your entire technology stack.",
        items: [
            "API development for system integration",
            "Custom connectors for third-party applications",
            "Data migration and synchronization",
            "Legacy system modernization",
            "Cross-platform compatibility"
        ]
    }
]