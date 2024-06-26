import React, { useEffect, useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import ConnectWallet from './components/ConnectWallet';
import Stake from './components/Stake';
import { provider } from './signer';

const App: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<string | null>(null);

  useEffect(() => {
    const setup = async () => {
      // const provider = await detectEthereumProvider();

      if (provider && provider === window.ethereum) {
        console.log('MetaMask is available!');
        startApp(provider);
      } else {
        console.log('Please install MetaMask!');
      }
    };

    setup();
    // Cleanup listener on unmount
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
  }, []);

  const startApp = (provider: any) => {
    if (provider !== window.ethereum) {
      console.error('Do you have multiple wallets installed?');
    }
    // Listen for chain changes
    window.ethereum.on('chainChanged', handleChainChanged);

    // Get initial chainId
    window.ethereum
      .request({ method: 'eth_chainId' })
      .then((chainId: string) => setChainId(chainId));
  };

  const handleChainChanged = (chainId: string) => {
    window.location.reload();
  };

  return (
    <div className='App'>
      {!account && <ConnectWallet setAccount={setAccount} />}
      {/* {account && (
        <div className='showAccount'>
          <p>Connected Account: {account}</p>
          <p>Chain ID: {chainId}</p>
        </div>
      )} */}
      <Stake />
    </div>
  );
};

export default App;
