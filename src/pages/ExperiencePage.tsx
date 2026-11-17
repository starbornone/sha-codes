import React from 'react';
import Experience from '@/sections/Experience';
import { experienceMeta } from '@/meta';
import { usePageMeta } from '@/utils/usePageMeta';

const META = experienceMeta();

export default function ExperiencePage(): JSX.Element {
  usePageMeta(META);
  return <Experience />;
}
