import Hero from '@/components/DetailServices/Hero'
import { Expertise } from '@/components/DetailServices/Expertise';
import Contact from '@/components/DetailServices/Contact';
import Stats from '@/components/DetailServices/CustomSoftwareDevelopment/Stats';
import { Data, Expertises, stats } from '@/Servicesdata/ITSupportServices';
import MaintenanceSupportService from '@/components/DetailServices/ITMaintanceSupport/MaintenanceSupportService';
import PricingCardUI from '@/components/DetailServices/ITMaintanceSupport/PricingCard';
import TechnologyStack from '@/components/DetailServices/ITMaintanceSupport/TechnologyStack';
import WhyWorkWithUs from '@/components/DetailServices/ITMaintanceSupport/WhyWorkwithUs';
import SupportQuoteForm from '@/components/DetailServices/ITMaintanceSupport/SupportQuoteForm';

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

            <Stats stats={stats} title="Providing IT Maintenance Support Services as a trusted partner for complex technical needs." />
            <WhyWorkWithUs />
            <MaintenanceSupportService />
            <TechnologyStack />
            <PricingCardUI />
            <SupportQuoteForm />
            <Expertise
                title={Expertises.expertiseTitle}
            />
            <Contact />
        </>
    )
}

export default page