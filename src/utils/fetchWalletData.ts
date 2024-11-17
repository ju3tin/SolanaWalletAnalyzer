// utils/fetchWalletData.ts
import axios from 'axios';

export const fetchWalletData = async (walletAddress: string) => {
  const response = await axios.post('https://your-backend-api-url.com/analyze', {
    walletAddress,
  });
  return response.data;
};