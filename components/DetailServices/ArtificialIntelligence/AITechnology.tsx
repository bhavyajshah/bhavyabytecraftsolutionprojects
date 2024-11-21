"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

const technologies = [
    { name: "Theano", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Theano_logo.svg/1024px-Theano_logo.svg.png", description: "Numerical computation library for Python" },
    { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png", description: "Machine learning library for Python" },
    { name: "spaCy", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/SpaCy_logo.svg/1280px-SpaCy_logo.svg.png", description: "Advanced natural language processing in Python" },
    { name: "TensorFlow", logo: "https://miro.medium.com/v2/resize:fit:592/1*YM2HXc7f4v02pZBEO8h-qw.png", description: "Open-source machine learning framework" },
    { name: "OpenCV", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/OpenCV_Logo_with_text.png/487px-OpenCV_Logo_with_text.png", description: "Computer vision and machine learning library" },
    { name: "PyTorch", logo: "https://cdn.worldvectorlogo.com/logos/pytorch-2.svg", description: "Open source machine learning framework" },
    { name: "SciPy", logo: "https://numfocus.org/wp-content/uploads/2017/11/scipy_logo300x300.png", description: "Scientific computing library for Python" },
]

export default function AITechnology() {
    const [isHovered, setIsHovered] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef)
    const controls = useAnimation()

    const duplicatedTechnologies = [...technologies, ...technologies]

    useEffect(() => {
        const scrollWidth = containerRef.current?.scrollWidth || 0
        const containerWidth = containerRef.current?.offsetWidth || 0
        const scrollDistance = scrollWidth - containerWidth

        const animate = async () => {
            if (isInView && !isHovered) {
                await controls.start({
                    x: [-scrollDistance / 2, 0],
                    transition: {
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 8,
                            ease: "linear",
                        },
                    },
                })
            } else {
                controls.stop()
            }
        }

        animate()

        return () => controls.stop()
    }, [controls, isHovered, isInView])

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    return (
        <div className="max-w-6xl mx-auto  text-neutral-800 dark:bg-transparent dark:text-gray-100 p-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto"
            >
                <h1 className="text-5xl font-bold mb-6 text-center text-neutral-900 dark:text-white">AI Technologies We Leverage</h1>
                <p className="text-xl mb-12 text-center max-w-3xl mx-auto text-neutral-700 dark:text-gray-300">
                    Our team of AI experts harnesses cutting-edge technologies to create intelligent solutions. We specialize in
                    developing AI-driven systems that can tackle complex tasks such as natural language processing, computer
                    vision, and machine learning.
                </p>

                <div
                    className="relative overflow-hidden"
                    ref={containerRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    aria-label="Scrolling carousel of AI technologies"
                >
                    <motion.div
                        className="flex items-center space-x-16 py-8"
                        animate={controls}
                        drag="x"
                        dragConstraints={containerRef}
                    >
                        {duplicatedTechnologies.map((tech, index) => (
                            <motion.div
                                key={`${tech.name}-${index}`}
                                className="flex flex-col items-center space-y-4 w-48 group"
                                whileHover={{ scale: 1.05 }}
                            >
                                <img src={tech.logo} alt={`${tech.name} logo`} className="w-24 h-24 object-contain" />
                                <span className="text-lg font-semibold text-center text-neutral-800 dark:text-white">{tech.name}</span>
                                <p className="text-sm text-center text-neutral-600 dark:text-gray-300 transition-opacity duration-300">
                                    {tech.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}