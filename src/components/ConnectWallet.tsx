/* 지갑 연결을 위한 컴포넌트입니다 */

import { Dispatch, SetStateAction } from 'react';

interface IConnectWallet {
  setAccount: Dispatch<SetStateAction<string | null>>;
}

const ConnectWallet = ({ setAccount }: IConnectWallet) => {
  const getAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccount(accounts[0]);
    } catch (err: any) {
      if (err.code === 4001) {
        console.log('Please connect to MetaMask.');
      } else {
        console.error(err);
      }
    }
  };
  return <button onClick={getAccount}>Connect MetaMask</button>;
};

export default ConnectWallet;
