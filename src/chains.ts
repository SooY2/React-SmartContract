import { defineChain } from 'viem';

export const mantaPacificSepoliaTestnet = defineChain({
  id: 3441006,
  name: 'Manta Pacific Sepolia Testnet',
  nativeCurrency: {
    name: 'Sepolia Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://pacific-rpc.sepolia-testnet.manta.network/http'],
      webSocket: ['wss://pacific-rpc.sepolia-testnet.manta.network/ws'],
    },
    public: {
      http: ['https://pacific-rpc.sepolia-testnet.manta.network/http'],
      webSocket: ['wss://pacific-rpc.sepolia-testnet.manta.network/ws'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Manta Explorer',
      url: 'https://pacific-explorer.sepolia-testnet.manta.network',
    },
  },
  testnet: true,
});
