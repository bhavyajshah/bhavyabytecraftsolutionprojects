import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { expertiseData } from "../data/Data";

export function Expertise({ title }) {
  const cards = expertiseData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (

    <Carousel items={cards} title={title} />

  );
}
