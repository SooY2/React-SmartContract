import { BrowserProvider, ethers } from 'ethers';

//signer 설정해주기
const signerProvider = new BrowserProvider(window.ethereum);
export const signer = await signerProvider.getSigner();

export const provider = new ethers.JsonRpcProvider(
  'https://pacific-rpc.sepolia-testnet.manta.network/http'
);
