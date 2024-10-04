
import React from "react";

type HeroProps = {
  heroImage: string;
};

const Hero: React.FC<HeroProps> = ({ heroImage }) => {
  return (
    <section className="flex flex-wrap gap-10 items-start mt-28 w-full text-base leading-7 bg-blend-normal max-w-[1340px] min-h-[446px] max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col grow shrink pb-9 bg-blend-normal min-w-[240px] w-[496px] max-md:max-w-full">
        <h1 className="flex flex-col pr-28 pb-3 text-7xl font-bold leading-none bg-blend-normal min-h-[231px] text-slate-900 max-md:pr-5 max-md:pb-24 max-md:max-w-full max-md:text-4xl">
          <span className="max-md:max-w-full max-md:text-4xl">Innovative</span>
          <span className="max-md:max-w-full max-md:text-4xl">
            Web Solutions
          </span>
          <span className="max-md:max-w-full max-md:text-4xl">
            for Your Business
          </span>
        </h1>
        <p className="flex flex-col pr-2 pb-1 mt-2.5 bg-blend-normal h-[82px] text-neutral-800 max-md:pb-24 max-md:max-w-full">
          We create cutting-edge web applications tailored to your unique
          business needs. Our expert team delivers innovative solutions that
          drive growth and enhance user experience.
        </p>
        <div className="flex flex-wrap gap-5 items-start mt-10 bg-blend-normal min-h-[49px]">
          <a
            href="#services"
            className="px-8 py-3 text-white bg-blue-600 bg-blend-normal rounded-[30px] w-[203px] max-md:px-5"
          >
            Explore Our Services
          </a>
          <a
            href="#portfolio"
            className="px-8 py-3 border border-solid bg-blend-normal border-slate-900 rounded-[30px] text-slate-900 w-[163px] max-md:px-5"
          >
            View Portfolio
          </a>
        </div>
      </div>
      <img
        loading="lazy"
        src={heroImage}
        alt="Web development illustration"
        className="object-contain grow shrink bg-blend-normal aspect-[1.39] min-w-[240px] w-[495px] max-md:max-w-full"
      />
    </section>
  );
};

export default Hero;
