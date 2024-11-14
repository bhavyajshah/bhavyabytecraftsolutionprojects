"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail, User, Phone, Building, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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

const checkboxOptions = [
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "Custom Software",
  "AI Development",
  "Blockchain Integration",
];

const radioOptions = [
  "Less than 3 months",
  "3-6 months",
  "6-12 months",
  "More than 12 months",
];

const softwareDevelopmentProcess = [
  "Idea",
  "Prototype",
  "MVP",
  "Designed solution",
  "In Production",
];

const teamMember = [
  "Project Manager",
  "UI/UX Designer",
  "Business Analyst",
  "Architect",
  "DevOps Engineer",
  "Quality Assurance",
  "Software Engineer",
];

export default function ContactSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', message: '' });

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
      developmentStage: Yup.string().required("Development stage is required"),
      teamMembers: Yup.array().min(1, "Please select at least one team member"),
      projectDuration: Yup.string().required("Project duration is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch('http://44.216.236.253:9091/api/v1/contact-us/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'API-Key': 'fMtWsvxgATjtQJFVU76XLmjbD9sE4QHf'
          },
          body: JSON.stringify({
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            description: `Software Types: ${values.softwareType.join(', ')}\nProject Duration: ${values.projectDuration}\nTeam Members: ${values.teamMembers.join(', ')}\nProject Stage: ${values.developmentStage}`,
            phone_number: values.phone,
            company_name: values.company,
            hear_about_us: values.referral,
            software_types: values.softwareType.join(', '),
            project_duration: values.projectDuration,
            team_members: values.teamMembers.join(', '),
            project_stage: values.developmentStage
          }),
        });

        if (response.ok) {
          setDialogContent({
            title: 'Success',
            message: 'Your message has been sent successfully. We will get back to you soon.'
          });
          resetForm();
        } else {
          const errorData = await response.json();
          setDialogContent({
            title: 'Error',
            message: errorData.message || 'An error occurred while submitting the form. Please try again.'
          });
        }
      } catch (error) {
        setDialogContent({
          title: 'Error',
          message: 'An error occurred while submitting the form. Please try again.'
        });
        console.error(error);
      }
      setIsDialogOpen(true);
    },
  });

  return (
    <section id="contact" className="py-16 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-100 dark:to-white">Get in Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We&apos;re excited to hear about your project. Fill out the form below, and let&apos;s create something amazing together.
          </p>
        </motion.div>

        <div className="bg-white dark:bg-transparent border border-gray-200 dark:border-white rounded-2xl shadow-xl overflow-hidden">
          <form onSubmit={formik.handleSubmit} className="p-8 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Label htmlFor="firstName">First Name *</Label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your First Name"
                    className="pl-10"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                  />
                </div>
                {formik.touched.firstName && formik.errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.firstName}</p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Label htmlFor="lastName">Last Name *</Label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your Last Name"
                    className="pl-10"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                  />
                </div>
                {formik.touched.lastName && formik.errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.lastName}</p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Label htmlFor="email">Email *</Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your Email"
                    className="pl-10"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                </div>
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative mt-1">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your Phone Number"
                    className="pl-10"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Label htmlFor="company">Company Name</Label>
                <div className="relative mt-1">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="company"
                    name="company"
                    placeholder="Enter your Company Name"
                    className="pl-10"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.company}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Label htmlFor="referral">How did you hear about us? *</Label>
                <div className="relative mt-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="referral"
                    name="referral"
                    placeholder="Tell us how you heard about us"
                    className="pl-10"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.referral}
                  />
                </div>
                {formik.touched.referral && formik.errors.referral && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.referral}</p>
                )}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                1. What type of software solution would you like to develop with us? *
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {checkboxOptions.map((option) => (
                  <div className="flex items-center space-x-2" key={option}>
                    <Checkbox
                      id={option}
                      name="softwareType"
                      value={option}
                      checked={formik.values.softwareType.includes(option)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          formik.setFieldValue("softwareType", [...formik.values.softwareType, option]);
                        } else {
                          formik.setFieldValue(
                            "softwareType",
                            formik.values.softwareType.filter((type) => type !== option)
                          );
                        }
                      }}
                    />
                    <Label htmlFor={option}>{option}</Label>
                  </div>
                ))}
              </div>
              {formik.touched.softwareType && formik.errors.softwareType && (
                <p className="text-red-500 text-sm mt-2">{formik.errors.softwareType}</p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <p className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                2. What is the expected duration of your project? *
              </p>
              <RadioGroup
                name="projectDuration"
                value={formik.values.projectDuration}
                onValueChange={(value) => formik.setFieldValue("projectDuration", value)}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {radioOptions.map((option) => (
                    <div className="flex items-center space-x-2" key={option}>
                      <RadioGroupItem value={option} id={option} />
                      <Label htmlFor={option}>{option}</Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
              {formik.touched.projectDuration && formik.errors.projectDuration && (
                <p className="text-red-500 text-sm mt-2">{formik.errors.projectDuration}</p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <p className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                3. What team members do you need for your project? *
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {teamMember.map((option) => (
                  <div className="flex items-center space-x-2" key={option}>
                    <Checkbox
                      id={option}
                      name="teamMembers"
                      value={option}
                      checked={formik.values.teamMembers.includes(option)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          formik.setFieldValue("teamMembers", [...formik.values.teamMembers, option]);
                        } else {
                          formik.setFieldValue(
                            "teamMembers",
                            formik.values.teamMembers.filter((member) => member !== option)
                          );
                        }
                      }}
                    />
                    <Label htmlFor={option}>{option}</Label>
                  </div>
                ))}
              </div>
              {formik.touched.teamMembers && formik.errors.teamMembers && (
                <p className="text-red-500 text-sm mt-2">{formik.errors.teamMembers}</p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <p className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                4. What is the current stage of your software development process? *
              </p>
              <RadioGroup
                name="developmentStage"
                value={formik.values.developmentStage}
                onValueChange={(value) => formik.setFieldValue("developmentStage", value)}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {softwareDevelopmentProcess.map((option) => (
                    <div className="flex items-center space-x-2" key={option}>
                      <RadioGroupItem value={option} id={option} />
                      <Label htmlFor={option}>{option}</Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
              {formik.touched.developmentStage && formik.errors.developmentStage && (
                <p className="text-red-500 text-sm mt-2">{formik.errors.developmentStage}</p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-center"
            >
              <Button
                type="submit"
                className="w-full sm:w-auto px-8 py-3  hero-button-gradient hero-button text-white font-medium rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Get Your Free Quote
              </Button>
            </motion.div>
          </form>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] border-gray-700 backdrop-blur-sm bg-gray-900/30 text-white border rounded-lg shadow-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <DialogHeader className="space-y-4">
              <div className="mx-auto w-16 h-16">
                {dialogContent.title === 'Success' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>
              <DialogTitle className={`text-2xl font-bold text-center ${dialogContent.title === 'Success' ? "text-green-400" : "text-red-400"}`}>
                {dialogContent.title}
              </DialogTitle>
              <DialogDescription className="text-center text-gray-300">
                {dialogContent.message}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-6 flex justify-center">
              <Button
                onClick={() => setIsDialogOpen(false)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${dialogContent.title === 'Success'
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-red-500 hover:bg-red-600 text-white"
                  }`}
              >
                {dialogContent.title === 'Success' ? 'Great!' : 'Try Again'}
              </Button>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </section>
  );
}