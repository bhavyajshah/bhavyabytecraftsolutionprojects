
import { Award, Briefcase, Headphones } from 'lucide-react';

export const Data = {
    title: "Elevating Standards with Quality Assurance",
    subTitle: "Precision-Driven QA Solutions for Optimal Performance",
    description:
        "Our Quality Assurance solutions are designed to go beyond just finding bugs. We prioritize creating a seamless experience for users, enhancing reliability, and building trust. From automated checks to in-depth manual testing, we ensure your product meets the highest standards, every time.",
    image:
        "https://lottie.host/embed/7ae854d7-76bc-4034-b889-948fccbf5ff1/B4HRM7xsc6.json",
    headline: "Your Trusted Partner in Quality Assurance",
    primaryButton: {
        text: "Contact Us",
        link: "/pricing",
    },
    valuePropositions: [
        "Tailored Testing Strategies",
        "Proactive Risk Identification",
        "Enhanced User Experience Assurance",
        "Ongoing Quality Improvement",
    ],
};

export const stats = [
    { value: 17, label: 'years of experience', icon: <Award className="w-8 h-8 text-[#6430c2]" /> },
    { value: 1000, label: 'IT projects', icon: <Briefcase className="w-8 h-8 text-[#6430c2]" /> },
    { value: 250, label: 'Quality Assurance reviews', icon: <Headphones className="w-8 h-8 text-[#6430c2]" /> },
];

export const Expertises = {
    expertiseTitle: "Areas of Expertise",
};

export const tabData = [
    {
        title: "FUNCTIONAL TESTING",
        content: {
            title: "Functional Testing",
            description: "Validate each function of your application to ensure it meets specified requirements and performs reliably:",
            features: [
                "End-to-end user journey testing",
                "Cross-browser and cross-device compatibility",
                "Requirement-based validation",
                "Detailed test case creation and execution",
                "Defect tracking and resolution",
                "User acceptance testing (UAT) support",
                "Integration testing to ensure seamless module interactions"
            ]
        }
    },
    {
        title: "PERFORMANCE TESTING",
        content: {
            title: "Performance Testing",
            description: "Optimize your application's speed and stability under various conditions to enhance user experience:",
            features: [
                "Load and stress testing to identify bottlenecks",
                "Scalability analysis for peak usage",
                "Response time optimization",
                "Detailed performance metrics and reporting",
                "Endurance testing for long-term stability",
                "Benchmarking against industry standards",
                "Real-time performance monitoring and alerts"
            ]
        }
    },
    {
        title: "SECURITY TESTING",
        content: {
            title: "Security Testing",
            description: "Safeguard your application with robust security testing to protect against vulnerabilities and threats:",
            features: [
                "Penetration testing for risk detection",
                "Vulnerability assessment and remediation",
                "Data protection and compliance checks",
                "Access control and authentication testing",
                "OWASP compliance for web security",
                "SQL injection and cross-site scripting (XSS) tests",
                "Encryption and data leakage prevention"
            ]
        }
    },
    {
        title: "AUTOMATION TESTING",
        content: {
            title: "Automation Testing",
            description: "Accelerate your testing process with automated testing solutions for consistency and efficiency:",
            features: [
                "Custom automation frameworks for reliability",
                "Automated regression and functional testing",
                "Seamless integration with CI/CD pipelines",
                "Reusable test scripts and continuous updates",
                "Real-time reporting and analytics",
                "Script maintenance for evolving features",
                "Parallel test execution to save time"
            ]
        }
    },
    {
        title: "USABILITY TESTING",
        content: {
            title: "Usability Testing",
            description: "Enhance the user experience with intuitive and user-friendly designs validated through usability testing:",
            features: [
                "User interaction and navigation testing",
                "Feedback-driven UX improvements",
                "Accessibility compliance assessments",
                "Testing for intuitive, goal-oriented design",
                "Heatmap and behavior analytics",
                "A/B testing for user preference analysis",
                "Real-world user feedback and adjustments"
            ]
        }
    },
    {
        title: "COMPATIBILITY TESTING",
        content: {
            title: "Compatibility Testing",
            description: "Ensure seamless performance across diverse environments with compatibility testing:",
            features: [
                "Multi-device and OS compatibility testing",
                "Cross-browser testing for consistency",
                "Resolution and screen orientation checks",
                "Testing for backward compatibility",
                "Testing with legacy systems and browsers",
                "Version control to track changes",
                "Adaptive design validation for responsive applications"
            ]
        }
    },
    {
        title: "MOBILE APP TESTING",
        content: {
            title: "Mobile App Testing",
            description: "Deliver a flawless mobile experience by validating your app on various devices and operating systems:",
            features: [
                "Device-specific performance testing",
                "Battery and memory usage optimization",
                "Usability and UI responsiveness tests",
                "Automated and manual mobile testing",
                "Testing on emulators and real devices",
                "Network connectivity testing (Wi-Fi, 4G, 5G)",
                "Interrupt testing for calls, messages, and alerts"
            ]
        }
    },
    {
        title: "REGRESSION TESTING",
        content: {
            title: "Regression Testing",
            description: "Maintain application stability after updates with comprehensive regression testing:",
            features: [
                "Automated regression test suite",
                "Verification of new and existing features",
                "Continuous integration for consistent QA",
                "Test case documentation and maintenance",
                "Risk-based testing prioritization",
                "Early bug detection and reporting",
                "Regular updates to the test suite for new features"
            ]
        }
    },
    {
        title: "API TESTING",
        content: {
            title: "API Testing",
            description: "Ensure seamless communication between components with API testing for functionality and security:",
            features: [
                "Validation of API responses and performance",
                "Security testing for API endpoints",
                "Data consistency and integrity checks",
                "Automated API testing scripts",
                "Load testing for concurrent users",
                "Error handling and exception testing",
                "Mock API testing for early-stage development"
            ]
        }
    },
    {
        title: "LOAD & STRESS TESTING",
        content: {
            title: "Load & Stress Testing",
            description: "Evaluate your application’s behavior under heavy load conditions to ensure stability:",
            features: [
                "High-volume testing for stability",
                "Response time and throughput analysis",
                "Error rate and system recovery testing",
                "Reporting on performance thresholds",
                "Testing peak load and scalability limits",
                "Stress testing for prolonged load resilience",
                "Environment configuration and optimization"
            ]
        }
    }
];


export const stories = {
    'E-commerce Platform': {
        logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop&crop=faces&auto=format&q=80',
        title: 'Comprehensive QA for a major e-commerce platform',
        location: 'United States',
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=60",
        description: 'Implemented end-to-end testing strategies, resulting in a 40% reduction in post-release bugs.',
    },
    'Banking App': {
        logo: 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=100&h=100&fit=crop&crop=faces&auto=format&q=80',
        title: 'Rigorous security testing for a mobile banking app',
        location: 'United Kingdom',
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&fit=crop&q=60",
        description: 'Conducted penetration testing and vulnerability assessments, ensuring top-notch security for user data.',
    },
    'Healthcare Software': {
        logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=100&h=100&fit=crop&crop=faces&auto=format&q=80',
        title: 'Automated testing suite for medical records system',
        location: 'Canada',
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60",
        description: 'Developed and implemented an automated testing framework, improving test coverage by 75%.',
    },
    'Automotive Diagnostics': {
        logo: 'https://images.unsplash.com/photo-1518987048-93e29699e79a?w=100&h=100&fit=crop&crop=faces&auto=format&q=80',
        title: 'Performance testing for vehicle diagnostic software',
        location: 'Germany',
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=60",
        description: 'Conducted extensive load and stress testing, ensuring system reliability under peak usage conditions.',
    },
    'Supply Chain Management': {
        logo: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=100&h=100&fit=crop&crop=faces&auto=format&q=80',
        title: 'Integration testing for logistics software',
        location: 'Singapore',
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=60",
        description: 'Managed complex integration testing scenarios, reducing system downtime by 60% during updates.',
    },
    'Telecom Network': {
        logo: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=100&h=100&fit=crop&crop=faces&auto=format&q=80',
        title: 'Network reliability testing for 5G infrastructure',
        location: 'Japan',
        image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&auto=format&fit=crop&q=60",
        description: 'Implemented innovative testing methodologies for 5G network stability, improving overall network performance.',
    },
};