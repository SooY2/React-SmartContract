import React from 'react';
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';

const Account = () => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensNameData } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensNameData ?? undefined });

  // Convert ensNameData to string | undefined
  const ensName: string | undefined =
    ensNameData !== null ? ensNameData : undefined;

  return (
    <div>
      {ensAvatar && <img alt='ENS Avatar' src={ensAvatar} />}
      {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  );
};

export default Account;
