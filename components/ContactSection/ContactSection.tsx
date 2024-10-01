"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineMail, AiOutlineUser, AiOutlinePhone } from "react-icons/ai";
import { motion } from "framer-motion";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  referral: string;
  softwareType: string[]; 
  developmentStage: string;
  teamMembers: string[];
  projectDuration: string;
}

const ContactSection = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      referral: "",
      softwareType: [],
      developmentStage: "",
      teamMembers: [],
      projectDuration: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      referral: Yup.string().required("Please tell us how you heard about us"),
      softwareType: Yup.array().min(
        1,
        "Please select at least one software type"
      ),
      projectDuration: Yup.string().required("Project duration is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form data", values);
      resetForm();
    },
  });

  const checkboxOptions = [
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Custom Software",
  ];
  const radioOptions = [
    "Less than 3 months",
    "3-6 months",
    "6-12 months",
    "More than 12 months",
  ];

  return (
    <section id="contact" className="scroll-mt-17 py-10 text-white">
      <div className="max-w-[1104px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative overflow-hidden rounded-3xl border p-6 sm:p-12 shadow-lg">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-extrabold mb-4">Contact Us</h2>
            <p className="max-w-[714px] mx-auto text-lg text-gray-300">
              We are here to assist you. Fill out the form below, and our team
              will get back to you shortly.
            </p>
          </motion.div>

          <form
            onSubmit={formik.handleSubmit}
            className="relative z-10 space-y-6"
          >
            <motion.div className="grid md:grid-cols-2 gap-6">
              {/* First Name */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium mb-2"
                >
                  First Name *
                </label>
                <div className="flex items-center border border-gray-500 bg-transparent rounded-lg p-2">
                  <AiOutlineUser className="text-gray-400 mr-2" />
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="Enter your First Name"
                    className="bg-transparent w-full outline-none text-white placeholder-gray-400"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                  />
                </div>
                {formik.touched.firstName && formik.errors.firstName ? (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.firstName}
                  </p>
                ) : null}
              </motion.div>

              {/* Last Name */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium mb-2"
                >
                  Last Name *
                </label>
                <div className="flex items-center border border-gray-500 bg-transparent rounded-lg p-2">
                  <AiOutlineUser className="text-gray-400 mr-2" />
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Enter your Last Name"
                    className="bg-transparent w-full outline-none text-white placeholder-gray-400"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                  />
                </div>
                {formik.touched.lastName && formik.errors.lastName ? (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.lastName}
                  </p>
                ) : null}
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email *
                </label>
                <div className="flex items-center border border-gray-500 bg-transparent rounded-lg p-2">
                  <AiOutlineMail className="text-gray-400 mr-2" />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    className="bg-transparent w-full outline-none text-white placeholder-gray-400"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </p>
                ) : null}
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone Number
                </label>
                <div className="flex items-center border border-gray-500 bg-transparent rounded-lg p-2">
                  <AiOutlinePhone className="text-gray-400 mr-2" />
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter your Phone Number"
                    className="bg-transparent w-full outline-none text-white placeholder-gray-400"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Company Name */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <label
                htmlFor="company"
                className="block text-sm font-medium mb-2"
              >
                Company Name
              </label>
              <input
                id="company"
                type="text"
                name="company"
                placeholder="Enter your Company Name"
                className="bg-transparent w-full p-3 border border-gray-500 rounded-lg outline-none text-white placeholder-gray-400"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.company}
              />
            </motion.div>

            {/* Referral */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <label
                htmlFor="referral"
                className="block text-sm font-medium mb-2"
              >
                How did you hear about us? *
              </label>
              <input
                id="referral"
                type="text"
                name="referral"
                placeholder="Tell us how you heard about us"
                className="bg-transparent w-full p-3 border border-gray-500 rounded-lg outline-none text-white placeholder-gray-400"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.referral}
              />
              {formik.touched.referral && formik.errors.referral ? (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.referral}
                </p>
              ) : null}
            </motion.div>

            {/* Checkboxes */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6"
            >
              <p className="block mb-3">Software Type *</p>
              <div className="flex flex-wrap gap-6">
                {checkboxOptions.map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        name="softwareType"
                        value={option}
                        checked={formik.values.softwareType.includes(option)}
                        onChange={formik.handleChange}
                        className="appearance-none h-5 w-5 border-2 border-gray-300 rounded-md checked:bg-blue-500 transition-all duration-300 group-hover:border-blue-400"
                      />
                      <motion.span className="absolute top-1/2 left-1/2 w-full h-full bg-blue-500 opacity-0 scale-0 rounded-md transition-transform duration-300" />
                    </div>
                    <span className="group-hover:text-blue-500 transition-all duration-200">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
              {formik.touched.softwareType && formik.errors.softwareType ? (
                <p className="text-red-500 text-sm mt-2">
                  {formik.errors.softwareType}
                </p>
              ) : null}
            </motion.div>

            {/* Radio Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-6"
            >
              <p className="block mb-3">Project Duration *</p>
              <div className="flex flex-wrap gap-6">
                {radioOptions.map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <div className="relative">
                      <input
                        type="radio"
                        name="projectDuration"
                        value={option}
                        checked={formik.values.projectDuration === option}
                        onChange={formik.handleChange}
                        className="appearance-none h-5 w-5 border-2 border-gray-300 rounded-full checked:bg-blue-500 transition-all duration-300 group-hover:border-blue-400"
                      />
                      <motion.span className="absolute top-1/2 left-1/2 w-full h-full bg-blue-500 opacity-0 scale-0 rounded-full transition-transform duration-300" />
                    </div>
                    <span className="group-hover:text-blue-500 transition-all duration-200">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
              {formik.touched.projectDuration &&
              formik.errors.projectDuration ? (
                <p className="text-red-500 text-sm mt-2">
                  {formik.errors.projectDuration}
                </p>
              ) : null}
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.0 }}
              className="text-center"
            >
              <button
                type="submit"
                className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
              >
                Get Pricing
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
