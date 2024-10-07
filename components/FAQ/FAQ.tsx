'use client';
import { useState } from "react";
import { motion } from "framer-motion";

interface FAQ {
  q: string;
  a: string;
}

interface FAQProps {
  faqsList: FAQ[];
  title: string;
  description: string;
}

const FAQ: React.FC<FAQProps> = ({ faqsList, title, description }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="leading-relaxed max-w-screen-xl mt-40 mb-10 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-4xl text-white font-semibold">{title}</h1>
        <p className="text-gray-400 max-w-lg mx-auto text-md">{description}</p>
      </div>

      <div className="mt-14 max-w-4xl mx-auto space-y-6">
        {faqsList.map((faq, idx) => (
          <motion.div
            className="space-y-3 mt-5 overflow-hidden border-b border-gray-600"
            key={idx}
            onClick={() => handleToggle(idx)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-white font-medium">
              {faq.q}
              {openIndex === idx ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              )}
            </h4>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={openIndex === idx ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div className="p-4 bg-gray-800 rounded-md">
                <p className="text-gray-300">{faq.a}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
