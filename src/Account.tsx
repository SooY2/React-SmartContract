import React from 'react';
import { useAccount, useBalance } from 'wagmi';

const Account = () => {
  const { address, isConnected } = useAccount();
  const { data: balanceData } = useBalance({ address });
  return isConnected ? (
    <div>
      <div>{address}</div>
      {balanceData?.formatted}
    </div>
  ) : (
    <></>
  );
};

export default Account;
