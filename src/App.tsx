import React, { useState, useEffect } from 'react';
import provider from './walletConnect';
import { ethers } from 'ethers';

function App() {
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    const handleConnect = async () => {
      const web3Provider = new ethers.providers.Web3Provider(provider);
      const signer = web3Provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
    };

    if (provider.connected) {
      handleConnect();
    }

    provider.on('connect', handleConnect);
    provider.on('disconnect', () => setAccount(null));

    return () => {
      provider.removeListener('connect', handleConnect);
      provider.removeListener('disconnect', () => setAccount(null));
    };
  }, []);

  const connectWallet = async () => {
    try {
      await provider.enable(); // This will display the QR code modal
    } catch (error) {
      console.error('Failed to connect WalletConnect:', error);
    }
  };

  return (
    <div>
      <button type='button' onClick={connectWallet}>
        Connect Wallet
      </button>
      {account && <p>Connected Account: {account}</p>}
    </div>
  );
}

export default App;
