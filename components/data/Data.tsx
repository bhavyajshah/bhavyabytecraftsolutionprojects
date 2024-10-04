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
  FaTools,
} from "react-icons/fa";
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
          { name: "OpenAI", icon: "https://w7.pngwing.com/pngs/704/673/png-transparent-openai-chatgpt-logo.png" },
          { name: "Qwen 1.5", icon: "https://camo.githubusercontent.com/7058231e532d480fded0174ca564eff060ea135c3cdcc4144aa8b7fc83c75034/68747470733a2f2f7169616e77656e2d7265732e6f73732d616363656c65726174652d6f766572736561732e616c6979756e63732e636f6d2f5177656e322d564c2f7177656e32564c5f6c6f676f2e706e67" },
          { name: "MPT", icon: "https://miro.medium.com/v2/resize:fit:1400/1*Gc8FQvatf7LAAk96jga0mQ.jpeg" },
          { name: "LLaMA", icon: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd48eab78-962e-4b5e-a37d-31edf758fdb1_992x404.png" },
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
          { name: "Node.js", icon: "https://banner2.cleanpng.com/20180821/zwc/39e9b8bbcc5ea47a102ee953d70ff430.webp" },
          { name: "Python", icon: "https://banner2.cleanpng.com/20190623/yp/kisspng-python-computer-icons-programming-language-executa-1713885634631.webp" },
          { name: "Firebase", icon: "https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png" },
        ],
      },
      {
        category: "Cloud",
        description: "Cloud platforms that enable scalable, high-availability infrastructure for web and mobile apps.",
        items: [
          { name: "Google Cloud", icon: "https://banner2.cleanpng.com/20190612/vok/kisspng-cloud-computing-google-cloud-platform-cloud-storag-google-cloud-logo-png-image-free-download-searchpn-1713887351272.webp" },
          { name: "Azure", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png" },
          { name: "AWS", icon: "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png" },
        ],
      },
      {
        category: "Database",
        description: "Explore the most reliable databases used for storing and managing large-scale data.",
        items: [
          { name: "MongoDB", icon: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" },
          { name: "PostgreSQL", icon: "https://w7.pngwing.com/pngs/441/460/png-transparent-postgresql-plain-wordmark-logo-icon-thumbnail.png" },
          { name: "MySQL", icon: "https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png" },
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
          { name: "Kotlin", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kotlin_logo.svg/2560px-Kotlin_logo.svg.png" },
          { name: "Swift", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuTiCIxcGExISpbuEFg0caOI27K-BVSjybQQ&s" },
          { name: "Flutter", icon: "https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png" },
        ],
      },
      {
        category: "AI/ML",
        description: "AI and ML frameworks that help create intelligent applications capable of learning and predicting.",
        items: [
          { name: "TensorFlow", icon: "https://icon2.cleanpng.com/20180904/cuo/kisspng-logo-product-design-brand-tensorflow-open-source-m-codeonweb-tensorflow-1713944344935.webp" },
          { name: "PyTorch", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/744px-PyTorch_logo_icon.svg.png" },
        ],
      },
    ],
  },
];

export const servicesData = [
  {
    icon: <FaMobileAlt />,
    label: "Mobile Development",
    href: "/mobile-development",
  },
  {
    icon: <FaLaptopCode />,
    label: "Web Development",
    href: "/web-development",
  },
  {
    icon: <FaCode />,
    label: "Cross-Platform Development",
    href: "/cross-platform-development",
  },
  {
    icon: <FaProjectDiagram />,
    label: "Custom Software Development",
    href: "/custom-software-development",
  },
  { icon: <FaProjectDiagram />, label: "UI/UX Design", href: "/ui-ux-design" },
  {
    icon: <FaProjectDiagram />,
    label: "Project Management",
    href: "/project-management",
  },
  { icon: <FaTools />, label: "DevOps Services", href: "/devops-services" },
  {
    icon: <FaTools />,
    label: "IT Support Services",
    href: "/it-support-services",
  },
  {
    icon: <FaTools />,
    label: "Artificial Intelligence",
    href: "/artificial-intelligence",
  },
  { icon: <FaTools />, label: "Quality Assurance", href: "/quality-assurance" },
  { icon: <FaTools />, label: "Business Analysis", href: "/business-analysis" },
  {
    icon: <FaTools />,
    label: "Solution Architecture",
    href: "/solution-architecture",
  },
  { icon: <FaTools />, label: "All services →", href: "/all-services" },
];
