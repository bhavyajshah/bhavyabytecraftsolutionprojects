import Hero from '@/components/DetailServices/Hero'
import { Expertise } from '@/components/DetailServices/Expertise';
import WebDevelopmentWork from '@/components/DetailServices/Portfolio';
import ByteCraftReviews from '@/components/DetailServices/FAQAnimation';
import MobileAppTypes from '@/components/DetailServices/MobileAppTypes';
import Contact from '@/components/DetailServices/Contact';
import SuccessStories from '@/components/DetailServices/MobileSuccessStories/SuccessStories';
import { Data, Expertises, pastWork, reviews, stories } from '@/Servicesdata/MobileDevelopment';
import AppDevelopmentTeam from '@/components/DetailServices/MobileSuccessStories/MobileSuccessTeam';
import FAQ from '@/components/FAQ/FAQ';
import { FaqData } from '@/Servicesdata/WebDevelopment';
import TechnologySection from '@/components/DetailServices/WebDevelopment/WebTechnologySection';

const page = () => {

  const teamMembersData = [
    {
      name: 'John Doe',
      title: 'Mobile App Developer',
      hourlyRate: 65,
      skills: ['Java', 'Kotlin', 'Android Jetpack', 'Firebase', 'Gradle'],
      previousCompany: 'Company A',
      imgSrc: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Jane Smith',
      title: 'Mobile App Developer',
      hourlyRate: 50,
      skills: ['Swift', 'iOS Development', 'Xcode', 'Core Data'],
      previousCompany: 'Company B',
      imgSrc: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      name: 'Rohit Sharma',
      title: 'Mobile App Developer',
      hourlyRate: 40,
      skills: ['React Native', 'Flutter', 'Dart', 'API Integration'],
      previousCompany: 'Company C',
      imgSrc: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
  ];
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

      <MobileAppTypes />
      <TechnologySection title={"Technologies for Web Development"} />
      <SuccessStories stories={stories} title={"Successful app development stories"} />
      <WebDevelopmentWork
        works={pastWork.pastWorks}
        sectionTitle={pastWork?.title}
      />
      <FAQ title={"Mobile Development Delievery Cycle"} FaqData={FaqData} />
      <AppDevelopmentTeam title={"Our Successful Mobile App Team Members"} teamMembersData={teamMembersData} />
      <ByteCraftReviews reviews={reviews} />
      <Expertise
        title={Expertises.expertiseTitle}
      />
      <Contact />
    </>
  )
}

export default page