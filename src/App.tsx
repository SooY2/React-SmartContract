import React, { useEffect, useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

const App: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<string | null>(null);

  useEffect(() => {
    const setup = async () => {
      const provider = await detectEthereumProvider();

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

  const getAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccount(accounts[0]);
    } catch (err) {
      if (err.code === 4001) {
        console.log('Please connect to MetaMask.');
      } else {
        console.error(err);
      }
    }
  };
  const changeNetwork = async () => {
    console.log('changeNet');
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0xe34' }],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='App'>
      <h1>MetaMask Integration with React and TypeScript</h1>
      <button onClick={getAccount}>Connect MetaMask</button>
      <button onClick={changeNetwork}>Change Network</button>
      {account && (
        <div className='showAccount'>
          <p>Connected Account: {account}</p>
          <p>Chain ID: {chainId}</p>
        </div>
      )}
    </div>
  );
};

export default App;
