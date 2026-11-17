import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';
import Nav from '@/layout/Nav';

describe('Nav', () => {
  it('links About as an in-page anchor and the rest as their own pages', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: /About/ })).toHaveAttribute('href', '#about');
    expect(screen.getByRole('link', { name: /Experience/ })).toHaveAttribute('href', '/experience');
    expect(screen.getByRole('link', { name: /Projects/ })).toHaveAttribute('href', '/projects');
    expect(screen.getByRole('link', { name: /Talks/ })).toHaveAttribute('href', '/talks');
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

  it('links About back to the home page from other pages', () => {
    render(
      <MemoryRouter initialEntries={['/projects/talesmith']}>
        <Nav />
      </MemoryRouter>,
    );

    expect(screen.getAllByRole('link', { name: /About/ })[0]).toHaveAttribute('href', '/#about');
    expect(screen.getAllByRole('link', { name: /Projects/ })[0]).toHaveAttribute('href', '/projects');
    expect(screen.getByRole('link', { name: 'sha.codes home' })).toHaveAttribute('href', '/');
  });
});
