'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { FaCheckSquare, FaSquare } from 'react-icons/fa';

const SupportQuoteForm = () => {
    const formik = useFormik({
        initialValues: {
            supportServices: [],
            workingSchedule: '',
            tickets: 50,
        },
        validationSchema: Yup.object({
            supportServices: Yup.array().min(1, 'Select at least one service'),
            workingSchedule: Yup.string().required('Select a working schedule'),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const handleCheckboxChange = (value) => {
        const { supportServices } = formik.values;
        formik.setFieldValue(
            'supportServices',
            supportServices.includes(value)
                ? supportServices.filter((item) => item !== value)
                : [...supportServices, value]
        );
    };

    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen max-w-6xl mx-auto p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h1
                className="text-2xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white text-center"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                Get a Quote for Outsourced IT Support
            </motion.h1>

            <form
                onSubmit={formik.handleSubmit}
                className="w-full bg-white dark:backdrop-blur-sm dark:bg-gray-900/30 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6 space-y-6"
            >
                {/* Support Services Section */}
                <div>
                    <h2 className="font-semibold text-gray-800 dark:text-white mb-3">1. What type of Support Services do you need?</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {['Client Support', 'Infrastructure Support', 'Application Support', 'Consultancy needed'].map((service) => (
                            <div
                                key={service}
                                className="flex items-center space-x-2 cursor-pointer"
                                onClick={() => handleCheckboxChange(service)}
                            >
                                {formik.values.supportServices.includes(service) ? (
                                    <FaCheckSquare className="text-gray-800 dark:text-[#6430c2]" />
                                ) : (
                                    <FaSquare className="text-gray-400 dark:text-white" />
                                )}
                                <span className="text-gray-700 dark:text-white">{service}</span>
                            </div>
                        ))}
                    </div>
                    {formik.touched.supportServices && formik.errors.supportServices ? (
                        <motion.p
                            className="text-red-500 text-sm mt-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {(formik as any).errors.supportServices}
                        </motion.p>
                    ) : null}
                </div>

                {/* Working Schedule Section */}
                <div>
                    <h2 className="font-semibold text-gray-800 dark:text-white mb-3">2. What is the required working schedule?</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {['24/7', '16/5', '8/5', 'Custom'].map((schedule) => (
                            <label key={schedule} className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="workingSchedule"
                                    value={schedule}
                                    checked={formik.values.workingSchedule === schedule}
                                    onChange={formik.handleChange}
                                    className="hidden"
                                />
                                <span
                                    className={`w-5 h-5 rounded-full border-2 ${formik.values.workingSchedule === schedule ? 'bg-gray-800 dark:bg-[#6430c2]' : 'border-gray-400 dark:border-gray-400'
                                        }`}
                                ></span>
                                <span className="text-gray-700 dark:text-white">{schedule}</span>
                            </label>
                        ))}
                    </div>
                    {formik.touched.workingSchedule && formik.errors.workingSchedule ? (
                        <motion.p
                            className="text-red-500 text-sm mt-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {formik.errors.workingSchedule}
                        </motion.p>
                    ) : null}
                </div>

                {/* Tickets Section */}
                <div>
                    <h2 className="font-semibold text-gray-800 dark:text-white mb-3">3. What is the daily number of tickets you need to process and resolve?</h2>
                    <motion.input
                        type="range"
                        name="tickets"
                        min="50"
                        max="1000"
                        step="50"
                        value={formik.values.tickets}
                        onChange={formik.handleChange}
                        className="w-full h-2 bg-gray-300 dark:bg-gray-300 rounded-lg appearance-none cursor-pointer"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                    <div className="flex justify-between text-gray-600 dark:text-white text-sm mt-2">
                        <span>up to 50 tickets</span>
                        <span>50-250</span>
                        <span>250-500</span>
                        <span>500-1000</span>
                        <span>over 1000 tickets</span>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <motion.button
                        type="submit"
                        className="bg-gray-800 hover:bg-gray-700 dark:bg-[#6430c2] dark:hover:bg-[#6430c2] text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Pricing
                    </motion.button>
                </div>
            </form>
        </motion.div>
    );
};

export default SupportQuoteForm;