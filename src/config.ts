import { http, createConfig } from 'wagmi';
import { base, mainnet, optimism } from 'wagmi/chains';
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors';
import { mantaSepoliaTestnet } from 'viem/chains';

const projectId = '<WALLETCONNECT_PROJECT_ID>';

export const config = createConfig({
  chains: [mantaSepoliaTestnet],
  connectors: [injected(), walletConnect({ projectId }), metaMask(), safe()],
  transports: {
    [mantaSepoliaTestnet.id]: http(
      'https://pacific-rpc.sepolia-testnet.manta.network/http'
    ),
  },
});
