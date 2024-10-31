"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

interface Testimonial {
  quote: string;
  name: string;
  avatar: string;
  rating: number;
  designation: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: Testimonial[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[300px] md:w-[350px] lg:w-[450px] max-w-full relative rounded-2xl border flex-shrink-0 border-blue-100 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg px-6 py-4 md:px-8 md:py-6 transition-colors"
            key={idx}
          >
            <blockquote>
              <div className="relative z-20 mb-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-blue-50 dark:bg-slate-700">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold text-blue-900 dark:text-gray-100">
                    {item.name}
                  </span>
                  <span className="text-sm text-blue-600 dark:text-gray-400">
                    {item.designation}
                  </span>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={cn(
                      "h-5 w-5",
                      i < item.rating
                        ? "text-yellow-400"
                        : "text-blue-100 dark:text-gray-600"
                    )}
                  />
                ))}
              </div>
              <p className="mt-4 text-blue-800 dark:text-gray-100 text-sm md:text-base">
                {item.quote}
              </p>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};