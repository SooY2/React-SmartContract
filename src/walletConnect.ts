import WalletConnectProvider from '@walletconnect/web3-provider';

const provider = new WalletConnectProvider({
  rpc: { 3441006: 'https://pacific-rpc.sepolia-testnet.manta.network/http' },
  qrcode: true,
  bridge: 'https://bridge.walletconnect.org',
});

export default provider;
