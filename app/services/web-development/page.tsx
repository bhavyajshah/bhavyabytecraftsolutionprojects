import Hero from '@/components/DetailServices/Hero'
import StatsServices from '@/components/DetailServices/StatsServices';
import { Expertise } from '@/components/DetailServices/Expertise';
import WebDevelopmentWork from '@/components/DetailServices/Portfolio';
import ByteCraftReviews from '@/components/DetailServices/FAQAnimation';
import Feature from '@/components/DetailServices/Feature';
import Contact from '@/components/DetailServices/Contact';
import { Data, deliveryPhases, Expertises, FaqData, feature, pastWork, reviews, stats } from '@/Servicesdata/WebDevelopment';
import WebDevelopmentOfferings from '@/components/DetailServices/WebDevelopmentOfferings';
import TechnologySection from '@/components/DetailServices/testing';
import FAQ from '@/components/FAQ/FAQ';
const page = () => {

  return (
    <div>
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

      <StatsServices
        title={stats?.title}
        stats={
          stats?.statsCard
        }
      />
      <WebDevelopmentOfferings/>
      <TechnologySection title={"Technologies for Web Development"} />
      <Feature
        title={feature.title}
        features={feature.features.map((feature) => ({
          icon: <feature.icon />,
          title: feature.title,
          description: feature.description,
        }))}
      />
      <FAQ title={"Web Development Delievery Cycle"} FaqData={FaqData} />
      <WebDevelopmentWork
        works={pastWork.pastWorks}
        sectionTitle={pastWork?.title}
      />
      <ByteCraftReviews title={deliveryPhases?.title} reviews={reviews} deliveryPhases={deliveryPhases?.phases} />
      <Expertise
        title={Expertises.expertiseTitle}
      />
      <Contact/>
    </div>
  )
}

export default page