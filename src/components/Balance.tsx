import { useState } from 'react';
import Web3 from 'web3';
import { abi as myTokenABI } from '../utils/MyToken.json';
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from 'web3modal-web3js/react';
import { MY_TOKEN_ADDRESS, TOKEN_STAKE_ADDRESS } from '../address';

const Balance = () => {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [USDTBalance, setUSDTBalance] = useState<string>(''); // useState to handle USDTBalance
  const [smartContractName, setSmartContractName] = useState(''); // useState to handle USDTBalance

  const getBalance = async () => {
    if (!isConnected) throw Error('not connected');
    const web3 = new Web3({
      provider: walletProvider,
      config: { defaultNetworkId: chainId },
    });
    const balanceContract = new web3.eth.Contract(myTokenABI, MY_TOKEN_ADDRESS);
    const balance: bigint = await balanceContract.methods
      .balanceOf(address)
      .call();
    const name = (await balanceContract.methods.name().call()) as string;
    setUSDTBalance(web3.utils.fromWei(balance.toString(), 'ether'));
    setSmartContractName(name);
  };
  return (
    <div>
      <button onClick={getBalance}>get balance</button>
      <div>{smartContractName}</div>
      <div>{USDTBalance}</div>
    </div>
  );
};

export default Balance;
