import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Buffer } from 'buffer';

// Ensure Buffer is available globally
if (!window.Buffer) {
  window.Buffer = Buffer;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
