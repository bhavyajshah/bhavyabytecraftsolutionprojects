
import React from "react";

type TestimonialProps = {
  quote: string;
  author: string;
  company: string;
};

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  company,
}) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <p className="text-lg italic mb-4">{quote}</p>
      <p className="font-bold">{author}</p>
      <p className="text-sm text-gray-600">{company}</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Working with this web development team was a game-changer for our business. They delivered a stunning website that exceeded our expectations.",
      author: "John Doe",
      company: "ABC Corp",
    },
    {
      quote:
        "The team's expertise in responsive design and user experience really shines through in our new web application.",
      author: "Jane Smith",
      company: "XYZ Industries",
    },
    {
      quote:
        "Their attention to detail and commitment to delivering on time made our e-commerce project a huge success.",
      author: "Mike Johnson",
      company: "123 Retail",
    },
  ];

  return (
    <section className="flex flex-col items-center mt-24 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-5xl font-bold leading-none text-slate-900 max-md:max-w-full max-md:text-4xl">
        What Our Clients Say
      </h2>
      <p className="mt-2.5 text-base leading-7 text-neutral-800 max-md:max-w-full">
        Don&apos;t just take our word for it - hear from some of our satisfied
        clients
      </p>
      <div className="flex flex-wrap gap-10 justify-center mt-12 w-full max-w-[1340px] max-md:mt-10 max-md:max-w-full">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
