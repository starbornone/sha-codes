import '@/styles/index.css';
import '@fontsource/overpass-mono';
import '@fontsource/rubik';
import Root from './Root';
import ReactDOM from 'react-dom/client';

const container = document.getElementById('root') as HTMLElement;

// Production builds ship prerendered HTML (scripts/prerender.mjs), so attach to
// it. The dev server still serves the loading screen, so render from scratch.
if (container.hasAttribute('data-prerendered')) {
  ReactDOM.hydrateRoot(container, <Root />);
} else {
  ReactDOM.createRoot(container).render(<Root />);
}
