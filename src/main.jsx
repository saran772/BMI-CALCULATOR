// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { StrictMode } from 'react';
import './index.css';
import App from './App.jsx';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
