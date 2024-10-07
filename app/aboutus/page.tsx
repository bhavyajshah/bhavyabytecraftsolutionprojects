import Handbook from "@/components/AboutUsSection/Handbook";
import Hero from "@/components/AboutUsSection/Hero";
import Team from "@/components/AboutUsSection/Team";
import Testimonials from "@/components/AboutUsSection/Testimonials";
import Values from "@/components/AboutUsSection/Values";
import Vision from "@/components/AboutUsSection/Vision";
import React from "react";

const page = () => {
  return <div>
     <Hero />
      <Vision />
      <Handbook />
      <Values />
      <Team />
      <Testimonials />
  </div>
};

export default page;
