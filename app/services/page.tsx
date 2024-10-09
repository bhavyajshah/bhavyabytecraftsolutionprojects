import React from 'react';
import { Metadata } from 'next';
import FeaturesSection from '@/components/FeatureSection/FeatureSection';

export const metadata: Metadata = {
  title: "IT Services - Byte Craft Solutions | Expert IT Solutions",
  description: "Discover Byte Craft Solutions' range of IT services, including software development, IT consulting, cloud solutions, and digital transformation services for businesses.",
  keywords: ["Byte Craft Solutions IT Services", "Software Development", "IT Consulting", "Cloud Solutions", "Digital Transformation", "Technology Services"],
  openGraph: {
    title: "IT Services - Byte Craft Solutions",
    description: "Explore the expert IT services provided by Byte Craft Solutions, from custom software development to IT consulting and cloud solutions.",
    url: "https://www.bytecraftsolutions.com/it-services",
    type: "website",
  },
};

const ITServicesPage = () => {
  return (
    <div className="my-20">
      <FeaturesSection showAll={true} />

      </div>
  );
};

export default ITServicesPage;
