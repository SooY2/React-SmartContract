import React from 'react';
import Web3 from 'web3';
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from 'web3modal-web3js/react';
import { abi as myTokenABI } from '../utils/MyToken.json';
import { abi as tokenStakingABI } from '../utils/TokenStake.json';
import { MY_TOKEN_ADDRESS, TOKEN_STAKE_ADDRESS } from '../address';

const Stake = () => {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const web3 = new Web3({
    provider: walletProvider,
    config: { defaultNetworkId: chainId },
  });

  const handleStaking = async () => {
    if (!isConnected) throw Error('not connected');

    const amount = web3.utils.toWei('1', 'ether');

    // staking 전 approve 받기
    const MyTokenContract = new web3.eth.Contract(myTokenABI, MY_TOKEN_ADDRESS);
    await MyTokenContract.methods
      .approve(TOKEN_STAKE_ADDRESS, amount)
      .send({ from: address });

    //staking
    const TokenStakingContract = new web3.eth.Contract(
      tokenStakingABI,
      TOKEN_STAKE_ADDRESS
    );
    await TokenStakingContract.methods.stake(amount).send({ from: address });
    alert('staking 성공!!');
  };

  return (
    <>
      <button type='button' onClick={handleStaking}>
        staking
      </button>
    </>
  );
};

export default Stake;
