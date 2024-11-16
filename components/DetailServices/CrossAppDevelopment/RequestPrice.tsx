'use client'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

const validationSchema = Yup.object({
    softwareSolution: Yup.array().min(1, 'Please select at least one option'),
    currentStage: Yup.string().required('Please select a stage'),
    specialists: Yup.array(),
    projectDuration: Yup.number().required('Please select a duration')
})

export function CreativePriceRequestForm() {
    const formik = useFormik({
        initialValues: {
            softwareSolution: [],
            currentStage: '',
            specialists: [],
            projectDuration: 1
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values)
            // Handle form submission
        }
    })

    return (
        <div className="min-h-screen w-full text-gray-800 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-50 dark:bg-transparent">
            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="border-gray-300 dark:border-[#8f879f] border rounded-2xl shadow-md dark:shadow-[#6430c2] overflow-hidden">
                    <div className="px-8 py-6 bg-gray-200 dark:bg-[#6430c2]">
                        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-2">Request Project Pricing</h1>
                        <p className="text-gray-600 dark:text-purple-200">Let&apos;s craft your perfect software solution</p>
                    </div>

                    <form onSubmit={formik.handleSubmit} className="space-y-8 p-8 bg-white dark:bg-gray-800">
                        <div>
                            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
                                <svg className="w-6 h-6 mr-2 text-gray-600 dark:text-[#6430c2]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Software Solution
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {['Web', 'Mobile', 'Consultancy'].map((option) => (
                                    <div key={option} className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                                        <Checkbox
                                            id={option}
                                            name="softwareSolution"
                                            value={option}
                                            checked={formik.values.softwareSolution.includes(option)}
                                            onCheckedChange={(checked) => {
                                                if (checked) {
                                                    formik.setFieldValue('softwareSolution', [...formik.values.softwareSolution, option])
                                                } else {
                                                    formik.setFieldValue('softwareSolution', formik.values.softwareSolution.filter((item) => item !== option))
                                                }
                                            }}
                                            className="border-gray-400 dark:border-purple-400 text-gray-600 dark:text-[#6430c2]"
                                        />
                                        <Label htmlFor={option} className="text-lg text-gray-700 dark:text-gray-200">{option}</Label>
                                    </div>
                                ))}
                            </div>
                            {formik.touched.softwareSolution && formik.errors.softwareSolution && (
                                <div className="text-red-500 dark:text-red-400 text-sm mt-2">{(formik.errors as any).softwareSolution}</div>
                            )}
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
                                <svg className="w-6 h-6 mr-2 text-gray-600 dark:text-[#6430c2]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                                Current Stage
                            </h2>
                            <RadioGroup
                                name="currentStage"
                                value={formik.values.currentStage}
                                onValueChange={(value) => formik.setFieldValue('currentStage', value)}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                            >
                                {['Idea', 'Prototype', 'Designed', 'MVP'].map((option) => (
                                    <div key={option} className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                                        <RadioGroupItem value={option} id={option} className="border-gray-400 dark:border-purple-400 text-gray-600 dark:text-purple-600" />
                                        <Label htmlFor={option} className="text-lg text-gray-700 dark:text-gray-200">{option}</Label>
                                    </div>
                                ))}
                            </RadioGroup>
                            {formik.touched.currentStage && formik.errors.currentStage && (
                                <div className="text-red-500 dark:text-red-400 text-sm mt-2">{formik.errors.currentStage}</div>
                            )}
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
                                <svg className="w-6 h-6 mr-2 text-gray-600 dark:text-[#6430c2]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Specialists Needed
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['Project Manager', 'Business Analyst', 'UI/UX Designer', 'Architect'].map((option) => (
                                    <div key={option} className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                                        <Checkbox
                                            id={option}
                                            name="specialists"
                                            value={option}
                                            checked={formik.values.specialists.includes(option)}
                                            onCheckedChange={(checked) => {
                                                if (checked) {
                                                    formik.setFieldValue('specialists', [...formik.values.specialists, option])
                                                } else {
                                                    formik.setFieldValue('specialists', formik.values.specialists.filter((item) => item !== option))
                                                }
                                            }}
                                            className="border-gray-400 dark:border-purple-400 text-gray-600 dark:text-[#6430c2]"
                                        />
                                        <Label htmlFor={option} className="text-lg text-gray-700 dark:text-gray-200">{option}</Label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
                                <svg className="w-6 h-6 mr-2 text-gray-600 dark:text-[#6430c2]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Project Duration
                            </h2>
                            <Slider
                                name="projectDuration"
                                min={1}
                                max={24}
                                step={1}
                                value={[formik.values.projectDuration]}
                                onValueChange={(value) => formik.setFieldValue('projectDuration', value[0])}
                                className="w-full"
                            />
                            <div className="flex justify-between mt-2 text-sm text-gray-500 dark:text-gray-400">
                                <span>1 month</span>
                                <span>6 months</span>
                                <span>1 year</span>
                                <span>1.5 years</span>
                                <span>2+ years</span>
                            </div>
                        </div>

                        <Button type="submit" className="w-full bg-gray-700 hover:bg-gray-800 dark:bg-[#6430c2] dark:hover:bg-[#5428a3] text-white font-bold py-3 px-4 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105">
                            Get Your Personalized Quote
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}