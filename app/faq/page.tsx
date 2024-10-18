import { FaqData } from "@/Servicesdata/WebDevelopment";
import FAQ from "@/components/FAQ/FAQ";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FAQ - Byte Craft Solutions | Frequently Asked Questions",
  description: "Find answers to the most commonly asked questions about Byte Craft Solutions' IT services, software development, and more. Get in touch for further assistance.",
  keywords: ["Byte Craft Solutions FAQ", "IT Services FAQ", "Software Development Questions", "Technology Consulting", "Tech Solutions FAQ"],
  openGraph: {
    title: "FAQ - Byte Craft Solutions",
    description: "Explore our FAQ section to find answers to common questions about our IT services, development processes, and consulting solutions.",
    url: "https://www.bytecraftsolutions.com/faq",
    type: "website",
  },
};

const FAQPage = () => {
  return (

        <FAQ title={"Frequently Asked Questions"} FaqData={FaqData} />
  );
};

export default FAQPage;
