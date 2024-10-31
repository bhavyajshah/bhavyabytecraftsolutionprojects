'use client'

import React, { useEffect, useState } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Link from "next/link";

SwiperCore.use([Autoplay]);

interface Client {
  name: string;
  logo: string;
  description: string;
  website: string;
}

const clientsData: Client[] = [
  {
    name: "AFTRDRK",
    logo: 'Aftrdrk.svg',
    description:
      'The principle of providing accurate, factual, and actionable information, AFTRDRK takes an adversary-first approach to maximize the context that surrounds the events leading up to and during an intrusion.',
    website: "https://aftrdrk.com",
  },
  {
    name: "Digital Asset Redemption",
    logo: 'DAR.jpg',
    description:
      "The DAR Team goes where others won't -- to understand and navigate the harsh reality of the cyber extortion economy.",
    website: "https://www.digitalassetredemption.com/",
  },
  {
    name: "Educait",
    logo: 'EducaitC.png',
    description:
      "The Magic of AI-Powered Education, Our Approach to AI Empowerment.",
    website: "https://www.educait.co/",
  },
  {
    name: "VivaDrive",
    logo: 'Vivadrive.png',
    description:
      "AI-driven fleet electrification. Seamlessly transform your fleet, from A to Z, with simple, data-driven, and step-by-step electrification.",
    website: "https://vivadrive.io/",
  },
  {
    name: "Fimeal",
    logo: 'Fimeal.png',
    description:
      "Fimeal.com is a platform for users to cook and sell food using their cooking skills.",
    website: "https://fimeal.com/",
  },
];

const ClientLogo: React.FC<{ client: Client }> = ({ client }) => {
  return (
    <div className="relative mx-4 inline-flex justify-center items-center group">
      <Link href={client.website} target="_blank" rel="noopener noreferrer">
        <div className="w-28 h-14 relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-2 group-hover:scale-105">
          <img
            src={client.logo}
            alt={client.name}
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </Link>
    </div>
  );
};

const TrustedClients: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="pt-12 bg-gradient-to-b from-gray-50 to-white dark:from-transparent dark:to-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2 text-center bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:text-white">
          Trusted Clients
        </h2>
        <p className="text-center text-gray-600 dark:text-white/80 mb-8 max-w-2xl mx-auto font-medium">
          We&apos;re proud to work with some of the most innovative companies in the world.
        </p>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white dark:from-[#030014] dark:via-transparent dark:to-[#030014] z-10 pointer-events-none"></div>
          <Swiper
            className="swiper-container"
            direction="horizontal"
            slidesPerView={5}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 15
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 25
              }
            }}
          >
            {clientsData.concat(clientsData).map((client, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <ClientLogo client={client} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;