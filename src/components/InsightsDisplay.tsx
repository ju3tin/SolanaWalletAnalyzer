// components/InsightsDisplay.tsx
import React from 'react';

type InsightsDisplayProps = {
  insights: {
    solBalance: number;
    tokens: { name: string; balance: number }[];
    nfts: { name: string; image: string }[];
    analysis: string;
  } | null;
};

const InsightsDisplay: React.FC<InsightsDisplayProps> = ({ insights }) => {
  if (!insights) return null;

  return (
    <div className="insights-container">
      <h2>Wallet Insights</h2>
      <p><strong>SOL Balance:</strong> {insights.solBalance} SOL</p>

      <h3>SPL Tokens</h3>
      <ul>
        {insights.tokens.map((token, idx) => (
          <li key={idx}>
            {token.name}: {token.balance}
          </li>
        ))}
      </ul>

      <h3>NFTs</h3>
      <div className="nft-gallery">
        {insights.nfts.map((nft, idx) => (
          <div key={idx} className="nft-item">
            <img src={nft.image} alt={nft.name} />
            <p>{nft.name}</p>
          </div>
        ))}
      </div>

      <h3>AI Analysis</h3>
      <p>{insights.analysis}</p>
    </div>
  );
};

export default InsightsDisplay;