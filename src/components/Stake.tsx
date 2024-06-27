// stake하는 컴포넌트입니다.
import { ethers, parseUnits } from 'ethers';
import { abi as tokenStakeABI } from '../utils/TokenStake.json';
import { abi as mytokenABI } from '../utils/MyToken.json';
import { abi as syntheticTokenABI } from '../utils/SyntheticToken1.json';
import { useState } from 'react';
import { signer } from '../signer';
import {
  MY_TOKEN_ADDRESS,
  TOKEN_STAKE_ADDRESS,
  SYNTHETIC_TOKEN_1_ADDRESS,
} from '../address';
import { formatBalance } from '../utils';

const stakeContractInstance = new ethers.Contract(
  TOKEN_STAKE_ADDRESS,
  tokenStakeABI,
  signer
);

const myTokenContractInstance = new ethers.Contract(
  MY_TOKEN_ADDRESS,
  mytokenABI,
  signer
);

const syntheticToken1Instance = new ethers.Contract(
  SYNTHETIC_TOKEN_1_ADDRESS,
  syntheticTokenABI,
  signer
);

const Stake = () => {
  const [balance, setBalance] = useState('0');

  //staking하는 함수
  const handleStake = async () => {
    try {
      const stakeAmount = parseUnits('1', 18); // 1000 토큰

      // 스테이킹 전 approve받기
      const isApprove = await myTokenContractInstance.approve(
        TOKEN_STAKE_ADDRESS,
        stakeAmount
      );
      await isApprove.wait();

      // 스테이킹 트랜잭션 실행
      const tx = await stakeContractInstance.stake(stakeAmount);
      await tx.wait();
      console.log('Stake successful');
    } catch (error) {
      console.error('Error staking:', error);
    }
  };

  //unstaking하는 함수
  const handleUnStaking = async () => {
    try {
      const stakeAmount = parseUnits('1', 18); // 1000 토큰

      // 스테이킹 전 approve받기 (SyntheticToken1의 approve를 받아야함)
      const approveTx = await syntheticToken1Instance.approve(
        TOKEN_STAKE_ADDRESS,
        stakeAmount
      );
      await approveTx.wait();

      // 스테이킹 트랜잭션 실행
      const tx = await stakeContractInstance.unstake(stakeAmount);
      await tx.wait();
      console.log('Untake successful');
    } catch (error) {
      console.error('Error staking:', error);
    }
  };

  //balance확인하는 함수
  const getBalance = async () => {
    // const balance = await provider.getBalance(
    //   '0xc07e61056692E43f41108717b156B8A5C0b900C7'
    // );
    const this_balance = await myTokenContractInstance.balanceOf(
      '0xc07e61056692e43f41108717b156b8a5c0b900c7'
    );
    setBalance(formatBalance(this_balance));
    // console.log(formatBalance(balance));
  };

  return (
    <div>
      <button type='button' onClick={getBalance}>
        getBalance
      </button>
      {balance && <p>{`balance : ${balance}`}</p>}
      <button type='button' onClick={handleStake}>
        staking
      </button>
      <button type='button' onClick={handleUnStaking}>
        unstaking
      </button>
    </div>
  );
};

export default Stake;
