"use client";
import Image from "next/image";
import { Tabs } from "../ui/tabs";
import { useTheme } from "next-themes";

export function WhyChooseByteCraftSolutions() {
  const { theme } = useTheme();

  const tabs = [
    {
      title: "Mastery",
      value: "product",
      image:
        "https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75",
      description: "Explore our product offerings tailored to your needs.",
      content: (
        <TabContent
          title="Mastery"
          image="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"
          description="Explore our product offerings tailored to your needs."
        />
      ),
    },
    {
      title: "Perfection Assurance",
      value: "services",
      image:
        "https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75",
      description: "Our range of services that help your business thrive.",
      content: (
        <TabContent
          title="Perfection Assurance"
          image="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"
          description="Our range of services that help your business thrive."
        />
      ),
    },
    {
      title: "Client-Focused Approach",
      value: "playground",
      image:
        "https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75",
      description: "Discover our innovative solutions in action.",
      content: (
        <TabContent
          title="Client-Focused Approach"
          image="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"
          description="Discover our innovative solutions in action."
        />
      ),
    },
    {
      title: "Creativity",
      value: "content",
      image:
        "https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75",
      description: "Engage with high-quality content to grow your brand.",
      content: (
        <TabContent
          title="Creativity"
          image="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"
          description="Engage with high-quality content to grow your brand."
        />
      ),
    },
  ];

  return (
    <div className={`${theme === 'light' ? 'bg-gradient-to-br from-blue-50 to-white' : ''}`}>
      <div className={`h-[30rem] md:h-[50rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-center justify-center mt-10 mb-60`}>
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-extrabold transition duration-500 ${theme === 'light'
            ? 'text-blue-800 mt-10'
            : 'text-white hover:text-indigo-400'
            }`}>
            Why Choose ByteCraft Solutions?
          </h2>
          <p className={`max-w-[714px] mx-auto mt-4 text-lg ${theme === 'light' ? 'text-blue-700' : 'text-gray-300'
            }`}>
            At ByteCraft, we turn your visions into scalable digital solutions.
            Our team&apos;s combined expertise of over 30 years helps us create
            innovative software for all business sizes.
          </p>
        </div>
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

const TabContent = ({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) => {
  const { theme } = useTheme();

  return (
    <div className={`w-full h-full relative p-6 rounded-2xl text-xl md:text-4xl font-bold ${theme === 'light'
      ? ' text-blue-800 shadow-lg'
      : 'bg-[#201046] text-white'
      }`}>
      <p className="mb-4">{title}</p>
      <p className={`text-base md:text-lg font-normal mb-6 ${theme === 'light' ? 'text-blue-700' : 'text-blue-200'
        }`}>
        {description}
      </p>
      <Image
        src={image}
        alt={title}
        width={1000}
        height={1000}
        className="object-cover object-left-top h-[60%] md:h-[70%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto transition duration-300 shadow-xl"
      />
    </div>
  );
};

export default WhyChooseByteCraftSolutions;