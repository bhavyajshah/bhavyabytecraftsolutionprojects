
import React from "react";
import Layout from "./Layout";
import Hero from "./Hero";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Expertise from "./Expertise";
import Contact from "./Contact";

const App: React.FC = () => {
  return (
    <Layout>
      <Hero heroImage="http://b.io/ext_86-" />
      <Services />
      <Portfolio />
      <Testimonials />
      <Expertise />
      <Contact />
    </Layout>
  );
};

export default App;
