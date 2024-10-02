import AboutUsSection from "@/components/AboutUsSection/AboutUsSection";
import BlogSection from "@/components/BlogSection/BlogSection";
import { CaseStudies } from "@/components/CaseStudies/CaseStudies";
import ClientSlider from "@/components/ClientSlider/ClientSlider";
import DetailedSection from "@/components/DetailedSection/DetailedSection";
import FeaturesSection from "@/components/FeatureSection/FeatureSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import RequestaQuote from "@/components/RequestaQuote/RequestaQuote";
import { InfiniteMovingCardsDemo } from "@/components/Testinomials/Testinomials";
import { TimelineDemo } from "@/components/Timeline/Timeline";
import { WhyChooseByteCraftSolutions } from "@/components/WhyChooseByteCraftSolutions/WhyChooseByteCraftSolutions";
import React from "react";

const page = () => {
  return (
    <>
      <main>
        <HeroSection />
        <ClientSlider />
        <DetailedSection />
        <WhyChooseByteCraftSolutions />
        <FeaturesSection />
        <AboutUsSection />
        <CaseStudies />
        <TimelineDemo />
        <InfiniteMovingCardsDemo />
        <BlogSection />
        <RequestaQuote />
      </main>
    </>
  );
};

export default page;
