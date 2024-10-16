"use client";
import React from "react";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";
import { testimonials } from "../data/Data";

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

