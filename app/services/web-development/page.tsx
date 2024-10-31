import type { Metadata } from 'next'
import Hero from '@/components/DetailServices/Hero'
import StatsServices from '@/components/DetailServices/StatsServices';
import { Expertise } from '@/components/DetailServices/Expertise';
import WebDevelopmentWork from '@/components/DetailServices/Portfolio';
import ByteCraftReviews from '@/components/DetailServices/FAQAnimation';
import Feature from '@/components/DetailServices/Feature';
import Contact from '@/components/DetailServices/Contact';
import { Data, Expertises, FaqData, feature, pastWork, reviews, stats, tabData } from '@/Servicesdata/WebDevelopment';
import WebDevelopmentOfferings from '@/components/DetailServices/WebDevelopmentOfferings';
import FAQ from '@/components/FAQ/FAQ';
import TechnologySection from '@/components/DetailServices/WebDevelopment/WebTechnologySection';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Web Development Services - Building Robust Digital Solutions',
  description: 'Explore our web development services tailored to meet your business needs with cutting-edge technologies and expert solutions.',
  keywords: ['web development', 'custom websites', 'web applications', 'responsive design', 'eCommerce solutions'],
};

const page = () => {
  return (
    <div>
      <Hero
        heroImage={Data.image}
        title={Data.title}
        subTitle={Data.subTitle}
        description={Data.description}
        primaryButton={{
          text: Data.primaryButton.text,
          link: Data.primaryButton.link,
        }}
        headline={Data.headline}
        valuePropositions={Data.valuePropositions}
      />

      <StatsServices
        title={stats?.title}
        stats={stats?.statsCard}
      />
      <WebDevelopmentOfferings title={"Web Development Offerings"} tabData={tabData} />
      <TechnologySection title={"Technologies for Web Development"} />
      <Feature
        title={feature.title}
        features={feature.features.map((feature) => ({
          icon: <feature.icon />,
          title: feature.title,
          description: feature.description,
        }))}
      />
      <FAQ title={"Web Development Delivery Cycle"} FaqData={FaqData} />
      <WebDevelopmentWork
        works={pastWork.pastWorks}
        sectionTitle={pastWork?.title}
      />
      <ByteCraftReviews reviews={reviews} />
      <Expertise
        title={Expertises.expertiseTitle}
      />
      <Contact />
    </div>
  )
}

export default page;
