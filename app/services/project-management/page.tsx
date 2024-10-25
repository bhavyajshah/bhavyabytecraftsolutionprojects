import Hero from '@/components/DetailServices/Hero'
import { Expertise } from '@/components/DetailServices/Expertise';
import Contact from '@/components/DetailServices/Contact';
import { Data, Expertises, stats } from '@/Servicesdata/ProjectManagement';
import Stats from '@/components/DetailServices/CustomSoftwareDevelopment/Stats';
import ProjectManagementDashboard from '@/components/DetailServices/ProjectManagement/ChartServices';
import ProjectReports from '@/components/DetailServices/ProjectManagement/ProjectReports';
import { CreativePriceRequestForm } from '@/components/DetailServices/CrossAppDevelopment/RequestPrice';


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
      <ProjectReports />
      <CreativePriceRequestForm />
      <Expertise
        title={Expertises.expertiseTitle}
      />
      <Contact />
    </>
  )
}

export default page