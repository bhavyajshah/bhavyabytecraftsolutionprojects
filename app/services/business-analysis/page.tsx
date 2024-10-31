import type { Metadata } from 'next'
import Hero from '@/components/DetailServices/Hero'
import { Expertise } from '@/components/DetailServices/Expertise';
import Contact from '@/components/DetailServices/Contact';
import { Data, Expertises, stats, stories, tabData } from '@/Servicesdata/BusinessAnalysis';
import Stats from '@/components/DetailServices/CustomSoftwareDevelopment/Stats';
import WebDevelopmentOfferings from '@/components/DetailServices/WebDevelopmentOfferings';
import BusinessAnalysisGrowth from '@/components/DetailServices/BusinessAnalysis/BusinessAnalysisGrowth';
import CostCalculator from '@/components/DetailServices/BusinessAnalysis/CostCalculator';
import SuccessStories from '@/components/DetailServices/MobileSuccessStories/SuccessStories';
import BusinessAnalysisRoles from '@/components/DetailServices/BusinessAnalysis/BusinessAnalysisRoles';

export const metadata: Metadata = {
  title: 'Business Analysis Services - Drive Growth with Strategic Insights',
  description: 'Our Business Analysis services help you leverage data and insights to drive strategic growth, improve efficiency, and make informed decisions.',
  keywords: ['Business Analysis', 'Strategic insights', 'Data analysis', 'Business growth', 'Efficiency improvement', 'Decision making'],
}

const Page = () => {
  return (
    <>
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
      <Stats stats={stats} title="Your Strategic Partner for Complex Business Analysis and Insights" />
      <WebDevelopmentOfferings title="Business Analysis Solutions" tabData={tabData} />
      <BusinessAnalysisGrowth />
      <BusinessAnalysisRoles />
      <SuccessStories stories={stories} title="Our Successful Business Analysis Projects" />
      <CostCalculator />
      <Expertise title={Expertises.expertiseTitle} />
      <Contact />
    </>
  )
}

export default Page;
