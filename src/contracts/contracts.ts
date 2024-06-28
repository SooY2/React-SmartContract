// import { abi as myTokenABI } from '../utils/MyToken.json';
// import { abi as tokenStakingABI } from '../utils/TokenStake.json';
// import { abi as syntheticTokenABI } from '../utils/SyntheticToken1.json';
// import {
//   MY_TOKEN_ADDRESS,
//   SYNTHETIC_TOKEN_1_ADDRESS,
//   TOKEN_STAKE_ADDRESS,
// } from '../address';
// import Web3 from 'web3';
// import {
//   useWeb3ModalAccount,
//   useWeb3ModalProvider,
// } from 'web3modal-web3js/react';

// export const Contracts = () => {
//   const { chainId } = useWeb3ModalAccount();
//   const { walletProvider } = useWeb3ModalProvider();

//   const web3 = new Web3({
//     provider: walletProvider,
//     config: { defaultNetworkId: chainId },
//   });

//   const MyTokenContract = new web3.eth.Contract(myTokenABI, MY_TOKEN_ADDRESS);
//   const TokenStakingContract = new web3.eth.Contract(
//     tokenStakingABI,
//     TOKEN_STAKE_ADDRESS
//   );

//   const SyntheticToken1Contract = new web3.eth.Contract(
//     syntheticTokenABI,
//     SYNTHETIC_TOKEN_1_ADDRESS
//   );
// };
