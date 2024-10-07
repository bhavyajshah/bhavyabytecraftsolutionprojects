import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const teamMembers = [
  {
    name: "Rohit Raaj",
    position: "Founder",
    description:
      "With a passion for technology and innovation, I founded Byte Craft Solutions to help businesses thrive.",
    imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
    social: {
      linkedin: "https://linkedin.com/in/rohitraaj",
      twitter: "https://twitter.com/rohitraaj",
      instagram: "https://instagram.com/rohitraaj",
      facebook: "https://facebook.com/rohitraaj",
    },
  },
  {
    name: "Rahul Mehta",
    position: "Co-Founder",
    description:
      "As a co-founder, I am committed to leading our team to deliver exceptional IT solutions.",
    imgSrc: "https://randomuser.me/api/portraits/men/2.jpg",
    social: {
      linkedin: "https://linkedin.com/in/rahulmehta",
      twitter: "https://twitter.com/rahulmehta",
      instagram: "https://instagram.com/rahulmehta",
      facebook: "https://facebook.com/rahulmehta",
    },
  },
  {
    name: "Kiara Verma",
    position: "Lead Designer",
    description:
      "With a keen eye for design, I ensure our products are user-friendly and visually appealing.",
    imgSrc: "https://randomuser.me/api/portraits/women/1.jpg",
    social: {
      linkedin: "https://linkedin.com/in/kiaraverma",
      twitter: "https://twitter.com/kiaraverma",
      instagram: "https://instagram.com/kiaraverma",
      facebook: "https://facebook.com/kiaraverma",
    },
  },
  {
    name: "Priya Desai",
    position: "Product Manager",
    description:
      "I align our product strategy with client needs, ensuring our offerings are top-notch.",
    imgSrc: "https://randomuser.me/api/portraits/women/2.jpg",
    social: {
      linkedin: "https://linkedin.com/in/priyadesai",
      twitter: "https://twitter.com/priyadesai",
      instagram: "https://instagram.com/priyadesai",
      facebook: "https://facebook.com/priyadesai",
    },
  },
];

const socialMediaIcons = {
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  instagram: FaInstagram,
  facebook: FaFacebookF,
};

const TeamSection = () => {
  return (
    <section className="py-14 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-manrope text-4xl font-bold text-white">
            Meet Our Team at Byte Craft Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              className="border-2 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
              key={index}
            >
              <div className="h-48 overflow-hidden mb-4 rounded-lg shadow-md">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform transform hover:scale-110"
                />
              </div>
              <h6 className="text-lg text-white font-semibold mb-1">{member.name}</h6>
              <span className="text-sm text-white">{member.position}</span>
              <p className="text-white leading-6 my-2">{member.description}</p>
              <div className="flex items-center gap-4 justify-center lg:justify-start mt-4">
                {Object.entries(member.social).map(([key, value]) => {
                  const Icon = socialMediaIcons[key];
                  return (
                    <Link href={value} key={key}>
                      <div className="cursor-pointer text-gray-600 hover:bg-indigo-600 group w-10 h-10 rounded-full flex justify-center items-center bg-gray-200 transition-all duration-300">
                        <Icon className="w-4 h-4 text-gray-600 group-hover:text-white" />
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
