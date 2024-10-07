"use client";
import { FollowerPointerCard } from "../ui/following-pointer";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { caseStudies } from "../data/Data";

export function CaseStudies() {
  return (
    <div className="max-w-6xl mx-auto bg-transparent relative">
      {/* Title and Description */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Byte-Craft Case Studies</h1>
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
            className="group relative p-4 bg-transparent border border-gray-200 backdrop-blur-md rounded-3xl shadow-lg transition-transform hover:bg-gray-900 hover:shadow-2xl cursor-pointer"
            onClick={() => window.open(caseStudy.link, "_blank")}
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
              <div className="p-2 text-white">
                <h2 className="font-bold text-lg text-white mb-2 mt-2">
                  {caseStudy.title}
                </h2>
                <p className="text-sm text-white mb-4">
                  {caseStudy.description}
                </p>

                {/* Enhanced List Content with Dynamic Data */}
                <ul className="list-none space-y-2 transition-all duration-300">
                  {caseStudy.bulletPoints?.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center space-x-2">
                      <div className="">
                      <FaCheckCircle className="text-green-400" />
                      </div>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
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
