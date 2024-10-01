"use client";
import { FollowerPointerCard } from "../ui/following-pointer";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export function CaseStudies() {
  const caseStudies = [
    {
      author: "Byte Craft Solutions",
      title: "Mobile App for E-commerce Startup",
      description:
        "Developed a robust mobile app for an e-commerce startup, boosting user engagement by 35%. Seamless integration with payment gateways and personalized recommendations.",
      image:
        "https://img.freepik.com/free-vector/e-commerce-concept-illustration_114360-1351.jpg",
      authorAvatar: "https://img.icons8.com/ios/452/avatar--v1.png",
      link: "https://example.com/mobile-app-ecommerce",
    },
    {
      author: "Byte Craft Solutions",
      title: "AI-Powered Analytics Platform",
      description:
        "Created an AI-powered platform for data analysis that streamlined operations, reducing manual effort by 50%. Innovative algorithms and real-time data visualizations.",
      image:
        "https://img.freepik.com/free-vector/artificial-intelligence-illustration-concept_114360-2295.jpg",
      authorAvatar: "https://img.icons8.com/ios/452/avatar--v1.png",
      link: "https://example.com/ai-powered-analytics",
    },
    {
      author: "Byte Craft Solutions",
      title: "Cross-Platform SaaS Product",
      description:
        "Delivered a scalable SaaS solution across web and mobile, achieving a 40% increase in client productivity. Advanced multi-device synchronization and secure cloud storage.",
      image:
        "https://img.freepik.com/free-photo/software-developer-programming-code_53876-96402.jpg",
      authorAvatar: "https://img.icons8.com/ios/452/avatar--v1.png",
      link: "https://example.com/saas-product",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-transparent relative">
      {/* Title and Description */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Case Studies</h1>
        <p className="text-lg text-gray-300">
          Explore how Byte Craft Solutions has delivered cutting-edge solutions
          to help businesses succeed and grow.
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-12">
        {caseStudies.map((caseStudy, index) => (
          <motion.div
            key={index}
            className="group relative p-6 bg-transparent border border-gray-200 backdrop-blur-md rounded-3xl shadow-lg transition-transform hover:bg-gray-900 hover:shadow-2xl cursor-pointer"
            onClick={() => window.open(caseStudy.link, "_blank")} // Redirect on click
          >
            <FollowerPointerCard
              title={
                <TitleComponent
                  title={caseStudy.author}
                  avatar={caseStudy.authorAvatar}
                />
              }
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="transform object-cover transition duration-300 w-full h-64 rounded-t-2xl"
                />
              </div>
              <div className="p-4 text-white">
                <h2 className="font-bold text-lg text-white mb-2">
                  {caseStudy.title}
                </h2>
                <p className="text-sm text-white mb-4">
                  {caseStudy.description}
                </p>

                {/* Enhanced List Content with SVG */}
                <ul className="list-none space-y-2 group-hover:pl-4 transition-all duration-300">
                  <li className="flex items-center space-x-2">
                    <FaCheckCircle className="text-green-400" />{" "}
                    {/* SVG Icon */}
                    <span>
                      ABC Corporation needed a scalable and secure e-commerce
                      platform to expand their online presence.
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaCheckCircle className="text-green-400" />{" "}
                    {/* SVG Icon */}
                    <span>
                      Developed a custom e-commerce platform with integrated
                      payments, inventory management, and customer analytics.
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaCheckCircle className="text-green-400" />{" "}
                    {/* SVG Icon */}
                    <span>
                      Increased online sales by 40% within the first six months
                      of launch.
                    </span>
                  </li>
                </ul>
              </div>
            </FollowerPointerCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <img
      src={avatar}
      alt="Avatar"
      className="rounded-full w-6 h-6 border-2 border-white"
    />
    <p className="text-white">{title}</p>
  </div>
);
