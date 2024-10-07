import ContactSection from "@/components/ContactSection/ContactSection";
import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - Byte Craft Solutions | Get in Touch",
  description: "Need help with IT services or software development? Contact Byte Craft Solutions today to discuss your needs and find the right digital solutions.",
  keywords: ["Contact Byte Craft Solutions", "IT Services Contact", "Software Development Support", "Technology Consulting", "Get in Touch"],
  openGraph: {
    title: "Contact Us - Byte Craft Solutions",
    description: "Reach out to Byte Craft Solutions for any inquiries regarding IT services, software development, and digital transformation solutions.",
    url: "https://www.bytecraftsolutions.com/pricing",
    type: "website",
  },
};

const ContactPage = () => {
  return (
    <div className="mt-32">
      <ContactSection />
    </div>
  );
};

export default ContactPage;
