import React, { useCallback, useState } from 'react';
import ExperienceCard from '@/components/ExperienceCard/ExperienceCard';
import { EXPERIENCE } from '@/data/experience';

export default function Experience() {
  const [currentExperience, setCurrentExperience] = useState(0);
  const experienceLength = EXPERIENCE.length;

  const handleCEChange = useCallback((value: number) => {
    setCurrentExperience((prev) => {
      const next = prev + value;
      if (next >= experienceLength) return 0;
      if (next < 0) return experienceLength - 1;
      return next;
    });
  }, [experienceLength]);

  return (
    <section className="section bg-grey-900" id="experience">
      <div className="max-w-2xl mx-auto px-4">
        <header>
          <h2>
            <span className="highlight">my</span>.experience
          </h2>
          <p>
            Formally, I hold a Diploma in System Analysis and Design and a Bachelor of International Studies with a focus on International Business. I've also pursued an MBA to deepen my understanding of business strategy and leadership. In addition to my formal education, I’ve completed numerous courses on JavaScript, React, Node.js, and Unity, while supplementing my skills with extensive reading on design principles and crafting intuitive user experiences.
          </p>
        </header>
        
        <div className="flex gap-x-8 mt-8">
          <ExperienceCard experience={EXPERIENCE[currentExperience]} />

          {experienceLength > 1 && (
            <div className="flex flex-col justify-center">
              <button
                className="text-3xl mt-14 lg:mt-20 text-oasis-500"
                onClick={() => handleCEChange(1)}
                aria-label="Next Experience"
              >
                <svg 
                  aria-hidden="true" 
                  className="w-5 h-5" 
                  fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 320 512"
                >
                  <path d="M267.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-160 160c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L233.4 256 84.7 107.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l160 160z"/>
                </svg>
              </button>
            </div>
          )}
        </div>
        
        <footer className="mt-12 lg:mt-16">
          <p>
            More of my history is available on{' '}
            <a href="https://www.linkedin.com/in/sha-kong-brooks/" rel="noreferrer" target="_blank">
              LinkedIn
            </a>
            .
          </p>
        </footer>
      </div>
    </section>
  );
}
