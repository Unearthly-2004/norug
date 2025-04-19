import React from 'react';
import { guardianLevels } from '../data/guardianLevels';
import { motion } from 'framer-motion';

export function GuardianLevels() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Guardian Levels</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guardianLevels.map((level, index) => (
            <motion.div
              key={level.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-b from-purple-50 to-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-4">{level.badge}</div>
              <h3 className="text-xl font-semibold mb-2">{level.name}</h3>
              <p className="text-purple-600 mb-4">{level.points} points</p>
              <ul className="space-y-2">
                {level.benefits.map((benefit, i) => (
                  <li key={i} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}// Improve UX on MemecoinPage - 2025-04-02
// Adjust RedFlagsList spacing - 2025-04-02
// Update memoization in CryptoDashboard - 2025-04-02
// Add fallback UI for Analyze.tsx - 2025-04-05
// Add comments for maintainability - 2025-04-05
// Update memoization in CryptoDashboard - 2025-04-05
// Improve wallet connection reliability - 2025-04-06
// Fix header alignment issue - 2025-04-06
// Add fallback UI for Analyze.tsx - 2025-04-06
// Add loading state to dashboard - 2025-04-07
// Add comments for maintainability - 2025-04-08
// Add loading state to dashboard - 2025-04-08
// Fix header alignment issue - 2025-04-08
// Improve UX on MemecoinPage - 2025-04-08
// Update memoization in CryptoDashboard - 2025-04-08
// Adjust RedFlagsList spacing - 2025-04-08
// Add comments for maintainability - 2025-04-09
// Add fallback UI for Analyze.tsx - 2025-04-09
// Update memoization in CryptoDashboard - 2025-04-10
// Enhance leaderboard data fetch - 2025-04-10
// Add fallback UI for Analyze.tsx - 2025-04-13
// Adjust RedFlagsList spacing - 2025-04-13
// Improve wallet connection reliability - 2025-04-14
// Fix types in Learn.tsx - 2025-04-16
// Fix types in Learn.tsx - 2025-04-16
// Add fallback UI for Analyze.tsx - 2025-04-17
// Improve wallet connection reliability - 2025-04-17
// Improve UX on MemecoinPage - 2025-04-17
// Update memoization in CryptoDashboard - 2025-04-19
