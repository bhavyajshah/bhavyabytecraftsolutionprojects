import Hero from '@/components/DetailServices/Hero'
import { Expertise } from '@/components/DetailServices/Expertise';
import WebDevelopmentWork from '@/components/DetailServices/Portfolio';
import ByteCraftReviews from '@/components/DetailServices/FAQAnimation';
import MobileAppTypes from '@/components/DetailServices/MobileAppTypes';
import Contact from '@/components/DetailServices/Contact';
import SuccessStories from '@/components/DetailServices/MobileSuccessStories/SuccessStories';
import { Data, Expertises, pastWork, reviews } from '@/Servicesdata/MobileDevelopment';
import AppDevelopmentTeam from '@/components/DetailServices/MobileSuccessStories/MobileSuccessTeam';
import FAQ from '@/components/FAQ/FAQ';
import { FaqData } from '@/Servicesdata/WebDevelopment';
import TechnologySection from '@/components/DetailServices/testing';
import WhyChooseUs from '@/components/DetailServices/CrossAppDevelopment/WhyChooseUs';

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

  <WhyChooseUs />

            <Expertise
                title={Expertises.expertiseTitle}
            />
            <Contact />
        </>
    )
}

export default page