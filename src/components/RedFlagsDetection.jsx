import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

export function RedFlagsDetection() {
  const [completedSections, setCompletedSections] = useState([]);

  const sections = [
    {
      title: 'Suspicious Tokenomics',
      content: 'Analyze the token distribution, total supply, and how tokens are allocated. Uneven distribution or massive developer holdings are major red flags.'
    },
    {
      title: 'Team Verification',
      content: 'Legitimate projects have transparent, verifiable team members with professional backgrounds. Anonymous or fake team profiles are warning signs.'
    },
    {
      title: 'Unrealistic Promises',
      content: 'Be wary of projects promising guaranteed returns, revolutionary technologies, or astronomical gains with no substantive proof.'
    }
  ];

  const toggleSectionCompletion = (index) => {
    setCompletedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-center mb-12">Red Flags Detection</h1>
          <div className="max-w-2xl mx-auto space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                whileHover={{ scale: 1.02 }}
                className={`bg-white/10 p-6 rounded-xl backdrop-blur-lg ${
                  completedSections.includes(index)
                    ? 'border-2 border-orange-500'
                    : 'border-2 border-transparent hover:border-purple-500'
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                  <button
                    onClick={() => toggleSectionCompletion(index)}
                    className="text-sm flex items-center"
                  >
                    {completedSections.includes(index) ? (
                      <CheckCircle className="text-orange-500 mr-2" />
                    ) : (
                      <XCircle className="text-purple-500 mr-2" />
                    )}
                    {completedSections.includes(index) ? 'Completed' : 'Mark Complete'}
                  </button>
                </div>
                <p className="text-purple-200">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
// Adjust RedFlagsList spacing - 2025-04-04
// Improve wallet connection reliability - 2025-04-05
// Add comments for maintainability - 2025-04-05
// Fix types in Learn.tsx - 2025-04-09
// Improve wallet connection reliability - 2025-04-09
// Enhance leaderboard data fetch - 2025-04-09
// Add fallback UI for Analyze.tsx - 2025-04-09
// Add link to RugPullBasics page - 2025-04-09
// Update memoization in CryptoDashboard - 2025-04-09
// Optimize learningModules.js imports - 2025-04-10
// Fix types in Learn.tsx - 2025-04-10
// Improve UX on MemecoinPage - 2025-04-12
// Add loading state to dashboard - 2025-04-12
// Refactor GuardianLevels component - 2025-04-14
// Add comments for maintainability - 2025-04-15
// Optimize learningModules.js imports - 2025-04-16
// Enhance leaderboard data fetch - 2025-04-17
// Enhance leaderboard data fetch - 2025-04-18
// Handle edge cases in transaction data - 2025-04-21
// Optimize learningModules.js imports - 2025-04-22
// Add fallback UI for Analyze.tsx - 2025-04-22
// Handle edge cases in transaction data - 2025-04-24
// Add loading state to dashboard - 2025-04-25
// Adjust RedFlagsList spacing - 2025-04-25
// Optimize learningModules.js imports - 2025-04-25
// Add link to RugPullBasics page - 2025-04-25
// Adjust RedFlagsList spacing - 2025-04-30
