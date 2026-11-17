import React from 'react';
import Talks from '@/sections/Talks';
import { talksMeta } from '@/meta';
import { usePageMeta } from '@/utils/usePageMeta';

const META = talksMeta();

export default function TalksPage(): JSX.Element {
  usePageMeta(META);
  return <Talks />;
}
