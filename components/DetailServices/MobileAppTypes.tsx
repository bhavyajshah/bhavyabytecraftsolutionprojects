'use client';
import React, { useState } from 'react';
import { AppType, appTypes, AppFeature } from '../../lib/types';
import { AnimatePresence, motion } from 'framer-motion';
import { Smartphone, TrendingUp, CheckCircle, Swords } from 'lucide-react';

const MobileAppTypes = ({ title, appData }: any) => {
  const [selectedAppType, setSelectedAppType] = useState<AppType>(appTypes[0]);

  const features: AppFeature[] = [
    {
      title: "Features",
      icon: <Smartphone className="w-10 h-10" />,
      items: [
        "Exceptional performance and seamless user experiences;",
        "Access to cutting-edge hardware features (camera, AR, biometrics);",
      ]
    },
    {
      title: "Current Challenges",
      icon: <Swords className="w-10 h-10" />,
      items: [
        "Balancing user privacy and data security with app functionality;",
        "Keeping up with rapidly evolving device technologies and operating systems;",
      ]
    },
    {
      title: "Emerging Trends",
      icon: <TrendingUp className="w-10 h-10" />,
      items: [
        "AI and ML-powered apps providing personalized experiences (e.g., recommendation engines, voice assistants);",
        "5G-enabled apps allowing ultra-fast streaming, gaming, and real-time collaboration;",]
    }
  ];

  return (
    <section className="flex flex-col items-center px-20 py-24 text-white max-md:px-5 transition-all duration-300">
      <h1 className="text-6xl font-bold leading-none max-md:max-w-full max-md:text-4xl transition-transform duration-300 hover:scale-105">
        {title}
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
                    <div className="">
                      <CheckCircle className='text-[#6430C2]' />
                    </div>
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
