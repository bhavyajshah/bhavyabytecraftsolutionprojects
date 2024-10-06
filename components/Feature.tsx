import React from 'react';

const Feature = ({ features, title, subtitle }) => {
  return (
    <div className="max-w-6xl mx-auto font-[sans-serif]">
      <h2 className="text-white sm:text-4xl text-2xl font-extrabold text-center mb-4">{title}</h2>
      <p className="text-gray-300 text-center mb-16">{subtitle}</p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg mx-auto gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 flex gap-6 rounded-lg border border-gray-600 shadow-lg transition-transform transform hover:shadow-2xl hover:scale-105 hover:rotate-1 duration-300 ease-in-out"
          >
            <div className="w-12 h-12 hero-button-gradient p-3 rounded-lg shrink-0 flex justify-center items-center text-white">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
