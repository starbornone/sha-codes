import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '@/App';
import Layout from '@/layout/Layout';

describe('App', () => {
  it('renders one h1 inside a main landmark', () => {
    render(
      <Layout>
        <App />
      </Layout>
    );

    const main = screen.getByRole('main');
    expect(main).toContainElement(screen.getByRole('heading', { level: 1 }));
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });

  it('keeps the contact form hidden until an email service is set up', () => {
    render(<App />);

    expect(screen.queryByRole('button', { name: /send message/i })).not.toBeInTheDocument();
  });

  it('gives every project link an accessible name', () => {
    render(<App />);

    for (const link of screen.getAllByRole('link')) {
      expect(link).toHaveAccessibleName();
    }
  });
});
