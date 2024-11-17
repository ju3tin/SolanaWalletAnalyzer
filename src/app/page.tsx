// pages/index.tsx
"use client"
import React, { useState } from 'react';
import WalletInput from '../components/WalletInput';
import InsightsDisplay from '../components/InsightsDisplay';
import { fetchWalletData } from '../utils/fetchWalletData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  const [insights, setInsights] = useState(null);

  const handleAnalyze = async (walletAddress: string) => {
    try {
      const data = await fetchWalletData(walletAddress);
      setInsights(data);
    } catch (error) {
      toast.error("Failed to fetch wallet insights. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Solana Wallet Analyzer</h1>
      <WalletInput onAnalyze={handleAnalyze} />
      <InsightsDisplay insights={insights} />
      <ToastContainer />
    </div>
  );
};

export default Home;