"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Smartphone, Tablet, Tv, Apple, Laptop } from 'lucide-react'
import Image from 'next/image'

export default function TestDevice() {
    const [expandedCategories, setExpandedCategories] = useState<string[]>([])

    const categories = [
        { name: 'iOS devices', icon: Apple, image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=300&h=200&fit=crop', devices: ['iPhone 14/14 Pro Max', 'iPhone 13/13 mini', 'iPhone 13 Pro/13 Pro Max', 'iPhone 12/12 mini', 'iPhone 12 Pro/12 Pro Max', 'iPhone 11 Pro/11 Pro Max', 'iPhone 11', 'iPhone XS/XS Max', 'iPhone XR', 'iPhone X', 'iPhone 8/8 Plus', 'iPhone 7/7 Plus', 'iPhone SE (2nd gen)', 'iPhone SE (1st gen)'] },
        { name: 'Android devices', icon: Smartphone, image: 'https://images.unsplash.com/photo-1533228100845-08145b01de14?w=300&h=200&fit=crop', devices: ['Samsung Galaxy S21/S21+/S21 Ultra', 'Samsung Galaxy S20/S20+/S20 Ultra', 'Samsung Galaxy Note 20/Note 20 Ultra', 'Google Pixel 5', 'Google Pixel 4/4 XL', 'OnePlus 9 Pro', 'OnePlus 8T', 'Xiaomi Mi 11', 'Huawei P40 Pro', 'Sony Xperia 1 II'] },
        { name: 'iOS tablets', icon: Tablet, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=200&fit=crop', devices: ['iPad Pro 12.9-inch (5th gen)', 'iPad Pro 11-inch (3rd gen)', 'iPad Air (4th gen)', 'iPad (8th gen)', 'iPad mini (5th gen)'] },
        { name: 'Android tablets', icon: Tablet, image: 'https://images.unsplash.com/photo-1585789575907-1cce3586e3a6?w=300&h=200&fit=crop', devices: ['Samsung Galaxy Tab S7/S7+', 'Lenovo Tab P11 Pro', 'Amazon Fire HD 10', 'Huawei MatePad Pro', 'Microsoft Surface Duo'] },
        { name: 'Smart TV', icon: Tv, image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=200&fit=crop', devices: ['Samsung Tizen TV', 'LG webOS TV', 'Android TV', 'Apple TV', 'Amazon Fire TV'] },
    ]

    useEffect(() => {
        setExpandedCategories(categories.map(category => category.name))
    }, [])

    const toggleCategory = (name: string) => {
        setExpandedCategories(prev =>
            prev.includes(name) ? prev.filter(cat => cat !== name) : [...prev, name]
        )
    }

    return (
        <div className="min-h-screen max-w-6xl mx-auto text-white my-12">
            <motion.h1
                className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 text-center text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Test your software on real devices
            </motion.h1>
            <motion.p
                className="text-lg sm:text-xl mb-8 sm:mb-12 text-center text-gray-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                We have over 200 mobile devices in our pool for comprehensive compatibility testing.
            </motion.p>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {categories.map((category, index) => (
                    <motion.div
                        key={category.name}
                        className="border-gray-700 backdrop-blur-sm bg-gray-900/30 p-4 sm:p-6 rounded-xl shadow-lg border  hover:border-purple-500 transition-colors duration-300"
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <div
                            className="flex items-center justify-between cursor-pointer mb-4"
                            onClick={() => toggleCategory(category.name)}
                        >
                            <div className="flex items-center space-x-4">
                                <Image src={category.image} alt={category.name} width={60} height={60} className="rounded-lg object-cover" />
                                <span className="text-xl font-semibold">{category.name}</span>
                            </div>
                            <category.icon className="w-6 h-6 text-purple-400" />
                        </div>
                        <AnimatePresence initial={false}>
                            {expandedCategories.includes(category.name) && (
                                <motion.ul
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-2 overflow-hidden"
                                >
                                    {category.devices.map((device, index) => (
                                        <motion.li
                                            key={device}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                                        >
                                            <Laptop className="w-4 h-4" />
                                            <span>{device}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}