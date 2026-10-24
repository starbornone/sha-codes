import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { EXPERIENCE } from '@/data/experience';
import Experience from '@/sections/Experience';

describe('Experience', () => {
  it('steps through each role and wraps back to the first', async () => {
    const user = userEvent.setup();
    render(<Experience />);

    const next = screen.getByRole('button', { name: 'Next Experience' });
    for (const role of [...EXPERIENCE.slice(1), EXPERIENCE[0]]) {
      await user.click(next);
      expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(role.name);
    }
  });

  it('steps backwards from the first role to the last', async () => {
    const user = userEvent.setup();
    render(<Experience />);

    await user.click(screen.getByRole('button', { name: 'Previous Experience' }));
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(EXPERIENCE[EXPERIENCE.length - 1].name);
    expect(screen.getByText(`${EXPERIENCE.length}/${EXPERIENCE.length}`)).toBeInTheDocument();
  });

  it('groups a long role by theme with only the first theme open', () => {
    const { container } = render(<Experience />);
    const groups = EXPERIENCE[0].groups ?? [];

    const details = container.querySelectorAll('details');
    expect(details).toHaveLength(groups.length);
    expect(details[0]).toHaveAttribute('open');
    for (const [index, group] of groups.entries()) {
      expect(details[index].querySelector('summary')).toHaveTextContent(group.title);
      if (index > 0) expect(details[index]).not.toHaveAttribute('open');
    }
  });

  it('keeps internal team names off the site', () => {
    const text = JSON.stringify(EXPERIENCE);
    for (const team of ['Lovelace', 'Zuse', 'Shared Services', 'Liveclicker']) {
      expect(text).not.toContain(team);
    }
  });
});
