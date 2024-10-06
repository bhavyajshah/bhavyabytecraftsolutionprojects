
"use client";
import React from "react";
import Image from "next/image";

interface ExpertiseCardProps {
  card: {
    category: string;
    title: string;
    src: string;
    content: string;
  };
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ card }) => {
  const { category, title, src, content } = card;

  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <h3 className="text-lg sm:text-2xl font-bold text-neutral-700 dark:text-neutral-200 text-center mb-4">
        {title}
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto text-center">
        {category}
      </p>
      <div className="my-6">
        <Image
          src={src}
          alt={title}
          height={500}
          width={500}
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans text-center">
        {content}
      </p>
    </div>
  );
};

export default ExpertiseCard;
