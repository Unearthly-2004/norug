// src/components/ConnectWalletPage.tsx

import React, { useState, useEffect } from 'react';

const ConnectWalletPage = () => {
  const [walletId, setWalletId] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [walletType, setWalletType] = useState<'metaMask' | 'phantom' | null>(null);

  // Function to check if MetaMask is installed
  const checkMetaMask = (): boolean => {
    return typeof window.ethereum !== 'undefined';
  };

  // Function to check if Phantom is installed
  const checkPhantom = (): boolean => {
    return typeof window.solana !== 'undefined' && window.solana.isPhantom;
  };

  // Function to connect MetaMask wallet
  const connectMetaMask = async () => {
    if (!checkMetaMask()) {
      alert('MetaMask is not installed');
      return;
    }

    try {
      const accounts: string[] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setWalletId(accounts[0]);
      setIsConnected(true);
      setWalletType('metaMask');
    } catch (err) {
      console.error(err);
      alert('Failed to connect MetaMask');
    }
  };

  // Function to connect Phantom wallet
  const connectPhantom = async () => {
    if (!checkPhantom()) {
      alert('Phantom wallet is not installed');
      return;
    }

    try {
      const response = await window.solana.connect();
      setWalletId(response.publicKey.toString());
      setIsConnected(true);
      setWalletType('phantom');
    } catch (err) {
      console.error(err);
      alert('Failed to connect Phantom wallet');
    }
  };

  // Function to disconnect wallet
  const disconnectWallet = () => {
    setWalletId(null);
    setIsConnected(false);
    setWalletType(null);
  };

  // Listen for account changes
  useEffect(() => {
    if (checkMetaMask()) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        setWalletId(accounts[0] || null);
        setIsConnected(!!accounts[0]);
      });
    }

    if (checkPhantom()) {
      window.solana.on('connect', () => {
        setWalletId(window.solana.publicKey.toString());
        setIsConnected(true);
      });

      window.solana.on('disconnect', () => {
        setWalletId(null);
        setIsConnected(false);
      });
    }
  }, []);

  return (
    <div className="container mx-auto py-8 px-6">
      <h1 className="text-3xl font-semibold mb-6">Connect Your Wallet</h1>
      {isConnected ? (
        <div>
          <p><strong>Wallet ID:</strong> {walletId}</p>
          <button
            onClick={disconnectWallet}
            className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
          >
            Disconnect Wallet
          </button>
        </div>
      ) : (
        <div>
          <div className="mb-4">
            <button
              onClick={connectMetaMask}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Connect MetaMask
            </button>
          </div>
          <div>
            <button
              onClick={connectPhantom}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
            >
              Connect Phantom Wallet
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectWalletPage;
// Add fallback UI for Analyze.tsx - 2025-04-01
// Fix types in Learn.tsx - 2025-04-03
// Improve UX on MemecoinPage - 2025-04-05
// Fix header alignment issue - 2025-04-07
// Add fallback UI for Analyze.tsx - 2025-04-08
// Add link to RugPullBasics page - 2025-04-08
// Add loading state to dashboard - 2025-04-08
// Update memoization in CryptoDashboard - 2025-04-09
// Adjust RedFlagsList spacing - 2025-04-09
// Add comments for maintainability - 2025-04-09
// Adjust RedFlagsList spacing - 2025-04-09
// Enhance leaderboard data fetch - 2025-04-10
// Adjust RedFlagsList spacing - 2025-04-11
// Adjust RedFlagsList spacing - 2025-04-12
// Optimize learningModules.js imports - 2025-04-14
// Add loading state to dashboard - 2025-04-14
// Fix header alignment issue - 2025-04-15
// Fix types in Learn.tsx - 2025-04-16
// Add comments for maintainability - 2025-04-19
// Add fallback UI for Analyze.tsx - 2025-04-19
// Fix header alignment issue - 2025-04-19
// Improve UX on MemecoinPage - 2025-04-21
// Add loading state to dashboard - 2025-04-21
// Adjust RedFlagsList spacing - 2025-04-22
// Improve UX on MemecoinPage - 2025-04-24
// Improve UX on MemecoinPage - 2025-04-25
// Add comments for maintainability - 2025-04-26
// Add loading state to dashboard - 2025-04-26
// Update memoization in CryptoDashboard - 2025-04-26
// Optimize learningModules.js imports - 2025-04-28
// Optimize learningModules.js imports - 2025-04-30
