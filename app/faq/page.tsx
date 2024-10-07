import FAQ from "@/components/FAQ/FAQ";

const faqsList = [
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

const MyPage = () => {
  return (
    <FAQ
      faqsList={faqsList}
      title="Frequently Asked Questions"
      description="Have more questions? Check out our FAQs or get in touch with us for further assistance."
    />
  );
};

export default MyPage;
