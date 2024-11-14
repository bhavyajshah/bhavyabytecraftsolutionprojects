import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { teamMembers } from '../data/Data';

const socialMediaIcons = {
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  instagram: FaInstagram,
  facebook: FaFacebookF,
};

const TeamSection = () => {
  return (
    <section className="py-14 lg:py-24 bg-white dark:bg-transparent">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-manrope text-4xl font-bold text-neutral-800 dark:text-white">
            Meet Our Team at Byte Craft Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              className="border-2 border-neutral-200 dark:border-gray-700 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl bg-neutral-50 dark:bg-transparent"
              key={index}
            >
              <div className="h-48 overflow-hidden mb-4 rounded-lg shadow-md">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform transform hover:scale-110"
                />
              </div>
              <h6 className="text-lg text-neutral-800 dark:text-white font-semibold mb-1">{member.name}</h6>
              <span className="text-sm text-neutral-600 dark:text-neutral-300">{member.position}</span>
              <p className="text-neutral-700 dark:text-neutral-400 leading-6 my-2">{member.description}</p>
              <div className="flex items-center gap-4 justify-center lg:justify-start mt-4">
                {Object.entries(member.social).map(([key, value]) => {
                  const Icon = socialMediaIcons[key];
                  return (
                    <Link href={value} key={key}>
                      <div className="cursor-pointer text-neutral-600 hover:bg-neutral-200 dark:hover:bg-indigo-600 group w-10 h-10 rounded-full flex justify-center items-center bg-neutral-100 dark:bg-gray-700 transition-all duration-300">
                        <Icon className="w-4 h-4 text-neutral-600 group-hover:text-neutral-800 dark:text-gray-300 dark:group-hover:text-white" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;