
import React from "react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  avatar,
}) => (
  <div className="flex overflow-hidden flex-col justify-center px-6 sm:px-8 py-10 sm:py-12 w-full font-medium rounded-3xl shadow-sm bg-blend-normal bg-neutral-800">
    <div className="flex flex-col pb-8 sm:pb-14 bg-blend-normal min-h-[248px]">
      <p className="text-base sm:text-lg leading-relaxed sm:leading-9 bg-blend-normal text-slate-300">
        {quote}
      </p>
      <div className="flex flex-col items-center mt-6 sm:mt-8 text-base leading-loose bg-blend-normal">
        <img
          loading="lazy"
          src={avatar}
          alt={author}
          className="object-contain w-12 rounded-full bg-blend-normal aspect-square"
        />
        <div className="mt-3 text-white">{author}</div>
        <div className="text-gray-400">{role}</div>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Working with Crator was a game-changer. Their creative vision truly amplified our brand's potential.",
      author: "Katy Perry",
      role: "CEO, Spotify",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/17d238dd91ade35c6ac0101d147ecc06d59fe2bc2dbc61f81aea3bbd8c05a5a7?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
    },
    {
      quote:
        "Crator's innovative design solutions played a key role in our product's successful launch.",
      author: "Henry Krasner",
      role: "CEO, Twitter",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3719e5d8d2ef710ae38ad1afe935539743b943f4668662aa37774b3ca66ba596?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
    },
    {
      quote:
        "Crator's team is exceptional. Their commitment to quality exceeded our highest expectations.",
      author: "Bob Foster",
      role: "CEO, Amazon",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e4460a662237d879446cfe2cd206ebdc060805c182290d73cfa1cbd8c3516f1d?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
    },
    {
      quote:
        "From concept to execution, Crator's approach was seamlessly integrated and highly efficient.",
      author: "Ema Roberts",
      role: "Founder, Dropbox",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9c72188fd4d8bb03a1260f9620fa6623860f28f24b076c5d23b022ee558c0dac?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
    },
  ];

  return (
    <section className="flex flex-col items-center py-16 sm:py-24 md:py-32 w-full">
      <div className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-32 w-full max-w-screen-xl bg-blend-normal">
        <span className="px-4 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm font-medium tracking-wide leading-none text-white bg-blend-normal rounded-[9999px_9999px_9999px_0px] w-auto sm:w-[137px]">
          Testimonials
        </span>
        <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight sm:leading-none text-white max-w-3xl">
          What they say about us
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-none text-slate-300 max-w-3xl">
          Discover first-hand accounts from our clients, who experienced the
          transformative power of our creative solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 sm:mt-14 w-full">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
