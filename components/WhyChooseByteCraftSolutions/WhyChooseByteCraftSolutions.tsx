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
      image: "https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75",
      description: "Our team at ByteCraft has extensive expertise in a wide range of technologies and frameworks, allowing us to deliver solutions with a high degree of precision and effectiveness. We approach each project with a mastery mindset, leveraging our skills to build robust, scalable, and user-friendly digital products. With our dedication to excellence, we ensure that each solution we create meets the highest standards of quality and performance.",
      content: (
        <TabContent
          title="Mastery"
          image="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"
          description="Our team at ByteCraft has extensive expertise in a wide range of technologies and frameworks, allowing us to deliver solutions with a high degree of precision and effectiveness. We approach each project with a mastery mindset, leveraging our skills to build robust, scalable, and user-friendly digital products. With our dedication to excellence, we ensure that each solution we create meets the highest standards of quality and performance."
        />
      ),
    },
    {
      title: "Perfection Assurance",
      value: "services",
      image: "https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75",
      description: "At ByteCraft, we prioritize perfection in every aspect of our services. From planning and development to deployment and maintenance, we adhere to strict quality control measures to ensure that the final product is flawless and meets your expectations. We continuously optimize our processes and workflows to deliver a smooth, reliable, and efficient experience, reflecting our commitment to providing top-notch services for our clients.",
      content: (
        <TabContent
          title="Perfection Assurance"
          image="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"
          description="At ByteCraft, we prioritize perfection in every aspect of our services. From planning and development to deployment and maintenance, we adhere to strict quality control measures to ensure that the final product is flawless and meets your expectations. We continuously optimize our processes and workflows to deliver a smooth, reliable, and efficient experience, reflecting our commitment to providing top-notch services for our clients."
        />
      ),
    },
    {
      title: "Client-Focused Approach",
      value: "playground",
      image: "https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75",
      description: "Our philosophy is centered around putting our clients first. We take the time to understand your unique business goals, challenges, and target audience, ensuring that each solution we create is tailored to meet your specific needs. With a deep commitment to transparency, open communication, and continuous collaboration, we strive to build long-lasting partnerships based on trust and mutual success.",
      content: (
        <TabContent
          title="Client-Focused Approach"
          image="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"
          description="Our philosophy is centered around putting our clients first. We take the time to understand your unique business goals, challenges, and target audience, ensuring that each solution we create is tailored to meet your specific needs. With a deep commitment to transparency, open communication, and continuous collaboration, we strive to build long-lasting partnerships based on trust and mutual success."
        />
      ),
    },
    {
      title: "Creativity",
      value: "content",
      image: "https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75",
      description: "Innovation and creativity are at the core of ByteCraft's approach. We empower our team to think outside the box and push boundaries, resulting in unique and engaging digital solutions that resonate with your audience. Our creative expertise ensures that your brand stands out in a crowded digital landscape, offering compelling user experiences that drive engagement and foster growth.",
      content: (
        <TabContent
          title="Creativity"
          image="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"
          description="Innovation and creativity are at the core of ByteCraft's approach. We empower our team to think outside the box and push boundaries, resulting in unique and engaging digital solutions that resonate with your audience. Our creative expertise ensures that your brand stands out in a crowded digital landscape, offering compelling user experiences that drive engagement and foster growth."
        />
      ),
    },
  ];

  return (
    <div className={`${theme === 'light' ? '' : ''}`}>
      <div className={`h-[30rem] md:h-[50rem] [perspective:1000px] relative flex flex-col max-w-6xl mx-auto w-full items-center justify-center mt-10 mb-60`}>
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-extrabold transition duration-500 ${theme === 'light'
            ? 'text-gray-900 mt-10'
            : 'text-white hover:text-indigo-400'
            }`}>
            Why Choose ByteCraft Solutions?
          </h2>
          <p className={`max-w-[714px] mx-auto mt-4 text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'
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
      ? 'text-gray-800 shadow-xl bg-white'
      : 'bg-[#201046] text-white'
      }`}>
      <p className="mb-4">{title}</p>
      <p className={`text-base md:text-lg font-normal mb-6 ${theme === 'light' ? 'text-gray-600' : 'text-blue-200'
        }`}>
        {description}
      </p>
      <Image
        src={image}
        alt={title}
        width={1000}
        height={1000}
        className="object-cover object-left-top h-[60%] md:h-[70%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto transition duration-300 shadow-lg"
      />
    </div>
  );
};

export default WhyChooseByteCraftSolutions;
