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
});
