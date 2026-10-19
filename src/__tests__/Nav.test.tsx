import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Nav from '@/layout/Nav';

describe('Nav', () => {
  it('gives each section link an href so keyboard users can reach it', () => {
    render(<Nav />);

    for (const [name, href] of [
      ['About', '#about'],
      ['Experience', '#experience'],
      ['Projects', '#projects'],
    ]) {
      expect(screen.getByRole('link', { name: new RegExp(name) })).toHaveAttribute('href', href);
    }
  });

  it('closes the mobile menu after a link is chosen', async () => {
    const user = userEvent.setup();
    render(<Nav />);

    await user.click(screen.getByRole('button', { name: 'Open main menu' }));
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument();

    // The desktop links come first in the DOM; the panel's copy is last.
    const projectsLinks = screen.getAllByRole('link', { name: /Projects/ });
    await user.click(projectsLinks[projectsLinks.length - 1]);

    await waitFor(() => expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument());
  });
});
