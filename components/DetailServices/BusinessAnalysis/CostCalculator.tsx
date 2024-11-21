'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import toast, { Toaster } from 'react-hot-toast'

interface FormValues {
    specialist: string
    projectStage: string
    priorities: string[]
    duration: number
}

const validationSchema = Yup.object().shape({
    specialist: Yup.string().required('Please select a specialist'),
    projectStage: Yup.string().required('Please select the project stage'),
    priorities: Yup.array().of(Yup.string()).min(1, 'Select at least one priority'),
    duration: Yup.number().min(1).max(24).required('Please specify the duration'),
})

export default function CostCalculator() {
    const initialValues: FormValues = {
        specialist: '',
        projectStage: '',
        priorities: [],
        duration: 1,
    }

    const handleSubmit = (values: FormValues) => {
        toast.success('Details submitted for pricing calculation!')
        console.log('Form values:', values)
    }

    return (
        <div className="min-h-screen text-gray-800 dark:text-white my-16 max-w-6xl text-center mx-auto">
            <Toaster position="top-center" reverseOrder={false} />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='text-center'
            >
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">Quality Analysis Cost Calculator</h1>
                <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">Provide your project details for a pricing estimate.</p>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values, setFieldValue }) => (
                        <Form className="space-y-6">
                            {/* Specialist Selection */}
                            <div className="text-left">
                                <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">1. Select a Specialist</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                    {['Business Analyst', 'Product Owner', 'System Analyst'].map((role) => (
                                        <label key={role} className="flex items-center cursor-pointer text-gray-700 dark:text-gray-300">
                                            <Field type="radio" name="specialist" value={role} className="mr-2" />
                                            {role}
                                        </label>
                                    ))}
                                </div>
                                <ErrorMessage name="specialist" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Project Stage */}
                            <div className="text-left">
                                <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">2. Current Project Stage</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                    {['New project', 'Ongoing project', 'Project review'].map((stage) => (
                                        <label key={stage} className="flex items-center cursor-pointer text-gray-700 dark:text-gray-300">
                                            <Field type="radio" name="projectStage" value={stage} className="mr-2" />
                                            {stage}
                                        </label>
                                    ))}
                                </div>
                                <ErrorMessage name="projectStage" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Priorities */}
                            <div className="text-left">
                                <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">3. Select Priorities</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                                    {[
                                        'Discovery Phase',
                                        'Project Documentation',
                                        'Competitors Analysis',
                                        'Process Optimization',
                                        'Project Health Check',
                                        'Product Ownership',
                                        'Guide Writing',
                                        'Development Support'
                                    ].map((priority) => (
                                        <label key={priority} className="flex items-center cursor-pointer text-gray-700 dark:text-gray-300">
                                            <Field
                                                type="checkbox"
                                                name="priorities"
                                                value={priority}
                                                className="mr-2"
                                            />
                                            {priority}
                                        </label>
                                    ))}
                                </div>
                                <ErrorMessage name="priorities" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Duration */}
                            <div className="text-left">
                                <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">4. Project Duration (in months)</h2>
                                <Field
                                    name="duration"
                                    type="range"
                                    min="1"
                                    max="24"
                                    value={values.duration}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue('duration', parseInt(e.target.value))}
                                    className="w-full"
                                />
                                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    <span>1 month</span>
                                    <span>6 months</span>
                                    <span>1 year</span>
                                    <span>1.5 years</span>
                                    <span>2+ years</span>
                                </div>
                                <ErrorMessage name="duration" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
                            >
                                Calculate Pricing
                            </motion.button>
                        </Form>
                    )}
                </Formik>
            </motion.div>
        </div>
    )
}

