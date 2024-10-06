'use client'
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import { FaCogs, FaLock, FaHeadset, FaRocket, FaUserShield, FaMobileAlt } from 'react-icons/fa';
import Testimonials from "@/components/Testimonials";
import Feature from "@/components/Feature";
import WebDevelopmentWork from "@/components/Portfolio";
import { Expertise } from "@/components/Expertise";
import Stats from "@/components/Stats";

const App: React.FC = () => {

const featuresData = [
  {
    icon: <FaCogs />,
    title: 'Customization',
    description: 'Tailor your web applications to meet specific needs with extensive customization options, ensuring your platform reflects your brand and functionality requirements.',
  },
  {
    icon: <FaLock />,
    title: 'Security',
    description: 'Your data is protected by industry-leading security measures, including encryption and secure access protocols, safeguarding your information against threats.',
  },
  {
    icon: <FaHeadset />,
    title: 'Support',
    description: 'Our dedicated support team is available 24/7 to assist with any web development challenges or questions, ensuring you never feel alone in your journey.',
  },
  {
    icon: <FaRocket />,
    title: 'Performance',
    description: 'Experience top-notch performance with our optimized, high-speed solutions designed to handle traffic spikes and ensure quick load times for users.',
  },
  {
    icon: <FaUserShield />,
    title: 'Data Protection',
    description: 'We ensure compliance with global data protection regulations, implementing best practices to safeguard your data and maintain user trust.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile Optimization',
    description: 'Our solutions are optimized for mobile performance, providing an engaging user experience on smartphones and tablets with fast loading times and intuitive navigation.',
  },
];

const pastWorks = [
  {
    title: "Aceternity UI",
    subTitle: "UI Component Library",
    href: "https://twitter.com/mannupaaji",
    description: "Customizable Tailwind CSS and Framer Motion Components.",
    image: "https://s3-alpha.figma.com/hub/file/4650313292/3ef2d2f1-680b-4947-a0cb-00005c975705-cover.png",
  },
  {
    title: "Next.js Admin Panel",
    subTitle: "Admin Dashboard",
    href: "https://github.com/example/admin-panel",
    description: "A custom admin panel built with Next.js and Tailwind CSS.",
    image: "https://s3-alpha.figma.com/hub/file/4650313292/3ef2d2f1-680b-4947-a0cb-00005c975705-cover.png",
  },
  {
    title: "Razorpay Integration",
    subTitle: "Payment Gateway",
    href: "https://github.com/example/razorpay-integration",
    description: "Seamless payment integration using Razorpay for a web application.",
    image: "https://s3-alpha.figma.com/hub/file/4650313292/3ef2d2f1-680b-4947-a0cb-00005c975705-cover.png",
  },
  {
    title: "E-Commerce Platform",
    subTitle: "Online Store",
    href: "https://example.com/ecommerce",
    description: "Fully functional e-commerce platform with integrated payment systems.",
    image: "https://s3-alpha.figma.com/hub/file/4650313292/3ef2d2f1-680b-4947-a0cb-00005c975705-cover.png",
  },
  {
    title: "Portfolio Website",
    subTitle: "Personal Website",
    href: "https://example.com/portfolio",
    description: "A sleek portfolio website built with React, showcasing projects and skills.",
    image: "https://s3-alpha.figma.com/hub/file/4650313292/3ef2d2f1-680b-4947-a0cb-00005c975705-cover.png",
  },
  {
    title: "Blog Platform",
    subTitle: "Content Management",
    href: "https://example.com/blog",
    description: "A blog platform with SEO optimization and dynamic content management.",
    image: "https://s3-alpha.figma.com/hub/file/4650313292/3ef2d2f1-680b-4947-a0cb-00005c975705-cover.png",
  }
];

const testimonials = [
  {
    rating: 5.0,
    feedback:
      "ByteCraft Solutions transformed our outdated website into a modern, high-performing platform. Their expertise in web development has greatly improved our online presence.",
    name: "Alice M",
    position: "Founder & CEO",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    rating: 4.9,
    feedback:
      "The ByteCraft team was exceptional in building a custom e-commerce solution for our business. Their attention to detail and knowledge of the latest technologies was impressive.",
    name: "Michael T",
    position: "CTO",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    rating: 4.8,
    feedback:
      "We wanted a scalable web solution, and ByteCraft delivered beyond expectations. Their customer service and ability to meet our deadlines were top-notch.",
    name: "Sophia L",
    position: "Operations Manager",
    avatar: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    rating: 5.0,
    feedback:
      "ByteCraft's web development services helped us create an intuitive platform that is easy to manage and looks fantastic. We’ve seen a significant boost in user engagement.",
    name: "David K",
    position: "Head of Marketing",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    rating: 4.7,
    feedback:
      "The professionalism and expertise of ByteCraft Solutions stand out. Their web development services have added real value to our business, and we couldn’t be happier with the results.",
    name: "Laura S",
    position: "Business Analyst",
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
  },
];

const webDevStats = {
  title: 'Web Development Stats',
  description: 'We specialize in providing quality web solutions for small businesses.',
  stats: [
    { value: '15+', label: 'Web Developers' },
    { value: '50+', label: 'Web Projects Completed' },
    { value: '30+', label: 'Clients Served' },
    { value: '98%', label: 'Client Satisfaction' },
  ],
};

  return (
    <Layout>
<Hero
  heroImage="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_640.png"
  title="Innovative"
  subTitle="Web Solutions for Your Business"
  description="We create cutting-edge web applications tailored to your unique business needs. Our expert team delivers innovative solutions that drive growth and enhance user experience."
  primaryButton={{ text: "Explore Our Services", link: "/services" }}
  headline="#1 Web Development Company"
  valuePropositions={[
    "Trusted by 500+ Businesses",
    "Cutting-Edge Technologies",
    "Tailored Solutions",
    "Proven Results",
  ]}
/>
<Stats
  title={webDevStats.title}
  description={webDevStats.description}
  stats={webDevStats.stats}
/>
  <Feature
      title="Discover Our Web Development Features"
      subtitle="Optimize, secure, and customize your web projects with these powerful features"
      features={featuresData}
    />

         <WebDevelopmentWork
        works={pastWorks}
        sectionTitle="Our Web Development Work"
        sectionSubtitle="Explore some of our featured web development projects."
      />

      <Testimonials title="Testimonials" subTitle="Hear from our satisfied clients about the exceptional web development services we provide.
    Their success is our mission." testimonials={testimonials} />
<Expertise
  title="Areas of Expertise"
  subtitle="
        Our team specializes in a wide range of web development technologies and
        practices"
/>
      <Contact />
    </Layout>
  );
};

export default App;
