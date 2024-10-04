'use client'
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";


const App: React.FC = () => {
  return (
    <Layout>
      <Hero heroImage="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_640.png" />
      <Services />
      <Portfolio />
      <Testimonials />
      <Expertise />
      <Contact />
    </Layout>
  );
};

export default App;
