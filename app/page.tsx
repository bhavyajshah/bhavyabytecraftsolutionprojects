import AboutUsSection from "@/components/AboutUsSection/AboutUsSection";
import BlogSection from "@/components/BlogSection/BlogSection";
import { CaseStudies } from "@/components/CaseStudies/CaseStudies";
import ClientSlider from "@/components/ClientSlider/ClientSlider";
import DetailedSection from "@/components/DetailedSection/DetailedSection";
import FeaturesSection from "@/components/FeatureSection/FeatureSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import RequestaQuote from "@/components/RequestaQuote/RequestaQuote";
import Technology from "@/components/Technology/Technology";
import { InfiniteMovingCardsDemo } from "@/components/Testinomials/Testinomials";
import { TimelineDemo } from "@/components/Timeline/Timeline";
import { WhyChooseByteCraftSolutions } from "@/components/WhyChooseByteCraftSolutions/WhyChooseByteCraftSolutions";
import React from "react";
import type { Metadata } from 'next'
import { getBlogPosts } from "@/lib/api";

export const metadata: Metadata = {
  title: 'ByteCraft Solutions - Leading IT Software Services',
  description: 'ByteCraft Solutions is a leading IT software services provider, offering innovative and custom-tailored solutions to enhance your business efficiency.',
  keywords: ['ByteCraft Solutions', 'IT software services', 'technology solutions', 'custom software development', 'business solutions', 'IT consulting'],
  viewport: 'width=device-width, initial-scale=1.0',
};

const page = async () => {
   const posts = await getBlogPosts();
  return (
    <>
      <main>
        <HeroSection />
        <ClientSlider />
        <DetailedSection />
        <WhyChooseByteCraftSolutions />
        <FeaturesSection showMoreAction="/services" showAll={false}  showMoreLoad={false} />
        <AboutUsSection />
        <Technology />
        <CaseStudies />
        <TimelineDemo />
        <InfiniteMovingCardsDemo />
     <BlogSection initialPosts={posts} />
        <RequestaQuote />
      </main>
    </>
  );
};

export default page;
