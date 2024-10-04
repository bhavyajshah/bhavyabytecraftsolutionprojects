
import React from "react";

type ExpertiseAreaProps = {
  title: string;
  description: string;
  icon: string;
};

const ExpertiseArea: React.FC<ExpertiseAreaProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <img src={icon} alt={title} className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};

const Expertise: React.FC = () => {
  const expertiseAreas = [
    {
      title: "Front-end Development",
      description:
        "Creating responsive and interactive user interfaces using modern frameworks.",
      icon: "http://b.io/ext_82-",
    },
    {
      title: "Back-end Development",
      description:
        "Building robust server-side applications and APIs to power your web solutions.",
      icon: "http://b.io/ext_83-",
    },
    {
      title: "Database Design",
      description:
        "Structuring efficient and scalable databases to manage your data effectively.",
      icon: "http://b.io/ext_84-",
    },
    {
      title: "Cloud Integration",
      description:
        "Leveraging cloud technologies for scalable and reliable web applications.",
      icon: "http://b.io/ext_85-",
    },
  ];

  return (
    <section className="flex flex-col items-center mt-24 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-5xl font-bold leading-none text-slate-900 max-md:max-w-full max-md:text-4xl">
        Areas of Expertise
      </h2>
      <p className="mt-2.5 text-base leading-7 text-neutral-800 max-md:max-w-full">
        Our team specializes in a wide range of web development technologies and
        practices
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12 w-full max-w-[1340px] max-md:mt-10 max-md:max-w-full">
        {expertiseAreas.map((area, index) => (
          <ExpertiseArea key={index} {...area} />
        ))}
      </div>
    </section>
  );
};

export default Expertise;
