"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { testimonials } from "../data/Data";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-blue-50 dark:bg-transparent my-16 items-center justify-center relative overflow-hidden">
      <div className="text-center px-4 md:px-6" style={{ visibility: "visible" }}>
        <h2 className="text-blue-900 dark:text-white mb-4 text-2xl font-extrabold sm:text-4xl xl:text-5xl transition-colors">
          What our clients say about us
        </h2>
        <p className="max-w-[714px] mx-auto mb-5 font-medium text-blue-700 dark:text-zinc-300">
          At Byte Craft Systems, we offer a comprehensive suite of software
          solutions designed to empower your business.
        </p>
      </div>
      <div className="w-full overflow-hidden">
        <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}