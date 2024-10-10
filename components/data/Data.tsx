import SupportBanner from "../../public/support-banner.webp";
import DocumentBanner from "../../public/document-banner-667c8514c9d66.webp";
import DeployBanner from "../../public/deploy-banner.webp";
import UiUxBanner from "../../public/ui&ux banner.webp";
import IdeateBanner from "../../public/ideate-banner-667c8514caa39.webp";
import DevelopBanner from "../../public/develop-banner-667c85169a186.webp";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaProjectDiagram,
  FaRobot,
  FaCloud,
  FaCode,
  FaPalette,
  FaCogs,
  FaCheckCircle,
  FaLifeRing,
  FaRocket,
  FaRedo,
  FaUserShield, FaDrawPolygon, FaSearchDollar
} from "react-icons/fa";
import { GrTestDesktop } from "react-icons/gr";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineDesignServices, MdOutlineBusinessCenter } from "react-icons/md";
import Image from "next/image";

export const steps = [
  {
    id: 0,
    title: "1) Ideate & Technology Consulting",
    description:
      "We begin by brainstorming innovative ideas and conducting in-depth technology analysis. Our consulting services help you choose the right tech stack and define a clear project roadmap for future success.",
    image: IdeateBanner,
    icon: FaCogs,
    list: [
      "Understand project goals",
      "Research technology trends",
      "Create a strategic plan",
      "Identify risks and challenges",
      "Ensure scalability of chosen solutions",
    ],
  },
  {
    id: 1,
    title: "2) UI/UX Design",
    description:
      "Our design team crafts user-friendly and visually appealing designs. We focus on user experience and business goals, ensuring intuitive navigation and a seamless user journey.",
    image: UiUxBanner,
    icon: FaPalette,
    list: [
      "Wireframing & Prototyping",
      "User testing for feedback",
      "Design optimization for all devices",
      "Ensure brand consistency in UI",
      "Conduct accessibility audits",
    ],
  },
  {
    id: 2,
    title: "3) Develop",
    description:
      "With cutting-edge technologies, we develop scalable and high-performing solutions. Our agile development process ensures quick iterations and feedback integration, bringing your project to life efficiently.",
    image: DevelopBanner,
    icon: FaCode,
    list: [
      "Agile development sprints",
      "Code reviews & quality checks",
      "Focus on performance and scalability",
      "Ensure security best practices",
      "Continuous integration and deployment (CI/CD)",
    ],
  },
  {
    id: 3,
    title: "4) Deploy",
    description:
      "Our deployment phase involves thorough testing, seamless integration, and launch support. We ensure your project goes live without a hitch, handling all the technical aspects so you can focus on your business.",
    image: DeployBanner,
    icon: FaRocket,
    list: [
      "Test in live environment",
      "Optimize server performance",
      "Smooth transition for users",
      "Conduct final security checks",
      "Provide launch support and monitoring",
    ],
  },
  {
    id: 4,
    title: "5) Document",
    description:
      "Comprehensive documentation ensures ease of understanding for your team. Whether it's for future maintenance or handover, our detailed documentation keeps everything well-organized.",
    image: DocumentBanner,
    icon: FaCheckCircle,
    list: [
      "Clear setup guides",
      "Code documentation",
      "User manuals & handbooks",
      "API documentation",
      "System architecture overview",
    ],
  },
  {
    id: 5,
    title: "6) Support",
    description:
      "Post-launch, we offer ongoing support and maintenance. From bug fixes to feature enhancements, our team is available to ensure your project continues to run smoothly.",
    image: SupportBanner,
    icon: FaLifeRing,
    list: [
      "24/7 troubleshooting",
      "Feature upgrades",
      "Security monitoring",
      "Performance monitoring",
      "Ongoing system optimizations",
    ],
  },
  {
    id: 6,
    title: "7) Refine & Iterate",
    description:
      "Based on user feedback and data analytics, we continually refine and iterate your product to ensure it stays competitive and meets evolving user needs.",
    image: IdeateBanner,
    icon: FaRedo,
    list: [
      "Analyze user feedback",
      "Implement improvements",
      "Ensure long-term success",
      "Adapt to market trends",
      "Prioritize feature enhancements based on data",
    ],
  },
];

const DummyContent = ({ description }) => {
  return (
    <>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mb-4">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {description}
        </span>
      </p>
      <Image
        src="https://assets.aceternity.com/macbook.png"
        alt="Macbook mockup"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </>
  );
};

export const techCategory = [
  {
    id: 0,
    section: [
      {
        category: "Frontend",
        description: "Explore the popular frameworks and libraries for building responsive and dynamic user interfaces.",
        items: [
          { name: "React", icon: "react=banner.svg" },
          { name: "Angular", icon: "angular.svg" },
          { name: "Vue", icon: "vuejs.svg" },
        ],
      },
      {
        category: "LLM <br /> (Large language model)",
        description: "Harness the power of large language models for AI-driven applications.",
        items: [
          { name: "OpenAI", icon: "openai-svgrepo-com.svg" },
          { name: "Qwen 1.5", icon: "qwen.svg" },
          { name: "MPT", icon: "mistral.svg" },
          { name: "LLaMA", icon: "llm-by-meta.svg" },
        ],
      },
    ],
  },
  {
    id: 1,
    section: [
      {
        category: "Backend",
        description: "Robust technologies for building the server-side logic and APIs for modern applications.",
        items: [
          { name: "Node.js", icon: "nodejs.svg" },
          { name: "Python", icon: "python.svg" },
          { name: "Firebase", icon: "https://www.svgrepo.com/show/353735/firebase.svg" },
        ],
      },
      {
        category: "Cloud",
        description: "Cloud platforms that enable scalable, high-availability infrastructure for web and mobile apps.",
        items: [
          { name: "Google Cloud", icon: "goggle-cloud.svg" },
          { name: "Azure", icon: "azure.svg" },
          { name: "AWS", icon: "aws.svg" },
        ],
      },
      {
        category: "Database",
        description: "Explore the most reliable databases used for storing and managing large-scale data.",
        items: [
          { name: "MongoDB", icon: "mongodb.svg" },
          { name: "PostgreSQL", icon: "postgres.svg" },
          { name: "MySQL", icon: "mysql.svg" },
        ],
      },
    ],
  },
  {
    id: 2,
    section: [
      {
        category: "Mobile",
        description: "The latest mobile technologies for building cross-platform and native mobile apps.",
        items: [
          { name: "Kotlin", icon: "kotlin-java.svg" },
          { name: "Swift", icon: "swift.svg" },
          { name: "Flutter", icon: "flutter-logo.svg" },
        ],
      },
      {
        category: "AI/ML",
        description: "AI and ML frameworks that help create intelligent applications capable of learning and predicting.",
        items: [
          { name: "TensorFlow", icon: "tensorflow.svg" },
          { name: "PyTorch", icon: "pytorch.svg" },
        ],
      },
    ],
  },
];

export const services:any = [
  {
    title: "Mobile Development",
    description:
      "Crafting seamless mobile experiences across platforms for businesses and users alike.",
    icon: <FaMobileAlt />,
    href: "/mobile-development",
  },
  {
    title: "Web Development",
    description:
      "Building responsive, scalable, and secure web applications tailored to your needs.",
    icon: <FaLaptopCode />,
    href: "/web-development",
  },
  {
    title: "Cross-Platform Development",
    description:
      "Delivering high-quality applications for multiple platforms using shared codebases.",
    icon: <FaProjectDiagram />,
    href: "/cross-platform-development",
  },
 {
    title: "Custom Software Development",
    description:
      "Developing bespoke software solutions that are tailored to your business processes & enhancing efficiency and driving innovation.",
    icon: <FaCogs />,
    href: "/custom-software-development",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing user-centric interfaces and experiences for optimal usability.",
    icon: <MdOutlineDesignServices />,
    href: "/ui-ux-design",
  },
  {
    title: "Project Management",
    description:
      "Managing projects efficiently with a focus on delivery and client satisfaction.",
    icon: <RiTeamLine />,
    href: "/project-management",
  },
  {
    title: "DevOps Services",
    description:
      "Automating workflows and managing infrastructure for smooth software delivery.",
    icon: <FaCloud />,
    href: "/devops-services",
  },
  {
    title: "IT Support Services",
    description:
      "Providing technical support and maintaining IT infrastructure for businesses.",
    icon: <FaUserShield />,
    href: "/it-support-services",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Implementing AI solutions for smarter decision-making and automation.",
    icon: <FaRobot />,
    href: "/artificial-intelligence",
  },
  {
    title: "Quality Assurance",
    description:
      "Ensuring your software meets the highest quality standards with thorough testing.",
    icon: <GrTestDesktop />,
    href: "/quality-assurance",
  },
  {
    title: "Business Analysis",
    description:
      "Analyzing business processes to provide data-driven insights and solutions.",
    icon: <MdOutlineBusinessCenter />,
    href: "/business-analysis",
  },
  {
    title: "Solution Architecture",
    description:
      "Designing scalable and efficient system architectures for optimized performance.",
    icon: <FaDrawPolygon />,
    href: "/solution-architecture",
  },
  {
    title: "All services →",
    description:
      "Explore all the services that can help you build and scale your business.",
    icon: <FaSearchDollar />,
    href: "",
  },
];

export const expertiseData = [
  {
    category: "Farming",
    title: "Revolutionizing Agriculture with Web Development",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent description="We build digital tools for modern farmers to enhance productivity and manage resources efficiently." />,
  },
  {
    category: "Electronics",
    title: "Innovative Solutions for the Electronics Industry",
    src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=3578&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent description="We create e-commerce platforms and inventory management systems tailored for electronics businesses." />,
  },
  {
    category: "Ecommerce",
    title: "Building Scalable Ecommerce Platforms",
    src: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent description="We design high-performance ecommerce platforms that enhance user experience and increase conversions." />,
  },
  {
    category: "Healthcare",
    title: "Empowering Healthcare with Technology",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent description="We create patient management systems and telemedicine platforms for the healthcare industry." />,
  },
  {
    category: "Education",
    title: "Digital Transformation in Education",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent description="We develop e-learning platforms and content management systems for the education sector." />,
  },
  {
    category: "Real Estate",
    title: "Building Digital Tools for Real Estate",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent description="We create property management and listing platforms for the real estate industry." />,
  },
];

export const testimonials = [
  {
    quote:
      "Working with Byte Craft Systems was a seamless experience. Their team transformed our ideas into a functional software solution with professionalism.",
    name: "John Doe",
    avatar: "https://ai-tool-tailwind.preview.uideck.com/images/user-08.png",
    rating: 5,
    designation: "CEO, Tech Innovators",
  },
  {
    quote:
      "The development team at Byte Craft Systems exceeded our expectations with their attention to detail and commitment to delivering a top-quality product.",
    name: "Jane Smith",
    avatar: "https://ai-tool-tailwind.preview.uideck.com/images/user-08.png",
    rating: 4,
    designation: "Product Manager, NextGen Solutions",
  },
  {
    quote:
      "Byte Craft Systems provided excellent service and technical support throughout the entire development process. We are very satisfied with the results.",
    name: "Mark Johnson",
    avatar: "https://ai-tool-tailwind.preview.uideck.com/images/user-08.png",
    rating: 5,
    designation: "CTO, Visionary Labs",
  },
  {
    quote:
      "The team was responsive and adapted to our evolving needs during the project. I highly recommend Byte Craft Systems for software development.",
    name: "Emily Davis",
    avatar: "https://ai-tool-tailwind.preview.uideck.com/images/user-08.png",
    rating: 4,
    designation: "Founder, Davis Enterprises",
  },
  {
    quote:
      "From start to finish, Byte Craft Systems demonstrated their expertise and delivered a solution that surpassed our expectations.",
    name: "Michael Lee",
    avatar: "https://ai-tool-tailwind.preview.uideck.com/images/user-08.png",
    rating: 5,
    designation: "Operations Director, Synergy Works",
  },
];

export const caseStudies = [
  {
    author: "ByteCraft Solutions",
    title: "Custom ERP Solution for Manufacturing Industry",
    description:
      "Developed a comprehensive ERP solution to streamline manufacturing processes, reduce operational costs, and enhance productivity for a mid-sized manufacturing company.",
    image:
      "https://img.freepik.com/free-photo/industry-engineer-technology-graphic-interface_53876-110863.jpg",
    authorAvatar: "https://img.icons8.com/ios/452/avatar--v1.png",
    link: "https://example.com/custom-erp-solution",
    bulletPoints: [
      "Implemented modules for inventory management, production planning, and quality control.",
      "Reduced manual data entry by 60% through automation of routine tasks.",
      "Achieved a 30% increase in production efficiency within the first year."
    ]
  },
  {
    author: "ByteCraft Solutions",
    title: "AI-Powered Predictive Analytics for Retail Chain",
    description:
      "Built a predictive analytics platform using AI to help a retail chain optimize inventory levels, reduce stockouts, and improve demand forecasting accuracy.",
    image:
      "https://img.freepik.com/free-photo/artificial-intelligence-ai-research-concept_53876-123212.jpg",
    authorAvatar: "https://img.icons8.com/ios/452/avatar--v1.png",
    link: "https://example.com/ai-predictive-analytics",
    bulletPoints: [
      "Developed machine learning models that improved sales forecasting accuracy by 45%.",
      "Integrated analytics with the client's existing ERP system for seamless data flow.",
      "Reduced inventory holding costs by 20% through precise demand predictions."
    ]
  },
  {
    author: "ByteCraft Solutions",
    title: "Cloud Migration for Financial Services Firm",
    description:
      "Led a seamless cloud migration for a financial services firm, ensuring data security and compliance with industry regulations while reducing IT infrastructure costs.",
    image:
      "https://img.freepik.com/free-photo/businessman-touching-cloud-icon-working-with-cloud-technology_53876-136335.jpg",
    authorAvatar: "https://img.icons8.com/ios/452/avatar--v1.png",
    link: "https://example.com/cloud-migration-finance",
    bulletPoints: [
      "Migrated over 500 GB of data to a secure, scalable cloud infrastructure.",
      "Improved application performance by 35% post-migration.",
      "Achieved a 25% reduction in IT infrastructure costs."
    ]
  },
  {
    author: "ByteCraft Solutions",
    title: "Mobile Banking App Development for Fintech Startup",
    description:
      "Designed and developed a user-friendly mobile banking app for a fintech startup, focusing on security, speed, and seamless user experience.",
    image:
      "https://img.freepik.com/free-photo/businessman-using-mobile-banking-fintech_53876-109251.jpg",
    authorAvatar: "https://img.icons8.com/ios/452/avatar--v1.png",
    link: "https://example.com/mobile-banking-app",
    bulletPoints: [
      "Implemented advanced encryption protocols to ensure secure transactions.",
      "Reduced customer onboarding time by 50% through automated KYC processes.",
      "Achieved 4.8-star ratings on both iOS and Android app stores."
    ]
  },
  {
    author: "ByteCraft Solutions",
    title: "E-commerce Platform Optimization for Online Retailer",
    description:
      "Enhanced the performance of an existing e-commerce platform, resulting in faster load times, better search functionality, and increased sales conversion rates.",
    image:
      "https://img.freepik.com/free-photo/close-up-hands-online-payment_23-2149161288.jpg",
    authorAvatar: "https://img.icons8.com/ios/452/avatar--v1.png",
    link: "https://example.com/ecommerce-optimization",
    bulletPoints: [
      "Improved page load speeds by 40% with optimized backend and front-end code.",
      "Increased conversion rates by 30% through a redesigned user experience.",
      "Integrated personalized product recommendations, boosting average order value by 15%."
    ]
  },
  {
    author: "ByteCraft Solutions",
    title: "IoT Integration for Smart Manufacturing",
    description:
      "Implemented IoT solutions for a manufacturing client, enabling real-time monitoring of equipment and predictive maintenance to reduce downtime.",
    image:
      "https://img.freepik.com/free-photo/iot-internet-things-industry-4_53876-123212.jpg",
    authorAvatar: "https://img.icons8.com/ios/452/avatar--v1.png",
    link: "https://example.com/iot-smart-manufacturing",
    bulletPoints: [
      "Integrated sensors with existing machinery for real-time performance tracking.",
      "Reduced equipment downtime by 25% through predictive maintenance alerts.",
      "Enhanced overall equipment efficiency (OEE) by 18%."
    ]
  }
];

export const faqsList = [
  {
    q: "What services does your software agency offer?",
    a: "We offer custom software development, mobile app development, web development, UI/UX design, and cloud solutions tailored to your business needs.",
  },
  {
    q: "What industries do you specialize in?",
    a: "Our team has expertise in various industries including healthcare, finance, education, and e-commerce, ensuring solutions that meet specific industry standards.",
  },
  {
    q: "What is the process of working with your agency?",
    a: "Our process involves an initial consultation, project scoping, development sprints, rigorous testing, and post-launch support to ensure seamless delivery.",
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary based on complexity, but most projects are completed within 3-6 months, including planning, development, and testing phases.",
  },
  {
    q: "What technologies do you work with?",
    a: "We specialize in a wide range of technologies including JavaScript frameworks (React, Node.js), mobile technologies (Flutter, Swift), and cloud platforms (AWS, Azure).",
  },
];