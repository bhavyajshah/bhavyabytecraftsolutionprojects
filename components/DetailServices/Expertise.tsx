"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { expertiseData } from "../data/Data";

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

export const DummyContent = ({ description }) => {
  return (
    <>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mb-4">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {description}
        </span>
      </p>
      <Image
        src="https://assets.aceternity.com/macbook.png"
        alt="Macbook mockup"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </>
  );
};

