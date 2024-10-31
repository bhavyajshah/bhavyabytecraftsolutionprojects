import type { Metadata } from 'next'
import Hero from '@/components/DetailServices/Hero'
import { Expertise } from '@/components/DetailServices/Expertise';
import WebDevelopmentWork from '@/components/DetailServices/Portfolio';
import ByteCraftReviews from '@/components/DetailServices/FAQAnimation';
import MobileAppTypes from '@/components/DetailServices/MobileAppTypes';
import Contact from '@/components/DetailServices/Contact';
import SuccessStories from '@/components/DetailServices/MobileSuccessStories/SuccessStories';
import { appData, Data, Expertises, pastWork, reviews, stories, teamMembersData } from '@/Servicesdata/MobileDevelopment';
import AppDevelopmentTeam from '@/components/DetailServices/MobileSuccessStories/MobileSuccessTeam';
import FAQ from '@/components/FAQ/FAQ';
import { FaqData } from '@/Servicesdata/WebDevelopment';
import TechnologySection from '@/components/DetailServices/WebDevelopment/WebTechnologySection';

export const metadata: Metadata = {
  title: 'Mobile App Development Services - Create Powerful Mobile Solutions',
  description: 'Discover our mobile app development services that cater to diverse business needs. We specialize in building scalable, user-friendly mobile applications tailored for both Android and iOS platforms.',
  keywords: ['mobile development', 'app development', 'iOS development', 'Android development', 'cross-platform apps', 'mobile application services'],
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

      <MobileAppTypes title={"Types of mobile apps we develop"} appData={appData} />
      <TechnologySection title={"Technologies for Web Development"} />
      <SuccessStories stories={stories} title={"Successful app development stories"} />
      <WebDevelopmentWork
        works={pastWork.pastWorks}
        sectionTitle={pastWork?.title}
      />
      <FAQ title={"Mobile Development Delivery Cycle"} FaqData={FaqData} />
      <AppDevelopmentTeam title={"Our Successful Mobile App Team Members"} teamMembersData={teamMembersData} />
      <ByteCraftReviews reviews={reviews} />
      <Expertise title={Expertises.expertiseTitle} />
      <Contact />
    </>
  )
}

export default Page;
