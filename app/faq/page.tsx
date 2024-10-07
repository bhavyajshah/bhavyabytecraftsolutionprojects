import FAQ from "@/components/FAQ/FAQ";
import { faqsList } from "@/components/data/Data";
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
    <FAQ
      faqsList={faqsList}
      title="Frequently Asked Questions"
      description="Have more questions? Check out our FAQs or get in touch with us for further assistance."
    />
  );
};

export default FAQPage;
