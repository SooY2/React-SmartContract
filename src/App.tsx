import React from 'react';
import { WagmiProvider } from 'wagmi';
import { config } from '../config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}></QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
