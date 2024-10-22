import Hero from '@/components/DetailServices/Hero'
import Contact from '@/components/DetailServices/Contact'
import { Stories } from '@/Servicesdata/CustomSoftwareDevelopment'
import SuccessStories from '@/components/DetailServices/MobileSuccessStories/SuccessStories'
import { Data } from '@/Servicesdata/UIUXDesigner'
import UIUXStats from '@/components/DetailServices/UIUXDesigner/UIUXStats'
import DesignServices from '@/components/DetailServices/UIUXDesigner/DesignServices'
import StreamLineFAQ from '@/components/DetailServices/UIUXDesigner/StreamLineFAQ'
import AppDevelopmentTeam from '@/components/DetailServices/MobileSuccessStories/MobileSuccessTeam'

export default function Page() {
  const teamMembersData = [
    {
      name: 'Meera Patel',
      title: 'Senior UI/UX Designer',
      hourlyRate: 75,
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Wireframing', 'Prototyping', 'User Research'],
      previousCompany: 'Design Innovators',
      imgSrc: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      name: 'Ravi Desai',
      title: 'UI/UX Designer',
      hourlyRate: 60,
      skills: ['Figma', 'User Flows', 'Information Architecture', 'Usability Testing', 'Adobe Photoshop'],
      previousCompany: 'Creative Minds',
      imgSrc: 'https://randomuser.me/api/portraits/men/55.jpg',
    },
    {
      name: 'Anjali Kapoor',
      title: 'Junior UI/UX Designer',
      hourlyRate: 45,
      skills: ['Sketch', 'InVision', 'User Interface Design', 'Responsive Web Design', 'Typography'],
      previousCompany: 'Pixel Craft Studios',
      imgSrc: 'https://randomuser.me/api/portraits/women/56.jpg',
    },
    {
      name: 'Vikram Singh',
      title: 'UI/UX Design Lead',
      hourlyRate: 85,
      skills: ['User-Centered Design', 'Prototyping', 'Interaction Design', 'Design Systems', 'Wireframes'],
      previousCompany: 'UX Studio',
      imgSrc: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    {
      name: 'Priya Joshi',
      title: 'UI/UX Researcher',
      hourlyRate: 55,
      skills: ['User Research', 'Personas', 'Journey Mapping', 'Surveys & Interviews', 'Heuristic Evaluation'],
      previousCompany: 'Insight UX',
      imgSrc: 'https://randomuser.me/api/portraits/women/44.jpg',
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
      <UIUXStats />
      <DesignServices />
      <SuccessStories stories={Stories} title="Our Successful Projects" />
      <StreamLineFAQ />
      <AppDevelopmentTeam title={"Our Design Problem Solvings Team"} teamMembersData={teamMembersData} />
      <Contact />
    </>
  )
}