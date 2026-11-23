import '@/styles/index.css';
import { Analytics } from '@vercel/analytics/react';
import Root from './Root';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';

const container = document.getElementById('root') as HTMLElement;
const app = (
  <BrowserRouter>
    <Root />
    {import.meta.env.VITE_VERCEL_ENV && <Analytics />}
  </BrowserRouter>
);

// Production builds ship prerendered HTML (scripts/prerender.mjs), so attach to
// it. The dev shell and the shared 404 document mount at the actual URL.
if (container.hasAttribute('data-prerendered')) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
