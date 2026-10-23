import { describe, expect, it } from 'vitest';
import { PROJECTS } from '@/data/projects';
import { TALKS } from '@/data/talks';
import { allPages, summarise } from '@/meta';

describe('meta', () => {
  it('uses the first sentence of a description', () => {
    expect(summarise('One short sentence. Another one.')).toBe('One short sentence.');
  });

  it('cuts a long first sentence at a word boundary', () => {
    const summary = summarise(`${'word '.repeat(50)}end.`);
    expect(summary.length).toBeLessThanOrEqual(160);
    expect(summary).toMatch(/word…$/);
  });

  it('lists one page per project and talk, each with a unique path', () => {
    const paths = allPages().map((page) => page.path);
    expect(paths).toHaveLength(1 + PROJECTS.length + TALKS.length);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it('keeps slugs URL-safe', () => {
    for (const { id } of [...PROJECTS, ...TALKS]) {
      expect(id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });
});
