// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App';
import { ClerkProvider } from '@clerk/clerk-react';
import { AppProvider } from './context/AppContext.jsx';
import { MotionConfig } from 'motion/react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
  <BrowserRouter>
  <AppProvider>
    <MotionConfig viewport={{once: true}}>
     <App />
    </MotionConfig>
  </AppProvider>
  </BrowserRouter>
  </ClerkProvider>
);
