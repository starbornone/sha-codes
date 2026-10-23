import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';
import Nav from '@/layout/Nav';

describe('Nav', () => {
  it('gives each section link an href so keyboard users can reach it', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    );

    for (const [name, href] of [
      ['About', '#about'],
      ['Experience', '#experience'],
      ['Projects', '#projects'],
      ['Talks', '#talks'],
    ]) {
      expect(screen.getByRole('link', { name: new RegExp(name) })).toHaveAttribute('href', href);
    }
  });

  it('closes the mobile menu after a link is chosen', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    );

    await user.click(screen.getByRole('button', { name: 'Open main menu' }));
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument();

    // The desktop links come first in the DOM; the panel's copy is last.
    const projectsLinks = screen.getAllByRole('link', { name: /Projects/ });
    await user.click(projectsLinks[projectsLinks.length - 1]);

    await waitFor(() => expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument());
  });

  it('links back to the home page sections from other pages', () => {
    render(
      <MemoryRouter initialEntries={['/projects/talesmith']}>
        <Nav />
      </MemoryRouter>,
    );

    expect(screen.getAllByRole('link', { name: /Projects/ })[0]).toHaveAttribute('href', '/#projects');
    expect(screen.getByRole('link', { name: 'sha.codes home' })).toHaveAttribute('href', '/');
  });
});
