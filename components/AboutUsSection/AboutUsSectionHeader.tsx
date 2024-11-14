'use client';
import { FC, useState, useEffect, useRef, memo } from "react";
import dynamic from 'next/dynamic';
import animationData1 from "../../public/Animation - 1728337130984.json";
import animationData2 from "../../public/Animation - 1728339340716.json";

interface AboutSectionProps {
  heading: string;
  description: string;
  reverse?: boolean;
  useLottieFile?: 'animation1' | 'animation2';
}

const LazyLottie = dynamic(() => import("lottie-react"), { ssr: false });

const AboutUsSectionHeader: FC<AboutSectionProps> = memo(({ heading, description, reverse, useLottieFile }: any) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animationData = useLottieFile === 'animation1' ? animationData1 : animationData2;

  return (
    <section ref={sectionRef} className="py-14 lg:pt-14 relative dark:bg-transparent">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
          {reverse ? (
            <>
              <div className="flex items-center">
                <div className="data w-full">
                  <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-neutral-800 dark:text-white mb-9 max-lg:text-center">
                    {heading}
                  </h2>
                  <p className="font-normal text-xl leading-8 text-neutral-600 dark:text-neutral-300 max-lg:text-center max-w-2xl mx-auto">
                    {description}
                  </p>
                </div>
              </div>
              <div className="img-box">
                {isInView && (
                  <LazyLottie
                    animationData={animationData}
                    className="w-full h-auto"
                    loop={true}
                    autoplay={true}
                  />
                )}
              </div>
            </>
          ) : (
            <>
              <div className="img-box">
                {isInView && (
                  <LazyLottie
                    animationData={animationData}
                    className="w-full h-auto"
                    loop={true}
                    autoplay={true}
                  />
                )}
              </div>
              <div className="flex items-center">
                <div className="data w-full">
                  <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-neutral-800 dark:text-white mb-9 max-lg:text-center">
                    {heading}
                  </h2>
                  <p className="font-normal text-xl leading-8 text-neutral-600 dark:text-neutral-300 max-lg:text-center max-w-2xl mx-auto">
                    {description}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
});

AboutUsSectionHeader.displayName = 'AboutUsSectionHeader';

export default AboutUsSectionHeader;