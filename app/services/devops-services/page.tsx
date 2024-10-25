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

const page = () => {
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
      <ProjectServices />
      <ProjectPricing />
      <Expertise
        title={Expertises.expertiseTitle}
      />
      <Contact />
    </>
  )
}

export default page