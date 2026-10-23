import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProjectPage from './pages/ProjectPage';
import TalkPage from './pages/TalkPage';

// Every route here is prerendered to its own HTML file at build time
// (scripts/prerender.mjs), so a refresh or a shared link loads the page
// straight from Netlify. Anything else gets dist/404.html.
export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
      <Route path="/talks/:slug" element={<TalkPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
