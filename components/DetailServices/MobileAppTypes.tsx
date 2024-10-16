'use client';
import React, { useState } from 'react';
import { AppType, appTypes, AppFeature } from '../../lib/types';
import { AnimatePresence, motion } from 'framer-motion';
import {Smartphone, TrendingUp, CheckCircle, Swords } from 'lucide-react';

const MobileAppTypes: React.FC = () => {
  const [selectedAppType, setSelectedAppType] = useState<AppType>(appTypes[0]);

const appData: Record<AppType, {
  title: string;
  description: string;
  image: any;
}> = {
  'NATIVE APPS': {
    title: 'Native Mobile App Development',
    description: 'Native app development continues to dominate mobile experiences, offering unparalleled performance, robust security, and complete access to device hardware. With native apps, businesses can leverage platform-specific features like Swift for iOS or Kotlin for Android, ensuring smooth, responsive, and feature-rich user experiences tailored to each platform. These apps are essential for high-demand applications, such as gaming, AR/VR, or complex enterprise solutions.',
    image: 'https://static.vecteezy.com/system/resources/previews/006/800/441/non_2x/react-native-mobile-app-illustration-exclusive-design-vector.jpg',
  },
  'CROSS-PLATFORM APPS': {
    title: 'Cross-Platform Mobile App Development',
    description: 'Cross-platform development frameworks like Flutter and React Native have revolutionized the mobile app industry. By allowing developers to write a single codebase that works across multiple platforms, cross-platform apps significantly reduce time-to-market and development costs. While offering near-native performance, they also enable rapid prototyping and iterative updates, making them a go-to solution for startups and companies looking to expand their mobile presence without doubling the effort.',
    image: 'https://www.orangemantra.com/blog/wp-content/uploads/2020/01/Cross-Platform-App-Development-Facts-You-Need-To-Know-Right-Now-1024x576.png',
  },
  'HYBRID APPS': {
    title: 'Hybrid Mobile App Development',
    description: 'Hybrid apps bridge the gap between web and native apps, offering a cost-effective solution that uses web technologies like HTML, CSS, and JavaScript within a native shell. Hybrid apps are perfect for businesses looking to maintain a presence across multiple platforms while keeping development costs in check. Modern tools like Ionic and Apache Cordova have evolved, making hybrid apps more powerful, allowing integration with native device features and offering smoother performance than ever before.',
    image: 'https://eibsglobal.com/wp-content/uploads/2019/10/hybrid-app-development.png',
  },
  'PROGRESSIVE WEB APPS': {
    title: 'Progressive Web App (PWA) Development',
    description: 'Progressive Web Apps (PWAs) are a rapidly growing trend, offering the best of both web and mobile worlds. PWAs provide fast load times, offline capabilities, and a native app-like experience without needing app store distribution. These apps have become crucial for eCommerce platforms, news websites, and content-heavy apps, as they ensure seamless accessibility across all devices while reducing bounce rates and increasing user engagement.',
    image: 'https://www.pngitem.com/pimgs/m/127-1272322_progressive-web-apps-progressive-app-png-transparent-png.png',
  },
};

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
      "5G-enabled apps allowing ultra-fast streaming, gaming, and real-time collaboration;",   ]
  }
];

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
                    <div className="">
                    <CheckCircle className='text-[#6430C2]'/>
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
