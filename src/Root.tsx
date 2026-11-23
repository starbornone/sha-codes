import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './layout/Layout';
import React from 'react';
import ScrollManager from './utils/ScrollManager';

// The full tree, shared by the browser entry and the build-time prerender.
// Each entry wraps it in its own router.
export default function Root(): JSX.Element {
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <ScrollManager />
        <Layout>
          <App />
        </Layout>
      </ErrorBoundary>
    </React.StrictMode>
  );
}
