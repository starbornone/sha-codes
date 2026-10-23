import React from 'react';
import { homeMeta } from '@/meta';
import About from '@/sections/About';
import Experience from '@/sections/Experience';
import Intro from '@/sections/Intro';
import Projects from '@/sections/Projects';
import Talks from '@/sections/Talks';
import { usePageMeta } from '@/utils/usePageMeta';

const META = homeMeta();

// Sections are imported eagerly: they all render on first paint, so splitting
// them only added round trips. The loading screen lives in index.html and
// shows on the dev server until this bundle boots.
export default function Home(): JSX.Element {
  usePageMeta(META);

  return (
    <>
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Talks />
      {/* Contact is hidden until an email sending service is set up. */}
    </>
  );
}
