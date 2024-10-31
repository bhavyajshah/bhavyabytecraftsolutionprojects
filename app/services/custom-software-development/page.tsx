import type { Metadata } from 'next'
import Hero from '@/components/DetailServices/Hero'
import { Expertise } from '@/components/DetailServices/Expertise'
import Contact from '@/components/DetailServices/Contact'
import { Expertises } from '@/Servicesdata/MobileDevelopment'
import { CreativePriceRequestForm } from '@/components/DetailServices/CrossAppDevelopment/RequestPrice'
import { Data, FaqData, stats, Stories } from '@/Servicesdata/CustomSoftwareDevelopment'
import Stats from '@/components/DetailServices/CustomSoftwareDevelopment/Stats'
import CustomSoftWareDevelopmentServices from '@/components/DetailServices/CustomSoftwareDevelopment/Services'
import SuccessStories from '@/components/DetailServices/MobileSuccessStories/SuccessStories'
import FAQ from '@/components/FAQ/FAQ'

export const metadata: Metadata = {
    title: 'Custom Software Development Services - Tailored Solutions for Your Business',
    description: 'Our Custom Software Development services provide innovative, scalable solutions tailored to meet complex business needs, ensuring enhanced efficiency and growth.',
    keywords: ['Custom software development', 'software solutions', 'business software', 'scalable software', 'custom applications', 'tech development'],
}

export default function Page() {
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
            <Stats stats={stats} title="Custom software development partner for complex tech needs" />
            <CustomSoftWareDevelopmentServices />
            <SuccessStories stories={Stories} title="Our Successful Projects" />
            <CreativePriceRequestForm />
            <FAQ title="FAQ" FaqData={FaqData} />
            <Expertise title={Expertises.expertiseTitle} />
            <Contact />
        </>
    )
}
