import '@/styles/index.css';
import '@fontsource/overpass-mono';
import '@fontsource/rubik';
import Root from './Root';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';

const container = document.getElementById('root') as HTMLElement;
const app = (
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);

// Production builds ship prerendered HTML (scripts/prerender.mjs), so attach to
// it. The dev server still serves the loading screen, so render from scratch.
if (container.hasAttribute('data-prerendered')) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
