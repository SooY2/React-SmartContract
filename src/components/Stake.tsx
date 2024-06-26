// stake하는 컴포넌트입니다.
import { Contract, ethers } from 'ethers';
import { abi as tokenStakeABI } from '../utils/TokenStake.json';
import { abi as mytokenABI } from '../utils/MyToken.json';
import { useState } from 'react';
import { provider, signer } from '../signer';
import { MY_TOKEN_ADDRESS, TOKEN_STAKE_ADDRESS } from '../address';
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

const Stake = () => {
  const [balance, setBalance] = useState('0');
  const handleStake = async () => {
    if (true) {
      const result = await stakeContractInstance.stake(0);
      console.log(result);
    }
  };

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
        stake
      </button>
    </div>
  );
};

export default Stake;
