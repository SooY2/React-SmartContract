import { Core } from '@walletconnect/core';
import { Web3Wallet } from '@walletconnect/web3wallet';

const core = new Core({
  projectId: import.meta.env.VITE_PROJECT_ID,
});

const metadata = {
  name: 'ConnectWallet',
  description: 'AppKit Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const web3wallet = await Web3Wallet.init({
  core, // <- pass the shared 'core' instance
  metadata,
});
