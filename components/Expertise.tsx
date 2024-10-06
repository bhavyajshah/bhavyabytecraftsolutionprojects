"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Expertise({ title, subtitle }) {
  const cards = expertiseData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="text-white sm:text-4xl text-2xl font-extrabold text-center mb-4">
        {title}
      </h2>
      <p className="text-gray-300 text-center mb-8">
        {subtitle}
      </p>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ description }) => {
  return (
    <>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-4">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {description}
        </span>
      </p>
      <Image
        src="https://assets.aceternity.com/macbook.png"
        alt="Macbook mockup from Aceternity UI"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </>
  );
};

const expertiseData = [
  {
    category: "Farming",
    title: "Revolutionizing Agriculture with Web Development",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent description="We build digital tools for modern farmers to enhance productivity and manage resources efficiently." />,
  },
  {
    category: "Electronics",
    title: "Innovative Solutions for the Electronics Industry",
    src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=3578&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent description="We create e-commerce platforms and inventory management systems tailored for electronics businesses." />,
  },
  {
    category: "Ecommerce",
    title: "Building Scalable Ecommerce Platforms",
    src: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent description="We design high-performance ecommerce platforms that enhance user experience and increase conversions." />,
  },
  {
    category: "Healthcare",
    title: "Empowering Healthcare with Technology",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent description="We create patient management systems and telemedicine platforms for the healthcare industry." />,
  },
  {
    category: "Education",
    title: "Digital Transformation in Education",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent description="We develop e-learning platforms and content management systems for the education sector." />,
  },
  {
    category: "Real Estate",
    title: "Building Digital Tools for Real Estate",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent description="We create property management and listing platforms for the real estate industry." />,
  },
];

