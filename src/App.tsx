// src/App.tsx
import React from 'react';
import modal from './modal';

function App() {
  const openModal = async () => {
    try {
      await modal.openModal();
    } catch (error) {
      console.error('Failed to open WalletConnect modal:', error);
    }

    // modal.closeModal();
  };

  return (
    <div>
      <button type='button' onClick={openModal}>
        Connect Wallet
      </button>
    </div>
  );
}

export default App;
