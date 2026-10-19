import '@/styles/index.css';
import '@fontsource/overpass-mono';
import '@fontsource/rubik';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './layout/Layout';
import { MotionConfig } from 'framer-motion';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <MotionConfig reducedMotion="user">
        <Layout>
          <App />
        </Layout>
      </MotionConfig>
    </ErrorBoundary>
  </React.StrictMode>
);

