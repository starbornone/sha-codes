import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './layout/Layout';
import { MotionConfig } from 'framer-motion';
import React from 'react';

// The full tree, shared by the browser entry and the build-time prerender.
export default function Root(): JSX.Element {
  return (
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
}
