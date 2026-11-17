import React from 'react';
import { homeMeta } from '@/meta';
import About from '@/sections/About';
import Intro from '@/sections/Intro';
import { usePageMeta } from '@/utils/usePageMeta';

const META = homeMeta();

// Home keeps the intro and about. Experience, projects and talks each have
// their own prerendered route for SEO. The loading screen lives in
// index.html and shows on the dev server until this bundle boots.
export default function Home(): JSX.Element {
  usePageMeta(META);

  return (
    <>
      <Intro />
      <About />
      {/* Contact is hidden until an email sending service is set up. */}
    </>
  );
}
