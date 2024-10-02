import SupportBanner from "../../public/support-banner.webp";
import DocumentBanner from "../../public/document-banner-667c8514c9d66.webp";
import DeployBanner from "../../public/deploy-banner.webp";
import UiUxBanner from "../../public/ui&ux banner.webp";
import IdeateBanner from "../../public/ideate-banner-667c8514caa39.webp";
import DevelopBanner from "../../public/develop-banner-667c85169a186.webp";
import {
  FaCode,
  FaPalette,
  FaCogs,
  FaCheckCircle,
  FaLifeRing,
  FaRocket,
  FaRedo,
} from "react-icons/fa";

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