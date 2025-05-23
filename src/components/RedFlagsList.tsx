import React from 'react';
import { redFlags } from '../data/redFlags';
import { AlertTriangle } from 'lucide-react';

export function RedFlagsList() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Common Red Flags</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {redFlags.map((flag) => (
            <div 
              key={flag.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-center mb-4">
                <AlertTriangle 
                  className={`w-6 h-6 mr-2 ${
                    flag.severity === 'high' ? 'text-red-500' :
                    flag.severity === 'medium' ? 'text-yellow-500' :
                    'text-blue-500'
                  }`}
                />
                <h3 className="text-lg font-semibold">{flag.title}</h3>
              </div>
              <p className="text-gray-600">{flag.description}</p>
              <div className="mt-4">
                <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                  flag.category === 'token' ? 'bg-purple-100 text-purple-800' :
                  flag.category === 'smart-contract' ? 'bg-blue-100 text-blue-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {flag.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}// Add loading state to dashboard - 2025-04-01
// Optimize learningModules.js imports - 2025-04-02
// Adjust RedFlagsList spacing - 2025-04-03
// Add comments for maintainability - 2025-04-03
// Improve wallet connection reliability - 2025-04-03
// Enhance leaderboard data fetch - 2025-04-04
// Improve wallet connection reliability - 2025-04-04
// Update memoization in CryptoDashboard - 2025-04-05
// Improve wallet connection reliability - 2025-04-08
// Enhance leaderboard data fetch - 2025-04-09
// Add loading state to dashboard - 2025-04-10
// Fix types in Learn.tsx - 2025-04-10
// Add loading state to dashboard - 2025-04-11
// Fix header alignment issue - 2025-04-12
// Optimize learningModules.js imports - 2025-04-12
// Handle edge cases in transaction data - 2025-04-15
// Handle edge cases in transaction data - 2025-04-17
// Fix types in Learn.tsx - 2025-04-17
// Add fallback UI for Analyze.tsx - 2025-04-18
// Fix header alignment issue - 2025-04-19
// Add comments for maintainability - 2025-04-20
// Improve wallet connection reliability - 2025-04-21
// Enhance leaderboard data fetch - 2025-04-21
// Fix header alignment issue - 2025-04-22
// Add link to RugPullBasics page - 2025-04-23
// Fix header alignment issue - 2025-04-24
// Optimize learningModules.js imports - 2025-04-25
// Update memoization in CryptoDashboard - 2025-04-26
// Add fallback UI for Analyze.tsx - 2025-04-27
// Fix header alignment issue - 2025-04-27
// Refactor GuardianLevels component - 2025-04-30
