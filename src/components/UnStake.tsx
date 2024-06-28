import React from 'react';
import { abi as syntheticTokenABI } from '../utils/SyntheticToken1.json';
import { abi as tokenStakingABI } from '../utils/TokenStake.json';
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from 'web3modal-web3js/react';
import { SYNTHETIC_TOKEN_1_ADDRESS, TOKEN_STAKE_ADDRESS } from '../address';
import Web3 from 'web3';

const UnStake = () => {
  const { address, chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const web3 = new Web3({
    provider: walletProvider,
    config: { defaultNetworkId: chainId },
  });

  //SyntheticToken1Contract 컨트랙트
  const SyntheticToken1Contract = new web3.eth.Contract(
    syntheticTokenABI,
    SYNTHETIC_TOKEN_1_ADDRESS
  );
  const TokenStakingContract = new web3.eth.Contract(
    tokenStakingABI,
    TOKEN_STAKE_ADDRESS
  );

  const handleUnStaking = async () => {
    const amount = web3.utils.toWei('1', 'ether');

    //unstaking 전 approve 받기 (임시토큰1한테)
    await SyntheticToken1Contract.methods
      .approve(TOKEN_STAKE_ADDRESS, amount)
      .send({ from: address });

    //unstaking
    await TokenStakingContract.methods.unstake(amount).send({ from: address });
    alert('unStaking!!');
  };

  return (
    <>
      <button type='button' onClick={handleUnStaking}>
        unstake
      </button>
    </>
  );
};

export default UnStake;
