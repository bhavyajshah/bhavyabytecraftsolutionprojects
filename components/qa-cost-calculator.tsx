'use client'

import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { motion } from 'framer-motion'
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Toast } from "@/components/ui/toast"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const validationSchema = Yup.object().shape({
  platform: Yup.array().min(1, 'Select at least one platform'),
  service: Yup.array().min(1, 'Select at least one service'),
  specialists: Yup.object().test(
    'at-least-one-specialist',
    'Select at least one specialist',
    (obj) => Object.values(obj).some((val) => val > 0)
  ),
  duration: Yup.number().min(1, 'Duration must be at least 1 month').required('Duration is required'),
})

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export function QaCostCalculator() {
  const { toast } = useToast()

  const initialValues = {
    platform: [],
    service: [],
    specialists: {
      QAArchitect: 0,
      QALead: 0,
      QAEngineer: 0,
      QAAutomationEngineer: 0,
      PerformanceTester: 0
    },
    duration: 1
  }

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2))
      toast({
        title: "Calculation Complete",
        description: "Your QA service cost has been calculated.",
        action: <Toast.Action altText="View Details">View Details</Toast.Action>,
      })
      setSubmitting(false)
    }, 500)
  }

  return (
    <motion.div 
      className="max-w-4xl mx-auto p-4 sm:p-6 space-y-8"
      initial="initial"
      animate="animate"
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
      }}
    >
      <motion.h1 
        className="text-3xl sm:text-4xl font-bold text-center text-primary mb-8"
        variants={fadeInUp}
      >
        Calculate Your Software QA Service Cost
      </motion.h1>
      
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, setFieldValue, isSubmitting }) => (
          <Form className="space-y-8">
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>1. Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    {['Web', 'Mobile', 'Desktop', 'IoT', 'Cloud'].map((item) => (
                      <motion.div key={item} className="flex items-center" whileHover={{ scale: 1.05 }}>
                        <Checkbox
                          id={`platform-${item}`}
                          checked={values.platform.includes(item)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setFieldValue('platform', [...values.platform, item]);
                            } else {
                              setFieldValue('platform', values.platform.filter((i) => i !== item));
                            }
                          }}
                        />
                        <label htmlFor={`platform-${item}`} className="ml-2 text-sm font-medium">
                          {item}
                        </label>
                      </motion.div>
                    ))}
                  </div>
                  {errors.platform && touched.platform && <div className="text-red-500 text-sm mt-2">{errors.platform}</div>}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>2. Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    {['Test Automation', 'Test Management', 'Consulting and Audit', 'Team Augmentation', 'Performance Testing', 'Security Testing'].map((item) => (
                      <motion.div key={item} className="flex items-center" whileHover={{ scale: 1.05 }}>
                        <Checkbox
                          id={`service-${item}`}
                          checked={values.service.includes(item)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setFieldValue('service', [...values.service, item]);
                            } else {
                              setFieldValue('service', values.service.filter((i) => i !== item));
                            }
                          }}
                        />
                        <label htmlFor={`service-${item}`} className="ml-2 text-sm font-medium">
                          {item}
                        </label>
                      </motion.div>
                    ))}
                  </div>
                  {errors.service && touched.service && <div className="text-red-500 text-sm mt-2">{errors.service}</div>}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>3. Specialists</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(values.specialists).map(([key, value]) => (
                      <motion.div key={key} className="flex items-center justify-between" whileHover={{ scale: 1.05 }}>
                        <span className="text-sm font-medium">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                        <div className="flex items-center">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="px-2 py-1"
                            onClick={() => setFieldValue(`specialists.${key}`, Math.max(0, value - 1))}
                          >
                            -
                          </Button>
                          <span className="px-4 py-1 bg-secondary text-secondary-foreground rounded-md mx-1">{value}</span>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="px-2 py-1"
                            onClick={() => setFieldValue(`specialists.${key}`, value + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  {errors.specialists && touched.specialists && <div className="text-red-500 text-sm mt-2">{errors.specialists}</div>}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>4. Duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <Slider
                    min={1}
                    max={24}
                    step={1}
                    value={[values.duration]}
                    onValueChange={(value) => setFieldValue('duration', value[0])}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-2 text-xs sm:text-sm text-muted-foreground">
                    <span>1 month</span>
                    <span>6 months</span>
                    <span>1 year</span>
                    <span>1.5 years</span>
                    <span>2+ years</span>
                  </div>
                  <p className="mt-2 text-center font-medium">Selected: {values.duration} {values.duration === 1 ? 'month' : 'months'}</p>
                  {errors.duration && touched.duration && <div className="text-red-500 text-sm mt-2">{errors.duration}</div>}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 rounded-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Calculating...' : 'Get Your Personalized QA Cost Estimate'}
              </Button>
            </motion.div>
          </Form>
        )}
      </Formik>
    </motion.div>
  )
}