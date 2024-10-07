
import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      title: "Custom Web Development",
      description:
        "Tailored web solutions to meet your specific business requirements.",
      icon: "http://b.io/ext_75-",
    },
    {
      title: "Responsive Design",
      description:
        "Ensure your website looks great on all devices and screen sizes.",
      icon: "http://b.io/ext_76-",
    },
    {
      title: "E-commerce Solutions",
      description: "Build robust online stores with secure payment gateways.",
      icon: "http://b.io/ext_77-",
    },
  ];

  return (
    <section className="mt-24 ml-6 max-md:mt-10 max-md:max-w-full">
      <h2 className="flex flex-col px-16 w-full text-5xl font-bold leading-none bg-blend-normal text-slate-900 max-md:px-5 max-md:text-4xl">
        <span className="max-md:max-w-full max-md:text-4xl">
          Our Web Development
        </span>
        <span className="self-center max-md:text-4xl">Services</span>
      </h2>
      <p className="flex flex-col px-1 mt-2.5 w-full text-base leading-7 bg-blend-normal text-neutral-800">
        <span className="z-10 max-md:max-w-full">
          We offer a comprehensive range of web development services to help
          your business thrive online.
        </span>
      </p>
      <div className="mt-12 w-full max-w-[1340px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
            >
              <div className="flex flex-col text-base leading-7 max-md:max-w-full">
                <div className="flex flex-col items-center px-6 py-20 text-white bg-blue-600 bg-blend-normal rounded-[30px_30px_0px_0px] max-md:px-5 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src={service.icon}
                    alt=""
                    className="object-contain bg-blend-normal aspect-square w-[51px]"
                  />
                  <h3 className="mt-5 text-3xl font-medium leading-none">
                    {service.title}
                  </h3>
                  <p className="self-stretch mt-2.5">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
