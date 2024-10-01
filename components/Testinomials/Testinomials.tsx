"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] my-16 items-center justify-center relative overflow-hidden">
      <div className="text-center" style={{ visibility: "visible" }}>
        <h2 className="text-white mb-4 text-2xl font-extrabold sm:text-4xl xl:text-5xl">
          What our clients say about us
        </h2>
        <p className="max-w-[714px] mx-auto mb-5 font-medium text-zinc-300">
          At Byte Craft Systems, we offer a comprehensive suite of software
          solutions designed to empower your business.
        </p>
      </div>
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Working with Byte Craft Systems was a seamless experience. Their team transformed our ideas into a functional software solution with professionalism.",
    name: "John Doe",
    avatar: "https://ai-tool-tailwind.preview.uideck.com/images/user-08.png",
    rating: 5,
    designation: "CEO, Tech Innovators",
  },
  {
    quote:
      "The development team at Byte Craft Systems exceeded our expectations with their attention to detail and commitment to delivering a top-quality product.",
    name: "Jane Smith",
    avatar: "https://ai-tool-tailwind.preview.uideck.com/images/user-08.png",
    rating: 4,
    designation: "Product Manager, NextGen Solutions",
  },
  {
    quote:
      "Byte Craft Systems provided excellent service and technical support throughout the entire development process. We are very satisfied with the results.",
    name: "Mark Johnson",
    avatar: "https://ai-tool-tailwind.preview.uideck.com/images/user-08.png",
    rating: 5,
    designation: "CTO, Visionary Labs",
  },
  {
    quote:
      "The team was responsive and adapted to our evolving needs during the project. I highly recommend Byte Craft Systems for software development.",
    name: "Emily Davis",
    avatar: "https://ai-tool-tailwind.preview.uideck.com/images/user-08.png",
    rating: 4,
    designation: "Founder, Davis Enterprises",
  },
  {
    quote:
      "From start to finish, Byte Craft Systems demonstrated their expertise and delivered a solution that surpassed our expectations.",
    name: "Michael Lee",
    avatar: "https://ai-tool-tailwind.preview.uideck.com/images/user-08.png",
    rating: 5,
    designation: "Operations Director, Synergy Works",
  },
];
