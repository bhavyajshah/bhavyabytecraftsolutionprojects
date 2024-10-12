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
import { Metadata } from 'next';
import TechnologySection from '@/components/DetailServices/TechnologySection';
interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = params;
  const content = contentData[slug];

  if (!content) {
    return {
      title: "Page Not Found - Byte Craft Solutions",
      description: "The page you are looking for does not exist. Please check the URL or return to the homepage.",
    };
  }

  
  return {
    title: `${content.metadata.title} - Byte Craft Solutions`,
    description: content.metadata.description,
    openGraph: {
      title: `${content.metadata.title} - Byte Craft Solutions`,
      description: content.metadata.description,
      url: `https://www.bytecraftsolutions.com/services/${slug}`,
      type: 'website',
    },
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
      <Stats
        title={content.stats.title}
        description={content.stats.description}
        stats={content.stats.stats}
      />

      <TechnologySection
        title={content.technologyused.title}
        subtitle={content.technologyused.description}
        technologies={
          content.technologyused.technologylist
        }
      />


      <Feature
        title={content.feature.title}
        subtitle={content.feature.description}
        features={content.feature.features.map((feature) => ({
          icon: <feature.icon />,
          title: feature.title,
          description: feature.description,
        }))}
      />

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

      <Testimonials
        title={content.testimonial.title}
        subTitle={content.testimonial.description}
        testimonials={content.testimonial.testimonials}
      />

      <Expertise
        title={content.expertiseTitle}
        subtitle={content.expertiseSubtitle}
      />
      <Contact />
    </Layout>
  );
};

export default ServicePage;
