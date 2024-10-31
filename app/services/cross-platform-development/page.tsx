import type { Metadata } from 'next'
import Hero from '@/components/DetailServices/Hero'
import { Expertise } from '@/components/DetailServices/Expertise';
import Contact from '@/components/DetailServices/Contact';
import { Expertises } from '@/Servicesdata/MobileDevelopment';
import WhyChooseUs from '@/components/DetailServices/CrossAppDevelopment/WhyChooseUs';
import { CreativePriceRequestForm } from '@/components/DetailServices/CrossAppDevelopment/RequestPrice';
import { Data } from '@/Servicesdata/CrossAppDevelopment';

export const metadata: Metadata = {
    title: 'Cross-Platform Development Services - Build Apps for All Platforms',
    description: 'Our Cross-Platform Development services enable you to create seamless applications compatible across iOS, Android, and other platforms, enhancing your reach and efficiency.',
    keywords: ['Cross-platform development', 'mobile app development', 'iOS and Android apps', 'multi-platform apps', 'app compatibility', 'mobile solutions'],
}

const Page = () => {
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
            <CreativePriceRequestForm />
            <Expertise title={Expertises.expertiseTitle} />
            <Contact />
        </>
    )
}

export default Page;
