import Hero from '@/components/DetailServices/Hero'
import { Expertise } from '@/components/DetailServices/Expertise';
import Contact from '@/components/DetailServices/Contact';
import { Expertises } from '@/Servicesdata/MobileDevelopment';

import { CreativePriceRequestForm } from '@/components/DetailServices/CrossAppDevelopment/RequestPrice';
import { Data } from '@/Servicesdata/CustomSoftwareDevelopment';
import Stats from '@/components/DetailServices/CustomSoftwareDevelopment/Stats';

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

          <Stats />
            <CreativePriceRequestForm />
            <Expertise
                title={Expertises.expertiseTitle}
            />
            <Contact />
        </>
    )
}

export default page