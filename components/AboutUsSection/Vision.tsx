
import React from "react";

interface VisionItemProps {
  icon: string;
  title: string;
  description: string;
}

const VisionItem: React.FC<VisionItemProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex flex-col grow shrink pb-4 bg-blend-normal min-h-[119px] min-w-[240px] w-full sm:w-[calc(50%-1rem)] lg:w-[322px] max-md:pb-8">
    <div className="flex gap-3 max-w-full text-xl font-semibold leading-none text-white bg-blend-normal">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 w-12 rounded-2xl bg-blend-normal aspect-square"
      />
      <div className="grow shrink my-auto">{title}</div>
    </div>
    <p className="flex flex-col pr-4 pb-4 mt-3 max-w-full text-base sm:text-lg leading-relaxed sm:leading-loose bg-blend-normal text-slate-300">
      {description}
    </p>
  </div>
);

const Vision: React.FC = () => {
  const visionItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/09c2aaff3701c22d9f60662e3fc39c765e499b1b9f6f41925b77faf29ffca697?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
      title: "Full transparency",
      description:
        "Trust is key; we uphold honesty. Every step is communicated for clarity.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e09bc6f201a327e539e4619873d47e14ef7ebccde591ca361d17fd58702b542?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
      title: "Product Mindset",
      description:
        "Our focus: user-centric, engaging, and valuable products with purpose.",
    },
  ];

  return (
    <section className="flex flex-col justify-center self-stretch px-4 sm:px-8 md:px-16 lg:px-20 py-8 sm:py-10 md:py-14 w-full">
      <div className="flex flex-col w-full bg-blend-normal pb-[px] max-md:pb-8 max-w-screen-xl mx-auto">
        <div className="flex flex-wrap gap-8 sm:gap-10 items-start">
          <div className="flex flex-col grow shrink bg-blend-normal min-w-[240px] w-full lg:w-[calc(100%-324px)]">
            <span className="self-start px-4 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm font-medium tracking-wide leading-none text-white bg-blend-normal rounded-[9999px_9999px_9999px_0px]">
              Our vision
            </span>
            <h2 className="flex flex-col pb-2 sm:pb-3.5 mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight sm:leading-none text-white bg-blend-normal">
              We believe in the power of creative ideas
            </h2>
            <p className="flex flex-col pr-0 sm:pr-8 pb-4 mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-none bg-blend-normal text-slate-300">
              In the heart of our company lies a strong belief in the
              transformative power of ideas. Leveraging innovation and
              originality, we aim to deliver results that exceed expectations.
            </p>
            <div className="flex flex-wrap gap-6 items-start mt-6 sm:mt-10 min-h-0 bg-blend-normal">
              {visionItems.map((item, index) => (
                <VisionItem key={index} {...item} />
              ))}
            </div>
          </div>
          <div className="flex overflow-hidden flex-col grow shrink rounded-3xl shadow-sm bg-blend-normal bg-white bg-opacity-0 min-w-[240px] w-full sm:w-[calc(50%-1rem)] lg:w-[299px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/75f21fde2a0bac411eea4f7da7b4311a307f02e80d808e5dcc34b32829cd797d?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e"
              alt="Team collaboration"
              className="object-cover w-full rounded-3xl bg-blend-normal aspect-[0.67]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
