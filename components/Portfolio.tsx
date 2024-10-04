
import React from "react";

type PortfolioItemProps = {
  image: string;
  title: string;
  description: string;
};

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="flex overflow-hidden flex-col grow shrink px-5 py-6 bg-white shadow-2xl bg-blend-normal min-h-[455px] min-w-[240px] rounded-[30px] w-[330px]">
      <div className="flex overflow-hidden flex-col max-w-full bg-blend-normal rounded-[30px] w-[373px]">
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="object-contain w-full bg-blend-normal aspect-[1.5]"
        />
      </div>
      <div className="flex flex-col items-start mt-8 max-w-full font-medium bg-blend-normal w-[373px]">
        <h3 className="flex z-10 flex-col self-stretch pr-10 pb-16 mt-4 text-2xl leading-none bg-blend-normal min-h-[64px] text-neutral-800 max-md:pr-5 max-md:pb-24">
          {title}
        </h3>
        <p className="text-sm leading-none text-slate-900">{description}</p>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      image: "http://b.io/ext_78-",
      title: "E-commerce Platform",
      description: "A fully responsive online store with advanced features.",
    },
    {
      image: "http://b.io/ext_79-",
      title: "Business Analytics Dashboard",
      description:
        "Interactive data visualization for informed decision-making.",
    },
    {
      image: "http://b.io/ext_80-",
      title: "Social Media App",
      description: "A feature-rich platform for connecting people worldwide.",
    },
  ];

  return (
    <section className="flex flex-col items-center mt-24 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-5xl font-bold leading-none text-slate-900 max-md:max-w-full max-md:text-4xl">
        Our Portfolio
      </h2>
      <p className="mt-2.5 text-base leading-7 text-neutral-800 max-md:max-w-full">
        Explore our recent web development projects and see how we've helped
        businesses succeed online.
      </p>
      <div className="flex flex-wrap gap-10 items-start mt-12 w-full bg-blend-normal max-w-[1340px] min-h-[455px] max-md:mt-10 max-md:max-w-full">
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={index} {...item} />
        ))}
      </div>
      <a
        href="#contact"
        className="px-8 py-2.5 mt-12 max-w-full text-base leading-7 text-white bg-blue-600 bg-blend-normal rounded-[30px] w-[145px] max-md:px-5 max-md:mt-10"
      >
        Contact Us
      </a>
    </section>
  );
};

export default Portfolio;
