import BlogSection from "@/components/BlogSection/BlogSection";
import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog - Byte Craft Solutions | Insights on IT Services and Innovation",
  description: "Stay updated with the latest news, insights, and trends in IT services, software development, and digital transformation. Read our expert opinions and tips.",
  keywords: ["Byte Craft Solutions Blog", "IT Services Blog", "Software Development", "Digital Transformation", "Technology Trends", "Tech News"],
  openGraph: {
    title: "Blog - Byte Craft Solutions",
    description: "Explore Byte Craft Solutions' blog for insights on IT services, software development, and emerging technology trends.",
    url: "https://www.bytecraftsolutions.com/blog",
    type: "website",
  },
};

const BlogPage = () => {
  return (
    <div className="my-20">
      <BlogSection />
    </div>
  );
};

export default BlogPage;
