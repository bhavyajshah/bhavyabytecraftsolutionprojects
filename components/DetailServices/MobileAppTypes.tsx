'use client';
import React, { useState } from 'react';
import { AppType, appTypes, AppFeature } from '../../lib/types';
import { AnimatePresence, motion } from 'framer-motion';
import { Clock, Trash2, CheckCircle } from 'lucide-react';


const MobileAppTypes: React.FC = () => {
  const [selectedAppType, setSelectedAppType] = useState<AppType>(appTypes[0]);

  const appData: Record<AppType, {
    title: string;
    description: string;
    image: any;
  }> = {
    'NATIVE APPS': {
      title: 'Native Mobile App Development',
      description: 'Native Android and iOS app development makes the most of mobile platform capabilities, supports comprehensive feature sets, and offers high performance.',
      image: 'https://www.flexsin.com/blog/wp-content/uploads/2019/06/native_app_1600_900.jpg',
    },
    'CROSS-PLATFORM APPS': {
      title: 'Cross-Platform App Development',
      description: 'Cross-platform development allows creating apps that work on multiple platforms using a single codebase, offering cost-effectiveness and faster time-to-market.',
      image: 'https://www.zestminds.com/blog/wp-content/uploads/2022/02/Cross-Platform-Mobile-App-Development-Framework.jpg',
    },
    'HYBRID APPS': {
      title: 'Hybrid App Development',
      description: 'Hybrid apps combine elements of both native and web applications, offering a balance between performance and development efficiency.',
      image: 'https://www.tranktechnologies.com/blog/wp-content/uploads/2021/05/img.png',
    },
    'PROGRESSIVE WEB APPS': {
      title: 'Progressive Web App Development',
      description: 'Progressive Web Apps (PWAs) offer a web-based solution that provides a native app-like experience to users, working across all devices with features like offline functionality.',
      image: 'https://techaffinity.com/blog/wp-content/uploads/2022/12/p2uors208q22bcd82g52-1024x576.jpg',
    },
  };

const features: AppFeature[] = [
  {
    title: "Advantages",
    icon: <CheckCircle className="w-10 h-10" />,
    items: [
      "High app performance and speed;",
      "Convenient UI/UX;",
      "Top security."
    ]
  },
  {
    title: "Limitations",
    icon: <Trash2 className="w-10 h-10" />,
    items: [
      "High upfront and maintenance costs;",
      "Slow time-to-market;",
      "No code reusability."
    ]
  },
  {
    title: "Best for",
    icon: <Clock className="w-10 h-10" />,
    items: [
      "Complex mobile applications;",
      "High performance and a smooth UI;",
      "Apps with heavy data processing."
    ]
  }
]

  return (
    <section className="flex flex-col items-center px-20 py-24 text-white max-md:px-5 transition-all duration-300">
      <h1 className="text-6xl font-bold leading-none max-md:max-w-full max-md:text-4xl transition-transform duration-300 hover:scale-105">
        Types of mobile apps we develop
      </h1>
      <nav className="flex overflow-hidden flex-col mt-16 w-full text-lg font-medium leading-relaxed max-w-[1110px] max-md:mt-10 max-md:max-w-full">
        <ul className="flex z-10 flex-wrap gap-10 items-start pb-3">
          {appTypes.map((type) => (
            <li
              key={type}
              className={`cursor-pointer text-white relative transition-colors duration-300 hover:text-[#6430C2] ${selectedAppType === type ? 'text-[#6430C2] font-bold' : ''}`}
              onClick={() => setSelectedAppType(type)}
            >
              {type}
              {selectedAppType === type && <motion.div layoutId="underline" className="absolute left-0 bottom-[-5px] w-full h-1 bg-[#6430C2]" />}
            </li>
          ))}
        </ul>
      </nav>
      <article className="flex flex-col mt-10 w-full max-md:pb-24 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start w-full text-lg font-medium leading-tight min-h-[321px]">
          <AnimatePresence>
            <motion.img
              key={selectedAppType}
              loading="lazy"
              src={appData[selectedAppType].image}
              alt={`${selectedAppType} illustration`}
              className="object-contain grow shrink aspect-[1.41] min-w-[240px] w-[360px] max-md:max-w-full transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
          <motion.div
            className="flex flex-col grow shrink p-10 min-w-[240px] w-[530px] max-md:px-5 max-md:max-w-full rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="self-start text-3xl">{appData[selectedAppType].title}</h2>
            <p className="mt-5 leading-relaxed">{appData[selectedAppType].description}</p>
            <button className="overflow-hidden self-start px-11 py-3 mt-6 bg-[#6430C2] border-2 border-[#6430C2] border-solid transition-all duration-300 hover:bg-[#6430C2] max-md:px-5 max-md:mt-10 rounded-lg">
              Request services
            </button>
          </motion.div>
        </div>
      </article>
      <section className="flex flex-col justify-center p-6 mt-10 w-full rounded-lg">
        <div className="flex flex-wrap items-start min-h-[182px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col grow shrink p-4 min-h-[182px] min-w-[240px] w-[282px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex gap-4 max-w-full text-2xl font-medium leading-tight whitespace-nowrap">
               {feature.icon}
                <div className="flex-auto my-auto">{feature.title}</div>
              </div>
              <ul className="flex flex-col mt-4 w-full text-base leading-relaxed h-[97px] max-w-[323px]">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-2.5 mt-2.5">
                    <div className="flex shrink-0 my-auto w-2 bg-[#6430C2] h-[7px]" />
                    <div className="flex-auto">{item}</div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default MobileAppTypes;
