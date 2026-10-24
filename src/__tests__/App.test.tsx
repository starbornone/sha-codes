import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';
import App from '@/App';
import Layout from '@/layout/Layout';

const renderAt = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Layout>
        <App />
      </Layout>
    </MemoryRouter>,
  );

describe('App', () => {
  it('renders one h1 inside a main landmark', () => {
    renderAt('/');

    const main = screen.getByRole('main');
    expect(main).toContainElement(screen.getByRole('heading', { level: 1 }));
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });

  it('keeps the contact form hidden until an email service is set up', () => {
    renderAt('/');

    expect(screen.queryByRole('button', { name: /send message/i })).not.toBeInTheDocument();
  });

  it('gives every link an accessible name', () => {
    renderAt('/');

    for (const link of screen.getAllByRole('link')) {
      expect(link).toHaveAccessibleName();
    }
  });

  it('links each project card and talk to its own page', () => {
    renderAt('/');

    expect(screen.getByRole('link', { name: 'Read more about Talesmith' })).toHaveAttribute(
      'href',
      '/projects/talesmith',
    );
    expect(screen.getByRole('link', { name: 'Does AI Dream of Original Ideas' })).toHaveAttribute(
      'href',
      '/talks/does-ai-dream-of-original-ideas',
    );
  });

  it('renders a project page with links back and to its neighbours', () => {
    renderAt('/projects/ready-check');

    expect(screen.getByRole('heading', { level: 1, name: 'Ready Check' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /All projects/ })).toHaveAttribute('href', '/#projects');
    expect(screen.getByRole('link', { name: /Previous/ })).toHaveAttribute('href', '/projects/ovi');
    expect(screen.getByRole('link', { name: /Next/ })).toHaveAttribute('href', '/projects/kritik-systems');
  });

  it('keeps the full write-up for the project page', () => {
    renderAt('/');
    expect(screen.queryByText(/Every calculator shows its step-by-step derivation/)).not.toBeInTheDocument();

    renderAt('/projects/kritik-systems');
    expect(screen.getByText(/Every calculator shows its step-by-step derivation/)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: "How it's built" })).toBeInTheDocument();
  });

  it('renders a talk page that links to the transcript', () => {
    renderAt('/talks/modern-development-burnout-machine');

    expect(
      screen.getByRole('heading', { level: 1, name: 'The Modern Development Burnout Machine' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'What teams can do' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /full transcript/i })).toHaveAttribute(
      'href',
      'https://www.aidreams.world/posts/modern-development-burnout-machine',
    );
  });

  it.each(['/projects/not-a-project', '/talks/not-a-talk', '/nowhere'])(
    'shows the not-found page at %s',
    (path) => {
      renderAt(path);

      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('404.not-found');
    },
  );

  it('sets the page title and description for the page on screen', () => {
    renderAt('/projects/talesmith');

    expect(document.title).toBe('Talesmith | sha.codes');
  });
});
