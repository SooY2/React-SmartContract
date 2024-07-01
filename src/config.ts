// config 설정

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'viem';
import { mantaPacificSepoliaTestnet } from './chains';

export const config = getDefaultConfig({
  appName: 'wallet-w-rainbowkit',
  projectId: 'myp-project-id',
  chains: [mantaPacificSepoliaTestnet],
  transports: {
    [mantaPacificSepoliaTestnet.id]: http(
      'https://pacific-rpc.sepolia-testnet.manta.network/http'
    ),
  },
  ssr: false,
});
