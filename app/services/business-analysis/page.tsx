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
      <Stats stats={stats} title="Your Strategic Partner for Complex Business Analysis and Insights" />
      <WebDevelopmentOfferings title={"Business Analysis Solutions"} tabData={tabData} />
      <BusinessAnalysisGrowth />
      <BusinessAnalysisRoles />
      <SuccessStories stories={stories} title={"Our SuccessFull Business Analysis Project"} />
      <CostCalculator />
      <Expertise
        title={Expertises.expertiseTitle}
      />
      <Contact />
    </>
  )
}

export default page