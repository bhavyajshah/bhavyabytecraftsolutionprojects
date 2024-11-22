"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, LineChart, Line, Tooltip, Legend, ResponsiveContainer, XAxis, YAxis, Cell } from "recharts"
import { Users, CheckCircle, TrendingUp, BarChartIcon, Zap, ThumbsUp, PieChartIcon } from 'lucide-react'

const projectManagerData = [
  { name: "Completion Ratio", value: 97 },
  { name: "Budget Efficiency", value: 85 },
  { name: "Team Productivity", value: 78 },
  { name: "Stakeholder Satisfaction", value: 92 },
]

const projectProgressData = [
  { month: "Jan", withPM: 30, withoutPM: 20 },
  { month: "Feb", withPM: 45, withoutPM: 30 },
  { month: "Mar", withPM: 65, withoutPM: 40 },
  { month: "Apr", withPM: 80, withoutPM: 55 },
  { month: "May", withPM: 95, withoutPM: 65 },
  { month: "Jun", withPM: 100, withoutPM: 75 },
]

const comparisonData = [
  { metric: "Project Completion Rate", withPM: "97%", withoutPM: "60%", icon: Zap },
  { metric: "Budget Adherence", withPM: "95%", withoutPM: "70%", icon: BarChartIcon },
  { metric: "Team Productivity", withPM: "High", withoutPM: "Medium", icon: Users },
  { metric: "Stakeholder Satisfaction", withPM: "92%", withoutPM: "65%", icon: ThumbsUp },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export function OptimizedPmValue() {
  return (
    <div className="w-full min-h-screen py-16 text-foreground bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        <CardHeader>
          <CardTitle className="text-5xl font-bold text-center">
            Unleash Your Project&apos;s Potential with Professional Management
          </CardTitle>
        </CardHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center flex items-center justify-center">
                  <PieChartIcon className="mr-2 h-8 w-8" />
                  Project Manager Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={projectManagerData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {projectManagerData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center flex items-center justify-center">
                  <TrendingUp className="mr-2 h-8 w-8" />
                  Project Progress Acceleration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={projectProgressData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="withPM" stroke="#8884d8" />
                    <Line type="monotone" dataKey="withoutPM" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center flex items-center justify-center">
                  <BarChartIcon className="mr-2 h-8 w-8" />
                  PM vs No PM: The Clear Advantage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {comparisonData.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <item.icon className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="font-semibold text-lg">{item.metric}</h3>
                          <p>With PM: {item.withPM}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p>Without PM: {item.withoutPM}</p>
                        <p className="text-primary font-semibold">
                          +{parseInt(item.withPM) - parseInt(item.withoutPM)}% Improvement
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center flex items-center justify-center">
                  <CheckCircle className="mr-2 h-8 w-8" />
                  Key Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Boost project completion rates by up to 37%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Enhance budget adherence, saving valuable resources</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Elevate team productivity to new heights</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Delight stakeholders with exceptional results</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center mb-4">Take the First Step Towards Project Success</h2>
            <p className="text-center text-lg">Let us help you achieve your project goals effectively and efficiently. Contact us to learn more about how a professional Project Manager can make a difference in your project outcomes.</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

