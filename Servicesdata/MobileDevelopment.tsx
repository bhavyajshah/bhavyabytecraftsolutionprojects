import { FaAndroid, FaApple, FaReact, FaSwift, FaJava } from 'react-icons/fa';
import { SiKotlin, SiFlutter } from 'react-icons/si';
import { MdSecurity, MdSpeed, MdSupport, MdSettings, MdOutlinePrivacyTip, MdMobileFriendly } from 'react-icons/md';
import { MdSearch, MdDesignServices, MdCode, MdIntegrationInstructions, MdLaunch, MdSupportAgent, MdHighQuality } from 'react-icons/md';

export const Data = {
  title: "Empowering Mobility",
  subTitle: "Custom Mobile Apps That Inspire",
  description:
    "We create innovative mobile applications that enhance user engagement and drive business growth. Our expert team ensures seamless performance and a stunning user experience.",
  image:
    "https://lottie.host/embed/b9c3a253-c80f-4628-92a2-6e7a8cb29a02/CBMe3Biz9u.json",
  headline: "#1 Mobile Development Company",
  primaryButton: {
    text: "Get Started on Your Mobile Journey",
    link: "/services",
  },
  valuePropositions: [
    "Agile Development Methodologies",
    "User-Centric Design Approach",
    "Cross-Platform Compatibility",
    "Regular Updates and Maintenance",
  ],
}

export const appData = {
  'NATIVE APPS': {
    title: 'Native Mobile App Development',
    description: 'Native app development continues to dominate mobile experiences, offering unparalleled performance, robust security, and complete access to device hardware. With native apps, businesses can leverage platform-specific features like Swift for iOS or Kotlin for Android, ensuring smooth, responsive, and feature-rich user experiences tailored to each platform. These apps are essential for high-demand applications, such as gaming, AR/VR, or complex enterprise solutions.',
    image: 'https://static.vecteezy.com/system/resources/previews/006/800/441/non_2x/react-native-mobile-app-illustration-exclusive-design-vector.jpg',
  },
  'CROSS-PLATFORM APPS': {
    title: 'Cross-Platform Mobile App Development',
    description: 'Cross-platform development frameworks like Flutter and React Native have revolutionized the mobile app industry. By allowing developers to write a single codebase that works across multiple platforms, cross-platform apps significantly reduce time-to-market and development costs. While offering near-native performance, they also enable rapid prototyping and iterative updates, making them a go-to solution for startups and companies looking to expand their mobile presence without doubling the effort.',
    image: 'https://www.orangemantra.com/blog/wp-content/uploads/2020/01/Cross-Platform-App-Development-Facts-You-Need-To-Know-Right-Now-1024x576.png',
  },
  'HYBRID APPS': {
    title: 'Hybrid Mobile App Development',
    description: 'Hybrid apps bridge the gap between web and native apps, offering a cost-effective solution that uses web technologies like HTML, CSS, and JavaScript within a native shell. Hybrid apps are perfect for businesses looking to maintain a presence across multiple platforms while keeping development costs in check. Modern tools like Ionic and Apache Cordova have evolved, making hybrid apps more powerful, allowing integration with native device features and offering smoother performance than ever before.',
    image: 'https://eibsglobal.com/wp-content/uploads/2019/10/hybrid-app-development.png',
  },
  'PROGRESSIVE WEB APPS': {
    title: 'Progressive Web App (PWA) Development',
    description: 'Progressive Web Apps (PWAs) are a rapidly growing trend, offering the best of both web and mobile worlds. PWAs provide fast load times, offline capabilities, and a native app-like experience without needing app store distribution. These apps have become crucial for eCommerce platforms, news websites, and content-heavy apps, as they ensure seamless accessibility across all devices while reducing bounce rates and increasing user engagement.',
    image: 'https://www.pngitem.com/pimgs/m/127-1272322_progressive-web-apps-progressive-app-png-transparent-png.png',
  },
};
export const languages = {
  title: "Mobile Development Languages",
  languages: [
    {
      title: 'Swift',
      description: 'A powerful and intuitive programming language for iOS, macOS, watchOS, and tvOS. Developed by Apple.',
      icon: <FaSwift className="text-orange-500 text-6xl" />,
      bgClass: 'bg-orange-100',
    },
    {
      title: 'Kotlin',
      description: 'A modern programming language used for Android app development. Fully supported by Google.',
      icon: <SiKotlin className="text-purple-500 text-6xl" />,
      bgClass: 'bg-purple-100',
    },
    {
      title: 'Java',
      description: 'A popular programming language for Android development. Used for building robust mobile applications.',
      icon: <FaJava className="text-brown-500 text-6xl" />,
      bgClass: 'bg-yellow-100',
    },
    {
      title: 'Flutter',
      description: 'A UI toolkit from Google that allows developers to build natively compiled applications for mobile, web, and desktop.',
      icon: <SiFlutter className="text-blue-500 text-6xl" />,
      bgClass: 'bg-blue-100',
    },
    {
      title: 'React Native',
      description: 'A popular framework for building mobile apps using React. Allows for cross-platform development on Android and iOS.',
      icon: <FaReact className="text-cyan-500 text-6xl" />,
      bgClass: 'bg-cyan-100',
    },
    {
      title: 'Android',
      description: 'The Android platform, based on Linux, is an open-source platform used for a wide variety of mobile devices.',
      icon: <FaAndroid className="text-green-500 text-6xl" />,
      bgClass: 'bg-green-100',
    },
    {
      title: 'iOS',
      description: 'Apple’s iOS platform is used to develop apps for iPhone and iPad devices.',
      icon: <FaApple className="text-gray-500 text-6xl" />,
      bgClass: 'bg-gray-100',
    },
  ]
};
export const Expertises = {
  expertiseTitle: "Areas of Expertise",
}
export const pastWork = {
  title: "Our Mobile Development Work",
  description: "Explore some of our featured mobile app development projects",
  pastWorks: [
    {
      title: "HealthMate App",
      subTitle: "Fitness Tracking App",
      href: "https://play.google.com/store/apps/details?id=com.example.healthmate",
      description:
        "A health and fitness tracking app built for Android and iOS using Flutter, featuring real-time activity monitoring and personalized workout plans.",
      image:
        "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/a2fee05e-e655-48f9-8826-ce1794347ace/2217827042/health-mate-screenshot.png",
    },
    {
      title: "Foodiez",
      subTitle: "Food Delivery App",
      href: "https://example.com/foodiez-app",
      description:
        "A food delivery application developed using React Native, with live order tracking and multiple payment options.",
      image:
        "https://i.pinimg.com/736x/4e/e9/99/4ee9990bce264de168260568d52b9801.jpg",
    },
    {
      title: "FinTrack",
      subTitle: "Finance Management App",
      href: "https://example.com/fintrack-app",
      description:
        "An intuitive finance management app for iOS, built using Swift, allowing users to track expenses, manage budgets, and set financial goals.",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/9f6535172891973.Y3JvcCwzNjgyLDI4ODAsMzE4LDA.png",
    },
    {
      title: "ShopEase",
      subTitle: "Mobile E-Commerce App",
      href: "https://example.com/shopease-app",
      description:
        "A mobile e-commerce platform developed using Kotlin for Android, featuring real-time inventory updates, push notifications, and secure payment integration.",
      image:
        "https://cdn.dribbble.com/userupload/15546202/file/original-3bed56b46b35937331f458756b22e9d2.png?resize=2048x1536&vertical=center",
    },
    {
      title: "EduLearn",
      subTitle: "E-Learning App",
      href: "https://example.com/edulearn-app",
      description:
        "An e-learning app built with React Native, offering real-time video streaming, interactive quizzes, and certification features.",
      image:
        "https://cdn.dribbble.com/users/5518531/screenshots/20050072/media/cdba08cdb0d14a48621408cd1a4c8320.png",
    },
    {
      title: "TravelBuddy",
      subTitle: "Travel Companion App",
      href: "https://example.com/travelbuddy-app",
      description:
        "A travel companion app built using Flutter, with live GPS tracking, personalized itineraries, and real-time weather updates.",
      image:
        "https://img1.wsimg.com/isteam/ip/320a21a6-65d0-48a4-8d6d-9d4d650bb82c/Screenshot%202024-08-13%20at%2011.12.20%E2%80%AFAM.png",
    },
  ],
};
export const feature = {
  title: "Unlock Powerful Mobile Development Features",
  description:
    "Transform your mobile applications with cutting-edge features designed to enhance performance, security, and user experience.",
  features: [
    {
      icon: MdSettings,
      title: "Seamless Customization",
      description:
        "Build mobile apps that resonate with your brand identity and user needs. Our flexible customization options ensure your app stands out with unique designs and functionalities.",
    },
    {
      icon: MdSecurity,
      title: "Top-Notch Security",
      description:
        "We prioritize your mobile app’s security with robust encryption, biometric authentication, and regular security updates to keep your data and users safe from emerging threats.",
    },
    {
      icon: MdSupport,
      title: "24/7 Dedicated Support",
      description:
        "Our expert support team is on standby round-the-clock to assist with any technical issues, ensuring your app runs smoothly without any interruptions.",
    },
    {
      icon: MdSpeed,
      title: "Lightning-Fast Performance",
      description:
        "Ensure your mobile apps are equipped for speed. From fast loading times to optimized resource management, we deliver high-performance mobile solutions that scale with your needs.",
    },
    {
      icon: MdOutlinePrivacyTip,
      title: "Enhanced Data Protection",
      description:
        "Our solutions comply with global privacy laws like GDPR and CCPA, implementing the best practices in data encryption and user consent management to build trust with your users.",
    },
    {
      icon: MdMobileFriendly,
      title: "Mobile-First Optimization",
      description:
        "Deliver an exceptional user experience across all mobile devices. Our mobile-first approach ensures smooth navigation, responsive designs, and minimal loading times on smartphones and tablets.",
    },
  ],
};
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
  title: "Mobile Development Solution Phases",
  phases: [
    {
      icon: <MdSearch className="w-8 h-8 text-white mr-4" />,
      title: "Discovery & Planning",
      description:
        "In the discovery phase, we collaborate to envision the future mobile app solution. This step ensures that all essential features are thoroughly considered and examined. Our process includes extensive user research, competitor analysis, conceptualization, and ideation to define clear requirements for development.",
      details: [
        "User research & competitor analysis",
        "Conceptualization & ideation",
        "Requirements specification",
      ],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <MdDesignServices className="w-8 h-8 text-white mr-4" />,
      title: "UX/UI Design & Architecture",
      description:
        "In this phase, we create intuitive designs and establish a solid app architecture. Our design team works on crafting user-friendly interfaces with wireframes and prototypes, while the architecture phase defines the app’s technical structure, ensuring scalability and performance.",
      details: [
        "User experience (UX) & user interface (UI) design",
        "Wireframes & interactive prototypes",
        "App architecture design",
      ],
      image: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: <MdCode className="w-8 h-8 text-white mr-4" />,
      title: "Front-End & Back-End Development",
      description:
        "Our development team brings the designs to life. This phase involves coding the app’s front-end for a smooth user experience and back-end to handle data and business logic. We focus on clean, maintainable code and ensure a seamless integration between the front-end and back-end systems.",
      details: [
        "Front-end development (React Native, Swift, etc.)",
        "Back-end development (Node.js, Firebase, etc.)",
        "Clean and efficient codebase",
      ],
      image: "https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "from-green-400 to-green-600",
    },
    {
      icon: <MdIntegrationInstructions className="w-8 h-8 text-white mr-4" />,
      title: "Integrations",
      description:
        "We seamlessly integrate third-party services such as payment gateways, social media logins, analytics tools, and other APIs into your app. These integrations are key to enhancing app functionality and ensuring your app meets all user requirements.",
      details: [
        "Third-party service integrations",
        "API integration",
        "Payment gateway and social media login support",
      ],
      image: "https://images.unsplash.com/photo-1581092339609-30d1c47b92c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: <MdHighQuality className="w-8 h-8 text-white mr-4" />,
      title: "Quality Assurance",
      description:
        "Our team conducts thorough testing to ensure that the app functions smoothly across various devices and platforms. We focus on performance, security, and usability, making sure the app is free of bugs and delivers an exceptional user experience.",
      details: [
        "Performance testing",
        "Security testing",
        "Usability testing",
      ],
      image: "https://images.unsplash.com/photo-1522204523234-872ce1c11230?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "from-teal-400 to-teal-600",
    },
    {
      icon: <MdLaunch className="w-8 h-8 text-white mr-4" />,
      title: "Launch & Support",
      description:
        "We handle the final deployment of your mobile app, ensuring a seamless launch on app stores like the App Store and Google Play. After launch, our team provides ongoing maintenance and support to keep your app running smoothly and up-to-date.",
      details: [
        "App store deployment (App Store, Google Play)",
        "Post-launch monitoring and support",
        "Scaling and app improvements",
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: <MdSupportAgent className="w-8 h-8 text-white mr-4" />,
      title: "Scale & Grow",
      description:
        "As your business expands, so should your app. We help you scale the app with new features, performance upgrades, and ensure it grows with your business needs. Continuous updates and strategic improvements are made to adapt to changing market demands.",
      details: [
        "Ongoing scalability improvements",
        "Feature expansion",
        "Business growth alignment",
      ],
      image: "https://plus.unsplash.com/premium_photo-1679429320974-ab1de58bcad9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "from-red-400 to-red-600",
    },
  ]
}
export const stories = {
  'Crypto Finance': {
    logo: 'https://via.placeholder.com/100',
    title: 'A mobile crypto wallet operating in over 40 countries',
    location: 'South Africa',
    image: "https://cdn.dribbble.com/userupload/16217870/file/original-9b1ef4f7e5440613b4b1f0cde410e69d.png?resize=752x",
    description: 'This app enables seamless cross-border transactions with cutting-edge blockchain technology.',
  },
  'Financial Services': {
    logo: 'https://via.placeholder.com/100',
    title: 'Leading Fintech solutions for global payments',
    location: 'United States',
    image: "https://i.pinimg.com/originals/0d/b4/cf/0db4cf8a0fab2e31c0457850a5ebeab7.png",
    description: 'Providing top-notch payment solutions that ensure security, speed, and transparency across borders.',
  },
  'Healthcare': {
    logo: 'https://via.placeholder.com/100',
    title: 'Telemedicine app improving healthcare access',
    location: 'Kenya',
    image: "https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2022/12/Patient-s-app.jpg",
    description: 'This app allows people in remote areas to connect with top doctors for real-time consultations.',
  },
  'Automotive': {
    logo: 'https://via.placeholder.com/100',
    title: 'Smart vehicle management system',
    location: 'Germany',
    image: "https://cdn.dribbble.com/userupload/8392224/file/original-c827d9112ea45a19f75180484ee55168.png?resize=400x0",
    description: 'An advanced vehicle tracking system that improves fleet management and safety for drivers.',
  },
  'Logistics': {
    logo: 'https://via.placeholder.com/100',
    title: 'AI-powered logistics platform',
    location: 'Australia',
    image: "https://multiqos.com/blogs/wp-content/uploads/2022/08/Cargo-Transportation-App-Design.jpg",
    description: 'Optimizing delivery routes and improving logistics efficiency with AI-driven solutions.',
  },
  'Telecom': {
    logo: 'https://via.placeholder.com/100',
    title: 'Next-gen telecom app for seamless communication',
    location: 'Canada',
    image: "https://i.pinimg.com/736x/6f/ec/40/6fec40bd7560eab58e510e45163980d0.jpg",
    description: 'Bringing innovative communication services to users with real-time call optimization.',
  },
};
export const teamMembersData = [
  {
    name: 'John Doe',
    title: 'Mobile App Developer',
    hourlyRate: 65,
    skills: ['Java', 'Kotlin', 'Android Jetpack', 'Firebase', 'Gradle'],
    previousCompany: 'Company A',
    imgSrc: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Jane Smith',
    title: 'Mobile App Developer',
    hourlyRate: 50,
    skills: ['Swift', 'iOS Development', 'Xcode', 'Core Data'],
    previousCompany: 'Company B',
    imgSrc: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Rohit Sharma',
    title: 'Mobile App Developer',
    hourlyRate: 40,
    skills: ['React Native', 'Flutter', 'Dart', 'API Integration'],
    previousCompany: 'Company C',
    imgSrc: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
];