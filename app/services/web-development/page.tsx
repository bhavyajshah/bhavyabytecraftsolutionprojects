import Hero from '@/components/DetailServices/Hero'
import StatsServices from '@/components/DetailServices/StatsServices';
import FeatureSection from '@/components/DetailServices/testing';
import { Expertise } from '@/components/DetailServices/Expertise';
import WebDevelopmentWork from '@/components/DetailServices/Portfolio';
import ByteCraftReviews from '@/components/DetailServices/FAQAnimation';
import Feature from '@/components/DetailServices/Feature';
import Contact from '@/components/DetailServices/Contact';
import { Data, deliveryPhases, Expertises, feature, languages, pastWork, reviews, stats } from '@/Servicesdata/WebDevelopment';
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
      <FeatureSection languages={languages?.languages} title={languages?.title} />
      <Feature
        title={feature.title}
        features={feature.features.map((feature) => ({
          icon: <feature.icon />,
          title: feature.title,
          description: feature.description,
        }))}
      />
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