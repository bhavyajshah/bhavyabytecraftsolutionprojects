'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Upload, Send } from 'lucide-react'

export function RequestQuoteComponent() {
  const [fileName, setFileName] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950 flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left side - Form */}
            <div className="p-8 lg:p-12 flex-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Request a Quote</h2>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your full name" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="project-details">Project Details</Label>
                  <Textarea id="project-details" placeholder="Tell us about your project" className="mt-1" rows={4} />
                </div>
                <div>
                  <Label htmlFor="file" className="cursor-pointer inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300">
                    <Upload className="mr-2 h-4 w-4" />
                    {fileName || 'Upload File'}
                  </Label>
                  <Input
                    id="file"
                    type="file"
                    className="hidden"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || null)}
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition duration-300 transform hover:scale-105">
                  <Send className="mr-2 h-4 w-4" />
                  Send Request
                </Button>
              </form>
            </div>

            {/* Right side - Decorative */}
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-8 lg:p-12 flex-1 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="stars"></div>
                <div className="stars2"></div>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s Create Something Amazing</h3>
                  <p className="text-purple-100 mb-8">Our team is ready to bring your ideas to life. Get a personalized quote for your project today!</p>
                </motion.div>
                <motion.img
                  src="/placeholder.svg?height=200&width=200"
                  alt="3D Illustration"
                  className="w-48 h-48 object-contain mx-auto"
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8, duration: 0.8, type: 'spring' }}
                />
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  <Link href="/portfolio" className="text-white hover:text-purple-200 transition duration-300">
                    View Our Portfolio <span aria-hidden="true">→</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}