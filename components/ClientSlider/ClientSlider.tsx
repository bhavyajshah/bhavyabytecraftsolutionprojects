'use client'
import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

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
    <div className="relative mx-4 inline-flex justify-center items-center">
      <a href={client.website} target="_blank" rel="noopener noreferrer">
        <div className="w-28 h-14 relative overflow-hidden bg-white p-2">
          <img
            src={client.logo}
            alt={client.name}
            className="w-full h-full object-contain"
          />
        </div>
      </a>
    </div>
  );
};

const TrustedClients: React.FC = () => {
  return (
    <section className="pt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl text-white font-bold mb-2 text-center">Trusted Clients</h2>
        <p className="text-center text-white mb-8">
          We&apos;re proud to work with some of the most innovative companies in the world.
        </p>
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
        >
          {clientsData.concat(clientsData).map((client, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <ClientLogo client={client} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrustedClients;
