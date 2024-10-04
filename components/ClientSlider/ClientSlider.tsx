'use client'
import React, { useState, useRef, useEffect } from "react";

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
      'the principle of providing accurate, factual, and actionable information, AFTRDRK takes an adversary-first approach to maximize the context that surrounds the events leading up to and during an intrusion. We firmly believe that in order to understand "why?", "what?", "how?" – you need to understand "who?"',
    website: "https://aftrdrk.com",
  },
  {
    name: "Digital Asset Redemption",
    logo: 'DAR.jpg',
    description:
      "The DAR Team goes where others won't -- to understand and navigate the harsh reality of the cyber extortion economy. Powered by AFTRDRK's investigative and intelligence capabilities, The DAR Team helps global organizations defend, prepare, and respond outside the boundaries of conventional cyber defenses.",
    website: "https://www.digitalassetredemption.com/",
  },
  {
    name: "Educait",
    logo: 'EducaitC.png',
    description:
      "The Magic of AI-Powered Education, Our Approach to AI Empowerment",
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
      "Fimeal.com is a platform for the users to cook and sell food to anyone using your cooking skill",
    website: "https://fimeal.com/",
  },
];

const ClientLogo: React.FC<{ client: Client }> = ({ client }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative mx-6 flex-shrink-0 inline-flex justify-center items-center"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <a href={client.website} target="_blank" rel="noopener noreferrer">
        <div className="w-48 h-28 relative overflow-hidden">
          <img
            src={client.logo}
            alt={client.name}
            className="inset-0 w-full h-full object-contain"
          />
        </div>
      </a>
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-gray-800 text-white text-xs rounded shadow-lg max-w-xs">
          {client.description}
        </div>
      )}
    </div>
  );
};

const TrustedClients: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 2;
    const scrollInterval = 20;

    const scroll = () => {
      if (isHovered) return;
      scrollAmount += scrollStep;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const scrollTimer = setInterval(scroll, scrollInterval);

    return () => clearInterval(scrollTimer);
  }, [isHovered]);

  return (
    <section className="pt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl text-white font-bold mb-2 text-center">Trusted Clients</h2>
        <p className="text-center text-white mb-8">
          We&apos;re proud to work with some of the most innovative companies in the world.
        </p>
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div ref={scrollRef} className="flex overflow-x-hidden">
            <div className="flex gap-x-12 animate-scroll">
              {clientsData.concat(clientsData).map((client, index) => (
                <ClientLogo key={index} client={client} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
