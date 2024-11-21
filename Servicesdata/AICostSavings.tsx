'use client'

import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import { FaBriefcase, FaDatabase, FaHeadset, FaCubes, FaServer, FaBolt, FaGlobe, FaMobileAlt, FaIndustry, FaUserMd, FaChartLine } from 'react-icons/fa';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

interface CostData {
  name: string;
  value: number;
  color: string;
}

interface FieldData {
  name: string;
  beforeCost: number;
  afterCost: number;
  icon: React.ElementType;
}

const operationalData: CostData[] = [
  { name: "HR Costs", value: 30, color: "#FF6384" },
  { name: "Data Management", value: 25, color: "#36A2EB" },
  { name: "Customer Support", value: 20, color: "#FFCE56" },
  { name: "Inventory Management", value: 15, color: "#4BC0C0" },
  { name: "IT Infrastructure", value: 10, color: "#9966FF" },
];

const aiOptimizedData: CostData[] = [
  { name: "AI-Optimized HR", value: 10, color: "#FF6384" },
  { name: "Automated Data Management", value: 5, color: "#36A2EB" },
  { name: "AI-Powered Customer Support", value: 8, color: "#FFCE56" },
  { name: "Smart Inventory Management", value: 10, color: "#4BC0C0" },
  { name: "Optimized IT Infrastructure", value: 5, color: "#9966FF" },
];

const technologyFields: FieldData[] = [
  { name: "Web Development", beforeCost: 100, afterCost: 60, icon: FaGlobe },
  { name: "Mobile Development", beforeCost: 120, afterCost: 72, icon: FaMobileAlt },
  { name: "IoT Solutions", beforeCost: 80, afterCost: 40, icon: FaCubes },
  { name: "Healthcare Tech", beforeCost: 150, afterCost: 90, icon: FaUserMd },
];

interface SuccessStory {
  company: string;
  field: string;
  before: string;
  after: string;
  savings: string;
}

const successStories: SuccessStory[] = [
  {
    company: "TechCorp",
    field: "Web Development",
    before: "Manual coding and testing took 6 months for a large-scale web app.",
    after: "AI-assisted development reduced time to 3 months.",
    savings: "50% time reduction, $200,000 saved"
  },
  {
    company: "MobileInnovators",
    field: "Mobile Development",
    before: "Bug detection and fixing took an average of 4 weeks per release.",
    after: "AI-powered testing reduced it to 1 week.",
    savings: "75% time reduction, $150,000 saved per release"
  },
  {
    company: "HealthTech Solutions",
    field: "Healthcare Tech",
    before: "Manual data analysis for drug trials took 8 months.",
    after: "AI algorithms reduced analysis time to 2 months.",
    savings: "75% time reduction, $500,000 saved per trial"
  },
  {
    company: "SmartFactory",
    field: "Industrial Automation",
    before: "Production line inefficiencies caused 20% downtime.",
    after: "AI-driven predictive maintenance reduced downtime to 5%.",
    savings: "75% downtime reduction, $2 million saved annually"
  },
];

const CostCard: React.FC<{ title: string; value: number; icon: React.ElementType; isAfter?: boolean }> = ({ title, value, icon: Icon, isAfter = false }) => (
  <div className={`flex items-center p-6 rounded-2xl ${isAfter ? 'bg-green-100 dark:bg-green-900/20' : 'bg-red-100 dark:bg-red-900/20'} backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
    <Icon className={`w-10 h-10 mr-4 ${isAfter ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`} />
    <div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
      <p className={`text-2xl font-bold ${isAfter ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
        {value}%
      </p>
    </div>
  </div>
);

export default function AICostSavings() {
  const [activeTab, setActiveTab] = useState<'operational' | 'ai-optimized'>('operational');
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [selectedField, setSelectedField] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedPercentage(prev => (prev < 40 ? prev + 1 : 40));
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const pieChartData = {
    labels: activeTab === 'operational' ? operationalData.map(d => d.name) : aiOptimizedData.map(d => d.name),
    datasets: [
      {
        data: activeTab === 'operational' ? operationalData.map(d => d.value) : aiOptimizedData.map(d => d.value),
        backgroundColor: activeTab === 'operational' ? operationalData.map(d => d.color) : aiOptimizedData.map(d => d.color),
        borderColor: '#f3f4f6',
        borderWidth: 2,
      },
    ],
  };

  const barChartData = {
    labels: technologyFields.map(field => field.name),
    datasets: [
      {
        label: 'Before AI',
        data: technologyFields.map(field => field.beforeCost),
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'After AI',
        data: technologyFields.map(field => field.afterCost),
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#4b5563',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#4b5563',
        },
      },
      x: {
        ticks: {
          color: '#4b5563',
        },
      },
    },
  };

  return (
    <div className="min-h-screen text-gray-800 dark:bg-transparent dark:text-gray-100 p-4 sm:p-6 mb-20 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            AI-Powered Cost Savings Across Industries
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Discover how AI transforms operational efficiency and reduces costs in various technology fields.
          </p>
          <div className="relative inline-block">
            <svg className="w-48 h-48" viewBox="0 0 100 100">
              <circle
                className="text-gray-300 dark:text-gray-700 stroke-current"
                strokeWidth="10"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
              ></circle>
              <circle
                className="text-blue-600 dark:text-[#6430C2] progress-ring__circle stroke-current"
                strokeWidth="10"
                strokeLinecap="round"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 - (251.2 * animatedPercentage) / 100}
              ></circle>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-bold text-blue-600 dark:text-[#6430C2]">{animatedPercentage}%</span>
            </div>
          </div>
          <p className="text-2xl font-semibold text-blue-600 dark:text-[#6430C2] mt-4">Average Cost Reduction Across Industries</p>
        </div>

        <div className="mb-12 bg-white dark:bg-transparent backdrop-blur-sm rounded-3xl shadow-2xl p-6">
          <div className="flex flex-col sm:flex-row border-b border-gray-200 dark:border-gray-700 mb-6">
            <button
              className={`flex-1 py-3 px-4 focus:outline-none transition-colors duration-300 ${activeTab === 'operational'
                ? 'border-b-2 border-blue-600 dark:border-[#6430C2] text-blue-600 dark:text-[#6430C2] font-semibold'
                : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-[#6430C2]'
                }`}
              onClick={() => setActiveTab('operational')}
            >
              Traditional Operations
            </button>
            <button
              className={`flex-1 py-3 px-4 focus:outline-none transition-colors duration-300 ${activeTab === 'ai-optimized'
                ? 'border-b-2 border-blue-600 dark:border-[#6430C2] text-blue-600 dark:text-[#6430C2] font-semibold'
                : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-[#6430C2]'
                }`}
              onClick={() => setActiveTab('ai-optimized')}
            >
              AI-Optimized Operations
            </button>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 h-80 mb-8 lg:mb-0">
              <Pie data={pieChartData} options={chartOptions} />
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {(activeTab === 'operational' ? operationalData : aiOptimizedData).map((item, index) => (
                <CostCard
                  key={index}
                  title={item.name}
                  value={item.value}
                  icon={
                    index === 0 ? FaBriefcase :
                      index === 1 ? FaDatabase :
                        index === 2 ? FaHeadset :
                          index === 3 ? FaCubes :
                            FaServer
                  }
                  isAfter={activeTab === 'ai-optimized'}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 mb-12 bg-white dark:bg-transparent backdrop-blur-sm rounded-3xl shadow-2xl p-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">
            Cost Savings by Technology Field
          </h2>
          <div className="h-96 mb-8">
            <Bar data={barChartData} options={chartOptions} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {technologyFields.map((field, index) => (
              <button
                key={index}
                className={`p-4 rounded-xl transition-all duration-300 flex flex-col items-center justify-center ${selectedField === field.name ? 'bg-blue-600 dark:bg-[#6430C2] text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                onClick={() => setSelectedField(field.name === selectedField ? null : field.name)}
              >
                <field.icon className="w-8 h-8 mb-2" />
                <span className="text-sm text-center">{field.name}</span>
              </button>
            ))}
          </div>
          {selectedField && (
            <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">{selectedField} Insights</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Before AI: ${technologyFields.find(f => f.name === selectedField)?.beforeCost}k average project cost
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                After AI: ${technologyFields.find(f => f.name === selectedField)?.afterCost}k average project cost
              </p>
              <p className="text-green-600 dark:text-green-400 font-semibold mt-2">
                {Math.round((1 - (technologyFields.find(f => f.name === selectedField)?.afterCost || 0) /
                  (technologyFields.find(f => f.name === selectedField)?.beforeCost || 1)) * 100)}% cost reduction
              </p>
            </div>
          )}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">
            AI Success Stories
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white dark:bg-transparent  dark:border dark:border-white shadow-xl rounded-3xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center mb-4">
                  <FaBolt className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mr-3" />
                  <h3 className="font-semibold text-2xl text-gray-800 dark:text-gray-200">{story.company}</h3>
                </div>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{story.field}</p>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-red-600 dark:text-red-400 mb-2">Before AI:</p>
                    <p className="text-gray-700 dark:text-gray-300">{story.before}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-600 dark:text-green-400 mb-2">After AI:</p>
                    <p className="text-gray-700 dark:text-gray-300">{story.after}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-yellow-600 dark:text-yellow-400 mb-2">Savings:</p>
                    <p className="text-gray-700 dark:text-gray-300">{story.savings}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}