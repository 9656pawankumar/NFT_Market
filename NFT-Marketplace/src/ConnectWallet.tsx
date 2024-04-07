import { useAccount } from 'wagmi';
import React from 'react';

import { Account } from './Account.tsx';
import { Connect } from './Connect.tsx';

export function ConnectWallet() {
  const { isConnected } = useAccount();
  return (
    <div className="container">{isConnected ? <Account /> : <Connect />}</div>
  );
}