
'use client'
// FAQItem.tsx
import { useState, useRef } from "react";
import { motion } from "framer-motion";

interface FAQItemProps {
  faq: {
    q: string;
    a: string;
  };
  idx: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, idx }) => {
  const answerElRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className="space-y-3 mt-5 overflow-hidden border-b border-gray-600"
      key={idx}
      onClick={handleToggle}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-white font-medium">
        {faq.q}
        {isOpen ? (
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
        ref={answerElRef}
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <div className="p-4 bg-gray-800 rounded-md">
          <p className="text-gray-300">{faq.a}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FAQItem;

