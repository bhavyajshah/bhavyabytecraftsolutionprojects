import type { Metadata } from 'next'
import Hero from '@/components/DetailServices/Hero'
import { Expertise } from '@/components/DetailServices/Expertise';
import Contact from '@/components/DetailServices/Contact';
import { Expertises, stats, tabData } from '@/Servicesdata/ProjectManagement';
import Stats from '@/components/DetailServices/CustomSoftwareDevelopment/Stats';
import { Data } from '@/Servicesdata/DevopsServices';
import WebDevelopmentOfferings from '@/components/DetailServices/WebDevelopmentOfferings';
import Certificates from '@/components/DetailServices/ProjectManagement/Certificate';
import ProjectPricing from '@/components/DetailServices/ProjectManagement/ProjectPricing';
import ProjectServices from '@/components/DetailServices/ProjectManagement/ProjectServices';
import ProjectStack from '@/components/DetailServices/ProjectManagement/ProjectStack';

export const metadata: Metadata = {
  title: 'DevOps Services - Streamline Your Development and Operations',
  description: 'Our DevOps Services enhance collaboration between development and operations teams, ensuring efficient software delivery and robust infrastructure management.',
  keywords: ['DevOps services', 'continuous integration', 'infrastructure automation', 'DevOps consulting', 'cloud services', 'software development'],
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
      <Certificates />
      <WebDevelopmentOfferings title={"Our DevOps Special Features"} tabData={tabData} />
      <ProjectStack />
      <ProjectServices />
      <ProjectPricing />
      <Expertise title={Expertises.expertiseTitle} />
      <Contact />
    </>
  )
}

export default Page;
