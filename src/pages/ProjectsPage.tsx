import React from 'react';
import Projects from '@/sections/Projects';
import { projectsMeta } from '@/meta';
import { usePageMeta } from '@/utils/usePageMeta';

const META = projectsMeta();

export default function ProjectsPage(): JSX.Element {
  usePageMeta(META);
  return <Projects />;
}
