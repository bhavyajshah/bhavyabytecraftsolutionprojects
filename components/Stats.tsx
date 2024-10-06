import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Stats = ({ title, description, stats }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const numberAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: 'spring',
      },
    }),
  };

  return (
    <div ref={ref}>
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl transition duration-200 backdrop-blur-lg py-10 px-10 xl:py-16 xl:px-20 flex items-center justify-between flex-col gap-16 lg:flex-row"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.25)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div className="w-full lg:w-60">
              <h2 className="font-manrope text-4xl font-bold text-white mb-4 text-center lg:text-left">
                {title}
              </h2>
              <p className="text-sm text-white leading-6 text-center lg:text-left">
                {description}
              </p>
            </div>
            <div className="w-full lg:w-4/5">
              <div className="flex flex-col flex-1 gap-10 lg:gap-0 lg:flex-row lg:justify-between">
                {stats.map((stat, index) => (
                  <div key={index} className="block">
                    <motion.div
                      custom={index}
                      initial="hidden"
                      animate={controls}
                      variants={numberAnimation}
                      className="font-manrope font-bold text-4xl text-white mb-3 text-center lg:text-left"
                    >
                      {stat.value}
                    </motion.div>
                    <span className="text-white text-center block lg:text-left">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
