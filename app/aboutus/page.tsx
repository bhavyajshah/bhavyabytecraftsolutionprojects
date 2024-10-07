import React from "react";
import { FaChartLine, FaUsers, FaProjectDiagram } from 'react-icons/fa';
import { Metadata } from 'next';
import TeamSection from "@/components/AboutUsSection/AboutTeamSection";

export const metadata: Metadata = {
  title: "About Us - Byte Craft Solutions | Leading IT Services",
  description: "Learn more about Byte Craft Solutions, a top IT services company specializing in innovative software development, IT consulting, and digital solutions. Discover our vision, values, and meet our dedicated team.",
  keywords: ["Byte Craft Solutions", "IT Services", "Software Development", "IT Consulting", "Digital Solutions", "About Us"],
  openGraph: {
    title: "About Us - Byte Craft Solutions",
    description: "Explore Byte Craft Solutions' mission, team, values, and dedication to delivering cutting-edge IT services.",
    url: "https://www.bytecraftsolutions.com/aboutus",
    type: "website",
  },
};

const AboutSection = ({ imgSrc, heading, description, imgAlt, reverse }: any) => {
  return (
    <section className="py-14 lg:pt-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
          {/* Conditionally render image or text first based on reverse */}
          {reverse ? (
            <>
              <div className="flex items-center">
                <div className="data w-full">
                  <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-white mb-9 max-lg:text-center">
                    {heading}
                  </h2>
                  <p className="font-normal text-xl leading-8 max-lg:text-center max-w-2xl mx-auto">
                    {description}
                  </p>
                </div>
              </div>
              <div className="img-box">
                <img src={imgSrc} alt={imgAlt} className="max-lg:mx-auto object-cover rounded-lg shadow-lg" />
              </div>
            </>
          ) : (
            <>
              <div className="img-box">
                <img src={imgSrc} alt={imgAlt} className="max-lg:mx-auto object-cover rounded-lg shadow-lg" />
              </div>
              <div className="flex items-center">
                <div className="data w-full">
                  <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-white mb-9 max-lg:text-center">
                    {heading}
                  </h2>
                  <p className="font-normal text-xl leading-8 max-lg:text-center max-w-2xl mx-auto">
                    {description}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
const StatsSection = ({ stats }: any) => {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl text-center text-white font-bold mb-14">
          Our results in numbers
        </h2>
        <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
          {stats.map((stat: any, index: number) => (
            <div
              key={index}
              className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 p-6 rounded-2xl border-2 border-gray-300 hover:border-indigo-600 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex gap-5 items-center">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  {stat.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-white font-semibold mb-2">{stat.title}</h4>
                  <p className="text-sm leading-5">{stat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutUsPage = () => {
  const aboutData = [
    {
      imgSrc: 'https://cdni.iconscout.com/illustration/premium/thumb/team-working-on-business-startup-illustration-download-in-svg-png-gif-file-formats--launch-mobile-pack-people-illustrations-4340633.png',
      heading: 'About Byte Craft Solutions',
      description:
        'At Byte Craft Solutions, we are driven by a commitment to provide cutting-edge IT services and solutions. We aim to empower businesses by delivering seamless, scalable, and user-friendly software that enhances every interaction and experience.',
      imgAlt: 'Byte Craft Solutions About Us',
      reverse: false,
    },
    {
      imgSrc: 'https://cdni.iconscout.com/illustration/premium/thumb/boy-with-creative-ideas-illustration-download-in-svg-png-gif-file-formats--thinking-business-idea-pack-illustrations-10245583.png',
      heading: 'Creative and Innovative',
      description:
        'Founded in 2024, Byte Craft Solutions has been at the forefront of technology innovation. We prioritize creativity, accessibility, and scalability in every project, crafting intuitive and functional software solutions that help businesses thrive.',
      imgAlt: 'Byte Craft Solutions Innovation',
      reverse: true,
    },
  ];

const stats = [
    {
      icon: <FaChartLine size={40} className="text-white" />,
      title: 'Company Growth',
      description: 'Our remarkable growth reflects continuous innovation and relentless pursuit of excellence.',
    },
    {
      icon: <FaUsers size={40} className="text-white" />,
      title: 'Team Members',
      description: 'Our talented team members form the backbone of Byte Craft Solutions, driving our success.',
    },
    {
      icon: <FaProjectDiagram size={40} className="text-white" />,
      title: 'Projects Completed',
      description: 'With over 625 projects completed globally, we continue to expand our impact.',
    },
  ];

  return (
    <div>

    {aboutData.map((section, index) => (
        <AboutSection
          key={index}
          imgSrc={section.imgSrc}
          heading={section.heading}
          description={section.description}
          imgAlt={section.imgAlt}
          reverse={section.reverse}
        />
      ))}
      <StatsSection stats={stats} />
<TeamSection />
    </div>
  );
};

export default AboutUsPage