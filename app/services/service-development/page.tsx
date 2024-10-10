import Hero from '@/components/DetailServices/Hero'
import StatsServices from '@/components/DetailServices/StatsServices';
import FeatureSection from '@/components/DetailServices/testing';
import React from 'react'

const page = () => {
  const Data =  {
      title: "Innovative",
      subTitle: "Web Solutions for Your Business",
      description:
        "We create cutting-edge web applications tailored to your unique business needs. Our expert team delivers innovative solutions that drive growth and enhance user experience.",
      image:
        "https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_640.png",
      headline: "#1 Web Development Company",
      primaryButton: {
        text: "Explore Our Services",
        link: "/services",
      },
      valuePropositions: [
        "Trusted by 500+ Businesses",
        "Cutting-Edge Technologies",
        "Tailored Solutions",
        "Proven Results",
      ],
    }

  return (
    <div>
          <Hero
        heroImage={"https://lottie.host/embed/87b3fac6-785a-45dc-9e01-bef891a2f8ba/fqJVrVg835.json"}
        title={Data.title}
        subTitle={Data.subTitle}
        description={Data.description}
        primaryButton={{
          text: Data.primaryButton.text,
          link: Data.primaryButton.link,
        }}
        headline={Data.headline}
        valuePropositions={Data.valuePropositions}
      />
    <StatsServices/>
    <FeatureSection/>
    </div>
  )
}

export default page