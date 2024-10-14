import Hero from '@/components/DetailServices/Hero'
import FeatureSection from '@/components/DetailServices/testing';
import { Expertise } from '@/components/DetailServices/Expertise';
import WebDevelopmentWork from '@/components/DetailServices/Portfolio';
import ByteCraftReviews from '@/components/DetailServices/FAQAnimation';
import MobileAppTypes from '@/components/DetailServices/MobileAppTypes';
import SuccessStories from '@/components/DetailServices/MobileSuccessStories/SuccessStories';
import { Data, deliveryPhases, Expertises, languages, pastWork, reviews } from '@/Servicesdata/MobileDevelopment';
import AppDevelopmentTeam from '@/components/DetailServices/MobileSuccessStories/MobileSuccessTeam';

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

    <MobileAppTypes/>
      <FeatureSection languages={languages?.languages} title={languages?.title} />
      <SuccessStories />
      {/* <Feature
        title={feature.title}
        features={feature.features.map((feature) => ({
          icon: <feature.icon />,
          title: feature.title,
          description: feature.description,
        }))}
      /> */}
      <WebDevelopmentWork
        works={pastWork.pastWorks}
        sectionTitle={pastWork?.title}

      />
      <AppDevelopmentTeam />
      <ByteCraftReviews title={deliveryPhases?.title} reviews={reviews} deliveryPhases={deliveryPhases?.phases} />
      <Expertise
        title={Expertises.expertiseTitle}
      />
    </div>
  )
}

export default page