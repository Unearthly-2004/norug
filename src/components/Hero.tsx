import React from 'react';
import { Shield, AlertTriangle, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6">Protect Your Crypto Investment</h1>
          <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
            Learn to identify and prevent rug pulls through our gamified platform.
            Earn rewards while protecting the community.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg">
              <Shield className="w-12 h-12 mb-4 mx-auto text-purple-300" />
              <h3 className="text-xl font-semibold mb-2">Learn</h3>
              <p className="text-purple-200">Master the fundamentals of crypto security</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg">
              <AlertTriangle className="w-12 h-12 mb-4 mx-auto text-purple-300" />
              <h3 className="text-xl font-semibold mb-2">Analyze</h3>
              <p className="text-purple-200">Detect potential threats and vulnerabilities</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg">
              <Trophy className="w-12 h-12 mb-4 mx-auto text-purple-300" />
              <h3 className="text-xl font-semibold mb-2">Earn</h3>
              <p className="text-purple-200">Get rewarded for protecting the community</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}// Handle edge cases in transaction data - 2025-04-03
// Add loading state to dashboard - 2025-04-08
// Adjust RedFlagsList spacing - 2025-04-09
// Add comments for maintainability - 2025-04-11
// Refactor GuardianLevels component - 2025-04-11
// Fix header alignment issue - 2025-04-13
// Optimize learningModules.js imports - 2025-04-14
// Refactor GuardianLevels component - 2025-04-15
// Fix header alignment issue - 2025-04-16
// Refactor GuardianLevels component - 2025-04-16
// Update memoization in CryptoDashboard - 2025-04-18
// Handle edge cases in transaction data - 2025-04-18
// Optimize learningModules.js imports - 2025-04-19
// Refactor GuardianLevels component - 2025-04-20
// Fix header alignment issue - 2025-04-20
// Add fallback UI for Analyze.tsx - 2025-04-21
// Add link to RugPullBasics page - 2025-04-21
// Fix header alignment issue - 2025-04-21
// Add comments for maintainability - 2025-04-22
// Fix types in Learn.tsx - 2025-04-23
// Fix header alignment issue - 2025-04-23
// Optimize learningModules.js imports - 2025-04-25
// Fix types in Learn.tsx - 2025-04-25
// Fix header alignment issue - 2025-04-27
