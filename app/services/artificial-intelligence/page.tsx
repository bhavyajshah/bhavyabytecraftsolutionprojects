import Hero from '@/components/DetailServices/Hero'
import { Expertise } from '@/components/DetailServices/Expertise';
import Contact from '@/components/DetailServices/Contact';
import { Expertises } from '@/Servicesdata/MobileDevelopment';
import { Data } from '@/Servicesdata/ArtificialIntelligence';
import Services from '@/components/DetailServices/ArtificialIntelligence/Services';
import Business from '@/components/DetailServices/ArtificialIntelligence/Business';
import AIImpact from '@/components/DetailServices/ArtificialIntelligence/AIImpact';
import AITechnology from '@/components/DetailServices/ArtificialIntelligence/AITechnology';
import AICostSavings from '@/Servicesdata/AICostSavings';
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
      <Services />
      <Business />
      <AICostSavings />
      <AIImpact />
      <AITechnology />
      <Expertise
        title={Expertises.expertiseTitle}
      />
      <Contact />
    </>
  )
}

export default page