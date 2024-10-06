import FAQItem from "@/components/FAQ/FAQ";

interface FAQ {
  q: string;
  a: string;
}

const FAQ: React.FC = () => {
  const faqsList: FAQ[] = [
    {
      q: "What services does your software agency offer?",
      a: "We offer custom software development, mobile app development, web development, UI/UX design, and cloud solutions tailored to your business needs.",
    },
    {
      q: "What industries do you specialize in?",
      a: "Our team has expertise in various industries including healthcare, finance, education, and e-commerce, ensuring solutions that meet specific industry standards.",
    },
    {
      q: "What is the process of working with your agency?",
      a: "Our process involves an initial consultation, project scoping, development sprints, rigorous testing, and post-launch support to ensure seamless delivery.",
    },
    {
      q: "How long does a typical project take?",
      a: "Project timelines vary based on complexity, but most projects are completed within 3-6 months, including planning, development, and testing phases.",
    },
    {
      q: "What technologies do you work with?",
      a: "We specialize in a wide range of technologies including JavaScript frameworks (React, Node.js), mobile technologies (Flutter, Swift), and cloud platforms (AWS, Azure).",
    },
  ];

  return (
    <section className="leading-relaxed max-w-screen-xl my-24 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-4xl text-white font-semibold">Frequently Asked Questions</h1>
        <p className="text-gray-400 max-w-lg mx-auto text-md">
          Have more questions? Check out our FAQs or get in touch with us for further assistance.
        </p>
      </div>

      <div className="mt-14 max-w-2xl mx-auto space-y-6">
        {faqsList.map((faq, idx) => (
          <FAQItem key={idx} faq={faq} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
