'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Category {
  name: string;
  isActive: boolean;
}

interface Story {
  logo: string;
  title: string;
  location: string;
  description: string;
  image: string;
}

const categories: Category[] = [
  { name: 'Crypto Finance', isActive: true },
  { name: 'Financial Services', isActive: false },
  { name: 'Healthcare', isActive: false },
  { name: 'Automotive', isActive: false },
  { name: 'Logistics', isActive: false },
  { name: 'Telecom', isActive: false },
];

const stories: { [key: string]: Story } = {
  'Crypto Finance': {
    logo: 'https://via.placeholder.com/100',
    title: 'A mobile crypto wallet operating in over 40 countries',
    location: 'South Africa',
    image: "https://cdn.dribbble.com/userupload/16217870/file/original-9b1ef4f7e5440613b4b1f0cde410e69d.png?resize=752x",
    description: 'This app enables seamless cross-border transactions with cutting-edge blockchain technology.',
  },
  'Financial Services': {
    logo: 'https://via.placeholder.com/100',
    title: 'Leading Fintech solutions for global payments',
    location: 'United States',
    image: "https://i.pinimg.com/originals/0d/b4/cf/0db4cf8a0fab2e31c0457850a5ebeab7.png",
    description: 'Providing top-notch payment solutions that ensure security, speed, and transparency across borders.',
  },
  'Healthcare': {
    logo: 'https://via.placeholder.com/100',
    title: 'Telemedicine app improving healthcare access',
    location: 'Kenya',
    image: "https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2022/12/Patient-s-app.jpg",
    description: 'This app allows people in remote areas to connect with top doctors for real-time consultations.',
  },
  'Automotive': {
    logo: 'https://via.placeholder.com/100',
    title: 'Smart vehicle management system',
    location: 'Germany',
    image: "https://cdn.dribbble.com/userupload/8392224/file/original-c827d9112ea45a19f75180484ee55168.png?resize=400x0",
    description: 'An advanced vehicle tracking system that improves fleet management and safety for drivers.',
  },
  'Logistics': {
    logo: 'https://via.placeholder.com/100',
    title: 'AI-powered logistics platform',
    location: 'Australia',
    image: "https://multiqos.com/blogs/wp-content/uploads/2022/08/Cargo-Transportation-App-Design.jpg",
    description: 'Optimizing delivery routes and improving logistics efficiency with AI-driven solutions.',
  },
  'Telecom': {
    logo: 'https://via.placeholder.com/100',
    title: 'Next-gen telecom app for seamless communication',
    location: 'Canada',
    image: "https://i.pinimg.com/736x/6f/ec/40/6fec40bd7560eab58e510e45163980d0.jpg",
    description: 'Bringing innovative communication services to users with real-time call optimization.',
  },
};

const SuccessStories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  return (
    <section className="flex flex-col justify-center items-end px-20 py-24 max-w-6xl mx-auto text-white bg-blend-normal max-md:px-5">
      <div className="flex flex-col w-full bg-blend-normal max-md:pb-24 max-md:max-w-full">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold leading-none text-white max-md:max-w-full max-md:text-4xl"
        >
          Successful app development stories
        </motion.h1>
        <div className="flex flex-col mt-16 w-full bg-blend-normal max-md:pb-24 max-md:mt-10 max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap gap-4 items-start pr-24 w-full text-lg leading-relaxed bg-blend-normal text-slate-600 max-md:pr-5">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-1.5 text-md bg-blend-normal rounded-full transition ${
                  activeCategory === category.name
                    ? 'bg-[#6430C2] text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                initial={activeCategory === category.name ? { scale: 1.05 } : { scale: 1 }}
                animate={activeCategory === category.name ? { scale: 1.05 } : { scale: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          <div className="mt-16 w-full max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
                <motion.article
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col grow items-start py-20 mt-6 w-full max-md:mt-10"
                >
                  <img
                    loading="lazy"
                    src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`}
                    alt="Story Logo"
                    className="object-contain rounded-full bg-blend-normal aspect-[2.45] w-[98px]"
                  />
                  <h2 className="flex flex-col self-stretch pr-1.5 mt-5 text-4xl font-medium leading-tight bg-blend-normal h-[140px]">
                    {stories[activeCategory].title}
                  </h2>
                  <div className="px-4 py-1.5 mt-9 text-sm text-black leading-relaxed bg-gray-200 bg-blend-normal rounded-[36px]">
                    {stories[activeCategory].location}
                  </div>
                  <p className="mt-4 text-white">{stories[activeCategory].description}</p>
                </motion.article>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full"
              >
                <img
                  src={`${stories[activeCategory].image}`}
                  alt="User"
                  className="object-cover w-full h-full rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
