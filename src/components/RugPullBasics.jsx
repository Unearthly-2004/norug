import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

export function RugPullBasics() {
  const [completedSections, setCompletedSections] = useState([]);

  const sections = [
    {
      title: 'What is a Rug Pull?',
      content: 'A rug pull is a malicious crypto scam where project developers abandon the project and steal investors\' funds, typically by draining the liquidity pool or manipulating token mechanics.'
    },
    {
      title: 'Types of Rug Pulls',
      content: 'There are three main types: Liquidity Stealing, Limiting Sell Orders, and Pump and Dump schemes. Each method involves different tactics to deceive investors.'
    },
    {
      title: 'How Scammers Operate',
      content: 'Scammers often create seemingly legitimate projects with professional websites, fake team members, and aggressive marketing to attract unsuspecting investors.'
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
          <h1 className="text-4xl font-bold text-center mb-12">Rug Pull Basics</h1>
          <div className="max-w-2xl mx-auto space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                whileHover={{ scale: 1.02 }}
                className={`bg-white/10 p-6 rounded-xl backdrop-blur-lg ${
                  completedSections.includes(index)
                    ? 'border-2 border-green-500'
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
                      <CheckCircle className="text-green-500 mr-2" />
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
// Handle edge cases in transaction data - 2025-04-01
// Improve UX on MemecoinPage - 2025-04-02
// Optimize learningModules.js imports - 2025-04-05
// Add link to RugPullBasics page - 2025-04-05
// Add comments for maintainability - 2025-04-11
// Fix header alignment issue - 2025-04-13
// Refactor GuardianLevels component - 2025-04-13
// Improve UX on MemecoinPage - 2025-04-14
// Optimize learningModules.js imports - 2025-04-15
// Improve UX on MemecoinPage - 2025-04-15
// Add fallback UI for Analyze.tsx - 2025-04-23
// Improve wallet connection reliability - 2025-04-23
// Add loading state to dashboard - 2025-04-23
// Handle edge cases in transaction data - 2025-04-24
// Handle edge cases in transaction data - 2025-04-24
// Improve wallet connection reliability - 2025-04-24
// Adjust RedFlagsList spacing - 2025-04-25
// Improve wallet connection reliability - 2025-04-26
// Add loading state to dashboard - 2025-04-26
// Adjust RedFlagsList spacing - 2025-04-28
// Improve UX on MemecoinPage - 2025-04-29
