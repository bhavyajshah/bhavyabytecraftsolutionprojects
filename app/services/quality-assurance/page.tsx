import type { Metadata } from 'next'
import Hero from '@/components/DetailServices/Hero'
import { Expertise } from '@/components/DetailServices/Expertise';
import Contact from '@/components/DetailServices/Contact';
import Stats from '@/components/DetailServices/CustomSoftwareDevelopment/Stats';
import { Data, Expertises, stats, stories, tabData } from '@/Servicesdata/QualityAssurance';
import QAConsultation from '@/components/DetailServices/QualityAssurance/QAConsultation';
import GetContactSolution from '@/components/DetailServices/QualityAssurance/GetContactSolution';
import TestDevice from '@/components/DetailServices/QualityAssurance/TestDevice';
import WebDevelopmentOfferings from '@/components/DetailServices/WebDevelopmentOfferings';
import SuccessStories from '@/components/DetailServices/MobileSuccessStories/SuccessStories';

export const metadata: Metadata = {
  title: 'Quality Assurance Services - Ensuring Software Excellence',
  description: 'Deliver high-quality software with our comprehensive quality assurance services. We focus on testing and validating your applications for optimal performance.',
  keywords: ['quality assurance', 'software testing', 'QA services', 'test automation', 'application quality', 'performance testing'],
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
      <Stats stats={stats} title="Custom Project development partner for complex tech needs" />
      <WebDevelopmentOfferings title={"Quality Assurance Solutions"} tabData={tabData} />
      <TestDevice />
      <SuccessStories stories={stories} title={"Our Recent Quality Assurance Projects"} />
      <QAConsultation />
      <GetContactSolution />
      <Expertise title={Expertises.expertiseTitle} />
      <Contact />
    </>
  )
}

export default Page;
