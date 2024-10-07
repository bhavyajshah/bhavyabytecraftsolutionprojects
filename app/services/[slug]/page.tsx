'use client';
import { notFound } from 'next/navigation';
import Feature from '@/components/DetailServices/Feature';
import Layout from '@/components/DetailServices/Layout';
import Hero from '@/components/DetailServices/Hero';
import WebDevelopmentWork from '@/components/DetailServices/Portfolio';
import Testimonials from '@/components/DetailServices/Testimonials';
import { contentData } from '@/components/data/contentData';
import Contact from '@/components/DetailServices/Contact';
import Stats from '@/components/DetailServices/Stats';
import { Expertise } from '@/components/DetailServices/Expertise';
import FAQ from '@/components/FAQ/FAQ';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

const ServicePage = ({ params }: ServicePageProps) => {
  const { slug } = params;
  const content = contentData[slug];

  if (!content) {
    return notFound();
  }

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        heroImage={content.hero.image}
        title={content.hero.title}
        subTitle={content.hero.subTitle}
        description={content.hero.description}
        primaryButton={{
          text: content.hero.primaryButton.text,
          link: content.hero.primaryButton.link,
        }}
        headline={content.hero.headline}
        valuePropositions={content.hero.valuePropositions}
      />

      {/* Stats Section */}
      <Stats
        title={content.stats.title}
        description={content.stats.description}
        stats={content.stats.stats}
      />

      {/* Features Section */}
      <Feature
        title={content.feature.title}
        subtitle={content.feature.description}
        features={content.feature.features.map((feature) => ({
          icon: <feature.icon />,
          title: feature.title,
          description: feature.description,
        }))}
      />

      {/* Past Works Section */}
      <WebDevelopmentWork
        works={content.pastWork.pastWorks}
        sectionTitle={content.pastWork?.title}
        sectionSubtitle={content.pastWork.description}
      />

      <FAQ
        faqsList={content.process.processqna}
        title={content.process.title}
        description={content.process.description}
      />

      {/* Testimonials Section */}
      <Testimonials
        title={content.testimonial.title}
        subTitle={content.testimonial.description}
        testimonials={content.testimonial.testimonials}
      />
      <Expertise
        title={content.expertiseTitle}
        subtitle={content.expertiseSubtitle}
      />
      {/* Contact Section */}
      <Contact />
    </Layout>
  );
};

export default ServicePage;
