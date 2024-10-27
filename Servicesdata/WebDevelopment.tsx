import { CheckCircle2, Cog, Globe, HeartHandshake, Rocket } from 'lucide-react';
import { FaUsers, FaRegSmile, FaCode, FaLaptopCode, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaCogs, FaLock, FaHeadset, FaRocket, FaUserShield, FaMobileAlt } from 'react-icons/fa';
export const Data = {
  title: "Innovative",
  subTitle: "Web Solutions for Your Business",
  description:
    "We create cutting-edge web applications tailored to your unique business needs. Our expert team delivers innovative solutions that drive growth and enhance user experience.",
  image:
    "https://lottie.host/embed/87b3fac6-785a-45dc-9e01-bef891a2f8ba/fqJVrVg835.json",
  headline: "#1 Web Development Company",
  primaryButton: {


    text: "Explore Our Services",
    link: "/services",
  },
  valuePropositions: [
    "Trusted by 500+ Businesses",
    "Cutting-Edge Technologies",
    "Tailored Solutions",
    "Proven Results",
  ],
}
export const languages =
{
  title: "Web Development Languages",
  languages: [
    {
      title: 'HTML5',
      description: 'The standard markup language for creating web pages.',
      icon: <FaHtml5 className="text-orange-500 text-6xl" />,
      bgClass: 'bg-orange-100',
    },
    {
      title: 'CSS3',
      description: 'A style sheet language used for describing the presentation of a document.',
      icon: <FaCss3Alt className="text-blue-500 text-6xl" />,
      bgClass: 'bg-blue-100',
    },
    {
      title: 'JavaScript',
      description: 'A programming language that allows you to implement complex features on web pages.',
      icon: <FaJsSquare className="text-yellow-500 text-6xl" />,
      bgClass: 'bg-yellow-100',
    },
    {
      title: 'React',
      description: 'A JavaScript library for building user interfaces.',
      icon: <FaReact className="text-cyan-500 text-6xl" />,
      bgClass: 'bg-cyan-100',
    },
    {
      title: 'Node.js',
      description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
      icon: <FaNodeJs className="text-green-500 text-6xl" />,
      bgClass: 'bg-green-100',
    },
    {
      title: 'Git',
      description: 'A distributed version-control system for tracking changes in source code.',
      icon: <FaGitAlt className="text-red-500 text-6xl" />,
      bgClass: 'bg-red-100',
    },
  ]
}
export const Expertises = {
  expertiseTitle: "Areas of Expertise",
}
export const pastWork = {
  title: "Our Web Development Work",
  description: "Explore some of our featured web development projects",
  pastWorks: [
    {
      title: "Aceternity UI",
      subTitle: "UI Component Library",
      href: "https://twitter.com/mannupaaji",
      description:
        "Customizable Tailwind CSS and Framer Motion Components.",
      image:
        "https://s3-alpha.figma.com/hub/file/4650313292/3ef2d2f1-680b-4947-a0cb-00005c975705-cover.png",
    },
    {
      title: "Next.js Admin Panel",
      subTitle: "Admin Dashboard",
      href: "https://github.com/example/admin-panel",
      description:
        "A custom admin panel built with Next.js and Tailwind CSS.",
      image:
        "https://s3-alpha.figma.com/hub/file/4650313292/3ef2d2f1-680b-4947-a0cb-00005c975705-cover.png",
    },
    {
      title: "Razorpay Integration",
      subTitle: "Payment Gateway",
      href: "https://github.com/example/razorpay-integration",
      description:
        "Seamless payment integration using Razorpay for a web application.",
      image:
        "https://s3-alpha.figma.com/hub/file/4650313292/3ef2d2f1-680b-4947-a0cb-00005c975705-cover.png",
    },
    {
      title: "E-Commerce Platform",
      subTitle: "Online Store",
      href: "https://example.com/ecommerce",
      description:
        "Fully functional e-commerce platform with integrated payment systems.",
      image:
        "https://s3-alpha.figma.com/hub/file/4650313292/3ef2d2f1-680b-4947-a0cb-00005c975705-cover.png",
    },
    {
      title: "Portfolio Website",
      subTitle: "Personal Website",
      href: "https://example.com/portfolio",
      description:
        "A sleek portfolio website built with React, showcasing projects and skills.",
      image:
        "https://s3-alpha.figma.com/hub/file/4650313292/3ef2d2f1-680b-4947-a0cb-00005c975705-cover.png",
    },
    {
      title: "Blog Platform",
      subTitle: "Content Management",
      href: "https://example.com/blog",
      description:
        "A blog platform with SEO optimization and dynamic content management.",
      image:
        "https://s3-alpha.figma.com/hub/file/4650313292/3ef2d2f1-680b-4947-a0cb-00005c975705-cover.png",
    },
  ],
}
export const feature = {
  title: "Discover Our Web Development Features",
  description:
    "Optimize, secure, and customize your web projects with these powerful features",
  features: [
    {
      icon: FaCogs,
      title: "Customization",
      description:
        "Tailor your web applications to meet specific needs with extensive customization options, ensuring your platform reflects your brand and functionality requirements.",
    },
    {
      icon: FaLock,
      title: "Security",
      description:
        "Your data is protected by industry-leading security measures, including encryption and secure access protocols, safeguarding your information against threats.",
    },
    {
      icon: FaHeadset,
      title: "Support",
      description:
        "Our dedicated support team is available 24/7 to assist with any web development challenges or questions, ensuring you never feel alone in your journey.",
    },
    {
      icon: FaRocket,
      title: "Performance",
      description:
        "Experience top-notch performance with our optimized, high-speed solutions designed to handle traffic spikes and ensure quick load times for users.",
    },
    {
      icon: FaUserShield,
      title: "Data Protection",
      description:
        "We ensure compliance with global data protection regulations, implementing best practices to safeguard your data and maintain user trust.",
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Optimization",
      description:
        "Our solutions are optimized for mobile performance, providing an engaging user experience on smartphones and tablets with fast loading times and intuitive navigation.",
    },
  ],
}
export const stats = {
  title: "Our Web Development Achievements",
  statsCard: [
    { icon: <FaUsers style={{ fontSize: '2rem' }} />, number: '1000+', label: 'Satisfied Clients' },
    { icon: <FaRegSmile style={{ fontSize: '2rem' }} />, number: '300+', label: 'Projects Completed' },
    { icon: <FaCode style={{ fontSize: '2rem' }} />, number: '250', label: 'Custom Websites Developed' },
    { icon: <FaLaptopCode style={{ fontSize: '2rem' }} />, number: '500+', label: 'Applications Designed' },
  ]
}
export const reviews = [
  {
    id: 1,
    name: "Emma Thompson",
    role: "CTO, TechInnovate",
    rating: 5,
    comment:
      "ByteCraft Solutions transformed our outdated website into a modern, responsive masterpiece. Their attention to detail and innovative approach to web development exceeded our expectations.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, StartUp Hub",
    rating: 5,
    comment:
      "The team at ByteCraft Solutions delivered an exceptional e-commerce platform for our startup. Their expertise in React and Node.js resulted in a fast, scalable solution thats driving our business growth.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    role: "Marketing Director, GrowthGenius",
    rating: 4,
    comment:
      "ByteCraft web development skills are top-notch. They created a beautiful, SEO-optimized website thats significantly improved our online presence and lead generation.",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Alexander Novak",
    role: "CEO, FintechForward",
    rating: 5,
    comment:
      "The custom web application ByteCraft developed for our fintech startup is nothing short of brilliant. Their understanding of complex financial processes and ability to translate them into user-friendly interfaces is remarkable.",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
]
export const deliveryPhases = {
  title: "Web Development Solutions",
  phases: [
    {
      icon: <CheckCircle2 className="w-8 h-8 text-white mr-4" />,
      title: "Discovery & Planning",
      details: [
        "Identify business goals and project requirements",
        "Conduct audience research and competitive analysis",
        "Develop a detailed project roadmap"
      ],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <Rocket className="w-8 h-8 text-white mr-4" />,
      title: "Design & Prototyping",
      details: [
        "Create wireframes and UI sketches",
        "Develop interactive prototypes",
        "Ensure brand consistency and user experience alignment"
      ],
      image: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: <Cog className="w-8 h-8 text-white mr-4" />,
      title: "Development & Testing",
      details: [
        "Develop scalable, efficient code",
        "Perform cross-device testing and debugging",
        "Ensure security and performance optimizations"
      ],
      image: "https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "from-green-400 to-green-600",
    },
    {
      icon: <Globe className="w-8 h-8 text-white mr-4" />,
      title: "Deployment & Launch",
      details: [
        "Deploy the solution in a production environment",
        "Conduct final quality assurance checks",
        "Assist with official launch and user training"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-white mr-4" />,
      title: "Maintenance & Support",
      details: [
        "Provide ongoing maintenance and updates",
        "Monitor system performance and resolve issues",
        "Implement new features as your business evolves"
      ],
      image: "https://plus.unsplash.com/premium_photo-1679429320974-ab1de58bcad9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "from-red-400 to-red-600",
    },
  ],
};
export const tabData = [
  {
    title: "WEB APPLICATION DEVELOPMENT",
    content: {
      title: "Web Application Development",
      description: "We offer comprehensive web application development services tailored to your business needs:",
      features: [
        "Custom-built web applications",
        "Scalable and responsive designs",
        "Integration with existing systems",
        "Ongoing support and maintenance"
      ]
    }
  },
  {
    title: "CUSTOM WEB DEVELOPMENT",
    content: {
      title: "Custom Web Development",
      description: "Our team specializes in creating bespoke web solutions:",
      features: [
        "Tailored to your specific requirements",
        "Unique user experiences",
        "Optimized for performance",
        "Secure and reliable implementations"
      ]
    }
  },
  {
    title: "STAFF AUGMENTATION",
    content: {
      title: "Staff Augmentation",
      description: "Enhance your team with our skilled professionals:",
      features: [
        "Flexible resource allocation",
        "Experienced developers on demand",
        "Seamless integration with your team",
        "Reduced hiring and training costs"
      ]
    }
  },
  {
    title: "TECHNOLOGICAL PARTNERSHIP",
    content: {
      title: "Technological Partnership",
      description: "Form a strategic alliance with our tech experts:",
      features: [
        "Long-term collaboration",
        "Access to cutting-edge technologies",
        "Continuous innovation support",
        "Shared risk and reward"
      ]
    }
  },
  {
    title: "WEB DESIGN SERVICES",
    content: {
      title: "Web Design Services",
      description: "Create stunning and functional web designs:",
      features: [
        "User-centric design approach",
        "Responsive and adaptive layouts",
        "Brand-aligned visual elements",
        "Accessibility-focused designs"
      ]
    }
  },
  {
    title: "QA FOR WEB PROJECTS",
    content: {
      title: "QA for Web Projects",
      description: "Ensure the quality and reliability of your web projects:",
      features: [
        "Comprehensive testing strategies",
        "Automated and manual testing",
        "Performance and security audits",
        "Continuous quality improvement"
      ]
    }
  },
  {
    title: "ARCHITECTURE DEVELOPMENT",
    content: {
      title: "Architecture Development",
      description: "Build robust and scalable web architectures:",
      features: [
        "Microservices architecture design",
        "Cloud-native solutions",
        "Scalable and maintainable structures",
        "Performance-optimized architectures"
      ]
    }
  },
  {
    title: "INFRASTRUCTURE SUPPORT",
    content: {
      title: "Infrastructure Support",
      description: "Reliable support for your web infrastructure:",
      features: [
        "24/7 monitoring and maintenance",
        "Cloud infrastructure management",
        "Security and compliance support",
        "Disaster recovery planning"
      ]
    }
  },
  {
    title: "MVP DEVELOPMENT",
    content: {
      title: "MVP Development",
      description: "Rapidly bring your ideas to market with MVP development:",
      features: [
        "Fast time-to-market",
        "Core feature focus",
        "Iterative development approach",
        "Cost-effective solution validation"
      ]
    }
  },
  {
    title: "WEB 3.0 DEVELOPMENT",
    content: {
      title: "Web 3.0 Development",
      description: "Embrace the future of the web with our Web 3.0 services:",
      features: [
        "Blockchain integration",
        "Decentralized applications (dApps)",
        "Smart contract development",
        "Tokenization solutions"
      ]
    }
  },
  {
    title: "AI WEB DEVELOPMENT",
    content: {
      title: "AI Web Development",
      description: "Integrate AI capabilities into your web applications:",
      features: [
        "Machine learning integration",
        "Natural language processing",
        "Predictive analytics",
        "AI-powered chatbots and assistants"
      ]
    }
  }
];
export const FaqData = [
  {
    title: "Discovery phase",
    content: "This is where we envision the future web solution, ensuring all essential features are thoroughly considered and examined.",
    items: [
      "User research and interviews",
      "Competitor analysis and benchmarking",
      "Conceptualization and ideation workshops",
      "Market trend analysis",
      "Stakeholder interviews"
    ]
  },
  {
    title: "Requirements specification",
    content: "In this phase, we define and document the specific requirements for the web application.",
    items: [
      "Functional requirements gathering",
      "Non-functional requirements definition",
      "Technical specifications documentation",
      "User stories and use case development",
      "Acceptance criteria definition"
    ]
  },
  {
    title: "UX/UI design",
    content: "Here, we focus on creating an intuitive and visually appealing user interface for the web application.",
    items: [
      "Wireframing and low-fidelity prototypes",
      "Interactive prototyping",
      "Visual design and branding",
      "Usability testing",
      "Responsive design implementation"
    ]
  },
  {
    title: "Architecture",
    content: "This phase involves planning the overall structure and technologies for the web application.",
    items: [
      "System architecture design",
      "Database schema design",
      "API design and documentation",
      "Security architecture planning",
      "Scalability and performance considerations"
    ]
  },
  {
    title: "Development",
    content: "The core phase where we bring the web application to life through coding and implementation.",
    items: [
      "Front-end development",
      "Back-end development",
      "Database implementation",
      "API integration",
      "Version control and code management"
    ]
  },
  {
    title: "Testing and QA",
    content: "Ensuring the quality and reliability of the web application through comprehensive testing.",
    items: [
      "Unit testing",
      "Integration testing",
      "User acceptance testing",
      "Performance testing",
      "Security testing"
    ]
  },
  {
    title: "Deployment",
    content: "Launching the web application and making it available to users.",
    items: [
      "Deployment planning",
      "Environment setup",
      "Data migration",
      "Go-live procedures",
      "Post-deployment monitoring"
    ]
  }
]