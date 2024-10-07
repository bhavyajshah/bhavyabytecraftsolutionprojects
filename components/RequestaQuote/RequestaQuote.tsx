"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const RequestaQuote = () => {
  return (
    <div>
      <section className="relative py-16 lg:py-24">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 relative">
          <motion.div
            initial={{ y: -150, x: 150, opacity: 0, rotate: 15 }}
            animate={{ y: -40, x: -80, opacity: 1, rotate: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute -top-36 -right-20 w-64 lg:w-72 xl:w-80 z-50"
          >
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/customer-service-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--helpline-support-digital-marketing-pack-business-illustrations-4379020.png"
              alt="3D Support Illustration"
              className="w-full h-auto drop-shadow-2xl"
              style={{ transform: "rotate(10deg)" }}
            />
          </motion.div>

          {/* CTA Box */}
          <div className="cta-box-gradient bg-dark rounded-[30px] relative overflow-hidden px-6 py-20 lg:py-24 z-999 shadow-lg">
            <span className="absolute bottom-0 left-0 -z-1">
              <img
                src="https://ai-tool-tailwind.preview.uideck.com/images/grid.svg"
                alt="grid"
              />
            </span>
            <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
              <span className="absolute left-1/2 bottom-0 -translate-x-1/2 -z-1">
                <img
                  src="https://ai-tool-tailwind.preview.uideck.com/images/blur-22.svg"
                  alt="blur"
                  className="max-w-none"
                />
              </span>
              <span className="absolute left-1/2 bottom-0 -translate-x-1/2 -z-1">
                <img
                  src="https://ai-tool-tailwind.preview.uideck.com/images/blur-23.svg"
                  alt="blur"
                  className="max-w-none"
                />
              </span>
              <span className="absolute lg:block hidden left-1/2 bottom-0 -translate-x-1/2 -z-1">
                <img
                  src="https://ai-tool-tailwind.preview.uideck.com/images/blur-24.svg"
                  alt="blur"
                  className="max-w-none"
                />
              </span>
            </div>

            {/* Stars Animation */}
            <motion.div
              className="max-w-[482px] w-full h-60 overflow-hidden absolute -z-1 -bottom-25 left-1/2 -translate-x-1/2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <div className="stars"></div>
              <div className="stars2"></div>
            </motion.div>

            {/* Content with improved spacing */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-white mb-6 text-3xl lg:text-4xl xl:text-5xl font-extrabold">
                Request a Quote
              </h2>
              <p className="max-w-[700px] mx-auto text-base lg:text-lg text-gray-300 font-medium mb-12 lg:mb-14">
                Ready to start your project with us? Request a quote today and
                let us help you bring your ideas to life.
              </p>
              <Link
                href="/pricing"
                className="hero-button-gradient inline-flex rounded-lg py-3 px-8 lg:px-10 text-white font-semibold text-lg lg:text-xl ease-in duration-300 hover:opacity-80 shadow-lg"
              >
                Let&apos;s Talk
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestaQuote;
