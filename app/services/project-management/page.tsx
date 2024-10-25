import Hero from '@/components/DetailServices/Hero'
import { Expertise } from '@/components/DetailServices/Expertise';
import WebDevelopmentWork from '@/components/DetailServices/Portfolio';
import ByteCraftReviews from '@/components/DetailServices/FAQAnimation';
import MobileAppTypes from '@/components/DetailServices/MobileAppTypes';
import Contact from '@/components/DetailServices/Contact';
import SuccessStories from '@/components/DetailServices/MobileSuccessStories/SuccessStories';
import { appData, Expertises, pastWork, reviews, stories, teamMembersData } from '@/Servicesdata/MobileDevelopment';
import AppDevelopmentTeam from '@/components/DetailServices/MobileSuccessStories/MobileSuccessTeam';
import FAQ from '@/components/FAQ/FAQ';
import { FaqData } from '@/Servicesdata/WebDevelopment';
import TechnologySection from '@/components/DetailServices/WebDevelopment/WebTechnologySection';
import { Data, stats } from '@/Servicesdata/ProjectManagement';
import Stats from '@/components/DetailServices/CustomSoftwareDevelopment/Stats';
import ProjectManagementDashboard from '@/components/DetailServices/ProjectManagement/ChartServices';

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
      <ProjectManagementDashboard />
      <Contact />
    </>
  )
}

export default page