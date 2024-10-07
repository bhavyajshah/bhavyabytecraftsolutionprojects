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
