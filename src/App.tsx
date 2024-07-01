import React from 'react';
import { WagmiProvider } from 'wagmi';
import { config } from './config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConnectButton, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import Account from './Account';

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <ConnectButton
            label='지갑 연결'
            accountStatus={'address'}
            showBalance={true}
          />
          <Account />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
