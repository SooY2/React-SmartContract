// src/modal.ts
import { WalletConnectModal } from '@walletconnect/modal';

const modal = new WalletConnectModal({
  projectId: import.meta.env.VITE_PROJECT_ID, // 실제 projectId로 교체
  chains: ['3441006'], // 사용하려는 체인 ID
});

export default modal;
