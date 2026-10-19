import React from 'react';
import About from './sections/About';
import Experience from './sections/Experience';
import Intro from './sections/Intro';
import Projects from './sections/Projects';

// Sections are imported eagerly: they all render on first paint, so splitting
// them only added round trips. The loading screen lives in public/index.html
// and shows until this bundle boots.
export default function App(): JSX.Element {
  return (
    <>
      <Intro />
      <About />
      <Experience />
      <Projects />
      {/* Contact is hidden until an email sending service is set up. */}
    </>
  );
}
