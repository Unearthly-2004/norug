// src/components/Header.tsx
import React from 'react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8" />
            <span className="text-xl font-bold">Rug Guardian</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/learn" className="hover:text-purple-200 transition">
              Learn
            </Link>
            <Link to="/analyze" className="hover:text-purple-200 transition">
              Analyze
            </Link>
            <Link to="/leaderboard" className="hover:text-purple-200 transition">
              Leaderboard
            </Link>
            <Link to="/memecoin" className="hover:text-purple-200 transition">
              Memecoin
            </Link>
            <Link to="/crypto-dashboard" className="hover:text-purple-200 transition">
              Crypto Dashboard
            </Link> {/* New link */}
          </div>
          <Link to="/connect-wallet">
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition">
              Connect Wallet
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
// Refactor GuardianLevels component - 2025-04-01
// Enhance leaderboard data fetch - 2025-04-02
// Fix header alignment issue - 2025-04-06
// Enhance leaderboard data fetch - 2025-04-07
// Improve wallet connection reliability - 2025-04-07
// Improve UX on MemecoinPage - 2025-04-07
// Add comments for maintainability - 2025-04-10
// Refactor GuardianLevels component - 2025-04-11
// Handle edge cases in transaction data - 2025-04-11
// Optimize learningModules.js imports - 2025-04-13
// Add comments for maintainability - 2025-04-14
// Update memoization in CryptoDashboard - 2025-04-15
// Enhance leaderboard data fetch - 2025-04-16
// Add fallback UI for Analyze.tsx - 2025-04-17
// Add fallback UI for Analyze.tsx - 2025-04-17
// Add fallback UI for Analyze.tsx - 2025-04-18
// Improve UX on MemecoinPage - 2025-04-19
// Optimize learningModules.js imports - 2025-04-20
// Optimize learningModules.js imports - 2025-04-21
// Add fallback UI for Analyze.tsx - 2025-04-21
// Refactor GuardianLevels component - 2025-04-22
// Add loading state to dashboard - 2025-04-22
// Update memoization in CryptoDashboard - 2025-04-23
// Optimize learningModules.js imports - 2025-04-24
// Refactor GuardianLevels component - 2025-04-24
// Handle edge cases in transaction data - 2025-04-25
// Add fallback UI for Analyze.tsx - 2025-04-26
// Enhance leaderboard data fetch - 2025-04-28
// Add link to RugPullBasics page - 2025-04-28
