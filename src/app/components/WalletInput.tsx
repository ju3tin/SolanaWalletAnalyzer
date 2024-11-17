// components/WalletInput.tsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';

type WalletInputProps = {
  onAnalyze: (walletAddress: string) => void;
};

const WalletInput: React.FC<WalletInputProps> = ({ onAnalyze }) => {
  const [walletAddress, setWalletAddress] = useState('');

  const handleAnalyze = () => {
    if (!walletAddress) {
      toast.error("Please enter a valid wallet address!");
      return;
    }
    onAnalyze(walletAddress);
  };

  return (
    <div className="wallet-input">
      <input
        type="text"
        placeholder="Enter Solana wallet address"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
        className="input-box"
      />
      <button onClick={handleAnalyze} className="analyze-btn">
        Analyze Wallet
      </button>
    </div>
  );
};

export default WalletInput;