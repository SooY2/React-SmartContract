import {
  useWeb3ModalTheme,
  createWeb3Modal,
  defaultConfig,
} from 'web3modal-web3js/react';

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'test_project_id';

// 2. Set chains
const chains = [
  {
    chainId: 3441006,
    name: 'Manta Pacific Sepolia Testnet',
    currency: 'ETH',
    explorerUrl: 'https://pacific-explorer.sepolia-testnet.manta.network',
    rpcUrl: 'https://pacific-rpc.sepolia-testnet.manta.network/http',
  },
];

const web3Config = defaultConfig({
  metadata: {
    name: 'Web3Modal',
    description: 'Web3Modal Laboratory',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
  },
  defaultChainId: 3441006,
  rpcUrl: 'https://cloudflare-eth.com',
});

// 3. Create modal
createWeb3Modal({
  web3Config,
  chains,
  projectId,
  enableAnalytics: true,
  themeMode: 'light',
  themeVariables: {
    '--w3m-color-mix': '#00DCFF',
    '--w3m-color-mix-strength': 20,
  },
});

const Wallet = () => {
  return (
    <div>
      <w3m-button />
    </div>
  );
};

export default Wallet;
