import React from "react";
import { Carousel, Card } from "@/ui/apple-cards-carousel";
import { expertiseData } from "../data/Data";

export function Expertise({ title }) {
  const cards = expertiseData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full max-w-6xl mx-auto py-20">
    <h1  className="text-6xl font-bold leading-none text-white max-md:max-w-full max-md:text-4xl mb-8 text-start">{title}</h1>
      <Carousel items={cards} />
    </div>
  );
}
