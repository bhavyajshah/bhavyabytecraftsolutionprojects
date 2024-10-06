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
  FaUserShield, FaDrawPolygon, FaSearchDollar, FaChartLine
} from "react-icons/fa";
import { GrTestDesktop } from "react-icons/gr";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineDesignServices, MdOutlineBusinessCenter } from "react-icons/md";

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

export const services = [
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
    title: "Trending Technologies",
    description:
      "Adopting the latest and emerging tech to keep your business ahead of the curve.",
    icon: <FaChartLine />,
    href: "/trending-technologies",
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
    href: "/all-services",
  },
];
