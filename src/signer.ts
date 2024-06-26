import { BrowserProvider, ethers } from 'ethers';
import React from 'react';

export const provider = new BrowserProvider(window.ethereum);
export const signer = await provider.getSigner();
