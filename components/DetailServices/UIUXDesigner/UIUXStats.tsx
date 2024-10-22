'use client';
import { motion } from 'framer-motion';

const awardsData = [
    {
        id: 1,
        imgSrc: 'https://static.vecteezy.com/system/resources/previews/023/986/870/non_2x/dribbble-logo-dribbble-logo-transparent-dribbble-icon-transparent-free-free-png.png',
        altText: 'Dribbble logo',
        title: 'Recognition among the design community',
        description: 'Awards and honorable mentions by Awwwards, Dribbble, and Behance.',
    },
    {
        id: 2,
        imgSrc: 'https://vectorlogoseek.com/wp-content/uploads/2019/10/clutch-co-vector-logo.png',
        altText: 'Clutch logo',
        title: 'UX-certified by the Nielsen Norman Group',
        description: 'Our specialists are certified by leading UX experts and universities worldwide.',
    },
    {
        id: 3,
        imgSrc: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/behance-2752234-2285051.png',
        altText: 'Behance logo',
        title: '4.9 stars on Clutch',
        description: 'Top UX Strategy Development Services Agency in 2022, according to Clutch.',
    },
];

export default function UIUXStats() {
    return (
        <div className="text-white p-8 md:p-16 max-w-7xl mx-auto">
            <motion.h2
                className="text-4xl text-center md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Award-winning design agency
            </motion.h2>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                {awardsData.map((award) => (
                    <motion.div
                        key={award.id}
                        className="space-y-4"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="h-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <img
                                src={award.imgSrc}
                                alt={award.altText}
                                className="h-full w-auto"
                            />
                        </motion.div>
                        <h3 className="text-xl font-semibold">{award.title}</h3>
                        <p className="text-sm text-gray-400">{award.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
