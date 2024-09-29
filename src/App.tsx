import React, { Suspense, lazy } from 'react';

const Intro = lazy(() => import('./sections/Intro'));
const About = lazy(() => import('./sections/About'));
const Experience = lazy(() => import('./sections/Experience'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));

export default function App(): JSX.Element {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen bg-grey-900 relative overflow-hidden">
          <div className="glitch-container">
            <div className="glitch-text" data-text="LOADING...">
              LOADING...
            </div>
            <div className="glitch-text-shadow"></div>
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="h-full w-full flex justify-around items-center">
              <div className="glow-line line-vertical"></div>
              <div className="glow-line line-horizontal"></div>
              <div className="glow-line line-vertical"></div>
            </div>
          </div>
        </div>
      }
    >
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Suspense>
  );
}
