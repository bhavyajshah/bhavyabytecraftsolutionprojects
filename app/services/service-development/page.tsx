import Hero from '@/components/DetailServices/Hero'
import StatsServices from '@/components/DetailServices/StatsServices';
import FeatureSection from '@/components/DetailServices/testing';
import Testimonials from '@/components/DetailServices/Testimonials';
import { Expertise } from '@/components/DetailServices/Expertise';
import WebDevelopmentWork from '@/components/DetailServices/Portfolio';
import { FaUsers, FaRegSmile, FaCode, FaLaptopCode, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaSass, FaFigma } from 'react-icons/fa';

const page = () => {
  const Data = {
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

  const languages= [
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
];

  const testimonials = {
    title: "Testimonials",
    description:
      "Hear from our satisfied clients about the exceptional web development services we provide. Their success is our mission.",
    testimonials: [
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
    ],
  }


  const Expertises = {
    expertiseTitle: "Areas of Expertise",
    expertiseSubtitle:
      "Our team specializes in a wide range of web development technologies and practices",

  }


  const pastWork = {
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

  return (
    <div>
      <Hero
        heroImage={Data.image}
        title={Data.title}
        subTitle={Data.subTitle}
        description={Data.description}
        primaryButton={{
          text: Data.primaryButton.text,
          link: Data.primaryButton.link,
        }}
        headline={Data.headline}
        valuePropositions={Data.valuePropositions}
      />

     <StatsServices
    title="Our Web Development Achievements"
    stats={[
        { icon: <FaUsers style={{ fontSize: '2rem' }} />, number: '1,000+', label: 'Satisfied Clients' },
        { icon: <FaRegSmile style={{ fontSize: '2rem' }} />, number: '300+', label: 'Projects Completed' },
        { icon: <FaCode style={{ fontSize: '2rem' }} />, number: '250', label: 'Custom Websites Developed' },
        { icon: <FaLaptopCode style={{ fontSize: '2rem' }} />, number: '500+', label: 'Applications Designed' },
    ]}
/>

      <FeatureSection languages={languages} title="Web Development Languages" description="Stay updated with the latest technologies." />
      <WebDevelopmentWork
        works={pastWork.pastWorks}
        sectionTitle={pastWork?.title}
        sectionSubtitle={pastWork.description}
      />
      <Testimonials
        title={testimonials.title}
        subTitle={testimonials.description}
        testimonials={testimonials.testimonials}
      />

      <Expertise
        title={Expertises.expertiseTitle}
        subtitle={Expertises.expertiseSubtitle}
      />
    </div>
  )
}

export default page